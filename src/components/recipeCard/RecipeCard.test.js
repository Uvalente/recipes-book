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
  expect(getByText('Cook the pasta')).toBeInTheDocument()
  expect(getByText('Main Course')).toBeInTheDocument()
  expect(getByText('Read more...')).toBeInTheDocument()
})

test('cut long title and instructions', () => {
  const longString = 'I am a super long text, I am a super long text'
  const { getByTestId } = render(
    <Router>
      <RecipeCard
        recipeName={longString}
        recipeDescription={longString.repeat(10)}
        recipeCourse='Main Course'
      />
    </Router>
  )
  const title = getByTestId('test-title')
  const description = getByTestId('test-description')
  expect(title.textContent).toMatch(/\.\.\./)
  expect(description.textContent).toMatch(/\.\.\./)
})