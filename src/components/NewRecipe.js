import React, { useState } from 'react'

const NewRecipe = () => {
  const [recipeName, setRecipeName] = useState('')
  const [recipeDescription, setRecipeDescription] = useState('')

  const recipeNameHandleChange = (e) => {
    setRecipeName(e.target.value)
  }

  const recipeDescriptionHandleChange = (e) => {
    setRecipeDescription(e.target.value)
  }

  return (
    <form>
      <label>
        Insert recipe name:
        <input
          type="text"
          value={recipeName}
          onChange={recipeNameHandleChange}
        />
      </label>
      <label>
        Insert recipe description:
        <input
          type="text"
          value={recipeDescription}
          onChange={recipeDescriptionHandleChange}
        />
      </label>
      <input type="submit" value="Create recipe" />
    </form>
  )
}

export default NewRecipe