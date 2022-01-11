import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from '../../App';

it("renders App component correctly", () => {
  // const header = <h1>Welcome to Anonymeet</h1>;
  // expect(contains(header)).toEqual(true);
  const { getByText } = render(<App />);
  expect(getByText(/Welcome to Anonymeet/i)).toBeInTheDocument();
});
