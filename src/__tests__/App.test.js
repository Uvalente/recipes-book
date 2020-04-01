import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { fireEvent, render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('creating a recipe display it on the homepage', () => {
  const { getByText, getByTestId } = render(<App />)
  const addRecipe = getByText('Add Recipe')

  fireEvent.click(addRecipe)

  const titleForm = getByTestId('recipe-name')
  const descriptionForm = getByTestId('recipe-description')
  const courseForm = getByTestId('recipe-course')
  const button = getByTestId('recipe-submit')

  fireEvent.change(titleForm, {
    target: {
      value: 'Amatriciana'
    }
  })
  fireEvent.change(descriptionForm, {
    target: {
      value: 'Cook the pasta'
    }
  })
  fireEvent.change(courseForm, {
    target: {
      value: 'Main Course'
    }
  })
  fireEvent.click(button)

  const title = getByText('Amatriciana')
  const description = getByText('Cook the pasta')
  const course = getByText('Main Course')

  expect(title).toBeInTheDocument()
  expect(description).toBeInTheDocument()
  expect(course).toBeInTheDocument()
})
