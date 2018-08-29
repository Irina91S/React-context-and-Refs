import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Application/App";
import registerServiceWorker from "./registerServiceWorker";
import { UserProvider } from "./contexts/UserContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <App />
        </UserProvider>
    </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();