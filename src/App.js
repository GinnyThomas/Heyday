import Room from "./components/Room/Room";
import Landing from "./components/Landing/Landing";
import RoomSetup from "./components/RoomSetup/RoomSetup";
import RoomForm from "./components/RoomForm/RoomForm";
import * as ReactDOM from "react-dom";
import { useState } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import expressLink from "./helpers/expressLink.js";

function App() {
  // =====================
  // EXPRESS LINK
  // =====================
  const initState = {},
    [apiState, setApiState] = useState(initState),
    defaultID = 0;

  // Sets the current Room Data set to equal that of the passed roomID
  const setRoomData = (roomID) => expressLink.getRoomData(roomID, setApiState);

  // Edits data in the Room with roomID, implementing roomState into it
  const putRoomData = (roomID, roomState) =>
    expressLink.putRoomData(roomID, roomState, setApiState);

  // Creates a new Room; sets the current Room Data to the new room if true passed
  const postRoomData = (roomState, setAsCurrent) =>
    expressLink.postRoomData(roomState, setApiState, setAsCurrent);

  const apiLoaded = () => apiState !== initState && apiState.roomData != null;

  const roomData = () => apiState.roomData;

  if (!apiLoaded()) setRoomData(defaultID);

  // =====================
  // QUICK FUNCTIONS
  // =====================

  const incFriendCount = (inc) =>
    putRoomData(roomData().roomID, {
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
    const friendCount = roomData().friendCount;
    return (
      <div className="App">
        <p className="App-intro">Friend count: {friendCount}</p>
        <button onClick={() => incFriendCount(1)}>Increase friend count</button>
        <button
          onClick={() =>
            postRoomData(
              {
                startDate: 1,
                endDate: 2,
                friendCount: 18,
                roomFormsRatings: [],
              },
              false
            )
          }
        >
          Add Room
        </button>
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
  };

  return apiLoaded() ? pageContent() : pageLoading();
}

export default App;
