const { useNavigate } = require("react-router-dom");
const expressURL = "http://localhost:9000";

const getExpressURL = () => expressURL;

// -------------------
// HELPER FUNCTION
// -------------------

const updateRoomData = (putRoomDa, setState) => {
  fetch(expressURL, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(putRoomDa),
  })
    .then((res) => res.json())
    .then((res) => {
      const roomSpecificData = res.find(
        (room) => room.roomID == putRoomDa.roomID
      );
      setState({ roomData: roomSpecificData });
    });
};

// -------------------
// CALLABLE FUNCTION
// -------------------

const getRoomData = (getRoomID, setState) => {
  fetch(expressURL)
    .then((res) => res.json())
    .then((res) => {
      const roomSpecificData = res.find((room) => room.roomID == getRoomID);
      setState({ roomData: roomSpecificData });
    });
};

const putRoomData = (putRoomID, putRoomState, setState) => {
  putRoomState.roomID = putRoomID;
  updateRoomData(putRoomState, setState);
};

const postRoomData = (postRoomDa, setState, setAsCurrent, navigate) => {
  fetch(expressURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postRoomDa),
  })
    .then((res) => res.json())
    .then((res) => {
      if (setAsCurrent) {
        const roomSpecificData = res[res.length - 1];
        setState({ roomData: roomSpecificData });
        navigate(`../room/:${roomSpecificData.roomID}`);
      }
    });
};

const expressLink = {
  getExpressURL,
  getRoomData,
  putRoomData,
  postRoomData,
};

module.exports = expressLink;
