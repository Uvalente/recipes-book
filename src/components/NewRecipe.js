import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const NewRecipe = (props) => {
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

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      props.onAddRecipe(recipeForm)
      setRecipeForm(currentRecipeForm => {
        return {
          ...currentRecipeForm,
          recipeName: '',
          recipeDescription: '',
          recipeCourse: ''
        }
      })
      history.push('/')
    }}>
      <label>
        Insert recipe name:
        <input
          type="text"
          data-testid='recipe-name'
          name={'recipeName'}
          value={recipeForm.recipeName}
          onChange={recipeHandleChange}
          required
        />
      </label>
      <br />
      <label>
        Insert recipe description:
        <textarea
          data-testid='recipe-description'
          name={'recipeDescription'}
          value={recipeForm.recipeDescription}
          onChange={recipeHandleChange}
          required
        />
      </label>
      <br />
      <label>
        Select the course:
        <select
          data-testid='recipe-course'
          name='recipeCourse'
          value={recipeForm.recipeCourse}
          onChange={recipeHandleChange}
          required
        >
          <option value=''>Please choose an option</option>
          <option value='starter'>Starter</option>
          <option value='main-course'>Main Course</option>
          <option value='dessert'>Dessert</option>
          <option value='drink'>Drink</option>
        </select>
      </label>
      <br />
      <input
        type="submit"
        data-testid='recipe-submit'
        value="Create recipe"
      />
    </form>
  )
}

export default NewRecipe
