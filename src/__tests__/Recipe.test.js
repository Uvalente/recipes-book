import React from 'react'
import ReactDom from 'react-dom'
import { render } from '@testing-library/react'
import Recipe from '../components/recipe/Recipe'
import { BrowserRouter as Router } from 'react-router-dom'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<Router><Recipe /></Router>, div)
})

test.skip('display props correctly', () => {
  const recipe = {
    name: 'Pan di Spagna',
    description: 'I am the super long instruction'.repeat(20),
    course: 'Dessert'
  }
  const { getByText } = render(
    <Router>
      <Recipe {...recipe} />
    </Router>
  )

  expect(getByText(recipe.name)).toBeInTheDocument()
  expect(getByText(recipe.description)).toBeInTheDocument()
  expect(getByText(recipe.course)).toBeInTheDocument()
})