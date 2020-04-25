import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { db } from '../../firebase'

const useForm = (validate, user) => {
  const history = useHistory()
  const [recipeForm, setRecipeForm] = useState({
    recipeName: '',
    recipeDescription: '',
    recipeCourse: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const recipeHandleChange = (e) => {
    const { name, value } = e.target
    setRecipeForm(currentRecipeForm => {
      return { ...currentRecipeForm, [name]: value }
    })
  }

  const resetForm = () => {
    setRecipeForm(currentRecipeForm => {
      return {
        ...currentRecipeForm,
        recipeName: '',
        recipeDescription: '',
        recipeCourse: ''
      }
    })
  }

  const recipeHandleSubmit = (event) => {
    event.preventDefault()
    setErrors(validate(recipeForm))
    setIsSubmitting(true)
  }

  const createRecipe = () => {
    db.collection(`users/${user.uid}/recipes`).add({
      name: recipeForm.recipeName,
      description: recipeForm.recipeDescription,
      course: recipeForm.recipeCourse
    })
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