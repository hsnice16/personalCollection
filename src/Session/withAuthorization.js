import React, { useEffect, useContext } from "react";
import AuthUserContext from "./context";
import { FirebaseContext } from "../firebase/index";

import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router-dom";

const withAuthorization = (Component) => {
  return (props) => {
    const history = useHistory();
    const { auth } = useContext(FirebaseContext);
    const authUser = useContext(AuthUserContext);

    const condition = (authUser) => !!authUser;

    useEffect(() => {
      const unSubscribe = auth.onAuthStateChanged((authUser) => {
        if (!condition(authUser)) {
          history.push(ROUTES.SIGN_IN);
        }
      });

      return () => unSubscribe();
    });

    return condition(authUser) ? <Component {...props} /> : null;
  };
};

export default withAuthorization;
