import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { db, auth } from '../../firebase'
import './Recipe.css'

const Recipe = () => {
  const [recipe, setRecipe] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const getRecipe = async () => {
      let recipeRef = db.collection(`users/${auth.currentUser.uid}/recipes`).doc(id)
      let getDoc = await recipeRef.get()
      setRecipe(getDoc.data())
    }
    getRecipe()
  }, [])

  const { name, description, course } = recipe

  console.log('I am loading 4 times?! Recipe')
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
        <div className='button-wrapper'>
          <Link to='/'>
            <button className='back-button'>Back</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Recipe
