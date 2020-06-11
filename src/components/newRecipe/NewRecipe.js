import React from 'react'
import useForm from './useForm'
import validate from './recipeValidation'
// import './NewRecipe.css'

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
    <form onSubmit={recipeHandleSubmit} noValidate>
      <div className='field-wrapper'>
        <label>
          Recipe title:
          <br />
          <input
            className={`input-field ${errors.recipeName && "error-input"}`}
            type="text"
            data-testid='recipe-name'
            name='recipeName'
            value={recipeForm.recipeName}
            onChange={recipeHandleChange}
            autoComplete="off"
            required
          />
          <br />
          {errors.recipeName && <span className='error'>{errors.recipeName}</span>}
        </label>
      </div>
      <div className='field-wrapper'>
        <label>
          Course type:
          <br />
          <select
            className={`input-field ${errors.recipeCourse && "error-input"}`}
            data-testid='recipe-course'
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
          <br />
          {errors.recipeCourse && <span className='error'>{errors.recipeCourse}</span>}
        </label>
      </div>
      <div className='field-wrapper'>
        <label>
          Upload picture:
          <br />
          <input
            type="file"
            name="recipePicture"
            accept="image/*"
            onChange={recipeHandleChange}
          />
        </label>
      </div>
      <div className='field-wrapper'>
        <label>
          Ingredients list:
          <br />
        </label>
        {
          recipeForm.recipeIngredients.map((ingredient, index) => {
            return (
              <div key={index}>
                <input
                  type='text'
                  name='itemName'
                  placeholder='Ingredient'
                  data-id={index}
                  value={recipeForm.recipeIngredients.itemName}
                  onChange={recipeHandleChange}
                />
                <input
                  type='number'
                  name="itemQuantity"
                  min='0'
                  placeholder='Quantity'
                  data-id={index}
                  value={recipeForm.recipeIngredients.itemQuantity}
                  onChange={recipeHandleChange}
                />
                <select
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
        <br />
        <button type='button' onClick={addIngredient}>+</button>
        <button type='button' onClick={removeIngredient}>-</button>
      </div>
      <div className='field-wrapper'>
        <label>
          Recipe instruction:
          <br />
          <textarea
            className={`input-field ${errors.recipeDescription && "error-input"}`}
            data-testid='recipe-description'
            name='recipeDescription'
            value={recipeForm.recipeDescription}
            onChange={recipeHandleChange}
            required
          />
          <br />
          {errors.recipeDescription && <span className='error'>{errors.recipeDescription}</span>}
        </label>
      </div>
      <input
        className='submit-button'
        type="submit"
        data-testid='recipe-submit'
        value="Create recipe"
      />
    </form>
  )
}

export default NewRecipe
