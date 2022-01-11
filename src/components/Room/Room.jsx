import "./room.scss";

const Room = () => {
  const users = 4;

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
            <button type="button" id={user + 1}>
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
