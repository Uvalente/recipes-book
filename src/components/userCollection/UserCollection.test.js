import React from 'react'
import ReactDom from 'react-dom'
import UserCollection from './UserCollection'
import { render, waitForElement } from '@testing-library/react'
import { db } from '../../firebase'
import { act } from 'react-dom/test-utils'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<UserCollection />, div)
})

test('display users correctly after loading', async () => {
  await act(async () => {
    await db.collection('users').doc('uid_1').set({ displayName: 'User 1' })
    await db.collection('users').doc('uid_2').set({ displayName: 'User 2' })
  })

  const { getByText } = render(<UserCollection />)
  expect(getByText('Loading...')).toBeInTheDocument()
  const userOne = await waitForElement(() => getByText(/User 1/))
  expect(userOne).toBeInTheDocument()
  expect(getByText(/User 2/)).toBeInTheDocument()
})
