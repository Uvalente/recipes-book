import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewRecipe from './NewRecipe';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

const newRecipeWithRouter = (
  <Router>
    <NewRecipe onAddRecipe={() => { }} user={{uid: "2PefFhWa7LOGt172vdx6w60Itz32"}} />
  </Router>
)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(newRecipeWithRouter, div);
});

test('displays errors upon submit', () => {
  const { getByTestId, getByText } = render(newRecipeWithRouter)
  fireEvent.click(getByTestId('recipe-submit'))
  expect(getByText(/please insert a recipe title/i)).toBeInTheDocument()
  expect(getByText(/insert recipe\'s instructions/i)).toBeInTheDocument()
  expect(getByText(/select a course type/i)).toBeInTheDocument()
})

test('save recipe to state and reset form upon submit', () => {
  const { getByTestId, getAllByPlaceholderText, getByText } = render(newRecipeWithRouter)
  const title = getByTestId('recipe-name')
  const description = getByTestId('recipe-description')
  const course = getByTestId('recipe-course')
  const button = getByTestId('recipe-submit')
  let ingredient = getAllByPlaceholderText('Ingredient')

  fireEvent.change(title, {
    target: {
      value: 'Amatriciana'
    }
  })
  fireEvent.change(description, {
    target: {
      value: 'Cook the pasta'
    }
  })
  fireEvent.change(course, {
    target: {
      value: 'Main Course'
    }
  })
  fireEvent.change(ingredient[0], {
    target: {
      value: 'Ingredient 1'
    }
  })

  fireEvent.click(getByText('+'))

  ingredient = getAllByPlaceholderText('Ingredient')

  fireEvent.change(ingredient[1], {
    target: {
      value: 'Ingredient 2'
    }
  })

  expect(title.value).toBe('Amatriciana')
  expect(description.value).toBe('Cook the pasta')
  expect(course.value).toBe('Main Course')
  expect(ingredient[0].value).toBe('Ingredient 1')
  expect(ingredient[1].value).toBe('Ingredient 2')
  fireEvent.click(button)
  expect(title.value).toBeFalsy()
  expect(description.value).toBeFalsy()
  expect(course.value).toBeFalsy()
})