import React from 'react';
import { render, screen } from '@testing-library/react';
import RoomForm from "./RoomForm";
import {MemoryRouter, } from "react-router-dom";

it('renders RoomForm Correctly', () => {
    render(
        <MemoryRouter initialEntries={[{
            "pathname": "/room-form",
            "search": "",
            "hash": "",
            "state": {
                "roomID": 1,
                "startDate": "2022-01-12",
                "endDate": "2022-01-19",
                "friendCount": 3,
                "friendCurrent": 0,
                "roomFormsRatings": [
                    [],
                    [],
                    []
                ]
            },
            "key": "z61z32ot"
        }]
        }>
            <RoomForm />
        </MemoryRouter>
    );
    expect(screen.getByText(/calendar 1/i)).toBeInTheDocument();
})
