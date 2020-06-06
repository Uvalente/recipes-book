import React from 'react'
import { Link } from 'react-router-dom'
import './RecipeCard.css'

const RecipeCard = (props) => {
  return (
    <div className='recipe-card'>
      <Link to={`/recipes/${props.id}`} >
        <div className='top-card'>
          <img
            src={props.recipeImageUrl || "/no_image.jpg"}
            alt={props.recipeName}
          />
        </div>
        <div className='bottom-card'>
          <p data-testid='test-title'>
            {
              props.recipeName.length > 30 ?
                props.recipeName.slice(0, 30) + '...'
                :
                props.recipeName
            }
          </p>
          <p className='course' data-testid='test-course'>
            {props.recipeCourse}
          </p>
          {/* <p className="recipe-description" data-testid='test-description'>
          {
            props.recipeDescription.length > 400 ?
              props.recipeDescription.slice(0, 400) + '...'
              :
              props.recipeDescription
          }
        </p> */}
        </div>
      </Link>
    </div>
  )
}

export default RecipeCard
