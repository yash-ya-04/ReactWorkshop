import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Create from "../reactCrudOpWithHooks/Create";
import Read from "../reactCrudOpWithHooks/Read";
import Update from "../reactCrudOpWithHooks/Update";

export default function MainComponent() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <nav className="btn btn-warning navbar navbar-expand-lg navheader">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/Create"} className="nav-link">
                    Add Employee
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/Read"} className="nav-link">
                    Employee List
                  </Link>
                </li>
              </ul>
            </div>
          </nav>{" "}
          <br />
          <Switch>
            <Route exact path="/create" component={Create} />
            <Route path="update" component={Update} />
            <Route path="/read" component={Read} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
