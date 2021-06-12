import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../../firebase/index";

import * as ROUTES from "../../constants/routes";
import { PasswordForgetLink } from "../PasswordForget/index";
import { CreateAccountLink } from "../CreateAccount/index";
import Error from "../Error/Error";

import signIn from "../../assets/Images/sign-in.svg";

const Main = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { auth, firebase } = useContext(FirebaseContext);
  const history = useHistory();

  useEffect(() => {
    document.title = "signIn | personalCollection";
  });

  async function signInUser() {
    setLoading(true);

    try {
      await auth.signInWithEmailAndPassword(email, password);
      await auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);

      setEmail("");
      setPassword("");
      setError(null);
      setLoading(false);
      history.push(ROUTES.HOME);
    } catch (error) {
      setLoading(false);

      if (
        error.message ===
        "There is no user record corresponding to this identifier. The user may have been deleted."
      )
        setError("First Create Account !!!");
      else setError(error.message);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email === "") {
      setError("Email Is Required");
    } else if (password === "") {
      setError("Password Is Required");
    } else {
      signInUser();
    }
  }

  return (
    <main className="div-p-1 min-h-100 main-form-container">
      {loading === false ? (
        <section className="section-form pad-2">
          {error && <Error error={error} />}

          <div className="form-container pad-2 m-top">
            <div className="form-img-container pad-1">
              <img
                src={signIn}
                alt="Access account illustration from undraw.co"
              />
            </div>
            <form onSubmit={handleSubmit} className="m-top">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="m-top w-100"
              />

              <input
                type="password"
                val={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="m-top w-100"
              />

              <button className="w-100 form-btn div-p-1" type="submit">
                Sign-In
              </button>
            </form>
            <div className="form-link">
              <PasswordForgetLink />
            </div>
            <div className="form-link">
              <CreateAccountLink />
            </div>
          </div>
        </section>
      ) : (
        <section className="section-form">
          <div className="loading pad-2" role="status">
            <div className="circle circle1 list-item-inline"></div>
            <div className="circle circle2 list-item-inline"></div>
            <div className="circle circle3 list-item-inline"></div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Main;
