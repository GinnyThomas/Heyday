import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';
import {RoomSetup} from "./RoomSetup";
import {MemoryRouter} from "react-router-dom";

// it("renders App component correctly", () => {
//   const { getByText } = render(<App />);
//   expect(getByText(/Start Date/i)).toBeInTheDocument();
// });
//
// function renderWithRouter(ui: ReactElement, {
//                               route = '/',
//                               history = createMemoryHistory({ initialEntries: [route] }),
//                           }: Options = {}
// ) {
//     const Wrapper: React.App = ({ children }) => (
//         <Router history={history}>{children}</Router>
//     );
//     return {
//         ...render(ui, { wrapper: Wrapper }), history,
//     };
// }
//   test('user root redirects to room setup', async () => {
//       const { findByTest, history, findByLabelText } =
//     renderWithRouter(<RoomSetup />,
//         {
//             route: "/setup",
//         })
//
//     expect(history.location.pathname).toEqual('setup');
//   });

jest.mock('../../components/RoomSetup/RoomSetup');

    test('should render roomsetup page for RoomSetup page route', () => {
        RoomSetup.mockImplementation(() => <div>RoomSetupPageMock</div>);

        render(
            <MemoryRouter initialEntries={['/setup']}>
                <App/>
            </MemoryRouter>
        );

        expect(screen.getByText("RoomSetupPageMock")).toBeInTheDocument();
    });
