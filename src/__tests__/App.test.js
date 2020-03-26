import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { fireEvent, render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('creating a recipe display it on the homepage', () => {
  const { container, getByLabelText, getByText } = render(<App />)
  const titleForm = getByLabelText(/insert recipe name/i)
  const descriptionForm = getByLabelText(/insert recipe description/i)
  const button = container.querySelector('input[type="submit"]')
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
  fireEvent.click(button)

  const title = getByText('Amatriciana')
  const description = getByText('Cook the pasta')

  expect(title).toBeInTheDocument()
  expect(description).toBeInTheDocument()
})