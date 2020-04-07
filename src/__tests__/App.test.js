import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { fireEvent, render, waitForElement } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import deleteColletion from '../../resetDatabase'

afterEach(() => act(() => deleteColletion('recipes')))

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('creating a recipe display it on the homepage', async () => {
  const { getByText, getByTestId } = render(<App />)

  fireEvent.click(getByText('Add Recipe'))

  fireEvent.change(getByTestId('recipe-name'), {
    target: {
      value: 'Amatriciana'
    }
  })
  fireEvent.change(getByTestId('recipe-description'), {
    target: {
      value: 'Cook the pasta'
    }
  })
  fireEvent.change(getByTestId('recipe-course'), {
    target: {
      value: 'Main Course'
    }
  })

  await act(async () => fireEvent.click(getByTestId('recipe-submit')))

  const title = await waitForElement(() => getByText('Amatriciana'))
  const description = await waitForElement(() => getByText('Cook the pasta'))
  const course = await waitForElement(() => getByText('Main Course'))

  expect(title).toBeInTheDocument()
  expect(description).toBeInTheDocument()
  expect(course).toBeInTheDocument()
})
