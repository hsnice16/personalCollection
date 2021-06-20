import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

import NotValidPath from "./components/NotValidPath/index";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <PublicRoute exact path={ROUTES.LANDING}>
          <LandingPage />
        </PublicRoute>

        <PublicRoute exact path={ROUTES.SIGN_IN}>
          <SignInPage />
        </PublicRoute>

        <PublicRoute exact path={ROUTES.PASSWORD_FORGET}>
          <PasswordForgetPage />
        </PublicRoute>

        <PublicRoute exact path={ROUTES.CREATE_ACCOUNT}>
          <CreateAccountPage />
        </PublicRoute>

        <PrivateRoute exact path={ROUTES.HOME}>
          <HomePage />
        </PrivateRoute>

        <PrivateRoute exact path={ROUTES.SIGN_OUT}>
          <SignOut />
        </PrivateRoute>

        <PrivateRoute exact path={ROUTES.PHOTOS}>
          <PhotosPage />
        </PrivateRoute>

        <Route path="*">
          <NotValidPath />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
