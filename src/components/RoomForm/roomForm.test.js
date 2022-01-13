import React from 'react';
import { render } from '@testing-library/react';
import Room from "../Room/Room";
import RoomSetup from "../RoomSetup/RoomSetup";
import RoomForm from "./RoomForm";
import { MemoryRouter } from "react-router-dom";

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

test("it renders RoomForm component correctly and Calendar 1 is present", () => {
    const { getByText } = render(
        <MemoryRouter>
            <RoomSetup />
        </MemoryRouter>
    );
    const SubmitPreferences = document.querySelector('button[type="submit"]');
    // Click it
    SubmitPreferences.dispatchEvent(new MouseEvent("click"));

    expect(getByText(/Calendar 1/i)).toBeInTheDocument();
});
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

