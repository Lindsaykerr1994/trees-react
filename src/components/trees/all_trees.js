import { Link } from "react-router-dom";

export default function AllTrees() {
  let trees = [1, 2];
  return (
    <div>
      <h1>All Trees</h1>
      {trees.map((t, i) => (
        <div>
          <Link to={`${t}`} key={i}>
            {t}
          </Link>
        </div>
      ))}
    </div>
  );
}
