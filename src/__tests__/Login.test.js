import React from 'react'
import ReactDom from 'react-dom'
import Login from '../components/login/Login'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, fireEvent, waitForElement } from '@testing-library/react'



test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<Router><Login /></Router>, div)
})

test('render error with wrong credentials', async () => {
  const { getByLabelText, getByText } = render(<Router><Login /></Router>)

  fireEvent.change(getByLabelText('Email:'), {
    target: { value: 'test@example.com' }
  })

  fireEvent.change(getByLabelText('Password:'), {
    target: { value: 'passord' }
  })

  fireEvent.click(getByText('Log in'))

  const passwordErrorMessage = await waitForElement(() => getByText(/password is invalid/))

  expect(passwordErrorMessage).toBeInTheDocument()

  fireEvent.change(getByLabelText('Email:'), {
    target: { value: 'notregistered@example.com' }
  })

  fireEvent.click(getByText('Log in'))

  const userErrorMessage = await waitForElement(() => getByText(/user may have been deleted/))

  expect(userErrorMessage).toBeInTheDocument()
})