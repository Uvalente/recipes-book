import React, { useState, useEffect } from 'react'
import RecipeCard from '../recipeCard/RecipeCard'
import { db, auth } from '../../firebase'


const RecipeCollection = (props) => {
  const [recipeList, setRecipeList] = useState([])
  console.log('I am loading 4 times?!')
  useEffect(() => {
    db.collection(`users/${props.user.uid}/recipes`)
      .orderBy('name')
      .onSnapshot(snapShot => {
        const recipes = []
        snapShot.forEach(recipe => {
          recipes.push(recipe.data())
        })
        setRecipeList(recipes)
      })

  }, [])

  const recipeComponents = recipeList.map((recipe, index) =>
    <RecipeCard
      key={index}
      id={index}
      recipeName={recipe.name}
      recipeDescription={recipe.description}
      recipeCourse={recipe.course}
    />
  )

  return (
    recipeComponents
  )
}

export default RecipeCollection
