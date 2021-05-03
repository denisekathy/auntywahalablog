import { useState } from "react";
import { Link, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import NavBar from "../../Components/NavBar/NavBar";
import Article from "../../Components/Article/Article";
import CommentBox from "../../Components/CommentBox/CommentBox";
import AuthPage from "../AuthPage/AuthPage";

export default function AccidentalHBCUPage() {
  const [user, setUser] = useState(getUser());
  return (
    <>
      <h1>AccidentalHBCUPage</h1>
      <Article />
      <h2>Figured it out! YAY ME!</h2>
      <p>Here is my whoolllle article </p>
      {user ? (
        <CommentBox user={user}/>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </>
  );
}
