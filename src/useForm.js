import { useState } from 'react'
import { useHistory } from 'react-router-dom'


const useForm = (callback) => {
  const history = useHistory()
  const [recipeForm, setRecipeForm] = useState({
    recipeName: '',
    recipeDescription: '',
    recipeCourse: ''
  })

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
    callback(recipeForm)
    resetForm()
    history.push('/')
  }

  return {
    recipeHandleChange,
    recipeHandleSubmit,
    recipeForm
  }
}

export default useForm