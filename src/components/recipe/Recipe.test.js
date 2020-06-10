import React from 'react'
import ReactDom from 'react-dom'
import { render, waitForElement } from '@testing-library/react'
import Recipe from './Recipe'
import { BrowserRouter as Router } from 'react-router-dom'
import { db } from '../../firebase'

const userData = { uid: 'uid' }

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<Router><Recipe user={userData}/></Router>, div)
})

test('display props correctly', async () => {
  const recipe = {
    name: 'Pan di Spagna',
    description: 'I am the super long instruction'.repeat(20),
    course: 'Dessert',
    pictureUrl: '/image.jpg',
    ingredients: [
      {
        itemMeasure: 'Gr',
        itemName: 'Flour',
        itemQuantity: '500'
      },
      {
        itemMeasure: 'Kg',
        itemName: 'Water',
        itemQuantity: '1'
      }
    ]
  }

  jest
    .spyOn(db, 'collection')
    .mockImplementation(() => {
      return {
        doc: () => {
          return {
            get: () => {
              return { data: () => recipe }
            }
          }
        }
      }
    })


  const { getByText, getByRole } = render(
    <Router>
      <Recipe user={userData} />
    </Router>
  )
  const name = await waitForElement(() => getByText(recipe.name))
  expect(name).toBeInTheDocument()
  expect(getByText(recipe.description)).toBeInTheDocument()
  expect(getByText(recipe.course)).toBeInTheDocument()
  expect(getByText(/500 Gr Flour/)).toBeInTheDocument()
  expect(getByText(/1 Kg Water/)).toBeInTheDocument()
  expect(getByRole('img', { name: recipe.name })).toBeInTheDocument()
})