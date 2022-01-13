import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RoomSetup from "./RoomSetup";
import { MemoryRouter } from "react-router-dom";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'

test("it renders RoomSetup component correctly and date field is present", () => {
    const { getByText } = render(
        <MemoryRouter>
            <RoomSetup />
        </MemoryRouter>
    );

    expect(getByText(/Start Date/i)).toBeInTheDocument();
})
