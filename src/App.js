import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { withAuthentication } from "./session/index";
import * as ROUTES from "./constants/routes";

import HomePage from "./components/Home/index";
import VideosPage from "./components/Videos/index";
import PhotosPage from "./components/Photos/index";

import LandingPage from "./components/Landing/index";
import SignInPage from "./components/SignIn/index";
import PasswordForgetPage from "./components/PasswordForget/index";
import SignOut from "./components/SignOut/index";
import CreateAccountPage from "./components/CreateAccount/index";

import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />

        <Route path={ROUTES.CREATE_ACCOUNT} component={CreateAccountPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.SIGN_OUT} component={SignOut} />

        <Route path={ROUTES.VIDEOS} component={VideosPage} />
        <Route path={ROUTES.PHOTOS} component={PhotosPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default withAuthentication(App);
