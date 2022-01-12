import "./room.scss";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const Room = () => {
  let navigate = useNavigate();
  const state = {
    roomID: 1,
    startDate: 5,
    endDate: 10,
    friendCount: 4,
    friendCurrent: 1,
    roomFormsRatings: [1,2,3,4],
  };
  // const { state } = useLocation();

  return (
    <div className="room">
      <h1>Welcome to your Room!</h1>
      <div className="dataContainer">
        <h3>You'll be meeting up between:</h3>
        <p>
          {state.startDate} - {state.endDate}
        </p>
      </div>
      <div className="responseFormContainer">
        <h3>Choose a response to fill out:</h3>
        <div className="container">
          {Array.from(Array(state.friendCount).keys()).map((user) => (
            <button
              type="button"
              id={user + 1}
              onClick={() => {
                navigate("../room-form");
              }}
            >
              Response {user + 1}
            </button>
          ))}
        </div>
      </div>
      <div className="resultContainer">
        {state.roomFormsRatings.length < state.friendCount ? (
          <h2>Waiting for results .....</h2>
        ) : (
          <>
            <h2>SUCCESS!</h2>
            <p>The best day for everyone:</p>
            <p className="result">3rd Feb</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Room;
