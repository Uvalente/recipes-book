import React from 'react'
import ReactDom from 'react-dom'
import Login from './Login'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import { auth } from '../../firebase'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<Router><Login /></Router>, div)
})

test('render error with wrong credentials', async () => {
  const { getByLabelText, getByText } = render(<Router><Login /></Router>)

  fireEvent.change(getByLabelText('Email:'), {
    target: { value: 'user@example.com' }
  })

  fireEvent.change(getByLabelText('Password:'), {
    target: { value: 'password' }
  })

  jest
    .spyOn(auth, 'signInWithEmailAndPassword')
    .mockImplementation(() => {
      throw new Error('User not found')
    })

  fireEvent.click(getByText('Log in'))

  const errorMessage = await waitForElement(() => getByText(/User not found/))

  expect(errorMessage).toBeInTheDocument()
})


const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush
  }),
}));

test('user can log in and his redirected to homepage', async () => {
  const logInSpy = jest
    .spyOn(auth, 'signInWithEmailAndPassword')
    .mockReturnValue(true)

  const { getByLabelText, getByText } = render(<Router><Login /></Router>)

  fireEvent.change(getByLabelText('Email:'), {
    target: { value: 'test@example.com' }
  })
  fireEvent.change(getByLabelText('Password:'), {
    target: { value: 'password' }
  })

  fireEvent.click(getByText('Log in'))

  expect(await logInSpy).toHaveBeenCalled()
  expect(mockHistoryPush).toHaveBeenCalled()
})