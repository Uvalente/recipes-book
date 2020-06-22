import React, { useState, useEffect } from 'react'
import RecipeCard from '../recipeCard/RecipeCard'
import { db } from '../../firebase'
import Loader from '../loader/Loader'
import { useParams } from 'react-router-dom'

const RecipeCollection = () => {
  const [recipeList, setRecipeList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { uid } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      let recipeRef = db.collection(`users/${uid}/recipes`)
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
  }, [uid])

  const recipeComponents = recipeList.map(recipe =>
    <RecipeCard
      key={recipe.id}
      id={recipe.id}
      uid={uid}
      recipeName={recipe.data.name}
      recipeCourse={recipe.data.course}
      recipeImageUrl={recipe.data.pictureUrl}
    />
  )

  return (
    <div className='flex flex-1 flex-wrap p-6'>
      {isLoading ?
        <Loader />
        :
        recipeComponents}
    </div>
  )

}

export default RecipeCollection
