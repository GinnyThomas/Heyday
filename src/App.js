import Room from "./components/Room/Room";
import Landing from "./components/Landing/Landing";
import RoomSetup from "./components/RoomSetup/RoomSetup";
import RoomForm from "./components/RoomForm/RoomForm";
import * as ReactDOM from "react-dom";
import { useState } from "react";
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";
import expressLink from "./helpers/expressLink.js";

function App() {
  // =====================
  // EXPRESS LINK
  // =====================
  const initState = {},
    [apiState, setApiState] = useState(initState),
    defaultID = 0;

  // Sets the current Room Data set to equal that of the passed roomID
  const setRoom = (roomID) => expressLink.getRoomData(roomID, setApiState);

  // Edits data in the Room with roomID, implementing roomState into it
  const editRoom = (roomID, roomState) =>
    expressLink.putRoomData(roomID, roomState, setApiState);

  // Creates a new Room; sets the current Room Data to the new room if true passed
  const createRoom = (roomState, navigate, setAsCurrent = true) =>
    expressLink.postRoomData(roomState, setApiState, setAsCurrent, navigate);

  const apiLoaded = () => apiState !== initState && apiState.roomData != null;

  const roomData = () => apiState.roomData;

  // =====================
  // QUICK FUNCTIONS
  // =====================

  const incFriendCount = (inc) =>
    editRoom(roomData().roomID, {
      friendCount: roomData().friendCount + inc,
    });

  // =====================
  // RENDERING
  // =====================
  const pageLoading = () => {
    return <div>Loading...</div>;
  };

  const pageContent = () => {
    console.log(roomData());
    const myRoomID = roomData().roomID;
    const friendCount = roomData().friendCount;
    return (
      <div className="App">
        <p>{myRoomID}</p>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="setup"
              element={
                <RoomSetup
                  createRoom={(rState, setCur) => createRoom(rState, setCur)}
                  getRoomId={() => myRoomID}
                />
              }
            />
            <Route
              path={`room/:roomidnum`}
              component={myRoomID}
              element={
                <Room
                  setRoom={(id) => setRoom(id)}
                  getRoom={() => roomData()}
                  getRoomId={() => myRoomID}
                />
              }
            />
            <Route path="room-form" element={<RoomForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  };

  if (!apiLoaded()) setRoom(defaultID);
  return apiLoaded() ? pageContent() : pageLoading();
}

export default App;
