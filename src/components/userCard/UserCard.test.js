import UserCard from './UserCard'
import React from 'react'
import ReactDom from 'react-dom'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<Router><UserCard /></Router>, div)
})

test('display props correctly', () => {
  const { getByText } = render(<Router><UserCard displayName='User 1' /></Router>)

  expect(getByText('User 1')).toBeInTheDocument()
})