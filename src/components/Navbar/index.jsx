import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FirebaseContext } from "../../firebase/index";
import * as ROUTES from "../../constants/routes";

const Navbar = () => {
  const location = useLocation();
  const { auth } = useContext(FirebaseContext);

  return [
    ROUTES.LANDING,
    ROUTES.SIGN_IN,
    ROUTES.PASSWORD_FORGET,
    ROUTES.CREATE_ACCOUNT,
    ROUTES.SIGN_OUT,
    ROUTES.HOME,
    ROUTES.PHOTOS,
  ].includes(location.pathname) ? (
    <nav>
      <div className="nav-div">
        <div className="n-d-1">
          {auth.currentUser ? (
            <Link to={ROUTES.HOME}>
              <span>p</span>ersonal<span>C</span>ollection
            </Link>
          ) : (
            <Link to={ROUTES.LANDING}>
              <span>p</span>ersonal<span>C</span>ollection
            </Link>
          )}
        </div>
        <div className="n-d-2">
          {[ROUTES.LANDING, ROUTES.SIGN_IN].includes(location.pathname) && (
            <Link to={ROUTES.SIGN_IN} className="n-d-2-link-1">
              Sign-In
            </Link>
          )}
          {[ROUTES.LANDING, ROUTES.CREATE_ACCOUNT].includes(
            location.pathname
          ) && (
            <Link to={ROUTES.CREATE_ACCOUNT} className="n-d-2-link-2">
              Create Account
            </Link>
          )}
          {[ROUTES.HOME, ROUTES.PHOTOS].includes(location.pathname) && (
            <>
              <Link to={ROUTES.PHOTOS} className="n-d-2-link-2">
                Photos
              </Link>
              <Link to={ROUTES.SIGN_OUT} className="n-d-2-link-3">
                Sign-Out
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  ) : (
    <></>
  );
};

export default Navbar;
