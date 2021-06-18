import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../../firebase/index";

import * as ROUTES from "../../constants/routes";
import { CookieContext } from "../../session/index";

const SignOut = () => {
  const { auth } = useContext(FirebaseContext);
  const history = useHistory();
  const { setCookie } = useContext(CookieContext);

  const handleSignOut = () => {
    auth.signOut();
    setCookie("");
    history.push(ROUTES.LANDING);
  };

  useEffect(() => {
    handleSignOut();
  });

  return <></>;
};

export default SignOut;
