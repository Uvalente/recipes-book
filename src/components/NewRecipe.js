import React, { useState } from 'react'

const NewRecipe = () => {
  const [recipeName, setRecipeName] = useState('')
  const recipeNameHandleChange = (e) => {
    setRecipeName(e.target.value)
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
    </form>
  )
}

export default NewRecipe