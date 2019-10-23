import React from "react";

// components
import LandingPage from "./View/LandingPage";

// router lib
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// new user auth

const NewAuth = () => {
  return (
    <Switch>
      <Route path="/" render={() => <Redirect to="/landingpage" />} />
      <Route path="/landingpage" render={props => <LandingPage {...props} />} />
    </Switch>
  );
};

// Dashboard auth

const DashboardAuth = () => {
  return (
    <Switch>
      <Route />
    </Switch>
  );
};

const Route = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={NewAuth} />
      </Switch>
    </Router>
  );
};

export default Route;
