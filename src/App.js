import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { withAuthentication } from './Session/index';
import * as ROUTES from './Constants/routes';

import HomePage from './Components/Home/index';
import VideosPage from './Components/Videos/index';
import PhotosPage from './Components/Photos/index';

import LandingPage from './Components/Landing/index';
import SignInPage from './Components/SignIn/index';
import PasswordForgetPage from './Components/PasswordForget/index';
import SignOut from './Components/SignOut/index';
import CreateAccountPage from './Components/CreateAccount/index';

import Navbar from './Components/Navbar/index';
import Footer from './Components/Footer/index';

function App() {

  return (
    <Router>
      <Navbar />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />

      <Route exact path={ROUTES.CREATE_ACCOUNT} component={CreateAccountPage} />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.SIGN_OUT} component={SignOut} />

      <Route exact path={ROUTES.VIDEOS} component={VideosPage} />
      <Route exact path={ROUTES.PHOTOS} component={PhotosPage} />

      <Footer />
    </Router>
  );
}

export default withAuthentication(App);
