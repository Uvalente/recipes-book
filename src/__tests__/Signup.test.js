import React from 'react'
import ReactDom from 'react-dom'
import Signup from '../components/signup/Signup'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, fireEvent, waitForElement } from '@testing-library/react'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<Router><Signup /></Router>, div)
})

test('render error with wrong credentials', async () => {
  const { getByLabelText, getByText } = render(<Router><Signup /></Router>)

  fireEvent.change(getByLabelText('Email:'), {
    target: { value: 'test@example.com' }
  })

  fireEvent.change(getByLabelText('Username:'), {
    target: { value: 'Test' }
  })

  fireEvent.change(getByLabelText('Password:'), {
    target: { value: 'password' }
  })

  fireEvent.click(getByText('Sign up'))

  const emailErrorMessage = await waitForElement(() => getByText(/address is already in use/))

  expect(emailErrorMessage).toBeInTheDocument()
})

// mocking module in test
// test('user can register', async () => {
//   jest.mock('../firebase', () => {
//     return {
//       auth: {
//         createUserWithEmailAndPassword: function test () {jest.fn()}
//       }
//     }
//   })
//   const { getByLabelText, getByText } = render(<Router><Signup /></Router>)

//   fireEvent.change(getByLabelText('Email:'), {
//     target: { value: 'testing@example.com' }
//   })

//   fireEvent.change(getByLabelText('Username:'), {
//     target: { value: 'Testing' }
//   })

//   fireEvent.change(getByLabelText('Password:'), {
//     target: { value: 'password' }
//   })

//   fireEvent.click(getByText('Sign up'))
// })