import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewRecipe from '../components/NewRecipe';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewRecipe />, div);
});

test('save recipe to state', () => {
  const { getByLabelText } = render(<NewRecipe />)
  const title = getByLabelText(/insert recipe name/i)
  const description = getByLabelText(/insert recipe description/i)
  fireEvent.change(title, {
    target: {
      value: 'Amatriciana'
    }
  })
  fireEvent.change(description, {
    target: {
      value: 'Cook the pasta'
    }
  })
  expect(title.value).toBe('Amatriciana')
  expect(description.value).toBe('Cook the pasta')
})