import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import DashBoard from "./components/DashBoard";
import Header from "./components/Layout/Header";
import AddProject from "./components/Project/AddProject";
import UpdateProject from "./components/Project/UpdateProject";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/dashboard" component={DashBoard} />
            <Route exact path="/addProject" component={AddProject} />
            <Route
              exact
              path="/updateProject/:projectIdentifier"
              component={UpdateProject}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
