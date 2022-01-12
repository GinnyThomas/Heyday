import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from '../../App';

it("renders App component correctly", () => {
  const { getByText } = render(<App />);
  expect(getByText(/Welcome to Anonymeet/i)).toBeInTheDocument();
});

it("create new event button is present on the page", () => {
  const { getByRole } = render(<App />);
  expect(getByRole('button', {name: /Create New Event/i})).toBeInTheDocument();
});
