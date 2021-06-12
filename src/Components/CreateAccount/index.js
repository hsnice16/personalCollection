import React from "react";
import { Link } from "react-router-dom";

import Main from "./main";
import * as ROUTES from "../../constants/routes";

const CreateAccountPage = () => (
  <>
    <Main />
  </>
);

const CreateAccountLink = () => (
  <p>
    first time here ? <Link to={ROUTES.CREATE_ACCOUNT}>Create Account</Link>
  </p>
);

export default CreateAccountPage;

export { CreateAccountLink };
