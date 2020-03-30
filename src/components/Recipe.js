import React from 'react'
import './Recipe.css'

const Recipe = (props) => {
  return (
    <div>
      <p>
        {props.recipeName}
      </p>
      <p className="recipe-description">
        {props.recipeDescription}
      </p>
    </div>
  )
}

export default Recipe
