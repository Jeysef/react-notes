import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// import HeaderApp from "./HeaderApp";
import MainApp from "./App";
// import AboutMeApp from "./AboutMeApp";
// import reportWebVitals from "./reportWebVitals";
// import "bootstrap/dist/css/bootstrap.css";
// *

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorkerRegistration.unregister();

// ReactDOM.render(<HeaderApp />, document.getElementById("header"));
ReactDOM.render(<MainApp />, document.getElementById("body"));
// ReactDOM.render(<AboutMeApp />, document.getElementById("secondPage"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
