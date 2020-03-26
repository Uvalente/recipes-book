import React from 'react'
import { render } from '@testing-library/react'
import Recipe from '../components/Recipe'
import ReactDom from 'react-dom'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<Recipe />, div)
})

test('display props correctly', () => {
  const { getByText } = render(
    <Recipe
      recipeTitle='Amatriciana'
      recipeDescription='Cook the pasta'
    />)
  const title = getByText('Amatriciana')
  const description = getByText('Cook the pasta')

  expect(title).toBeInTheDocument()
  expect(description).toBeInTheDocument()
})