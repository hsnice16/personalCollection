import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import Main from "./Main";

const PasswordForgetPage = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;

    document.title = "forgetPassword | personalCollection";
  }, []);

  return (
    <>
      <Main />
    </>
  );
};

const PasswordForgetLink = () => (
  <p>
    forgot Password ? <Link to={ROUTES.PASSWORD_FORGET}>Help</Link>
  </p>
);

export default PasswordForgetPage;

export { PasswordForgetLink };
