import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import LoginAdmin from "./admin/LoginAdmin"
import Dashboard from "./dashboard/Dashboard"
import LoginStudent from "./student/LoginStudent"
import { Component } from "react";

export default class ControlPage extends Component {
  constructor(props) {
    super(props)
    console.log("Control Page")
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/admin" component={LoginAdmin} />
          <Route path="/student" component={LoginStudent} />

          <TeacherRouter path="/home" component={Dashboard} />
        </Switch>
      </Router>
    )
  }
}

const TeacherRouter = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => (
    JSON.parse(localStorage.getItem("Admin"))
      ? <Component {...props} />
      : <Redirect to='/admin' />
  )} />
}