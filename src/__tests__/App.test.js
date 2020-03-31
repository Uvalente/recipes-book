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
  const home = getByText('Home')

  fireEvent.click(addRecipe)

  const titleForm = getByTestId('recipe-name')
  const descriptionForm = getByTestId('recipe-description')
  const course = getByTestId('recipe-course')
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
  fireEvent.change(course, {
    target: {
      value: 'main-course'
    }
  })
  fireEvent.click(button)

  const title = getByText('Amatriciana')
  const description = getByText('Cook the pasta')

  expect(title).toBeInTheDocument()
  expect(description).toBeInTheDocument()
})