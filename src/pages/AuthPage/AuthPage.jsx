import { useState } from "react";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import LoginForm from "../../Components/LoginForm/LoginForm";
import Logo from "../../Components/Logo/Logo";
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main className="authpage">
      <div>
        <Logo />
        <br />
        <h3
          className="toggle btn btn-success btn-lg"
          onClick={() => setShowLogin(!showLogin)}
        >
          {showLogin ? "Click Here to: Sign Up!" : "Click Here to :Login!"}
        </h3>
        <br />
        <br />
      </div>

      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}
