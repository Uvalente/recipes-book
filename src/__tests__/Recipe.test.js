import React from 'react'
import { render } from '@testing-library/react'
import Recipe from '../components/recipe/Recipe'
import ReactDom from 'react-dom'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<Recipe
    recipeName=''
    recipeDescription=''
    recipeCourse=''
  />, div)
})

test('display props correctly', () => {
  const { getByText } = render(
    <Recipe
      recipeName='Amatriciana'
      recipeDescription='Cook the pasta'
      recipeCourse='Main Course'
    />)
  const title = getByText('Amatriciana')
  const description = getByText('Cook the pasta')
  const course = getByText('Main Course')
  const readMore = getByText('Read more...')

  expect(title).toBeInTheDocument()
  expect(description).toBeInTheDocument()
  expect(course).toBeInTheDocument()
  expect(readMore).toBeInTheDocument()
})

test('cut long title and instructions', () => {
  const longString = 'I am a super long text, I am a super long text'
  const { getByTestId } = render(
    <Recipe
      recipeName={longString}
      recipeDescription={longString.repeat(10)}
      recipeCourse='Main Course'
    />)
  const title = getByTestId('test-title')
  const description = getByTestId('test-description')
  expect(title.textContent).toMatch(/\.\.\./)
  expect(description.textContent).toMatch(/\.\.\./)
})