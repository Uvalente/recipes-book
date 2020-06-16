import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = (props) => {
  return (
    <div className='w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/5 p-2 lg:p-4 xl:p-6'>
      <div className='relative pb-5/6'>
        <Link to={`/recipes/${props.id}`} >
          <img
            className='absolute h-full w-full object-cover rounded-lg shadow-md'
            src={props.recipeImageUrl || "/no_image.jpg"}
            alt={props.recipeName}
          />
        </Link>
      </div>
      <div className='relative px-4 -mr-8 -mt-8'>
        <Link to={`/recipes/${props.id}`} >
          <div className='bg-white py-2 px-4 rounded-lg shadow-lg'>
            <p
              className='text-gray-600 text-xs uppercase font-semibold tracking-wide hidden md:block'
            >
              {props.recipeCourse}
            </p>
            <p
              className='text-gray-900 text-lg font-semibold truncate'
            >
              {props.recipeName}
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default RecipeCard
