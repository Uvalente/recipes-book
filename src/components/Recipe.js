import React from 'react'

const Recipe = (props) => {
  return (
    <div>
      <p>
        {props.recipeTitle}
      </p>
      <p>
        {props.recipeDescription}
      </p>
    </div>
  )
}

export default Recipe
