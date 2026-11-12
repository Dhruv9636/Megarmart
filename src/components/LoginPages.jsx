import React from "react";

const LoginPages = ({ openLogin }) => {
  return (
    <div className="logInPage">
        <div className="cancleButton">
            <button className="cancleBtn" onClick={openLogin}>X</button>
        </div>
      <form
        action="e"
        className="LogInForm"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="LogInHead">Log In</h1>
        <input
          type="text"
          placeholder="Gmail Or Mobile"
          className="input id inps"
          required
        />
        <input
          type="text"
          placeholder="Create a Password"
          className="input password inps"
          required
        />
        <div className="input">
          <input type="checkbox" id="agree" className="point" required />

          <label htmlFor="agree" className="point">I agree to the terms and conditions</label>
        </div>
        <button className="SignInBtn input">Continue</button>
      </form>
    </div>
  );
};

export default LoginPages;
