import React from 'react'
import ReactDom from 'react-dom'
import Header from './Header'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import { auth } from '../../firebase'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render((
    <Router>
      <Header />
    </Router>
  ), div)
})

test('display not logged in Header', () => {
  const { getByText } = render(
    <Router>
      <Header />
    </Router>
  )

  const header = getByText('Stranger recipe book')
  const logIn = getByText('Log In')
  
  expect(header).toBeInTheDocument()
  expect(logIn).toBeInTheDocument()
})

test('display logged in Header', () => {
  const user = { displayName: 'Tester' }
  const { getByText } = render(<Router><Header user={user} /></Router>)
  const header = getByText('Tester recipe book')
  const signOut = getByText('Sign Out')

  expect(header).toBeInTheDocument()
  expect(signOut).toBeInTheDocument()
})

test('user can log out', async () => {
  const spy = jest.spyOn(auth, 'signOut')
  const user = { displayName: 'Tester' }
  const { getByText } = render(<Router><Header user={user} /></Router>)
  const signOut = getByText('Sign Out')
  signOut.click()
  
  expect(spy).toHaveBeenCalled();
})