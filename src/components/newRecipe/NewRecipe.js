import React from 'react'
import useForm from './useForm'
import validate from './recipeValidation'

const NewRecipe = (props) => {
  const {
    recipeHandleChange,
    recipeHandleSubmit,
    recipeForm,
    errors
  } = useForm(props.onAddRecipe, validate)

  return (
    <form onSubmit={recipeHandleSubmit} noValidate>
      <label>
        Insert recipe name:
        <input
          type="text"
          data-testid='recipe-name'
          name='recipeName'
          value={recipeForm.recipeName}
          onChange={recipeHandleChange}
          required
        />
        {errors.recipeName && <span>{errors.recipeName}</span>}
      </label>
      <br />
      <label>
        Insert recipe description:
        <textarea
          data-testid='recipe-description'
          name='recipeDescription'
          value={recipeForm.recipeDescription}
          onChange={recipeHandleChange}
          required
        />
        {errors.recipeDescription && <span>{errors.recipeDescription}</span>}
      </label>
      <br />
      <label>
        Select the course:
        <select
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
        {errors.recipeCourse && <span>{errors.recipeCourse}</span>}
      </label>
      <br />
      <input
        type="submit"
        data-testid='recipe-submit'
        value="Create recipe"
      />
    </form>
  )
}

export default NewRecipe
