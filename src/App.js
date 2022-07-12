import { Link } from "react-router-dom";
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>We got mad trees son</h1>
      <Link to="/trees">Enter the forest</Link>
    </div>
  );
}

export default App;
