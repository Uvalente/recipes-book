import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { db, storage } from '../../firebase'

const useForm = (validate, user) => {
  const history = useHistory()
  const [recipeForm, setRecipeForm] = useState({
    recipeName: '',
    recipeDescription: '',
    recipeCourse: '',
    recipePicture: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const recipeHandleChange = (e) => {
    const { name, value, files } = e.target
    setRecipeForm(currentRecipeForm => {
      if (files) {
        return { ...currentRecipeForm, [name]: files[0] }
      }
      return { ...currentRecipeForm, [name]: value }
    })
  }

  const resetForm = () => {
    setRecipeForm(currentRecipeForm => {
      return {
        ...currentRecipeForm,
        recipeName: '',
        recipeDescription: '',
        recipeCourse: '',
        recipePicture: ''
      }
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
      pictureUrl: null
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
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      createRecipe()
      resetForm()
      history.push('/')
    }
  }, [errors])

  return {
    recipeHandleChange,
    recipeHandleSubmit,
    recipeForm,
    errors
  }
}

export default useForm