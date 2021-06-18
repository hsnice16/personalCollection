import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Main from "./Main";
import * as ROUTES from "../../constants/routes";

const CreateAccountPage = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;

    document.title = "createAccount | personalCollection";
  }, []);

  return (
    <>
      <Main />
    </>
  );
};

const CreateAccountLink = () => (
  <p>
    first time here ? <Link to={ROUTES.CREATE_ACCOUNT}>Create Account</Link>
  </p>
);

export default CreateAccountPage;

export { CreateAccountLink };
