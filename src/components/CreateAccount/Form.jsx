import React from "react";

const Form = ({ state, dispatch, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="m-top">
      <div className="type-text w-100">
        <input
          type="text"
          className="m-top w-100"
          value={state.firstname}
          onChange={(e) =>
            dispatch({ type: "firstname", payload: e.target.value })
          }
          placeholder="First Name"
        />
        <input
          type="text"
          className="m-top w-100"
          value={state.lastname}
          onChange={(e) =>
            dispatch({ type: "lastname", payload: e.target.value })
          }
          placeholder="Last Name"
        />
      </div>

      <input
        type="email"
        value={state.email}
        onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
        placeholder="Email"
        className="m-top w-100"
      />

      <input
        type="password"
        value={state.passwordOne}
        onChange={(e) =>
          dispatch({ type: "passwordOne", payload: e.target.value })
        }
        placeholder="Password"
        className="m-top w-100"
      />

      <input
        type="password"
        value={state.passwordTwo}
        onChange={(e) =>
          dispatch({ type: "passwordTwo", payload: e.target.value })
        }
        placeholder="Confirm Password"
        className="m-top w-100"
      />

      <button className="w-100 form-btn div-p-1" type="submit">
        Create Account
      </button>
    </form>
  );
};

export default Form;
