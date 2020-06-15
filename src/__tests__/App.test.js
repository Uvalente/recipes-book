import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { fireEvent, render, waitForElement } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import deleteColletion from '../../resetDatabase'
import { auth } from '../firebase'

// beforeAll(async () => await auth.createUserWithEmailAndPassword('test@example.com', 'password'))
afterEach(async () => await act(async () => await deleteColletion('users/2PefFhWa7LOGt172vdx6w60Itz32/recipes')))
// afterAll(async () => {
//   console.log('afterall start')
//   let user = await auth.currentUser
//   await user.delete().then(() => {
//     console.log('user deleted')
//   }).catch(error => {
//     console.log('error', error)
//   })
//   console.log('afterall')
// })


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
