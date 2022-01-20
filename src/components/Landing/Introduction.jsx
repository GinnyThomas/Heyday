import "./introduction.scss";

const Introduction = (props) => {
  return (
    <div className="introduction">
      <h2>So, why use {props.name}?</h2>
      <h3>
        Organising a meetup can be a pain. It's hard figuring out when you're all 
        free, even harder deciding when works well for the whole group, and near 
        impossible to find the best day for everyone.
      </h3>
      <h4>
        {props.name} is here to help
      </h4>
      <p className="step01"><span>EASY TO USE</span><br></br> Submitting your availability is simple, and we won't ask anyone for login details</p>
      <p className="step02"><span>CONVENIENCE MATTERS</span><br></br> Tell us when works well for you, not just when you're available</p>
      <p className="step03"><span>PRIVACY IS IMPORTANT</span><br></br> Other users won't be able to see your availability or your preferences</p>
      <p className="step04"><span>NO NEED TO DECIDE</span><br></br> Our algorithm will figure out the best day for you, there's no need to figure it out yourself </p>
    </div>
  );
};

export default Introduction;
