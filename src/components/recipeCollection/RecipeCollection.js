import React, { useState, useEffect } from 'react'
import RecipeCard from '../recipeCard/RecipeCard'
import { db } from '../../firebase'

const RecipeCollection = (props) => {
  const [recipeList, setRecipeList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  console.log('I am loading 4 times?! RecipeCollection')

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      let recipeRef = db.collection(`users/${props.user.uid}/recipes`)
      await recipeRef.orderBy('name').get()
        .then(snapshot => {
          const recipes = []
          snapshot.forEach(recipe => {
            recipes.push({ id: recipe.id, data: recipe.data() })
          })
          setRecipeList(recipes)
          setIsLoading(false)
        })
        .catch(err => {
          console.log('Error getting recipes', err);
        })
    }

    fetchData()
  }, [props.user.uid])

  const recipeComponents = recipeList.map(recipe =>
    <RecipeCard
      key={recipe.id}
      id={recipe.id}
      recipeName={recipe.data.name}
      recipeDescription={recipe.data.description}
      recipeCourse={recipe.data.course}
      recipeImageUrl={recipe.data.pictureUrl}
    />
  )

  return isLoading ? (< h1 > Loading...</h1 >) : recipeComponents

}

export default RecipeCollection
