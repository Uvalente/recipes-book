import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewRecipe from '../components/NewRecipe';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

const newRecipeWithRouter = (
  <Router>
    <NewRecipe onAddRecipe={() => { }} />
  </Router>
)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(newRecipeWithRouter, div);
});

test('displays errors upon submit', () => {
  const { getByTestId, getByText } = render(newRecipeWithRouter)
  const button = getByTestId('recipe-submit')
  fireEvent.click(button)
  expect(getByText(/please insert a recipe title/i)).toBeInTheDocument()
  expect(getByText(/insert recipe\'s instructions/i)).toBeInTheDocument()
  expect(getByText(/select a course type/i)).toBeInTheDocument()
})

test('save recipe to state and reset form upon submit', () => {
  const { getByTestId } = render(newRecipeWithRouter)
  const title = getByTestId('recipe-name')
  const description = getByTestId('recipe-description')
  const course = getByTestId('recipe-course')
  const button = getByTestId('recipe-submit')
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
      value: 'main-course'
    }
  })
  expect(title.value).toBe('Amatriciana')
  expect(description.value).toBe('Cook the pasta')
  expect(course.value).toBe('main-course')
  fireEvent.click(button)
  expect(title.value).toBeFalsy()
  expect(description.value).toBeFalsy()
  expect(course.value).toBeFalsy()
})