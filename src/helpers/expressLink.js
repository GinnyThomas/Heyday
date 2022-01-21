const expressURL = "https://anonymeet-api.herokuapp.com/";

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
        (room) => room.roomID === putRoomDa.roomID.substring(0, 11)
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
      const roomSpecificData = res.find((room) => room.roomID === getRoomID);
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

const resetRoomData = (setState) => {
  fetch(expressURL, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => {
      setState({ roomData: res[0] });
    });
};

const expressLink = {
  getExpressURL,
  getRoomData,
  putRoomData,
  postRoomData,
  resetRoomData,
};

module.exports = expressLink;
