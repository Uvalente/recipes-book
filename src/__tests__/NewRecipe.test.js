import React from 'react';
import { render } from '@testing-library/react';
import NewRecipe from '../components/NewRecipe';
import ReactDOM from 'react-dom';

test('renders learn react link', () => {
  const { getByText } = render(<NewRecipe />);
  const titleElement = getByText(/insert recipe name/i);
  expect(titleElement).toBeInTheDocument();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewRecipe />, div);
});