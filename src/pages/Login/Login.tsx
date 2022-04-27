import React, { useState } from "react";
import LoginForm from "./LoginForm";
import ForgotPassForm from "./ForgotPassForm";
import loginBackground from "@images/login-background.png";
import Image from "@assets/Image";

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main
      className="login-page"
      style={{
        backgroundImage: `url(${loginBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="logo">
        <Image src="logo.png" alt="LMS-Elearning" />
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
