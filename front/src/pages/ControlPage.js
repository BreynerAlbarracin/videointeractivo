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
          <Route path="/V&TV/admin" component={LoginAdmin} />
          <Route path="/V&TV/student" component={LoginStudent} />

          <TeacherRouter path="/V&TV/home" component={Dashboard} />
        </Switch>
      </Router>
    )
  }
}

const TeacherRouter = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => (
    JSON.parse(localStorage.getItem("Admin"))
      ? <Component {...props} />
      : <Redirect to='/V&TV/admin' />
  )} />
}