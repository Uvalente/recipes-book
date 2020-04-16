import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { fireEvent, render, waitForElement } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import deleteColletion from '../../resetDatabase'
import { auth } from '../firebase'

// beforeAll(async () => await auth.createUserWithEmailAndPassword('test@example.com', 'password'))
afterEach(async () => await act(async () => deleteColletion('recipes')))
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

test('creating a recipe display it on the homepage', async () => {
  const { getByText, getByTestId, getByLabelText } = render(<App />)

  fireEvent.click(getByText('Log In'))

  fireEvent.change(getByLabelText('Email:'), {
    target: { value: 'test@example.com' }
  })

  fireEvent.change(getByLabelText('Password:'), {
    target: { value: 'password' }
  })

  await act(async () => fireEvent.click(getByText('Log in')))

  const addRecipeLink = await waitForElement(() => getByText('Add Recipe'))

  fireEvent.click(addRecipeLink)

  fireEvent.change(getByTestId('recipe-name'), {
    target: { value: 'Amatriciana' }
  })
  fireEvent.change(getByTestId('recipe-description'), {
    target: { value: 'Cook the pasta' }
  })
  fireEvent.change(getByTestId('recipe-course'), {
    target: { value: 'Main Course' }
  })

  await act(async () => fireEvent.click(getByTestId('recipe-submit')))

  const title = await waitForElement(() => getByText('Amatriciana'))
  const description = await waitForElement(() => getByText('Cook the pasta'))
  const course = await waitForElement(() => getByText('Main Course'))

  expect(title).toBeInTheDocument()
  expect(description).toBeInTheDocument()
  expect(course).toBeInTheDocument()
})

test('click Read more... display recipe page', async () => {
  const { getByText, getByTestId } = render(<App />)

  await act(async () => auth.signInWithEmailAndPassword('test@example.com', 'password'))

  const recipeInstruction = 'I am the super long text'.repeat(20)
  fireEvent.click(getByText('Add Recipe'))

  fireEvent.change(getByTestId('recipe-name'), {
    target: { value: 'Long recipe' }
  })
  fireEvent.change(getByTestId('recipe-description'), {
    target: { value: recipeInstruction }
  })
  fireEvent.change(getByTestId('recipe-course'), {
    target: { value: 'Main Course' }
  })

  await act(async () => fireEvent.click(getByTestId('recipe-submit')))

  const readMore = await waitForElement(() => getByText('Read more...'))

  await act(async () => fireEvent.click(readMore))

  expect(await getByText(recipeInstruction)).toBeInTheDocument()
})
