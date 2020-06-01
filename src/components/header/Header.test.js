import React from 'react'
import ReactDom from 'react-dom'
import { act } from 'react-dom/test-utils'
import Header from './Header'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import { auth, createUserDocument } from '../../firebase'

// beforeAll(async () => {
//   const { user } = await auth.createUserWithEmailAndPassword('tester@example.com', 'password')
//   await createUserDocument(user, { displayName: 'Tester' })
//   console.log(user)
// })

afterAll(async () => {
  await auth.signOut()
  // let user = await auth.currentUser
  // await user.delete().then(() => {
  //   console.log('user deleted')
  // }).catch(error => {
  //   console.log('error', error)
  // })
})

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render((
    <Router>
      <Header />
    </Router>
  ), div)
})

test('display stranger on the header if not logged in', () => {
  const { getByText } = render(<Router><Header /></Router>)
  expect(getByText('Stranger recipe book')).toBeInTheDocument()
})

test.skip('display username on the header if logged in', async () => {
  const { getByText, rerender } = render(<Router><Header /></Router>)
  await act(async () => auth.signInWithEmailAndPassword('tester@example.com', 'password'))
  rerender(<Router><Header /></Router>)
  const header = getByText('Tester recipe book')
  console.log('HEEEEERE', header)
  expect(header).toBeInTheDocument()
})