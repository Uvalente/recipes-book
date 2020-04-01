import React from 'react'

const Recipe = (props) => {
  const { name, description, course } = props
  return (
    <div className='recipe-wrap'>
      <div className='top-side'>
        <p className='recipe-title'>
          {name}
        </p>
        <p className='recipe-course'>
          {course}
        </p>
      </div>
      <div className='bottom-side'>
        <div className='recipe-instruction'>
          {description}
        </div>
      </div>
    </div>
  )
}

export default Recipe
