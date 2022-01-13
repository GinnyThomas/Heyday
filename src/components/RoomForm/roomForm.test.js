import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import {BrowserRouter, Route, Routes, withRouter} from "react-router-dom";
import Room from "../Room/Room";
import RoomSetup from "../RoomSetup/RoomSetup";
import RoomForm from "./RoomForm";
import {MemoryRouter, Router} from "react-router-dom";
import App from "../../App";
import{createMemoryHistory} from 'history'
import Landing from "../Landing/Landing";
import {renderIntoDocument} from "react-dom/test-utils";
import ReactDom from 'react-dom';

it('renders RoomForm Correctly', () => {
//     const history = createMemoryHistory(['/', '/RoomForm']);
//     const {debug} = render(
//         <BrowserRouter history={history}>
//             <Routes>
//                 <Route exact path="/" component={Room}/>
//                 <Route path="room-form" render={() => <div className="RoomForm">Calendar 1</div>}/>
//             </Routes>
//         </BrowserRouter>
//     );
//
// debug();
//     expect(screen.getByText(/calendar 1/i)).toBeInTheDocument();
// })

    const { getByText } = render(
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

// it doesn't matter what the above does on lines 20 & 21, loading RoomForm renders to Room page, as a null page
// (I know its the room page because it shows code,
// TypeError: Cannot read properties of null (reading 'startDate')
//
//       27 |   // ---------------
//       28 |
//     > 29 |   const getDuration = (start = state.startDate, end = state.endDate) => {
//          |                                      ^
//       30 |     const startDigits = start.slice(-2)
//       31 |     const endDigits = end.slice(-2)
//       32 |     return Number(endDigits) - Number(startDigits)


// Fails: test("it renders RoomForm component correctly and Calendar 1 is present", () => {
//     const { getByText } = render(
//         <MemoryRouter initialEntries={[Room]}>
//             <RoomForm />
//         </MemoryRouter>
//     );
//
//     expect(getByText(/Calendar 1/i)).toBeInTheDocument();
// })
//
// // This is where testing fails, it now requires simulating clicks


// Fails: function renderWithRouter(
//     ui,
//     {
//         route = "/",
//         history = createMemoryHistory({ initialEntries: [route] })
//     } = {}
// ) {
//     return {
//         ...render(<Router history={history}>{ui}</Router>),
//         history
//     };
// }
//
// jest.mock('react-router', () => ({
//     withRouter: jest.fn(Comp => <Comp />)
// }))
//
// test("it renders Landing component correctly and SetupRoom is present", () => {
//     const handleSubmit = jest.fn()
//     const {getByText} = renderIntoDocument(
//         <Landing onSubmit={handleSubmit} />,
//     )
//     getByText(/Create New Event/i).click()
//
//
//     // const {getByText} = render(<App />);
//     let container = document.querySelector('button[type="submit"]');
//     expect(container.innerHTML).toMatch('Welcome To Anonymeet')
//     const leftClick = {button: 0}
//     fireEvent.click(getByText(/Create New Event/i), leftClick)
//     expect(container.innerHTML).toHaveTextContent('Start Date')
// })

// test("it renders RoomForm component correctly and Calendar 1 is present", () => {
//     const { getByText } = render(
//         <MemoryRouter>
//             <RoomSetup />
//         </MemoryRouter>
//     );
//     const SubmitPreferences = document.querySelector('button[type="submit"]');
//     // Click it
//     SubmitPreferences.dispatchEvent(new MouseEvent("click"));
//
//     expect(getByText(/Calendar 1/i)).toBeInTheDocument();
// });
// above is currently failing.  - partially because I kept the test content as Room Form.
// I am currently trying to simulate from RoomSetup - i.e. the test is at least seeing the RoomSetup page load,
// but I am unable to simulate the button being clicked and page re-routing - this is what is being simulated
// on lines 26-28.
// below is copy of terminal window when running the test.
    // ● it renders RoomForm component correctly and Calendar 1 is present
    //
    // TestingLibraryElementError: Unable to find an element with the text: /Calendar 1/i. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.
    //
    //     Ignored nodes: comments, <script />, <style />
    // <body>
    // <div>
    //     <div
    //         class="roomsetup"
    //     >
    //         <div
    //             class="roomsetup_form"
    //         >
    //             <form>
    //                 <label>
    //                     Start Date
    //                     <input
    //                         name="startDate"
    //                         placeholder="dd/mm/yyyy"
    //                         type="date"
    //                         value="2022-01-12"
    //                     />
    //                 </label>
    //                 <label>
    //                     End Date
    //                     <input
    //                         name="endDate"
    //                         placeholder="dd/mm/yyyy"
    //                         type="date"
    //                         value="2022-01-19"
    //                     />
    //                 </label>
    //                 <label>
    //                     Number of Attendees
    //                     <input
    //                         name="friendCount"
    //                         type="number"
    //                         value="3"
    //                     />
    //                 </label>
    //                 <button
    //                     type="submit"
    //                 >
    //                     Submit Preferences
    //                 </button>
    //             </form>
    //         </div>
    //     </div>
    // </div>
    // </body>
    //
    // 28 |     SubmitPreferences.dispatchEvent(new MouseEvent("click"));
    // 29 |
    // > 30 |     expect(getByText(/Calendar 1/i)).toBeInTheDocument();
    // |            ^
    // 31 | });

