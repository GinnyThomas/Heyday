import "./instructions.scss";

const Instructions = () => {
  return (
    <div className="instructions">
      <h2>Instructions</h2>
      <p className="step01"><span>Step 1:</span><br></br> Click the Start button above to begin, login info not required.</p>
      <p className="step02"><span>Step 2 ({"<"} 1 minute):</span><br></br> Specify a date-range / group size for a meetup, then click Submit to create a Room</p>
      <p className="step03"><span>Step 3 ({"<"} 2 minutes):</span><br></br> In your Room, open a response form and submit when you're free and when works best for you</p>
      <p className="step04"><span>Step 4:</span><br></br> Share a Room link with your group and ask them to complete a form</p>
      <h3>Once all response forms are submitted, we'll tell you when works best for everyone! <br></br>Check you Room for the results.</h3>
    </div>
  );
};

export default Instructions;