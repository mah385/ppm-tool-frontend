import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/vendor/fontawesome-free-5.12.1-web/css/all.css";

ReactDOM.render(<App />, document.getElementById("my_root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
