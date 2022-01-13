import React from 'react';
import { render, screen } from '@testing-library/react';
import Room from "./Room";
import {MemoryRouter, } from "react-router-dom";

it('renders Room Correctly', () => {
    render(
        <MemoryRouter initialEntries={[{
                "pathname": "/room",
                "search": "",
                "hash": "",
                "state": {
                    "roomID": 1,
                    "startDate": "2022-01-12",
                    "endDate": "2022-01-19",
                    "friendCount": "4",
                    "friendCurrent": -1,
                    "roomFormsRatings": [
                        []
                    ]
                },
                "key": "t03o8cuy"
        }]
        }>
            <Room />
        </MemoryRouter>
    );
    expect(screen.getByText(/welcome to your room!/i)).toBeInTheDocument();
})
