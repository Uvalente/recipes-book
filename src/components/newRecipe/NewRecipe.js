import React from 'react'
import useForm from './useForm'
import validate from './recipeValidation'
import './NewRecipe.css'

const NewRecipe = (props) => {
  const {
    recipeHandleChange,
    recipeHandleSubmit,
    recipeForm,
    errors
  } = useForm(props.onAddRecipe, validate)

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
            required
          />
          <br />
          {errors.recipeName && <span className='error'>{errors.recipeName}</span>}
        </label>
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
      <div className='field-wrapper'>
        <label>
          Course type:
          <br />
          <select
          className={`input-field ${errors.recipeDescription && "error-input"}`}
            data-testid='recipe-course'
            name='recipeCourse'
            value={recipeForm.recipeCourse}
            onChange={recipeHandleChange}
            required
          >
            <option value=''>Please choose an option</option>
            <option value='starter'>Starter</option>
            <option value='main-course'>Main Course</option>
            <option value='dessert'>Dessert</option>
            <option value='drink'>Drink</option>
          </select>
          <br />
          {errors.recipeCourse && <span className='error'>{errors.recipeCourse}</span>}
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
