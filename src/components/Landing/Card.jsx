import "./card.scss";

const Card = ({ name, bio, fullName, role, github }) => {
  return (
    <div className="card">
      <div className="background">
        <img src="assets/LandingPage/mid1.png" alt="wave image" />
        <img src="assets/LandingPage/bot1.png" alt="wave image" />
      </div>
      <div className="itemContainer">
        <img src={`assets/Carousel/${name}.jpg`} alt="" />
        <p>{bio}</p>
      </div>
      <div className="btnContainer">
        <a href={`https://github.com/${github}`}>Link to Github</a>
        <h2>{fullName}</h2>
        <h3>{role}</h3>
      </div>
    </div>
  );
};

export default Card;
