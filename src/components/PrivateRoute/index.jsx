import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import { CookieContext } from "../../session/index";

const PrivateRoute = (props) => {
  const { getCookie } = useContext(CookieContext);

  return getCookie() ? (
    <Route path={props.path}>{props.children}</Route>
  ) : (
    <Redirect to={ROUTES.SIGN_IN} />
  );
};

export default PrivateRoute;
