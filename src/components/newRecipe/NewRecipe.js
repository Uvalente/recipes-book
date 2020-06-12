import React from 'react'
import useForm from './useForm'
import validate from './recipeValidation'

const NewRecipe = (props) => {
  const {
    recipeHandleChange,
    recipeHandleSubmit,
    recipeForm,
    addIngredient,
    removeIngredient,
    errors
  } = useForm(validate, props.user)

  return (
    <form onSubmit={recipeHandleSubmit} noValidate className='bg-white shadow-md rounded-lg m-2 lg:max-w-4xl xl:max-w-6xl lg:mx-auto lg:my-12 px-4 py-6 lg:p-10 xl:px-12'>
      <h3 className='uppercase font-semibold text-gray-900 tracking-wide text-center text-xl lg:py-2'>New Recipe</h3>
      <label className='block text-gray-900 mb-2 font-semibold pt-6' for='recipeName'>
        Recipe title
      </label>
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.recipeName && "border-red-400"}`}
        type="text"
        id='recipeName'
        name='recipeName'
        value={recipeForm.recipeName}
        onChange={recipeHandleChange}
        autoComplete="off"
        required
      />
      {
        errors.recipeName &&
        <div className='bg-red-100 border-t-4 border-red-400 text-red-600 mt-4 px-4 py-3 rounded-b shadow-md font-semibold'>
          <p>{errors.recipeName}</p>
        </div>
      }
      <label className='block text-gray-900 mb-2 font-semibold pt-6' for='recipeCourse'>
        Course type
      </label>
      <select
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline ${errors.recipeCourse && "border-red-400"}`}
        id='recipeCourse'
        name='recipeCourse'
        value={recipeForm.recipeCourse}
        onChange={recipeHandleChange}
        required
      >
        <option value='' disabled>Please choose an option</option>
        <option value='Starter'>Starter</option>
        <option value='Main Course'>Main Course</option>
        <option value='Dessert'>Dessert</option>
        <option value='Drink'>Drink</option>
      </select>
      {
        errors.recipeCourse &&
        <div className='bg-red-100 border-t-4 border-red-400 text-red-600 mt-4 px-4 py-3 rounded-b shadow-md font-semibold'>
          <p>{errors.recipeCourse}</p>
        </div>
      }
      <label className='block text-gray-900 mb-2 font-semibold pt-6' for='recipePicture'>
        Upload picture
      </label>
      <input
        type="file"
        id='recipePicture'
        name="recipePicture"
        accept="image/*"
        onChange={recipeHandleChange}
      />
      <label className='block text-gray-900 mb-2 font-semibold pt-6'>
        Ingredients list
      </label>
      {
        recipeForm.recipeIngredients.map((ingredient, index) => {
          return (
            <div key={index} className='mt-2'>
              <input
                className='shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='text'
                name='itemName'
                placeholder='Ingredient'
                data-id={index}
                value={recipeForm.recipeIngredients.itemName}
                onChange={recipeHandleChange}
              />
              <input
                className='shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight ml-2 focus:outline-none focus:shadow-outline'
                type='number'
                name="itemQuantity"
                min='0'
                placeholder='Quantity'
                data-id={index}
                value={recipeForm.recipeIngredients.itemQuantity}
                onChange={recipeHandleChange}
              />
              <select
                className='shadow appearance-none border rounded w-1/8 py-2 px-3 text-gray-700 ml-2 leading-tight focus:outline-none focus:shadow-outline'
                name="itemMeasure"
                data-id={index}
                value={recipeForm.recipeIngredients.itemMeasure}
                onChange={recipeHandleChange}
                defaultValue=''
              >
                <option value='' disabled>Measure</option>
                <option value='Gr'>Gr</option>
                <option value='Kg'>Kg</option>
                <option value='Ml'>Ml</option>
                <option value='L'>L</option>
                <option value='Tsp'>Tsp</option>
                <option value='Tbsp'>Tbsp</option>
                <option value='No'>Nº</option>
              </select>
            </div>
          )
        })
      }
      <button type='button' onClick={addIngredient} className='mt-4 bg-blue-700 hover:bg-blue-600 text-white font-bold text-xl w-8 border-b-4 border-blue-900 hover:border-blue-800 rounded-md'>+</button>
      <button type='button' onClick={removeIngredient} className='mt-4 ml-2 bg-blue-700 hover:bg-blue-600 text-white font-bold text-xl w-8 border-b-4 border-blue-900 hover:border-blue-800 rounded-md'>-</button>
      <label className='block text-gray-900 mb-2 font-semibold pt-6' for='recipeDescription'>
        Recipe instruction
      </label>
      <textarea
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48 ${errors.recipeDescription && "border-red-400"}`}
        id='recipeDescription'
        name='recipeDescription'
        value={recipeForm.recipeDescription}
        onChange={recipeHandleChange}
        required
      />
      {
        errors.recipeDescription &&
        <div className='bg-red-100 border-t-4 border-red-400 text-red-600 mt-4 px-4 py-3 rounded-b shadow-md font-semibold'>
          <p>{errors.recipeDescription}</p>
        </div>
      }

      <button className='mt-6 bg-blue-700 hover:bg-blue-600 text-white font-bold py-1 px-4 border-b-4 border-blue-900 hover:border-blue-800 rounded-md'>Create recipe</button>
    </form >
  )
}

export default NewRecipe
