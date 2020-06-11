import React from 'react'
import { render } from '@testing-library/react'
import RecipeCard from './RecipeCard'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'


test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(
    <Router>
      <RecipeCard
        recipeName=''
        recipeDescription=''
        recipeCourse=''
      />
    </Router>,
    div
  )
})

test('display props correctly', () => {
  const { getByText } = render(
    <Router>
      <RecipeCard
        recipeName='Amatriciana'
        recipeDescription='Cook the pasta'
        recipeCourse='Main Course'
      />
    </Router>
  )

  expect(getByText('Amatriciana')).toBeInTheDocument()
  expect(getByText('Main Course')).toBeInTheDocument()
})

test('cut long title', () => {
  const longString = 'I am a super long text, I am a super long text'
  const { getByText } = render(
    <Router>
      <RecipeCard
        recipeName={longString}
        recipeDescription={longString.repeat(10)}
        recipeCourse='Main Course'
      />
    </Router>
  )
  const title = getByText(/I am a super long/)
  expect(title).toHaveClass('truncate')
})