import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { db } from '../../firebase'
import './Recipe.css'

const Recipe = (props) => {
  const [recipe, setRecipe] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const getRecipe = async () => {
      let recipeRef = db.collection(`users/${props.user.uid}/recipes`).doc(id)
      let getDoc = await recipeRef.get()
      setRecipe(getDoc.data())
    }
    getRecipe()
  }, [id])

  const { name, description, course, pictureUrl, ingredients } = recipe

  console.log('I am loading 4 times?! Recipe')

  const ingredientsList = ingredients ? ingredients.map((ingredient, index) => {
    const { itemQuantity, itemMeasure, itemName } = ingredient
    return (
      <li key={index}>
        {itemQuantity} {itemMeasure} {itemName}
      </li>
    )
  }) : null

  return (
    <div className='recipe-wrap'>
      <div className='top-side'>
        <img
          src={pictureUrl || "/no_image.jpg"}
          alt={name}
        />
        <div className='top-side-infos'>
          <p className='recipe-title'>
            {name}
          </p>
          <p className='recipe-course'>
            {course}
          </p>
        </div>
      </div>
      <div className='bottom-side'>
        {ingredients && <ul>{ingredientsList}</ul>}
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
