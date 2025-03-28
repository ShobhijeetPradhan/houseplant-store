import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing">
      <h1>Green Haven</h1>
      <p>Your one-stop shop for beautiful houseplants.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
