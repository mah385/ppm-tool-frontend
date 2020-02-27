import React from "react";
import "./App.css";
import DashBoard from "./components/DashBoard";

function App() {
  return (
    <div className="badge badge-success m-2">
      <h6>inside App component</h6>
      <hr />
      <DashBoard />
    </div>
  );
}

export default App;
