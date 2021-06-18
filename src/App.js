import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import * as ROUTES from "./constants/routes";

import HomePage from "./components/Home/index";
import PhotosPage from "./components/Photos/index";

import LandingPage from "./components/Landing/index";
import SignInPage from "./components/SignIn/index";
import PasswordForgetPage from "./components/PasswordForget/index";
import SignOut from "./components/SignOut/index";
import CreateAccountPage from "./components/CreateAccount/index";

import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";

import PrivateRoute from "./components/PrivateRoute/index";
import PublicRoute from "./components/PublicRoute/index";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <PublicRoute exact path={ROUTES.LANDING}>
          <LandingPage />
        </PublicRoute>

        <PublicRoute path={ROUTES.SIGN_IN}>
          <SignInPage />
        </PublicRoute>

        <PublicRoute path={ROUTES.PASSWORD_FORGET}>
          <PasswordForgetPage />
        </PublicRoute>

        <PublicRoute path={ROUTES.CREATE_ACCOUNT}>
          <CreateAccountPage />
        </PublicRoute>

        <PrivateRoute path={ROUTES.HOME}>
          <HomePage />
        </PrivateRoute>

        <PrivateRoute path={ROUTES.SIGN_OUT}>
          <SignOut />
        </PrivateRoute>

        <PrivateRoute path={ROUTES.PHOTOS}>
          <PhotosPage />
        </PrivateRoute>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
