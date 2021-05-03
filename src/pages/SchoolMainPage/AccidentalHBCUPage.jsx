import React from "react";
import { Link, Route } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import Article from "../../Components/Article/Article";
import CommentBox from "../../Components/CommentBox/CommentBox";

export default function AccidentalHBCUPage() {
  return (
    <>
      <h1>AccidentalHBCUPage</h1>
      <Article />
      <h2>Figured it out! YAY ME!</h2>
      <p>Here is my whoolllle article </p>
      <CommentBox />
    </>
  );
}
