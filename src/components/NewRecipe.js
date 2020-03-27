import React, { useState } from 'react'

const NewRecipe = (props) => {
  const [recipeForm, setRecipeForm] = useState({
    recipeName: '',
    recipeDescription: ''
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
          recipeDescription: ''
        }
      })
    }}>
      <label>
        Insert recipe name:
        <input
          type="text"
          data-testid='recipe-name'
          name={'recipeName'}
          value={recipeForm.recipeName}
          onChange={recipeHandleChange}
        />
      </label>
      <br />
      <label>
        Insert recipe description:
        <input
          type="text"
          data-testid='recipe-description'
          name={'recipeDescription'}
          value={recipeForm.recipeDescription}
          onChange={recipeHandleChange}
        />
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
