import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';
import RoomSetup from "./RoomSetup";

// it("renders App component correctly", () => {
//   const { getByText } = render(<App />);
//   expect(getByText(/Start Date/i)).toBeInTheDocument();
// });

function renderWithRouter(ui: ReactElement, {
                              route = '/',
                              history = createMemoryHistory({ initialEntries: [route] }),
                          }: Options = {}
) {
    const Wrapper: React.App = ({ children }) => (
        <Router history={history}>{children}</Router>
    );
    return {
        ...render(ui, { wrapper: Wrapper }), history,
    };
}
  test('user root redirects to room setup', async () => {
      const { findByTest, history, findByLabelText } =
    renderWithRouter(<RoomSetup />,
        {
            route: "setup",
        })

    expect(history.location.pathname).toEqual('setup');
  });
