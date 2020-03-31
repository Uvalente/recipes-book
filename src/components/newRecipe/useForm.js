import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'


const useForm = (callback, validate) => {
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

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(recipeForm)
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