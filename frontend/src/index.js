import React from "react";
import ReactDOM from "react-dom";
import "./resources/css/App.css";
import firebase  from "./firebase";
import App from "./App";





firebase.auth().onAuthStateChanged((user) => {
	ReactDOM.render(<App user={user} />, document.getElementById("root"));
});
