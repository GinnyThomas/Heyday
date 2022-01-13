import React from 'react';
import {render} from '@testing-library/react';
import RoomSetup from "./RoomSetup";
import {MemoryRouter} from "react-router-dom";

test("it renders RoomSetup component correctly and date field is present", () => {
    const { getByText } = render(
        <MemoryRouter>
            <RoomSetup />
        </MemoryRouter>
    );

    expect(getByText(/Start Date/i)).toBeInTheDocument();
})
