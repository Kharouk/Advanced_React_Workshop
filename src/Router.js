import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import Form from "./components/Form";
import WindowSizePage from "./components/WindowSize";
import "./App.css";

const NavRouter = () => {
  return (
    <Router>
      <div style={{ backgroundColor: "inherit" }}>
        <nav>
          <ul style={{}}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/forms">Forms</Link>
            </li>
            <li>
              <Link to="/window">WindowSize</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/window">
            <WindowSizePage />
          </Route>
          <Route path="/forms">
            <Form />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default NavRouter;
