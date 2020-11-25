import React from "react";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passError,
  } = props;
  return (
    <section className="login">
      <div className="login-main">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          autoFocus
          id="email"
          required
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="error-message">{emailError}</p>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="error-message">{passError}</p>
        <div className="button-container">
          {hasAccount ? (
            <>
              <button className="button-auth" onClick={handleLogin}>
                Sign In
              </button>
              <p>
                Dont't have an account ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
              </p>
            </>
          ) : (
            <>
              <button className="button-auth" onClick={handleSignup}>
                Sign Up
              </button>
              <p>
                Have an account ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
