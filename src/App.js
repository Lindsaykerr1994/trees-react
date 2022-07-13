import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App container py-5">
      <Outlet />
    </div>
  );
}

export default App;
