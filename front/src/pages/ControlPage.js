import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from "./login/Login"
import Dashboard from "./dashboard/Dashboard"

export default function ControlPage() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Dashboard />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}