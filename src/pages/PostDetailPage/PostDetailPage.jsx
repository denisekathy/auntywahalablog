import React, { useState } from "react";
import { useLocation, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import CommentBox from "../../Components/CommentBox/CommentBox";
import AuthPage from "../AuthPage/AuthPage";
import PostDetails from "../../Components/PostDetails/PostDetails";

export default function PostDetailPage(props) {
  const [user, setUser] = useState(getUser());
  const {
    state: { post },
  } = useLocation();

  return (
    <>
      <br />
      <h1>Post Details</h1>
      <br />
      <PostDetails key={post._id} post={post} />
    </>
  );
}
