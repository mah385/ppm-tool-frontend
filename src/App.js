import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import DashBoard from "./components/DashBoard";
import Header from "./components/Layout/Header";
import AddProject from "./components/Project/AddProject";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/addProject" component={AddProject} />
      </div>
    </Router>
  );
}

export default App;
//CFH 11th
