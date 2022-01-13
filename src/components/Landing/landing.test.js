import React from 'react';
import {render, screen, fireEvent, act} from '@testing-library/react';
import App from '../../App';
import {MemoryRouter, useNavigate} from "react-router-dom";
import {click} from "@testing-library/user-event/dist/click";

it("renders App component correctly", () => {
  const { getByText } = render(<App />);
  expect(getByText(/Welcome to Anonymeet/i)).toBeInTheDocument();
});

it("create new event button is present on the page", () => {
  const { getByRole } = render(<App />);
  expect(getByRole('button', {name: /Create New Event/i})).toBeInTheDocument();
});

test('calls onClick prop when clicked', () => {
  const Button = ({onClick, children}) => (
    <button onClick={onClick}>{children}</button>
  );
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Create New Event</Button>);
  fireEvent.click(screen.getByText(/Create New Event/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

// it("navigates to RoomSetup when you click the Create New Event Button", () => {
//   // let navigate = useNavigate();
//   // document.body.innerHTML =
//   //     '<div class="landing">' +
//   //       '<div class="landing_title">' +
//   //         '<h1>Welcome To Anonymeet</h1>' +
//   //       '</div>' +
//   //     '<div>' +
//   //     '   <button type=\'submit\' onClick={() => { navigate("setup");}}>' +
//   //     '</div>';
//   // const $ = require('jquery');
//   // act(() => {
//   //   // Find the button (perhaps using the text content)
//   //   const goToRoomSetupButton = document.querySelector('button[type="submit"]');
//   //   // Click it
//     const Button = ({onClick, children}) => (
//         <button onClick={onClick}>{children}</button>
//     );
//     const handleClick = jest.fn();
//     render(<Button onClick={handleClick}>Create New Event</Button>);
//     fireEvent.click(screen.getByText(/Create New Event/i))
//     expect(document.body.textContent).toBe('Start Date');
//   })
