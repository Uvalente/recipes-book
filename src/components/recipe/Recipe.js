import React, { useState, useEffect, Fragment } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { db, auth } from '../../firebase'

const Recipe = () => {
  const [recipe, setRecipe] = useState({})
  const { uid, id } = useParams()
  const history = useHistory()

  useEffect(() => {
    const getRecipe = async () => {
      let recipeRef = db.collection(`users/${uid}/recipes`).doc(id)
      let getDoc = await recipeRef.get()
      setRecipe(getDoc.data())
    }
    getRecipe()
  }, [uid, id])

  const { name, description, course, pictureUrl, ingredients } = recipe

  const ingredientsList = ingredients ? ingredients.map((ingredient, index) => {
    const { itemQuantity, itemMeasure, itemName } = ingredient
    return (itemName &&
      <li key={index} className='text-sm font-semibold pb-1'>
        <span className='inline-block w-8'>{itemQuantity}</span>
        <span className='inline-block pl-2 w-6'>{itemMeasure}</span>
        <span className='inline-block pl-2'>{itemName}</span>
      </li>
    )
  }) : null

  const handleDelete = async () => {
    if (window.confirm('Delete this recipe?')) {
      try {
        await db.collection(`users/${uid}/recipes`).doc(id).delete()
        history.push('/')
      } catch (e) {
        console.log('Error removing document: ', e)
      }
    }
  }

  return (
    <div>
      <div className='bg-white shadow-md rounded-lg m-2 lg:max-w-4xl xl:max-w-6xl lg:mx-auto lg:my-12'>
        {
          pictureUrl &&
          <div className='relative pb-4/6 md:pb-3/6 lg:pb-2/6'>
            <img
              className='absolute h-full w-full object-cover object-center rounded-t-lg shadow-sm'
              src={pictureUrl}
              alt={name}
            />
          </div>
        }
        <div className='flex justify-between px-6 py-2 border-b-4 border-double shadow-sm items-center lg:px-12'>
          <p className='text-gray-900 font-semibold text-lg'>{name}</p>
          <p className='text-gray-600 text-xs uppercase font-semibold tracking-wide'>{course}</p>
        </div>
        <div className='px-6 py-6 text-gray-900 lg:px-12 lg:pb-10 lg:pt-8'>
          {
            ingredients &&
            <div className='pb-4'>
              <h3 className='uppercase font-semibold text-gray-900 tracking-wide text-center text-xl'>Ingredients</h3>
              <ul className='list-disc list-inside text-xs pt-2'>
                {ingredientsList}
              </ul>
            </div>
          }
          <h3 className='uppercase font-semibold text-gray-900 tracking-wide text-center text-xl'>Instruction</h3>
          <div className='pt-2 text-gray-900 whitespace-pre-line break-words lg:pt-4'>
            {`${description}`}
          </div>

          <div className='space-x-2'>
            <Link to={`/users/${uid}`}>
              <button className='mt-6 bg-blue-700 hover:bg-blue-600 text-white font-bold py-1 px-4 border-b-4 border-blue-900 hover:border-blue-800 rounded-md md:mt-8 lg:mt-10'>Back</button>
            </Link>
            {
              auth.currentUser && auth.currentUser.uid === uid &&
              <Fragment>
                <Link to={`/users/${uid}/recipes/${id}/edit/`}>
                  <button className='mt-6 bg-blue-700 hover:bg-blue-600 text-white font-bold py-1 px-4 border-b-4 border-blue-900 hover:border-blue-800 rounded-md md:mt-8 lg:mt-10'>Edit</button>
                </Link>
                <button className='mt-6 bg-blue-700 hover:bg-blue-600 text-white font-bold py-1 px-4 border-b-4 border-blue-900 hover:border-blue-800 rounded-md md:mt-8 lg:mt-10' onClick={handleDelete}>Delete</button>
              </Fragment>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recipe
