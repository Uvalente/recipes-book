import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { db, storage } from '../../firebase'

const useForm = (validate, user) => {
  const history = useHistory()
  const [recipeForm, setRecipeForm] = useState({
    recipeName: '',
    recipeDescription: '',
    recipeCourse: '',
    recipePicture: '',
    recipeIngredients: [{ itemName: '', itemQuantity: '', itemMeasure: '' }]
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const recipeHandleChange = (e) => {
    const { name, value, files, dataset } = e.target
    setRecipeForm(currentRecipeForm => {
      if (files) {
        return { ...currentRecipeForm, [name]: files[0] }
      }
      else if (dataset.id) {
        currentRecipeForm.recipeIngredients[dataset.id][name] = value
        return { ...currentRecipeForm }
      }
      return { ...currentRecipeForm, [name]: value }
    })
  }

  const addIngredient = () => {
    setRecipeForm(currentRecipeForm => {
      return {
        ...currentRecipeForm,
        recipeIngredients: [
          ...currentRecipeForm.recipeIngredients,
          { itemName: '', itemQuantity: '', itemMeasure: '' }
        ]
      }
    })
  }

  const removeIngredient = () => {   
    setRecipeForm(currentRecipeForm => {
      return {...currentRecipeForm,
      recipeIngredients: currentRecipeForm.recipeIngredients.slice(0,-1)}
    })
  }

  const resetForm = () => {
    setRecipeForm({
      recipeName: '',
      recipeDescription: '',
      recipeCourse: '',
      recipePicture: '',
      recipeIngredients: [{ itemName: '', itemQuantity: '', itemMeasure: '' }]
    })
  }

  const recipeHandleSubmit = (event) => {
    event.preventDefault()
    setErrors(validate(recipeForm))
    setIsSubmitting(true)
  }

  const createRecipe = () => {
    let recipeRef = db.collection(`users/${user.uid}/recipes`).doc()

    recipeRef.set({
      name: recipeForm.recipeName,
      description: recipeForm.recipeDescription,
      course: recipeForm.recipeCourse,
      pictureUrl: null,
      ingredients: recipeForm.recipeIngredients
    })

    if (recipeForm.recipePicture) {
      const uploadTask = storage.ref(`/recipes/${recipeForm.recipeName}/${recipeForm.recipePicture.name}`).put(recipeForm.recipePicture)

      uploadTask.on('state_changed', snapShot => {
        // let progress = (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
        // console.log('Upload is ' + progress + '% done');
      }, error => {
        console.log('Picture upload error:', error)
      }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then(url => {
          recipeRef.update({
            pictureUrl: url
          })
        })
      })
    }

    return recipeRef.id
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      let reciperef = createRecipe()
      resetForm()
      history.push('/recipes/' + reciperef)
    }
  }, [errors])

  return {
    recipeHandleChange,
    recipeHandleSubmit,
    addIngredient,
    removeIngredient,
    recipeForm,
    errors
  }
}

export default useForm