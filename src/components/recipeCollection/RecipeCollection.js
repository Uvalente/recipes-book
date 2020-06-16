import React, { useState, useEffect } from 'react'
import RecipeCard from '../recipeCard/RecipeCard'
import { db } from '../../firebase'
import Loader from '../loader/Loader'

const RecipeCollection = (props) => {
  const [recipeList, setRecipeList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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
      recipeCourse={recipe.data.course}
      recipeImageUrl={recipe.data.pictureUrl}
    />
  )

  return isLoading ?
    <Loader />
    :
    <div className='flex flex-1 flex-wrap p-6'>{recipeComponents}</div>

}

export default RecipeCollection
