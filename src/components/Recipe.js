import React from 'react'

const Recipe = (props) => {
  return (
    <div>
      <p>
        {props.recipeName}
      </p>
      <p>
        {props.recipeDescription}
      </p>
    </div>
  )
}

export default Recipe
