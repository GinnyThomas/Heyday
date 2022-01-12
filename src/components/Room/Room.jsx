import "./room.scss";
import { useParams, useNavigate } from "react-router-dom";

const Room = () => {
  const users = 7;
  let navigate = useNavigate();

  const handleSelect = () => {
    navigate("../room-form", { state: {startDate: users, endDate: users+4} });
  }
  
  return (
    <div className="room">
      <h1>Welcome to your Room!</h1>
      <div className="dataContainer">
        <h3>You'll be meeting up between:</h3>
        <p>1st Feb - 4th Feb</p>
      </div>
      <div className="responseFormContainer">
        <h3>Choose a response to fill out:</h3>
        <div className="container">
          {Array.from(Array(users).keys()).map((user) => (
            <button type="button" id={user + 1} onClick={() => handleSelect()}>
              Response {user + 1}
            </button>
          ))}
        </div>
      </div>
      <div className="resultContainer">
        <h2>Waiting for results .....</h2>
      </div>
    </div>
  );
};

export default Room;
