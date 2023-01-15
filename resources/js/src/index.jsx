import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";

if (document.getElementById('full')) {
    ReactDOM.render(<App />, document.getElementById('full'));
}