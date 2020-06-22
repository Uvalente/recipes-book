import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = (props) => {
  return (
    <div className='w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/5 p-2 lg:p-4 xl:p-6'>
      <Link to={`/users/${props.uid}/recipes/${props.id}`} >
        <div className='relative pb-5/6'>
          <img
            className='absolute h-full w-full object-cover rounded-t-lg shadow-sm'
            src={props.recipeImageUrl || "/no_image.jpg"}
            alt={props.recipeName}
          />
        </div>
        <div className='bg-white py-2 px-4 rounded-b-lg shadow-lg'>
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
  )
}

export default RecipeCard
