import "./modal.scss";

export default function Modal({ open, onClose }) {
  if (!open) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  };
  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div onClick={onClose}>
          <img
            className="closeBtn"
            src="assets/CloseIcon.png"
            alt="close icon"
          />
        </div>
        <h1 className="title">Edit Room set-up</h1>
        <form className="roomsetup_form" onSubmit={handleSubmit}>
          <div className="formContainer">
            <div className="dateContainer">
              <div className="textContainer">
                <h2>1. Choose a time range for a meetup</h2>
                <p>
                  For example, if you want a meetup some time in March 2025, set
                  your start date as 01/03/2025 and your end date as 31/03/2025.
                </p>
              </div>
              <div className="inputContainer">
                <label>
                  Start date: <br />
                  <input
                    type="date"
                    placeholder="dd/mm/yyyy"
                    name="startDate"
                    // value={startDate}
                    // onChange={handleStartDate}
                  ></input>
                </label>
                <label className="endLabel">
                  End date: <br />
                  <input
                    className="endInput"
                    type="date"
                    placeholder="dd/mm/yyyy"
                    name="endDate"
                    // value={endDate}
                    // onChange={handleEndDate}
                  ></input>
                </label>
              </div>
            </div>
            <div className="groupContainer">
              <div className="textContainer">
                <h2>2. Choose a group size</h2>
                <p>
                  This is the number of people you want to attend the meetup.
                </p>
              </div>
              <div className="inputContainer">
                <label>
                  Group Size: <br />
                  <input
                    type="number"
                    name="friendCount"
                    // value={friendCount}
                    // onChange={handleFriendCount}
                  ></input>
                </label>
              </div>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
