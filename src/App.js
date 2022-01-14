import "./app.scss";
import Room from "./components/Room/Room";
import Landing from "./components/Landing/Landing";
import RoomSetup from "./components/RoomSetup/RoomSetup";
import RoomForm from "./components/RoomForm/RoomForm";
import * as ReactDOM from "react-dom";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="setup" element={<RoomSetup />} />
          <Route path="room" element={<Room />} />
          <Route path="room-form" element={<RoomForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
