import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { db, storage } from '../../firebase'

const useForm = (validate, user, id) => {
  const history = useHistory()
  const [recipeForm, setRecipeForm] = useState({
    recipeName: '',
    recipeDescription: '',
    recipeCourse: '',
    recipePicture: '',
    recipeIngredients: [{ itemName: '', itemQuantity: '', itemMeasure: '' }]
  })

  useEffect(() => {
    const getRecipe = async () => {
      let recipeRef = db.collection(`users/${user.uid}/recipes`).doc(id)
      let getDoc = await recipeRef.get()
      let {course, description, name, ingredients } = getDoc.data()

      setRecipeForm({
        recipeName: name,
        recipeDescription: description,
        recipeCourse: course,
        recipePicture: '',
        recipeIngredients: ingredients
      })
    }
    getRecipe()
  }, [user.uid, id])

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
      return {
        ...currentRecipeForm,
        recipeIngredients: currentRecipeForm.recipeIngredients.slice(0, -1)
      }
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

  const updateRecipe = async () => {
    let recipeRef = db.collection(`users/${user.uid}/recipes`).doc(id)

    await recipeRef.update({
      name: recipeForm.recipeName,
      description: recipeForm.recipeDescription,
      course: recipeForm.recipeCourse,
      ingredients: recipeForm.recipeIngredients
    })

    if (recipeForm.recipePicture) {
      const uploadTask = await storage.ref(`/recipes/${recipeForm.recipeName}/${recipeForm.recipePicture.name}`).put(recipeForm.recipePicture)
      const url = await uploadTask.ref.getDownloadURL()
      await recipeRef.update({
        pictureUrl: url
      })
    }

    return recipeRef.id
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      updateRecipe().then(id => {
        resetForm()
        history.push('/users/' + user.uid + '/recipes/' + id)
      })
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