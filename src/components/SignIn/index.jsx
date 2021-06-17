import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import Main from "./Main";

const SignInPage = () => (
  <>
    <Main />
  </>
);

const SignInLink = () => (
  <p>
    already have ? <Link to={ROUTES.SIGN_IN}>Sign-In</Link>
  </p>
);

export default SignInPage;

export { SignInLink };
