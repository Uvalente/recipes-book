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
          recipes.push({id: recipe.id, data: recipe.data()})
        })
        setRecipeList(recipes)
      })

  }, [])

  const recipeComponents = recipeList.map(recipe =>
    <RecipeCard
      key={recipe.id}
      id={recipe.id}
      recipeName={recipe.data.name}
      recipeDescription={recipe.data.description}
      recipeCourse={recipe.data.course}
    />
  )

  return (
    recipeComponents
  )
}

export default RecipeCollection
