import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>We got mad trees son</h1>
      <Link to="/trees">Enter the forest</Link>
    </div>
  );
}
