const expressURL = "http://localhost:9000/testAPI";

const getExpressURL = () => expressURL;

// -------------------
// HELPER FUNCTION
// -------------------

const whatReturned = (returnVal) => console.log("Returned" + returnVal);

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

const expressLink = {
  getExpressURL,
  getRoomData,
};

module.exports = expressLink;
