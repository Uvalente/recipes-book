import React from 'react'
import ReactDom from 'react-dom'
import { render, getByTestId } from '@testing-library/react'
import Recipe from '../components/recipe/Recipe'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<Recipe />, div)
})

test('display props correctly', () => {
  const recipe = {
    name: 'Pan di Spagna',
    description: 'I am the super long instruction'.repeat(20),
    course: 'Dessert'
  }
  const { getByText } = render(
    <Recipe {...recipe} />
  )

  expect(getByText(recipe.name)).toBeInTheDocument()
  expect(getByText(recipe.description)).toBeInTheDocument()
  expect(getByText(recipe.course)).toBeInTheDocument()
})