import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewRecipe from '../components/NewRecipe';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewRecipe />, div);
});

test('save recipe to state', () => {
  const { getByTestId } = render(<NewRecipe />)
  const title = getByTestId('recipe-name')
  const description = getByTestId('recipe-description')
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