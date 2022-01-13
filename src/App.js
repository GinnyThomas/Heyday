import Room from "./components/Room/Room";
import Landing from "./components/Landing/Landing";
import RoomSetup from "./components/RoomSetup/RoomSetup";
import RoomForm from "./components/RoomForm/RoomForm";
import * as ReactDOM from "react-dom";
import { useState } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import expressLink from "./helpers/expressLink.js";

function App() {
  const initState = {};
  const [apiState, setApiState] = useState(initState);

  const apiLoaded = () => apiState != initState && apiState.roomData != null;

  const getRoomData = () => expressLink.getRoomData(1, setApiState);

  const loadInitData = () => {
    if (!apiLoaded()) getRoomData();
  };
  loadInitData();

  // const incFriendCount = () => {
  // fetch("http://localhost:9000/testAPI", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     retrieve: false,
  //     roomID: 1,
  //     friendCount: getFriendCount() + 1,
  //   }),
  // })
  //   .then((res) => res.text())
  //   .then((res) => setApiState({ roomData: res }));
  // };

  const pageLoading = () => {
    return <div>Loading...</div>;
  };

  const pageContent = () => {
    console.log(apiState.roomData);
    const friendCount = apiState.roomData.friendCount;
    return (
      <div className="App">
        <p className="App-intro">Friend count: {friendCount}</p>
        {/* <button onClick={() => incFriendCount()}>Increase friend count</button> */}
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
