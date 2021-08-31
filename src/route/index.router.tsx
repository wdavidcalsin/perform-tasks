import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ListTasks from "../page/list-tasks";
import Write from '../page/write'

function Rutas() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Write />
        </Route>
        <Route path="/list-tasks">
          <ListTasks />
        </Route>
        <Route path="/">
          <Write />
        </Route>
      </Switch>
    </Router >
  );
}

export default Rutas;