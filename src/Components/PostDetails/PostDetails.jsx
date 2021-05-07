import React from "react";
import { Link } from "react-router-dom";
import "./PostDetails.css";

export default function PostDetails({ post, comment }) {
  return (
    <div className="default">
      <div>
        <h2>Title:</h2>
        <br />
        <h2>{post.title}</h2>
      </div>
      <br />
      <div className="panel-body">
        <h2>Content:</h2>
        <br />
        <h2>{post.content}</h2>
      </div>
      <br />
      <br />
      <div className="btn btn-success">
        <Link to="/">RETURN TO LIST</Link>
      </div>
    </div>
  );
}
