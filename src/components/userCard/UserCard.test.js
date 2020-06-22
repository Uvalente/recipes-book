import UserCard from './UserCard'
import React from 'react'
import ReactDom from 'react-dom'
import { render } from '@testing-library/react'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<UserCard />, div)
})

test('display props correctly', () => {
  const { getByText } = render(<UserCard displayName='User 1' />)

  expect(getByText('User 1')).toBeInTheDocument()
})