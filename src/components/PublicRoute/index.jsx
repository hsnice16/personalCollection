import React, { useContext, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";

import { CookieContext } from "../../session/index";
import * as ROUTES from "../../constants/routes";

const PublicRoute = (props) => {
  const { getCookie } = useContext(CookieContext);
  const history = useHistory();

  useEffect(() => {
    if (getCookie()) {
      history.push(ROUTES.HOME);
    }
  }, [getCookie, history]);

  return (
    <Route path={props.path} exact={props.exact}>
      {props.children}
    </Route>
  );
};

export default PublicRoute;
