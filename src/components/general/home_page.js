import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div id="home-page-container" className="row align-items-center">
      <div className="col-6 mx-auto">
        <h1 className="display-1">
          <span className="text-green">trees</span>DB
        </h1>
        <Link to="/trees">
          <div className="text-uppercase text-decoration-none">Enter the forest</div>
        </Link>
      </div>
    </div>
  );
}
