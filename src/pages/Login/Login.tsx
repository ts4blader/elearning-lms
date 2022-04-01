import React, { useState } from "react";
import LoginForm from "./LoginForm";
import ForgotPassForm from "./ForgotPassForm";

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main
      className="login-page"
      style={{
        backgroundImage: "url(./assets/images/login-background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="logo">
        <img src="/images/logo.png" alt="LMS-Elearning" />
      </div>
      <div className="placeholder"></div>
      {showLogin ? (
        <LoginForm switchLayout={() => setShowLogin(false)} />
      ) : (
        <ForgotPassForm switchLayout={() => setShowLogin(true)} />
      )}
    </main>
  );
};

export default Login;
