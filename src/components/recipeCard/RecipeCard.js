import React from 'react'
import { Link } from 'react-router-dom'
import './RecipeCard.css'

const RecipeCard = (props) => {
  return (
    <div className='recipe-card'>
      <div className='top-card'>
        <p data-testid='test-title'>
          {
            props.recipeName.length > 40 ?
              props.recipeName.slice(0, 40) + '...'
              :
              props.recipeName
          }
        </p>
        <p className='course' data-testid='test-course'>
          {props.recipeCourse}
        </p>
      </div>
      <div className='bottom-card'>
        <p className="recipe-description" data-testid='test-description'>
          {
            props.recipeDescription.length > 400 ?
              props.recipeDescription.slice(0, 400) + '...'
              :
              props.recipeDescription
          }
        </p>
        <p className='read-more'>
          <Link to={`/recipes/${props.id}`} >
            Read more...
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RecipeCard
