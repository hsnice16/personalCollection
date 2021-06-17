import React, { useEffect, useContext, useReducer } from "react";
import { useHistory } from "react-router-dom";

import { FirebaseContext } from "../../firebase/index";
import { SignInLink } from "../SignIn/index";
import Error from "../Error/index";

import * as ROUTES from "../../constants/routes";
import createAccount from "../../assets/Images/create-account.svg";
import ProgressBar from "../ProgressBar/index";
import Form from "./Form";

const createAccountReducer = (state, action) => {
  const { type, payload } = action;
  return { ...state, [type]: payload };
};

const Main = () => {
  const [state, dispatch] = useReducer(createAccountReducer, {
    firstname: "",
    lastname: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    error: null,
    loading: false,
  });

  const { auth, firestore } = useContext(FirebaseContext);
  const history = useHistory();

  useEffect(() => {
    document.documentElement.scrollTop = 0;

    document.title = "createAccount | personalCollection";
  });

  async function createUser() {
    dispatch({ type: "loading", payload: true });

    try {
      const authUser = await auth.createUserWithEmailAndPassword(
        state.email,
        state.passwordOne
      );
      await firestore.doc(`users/${authUser.user.uid}`).set({
        firstname: state.firstname,
        lastname: state.lastname,
        email: state.email,
      });

      dispatch({ type: "loading", payload: false });

      history.push(ROUTES.SIGN_IN);
    } catch (error) {
      dispatch({ type: "loading", payload: false });

      if (error.message === "The email address is badly formatted.") {
        dispatch({ type: "error", payload: "Enter Correct Email !!!" });
      } else {
        dispatch({ type: "error", payload: error.message });
      }
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (state.firstname === "") {
      dispatch({ type: "error", payload: "First Name Is Required" });
    } else if (state.email === "") {
      dispatch({ type: "error", payload: "Email Is Required" });
    } else if (state.passwordOne === "") {
      dispatch({ type: "error", payload: "Password Is Required" });
    } else if (state.passwordOne !== state.passwordTwo) {
      dispatch({
        type: "error",
        payload: "Confirm Password Should Match With Password",
      });
    } else {
      createUser();
    }
  }

  return (
    <main className="div-p-1 min-h-100 main-form-container">
      {state.loading === false ? (
        <section className="section-form pad-2">
          {state.error && <Error error={state.error} />}

          <div className="form-container pad-2 m-top">
            <div className="form-img-container pad-1">
              <img
                src={createAccount}
                alt="opening-window illustration from undraw.co"
              />
            </div>
            <Form
              state={state}
              dispatch={dispatch}
              handleSubmit={handleSubmit}
            />
            <div className="form-link">
              <SignInLink />
            </div>
          </div>
        </section>
      ) : (
        <section className="section-form">
          <ProgressBar />
        </section>
      )}
    </main>
  );
};

export default Main;
