import { useState, useEffect } from "react";
import { Redirect, Route, Switch, Link, useHistory } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../Components/NavBar/NavBar";
import NewPostPage from "../../pages/NewPostPage/NewPostPage";
import Home from "../Home/Home";
import PostDetailPage from "../../pages/PostDetailPage/PostDetailPage";
import PostDetails from "../../Components/PostDetails/PostDetails";
import EditPostPage from "../../pages/EditPostPage/EditPostPage";
import About from "../../pages/About/About";
import * as postAPI from "../../utilities/posts-api";
import * as commentAPI from "../../utilities/comments-api";
import "./App.css";

export default function App(props) {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState();
  const history = useHistory();

  useEffect(() => {
    history.push("/");
  }, [posts, history]);

  async function handleAddPost(newPostData) {
    const newPost = await postAPI.create(newPostData);
    setPosts([...posts, newPost]);
  }

  async function handleUpdatePost(updatedPostData) {
    const updatedPost = await postAPI.update(updatedPostData);

    const newPostsArray = posts.map((post) => {
      return post._id === updatedPost._id ? updatedPost : post;
    });
    setPosts(newPostsArray);
  }

  async function handleDeletePost(id) {
    console.log(id);
    await postAPI.deleteOne(id);
    setPosts(posts.filter((post) => post._id !== id));
  }

  async function handleAddComment(newCommentData) {
    const newComment = await commentAPI.create(newCommentData);
    setComments([...comments, newComment]);
  }
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />

          <Route exact path="/">
            <Home
              posts={posts}
              handleDeletePost={handleDeletePost}
              user={user}
              setPosts={setPosts}
            />
          </Route>
          <Route exact path="/posts/new">
            <NewPostPage handleAddPost={handleAddPost} user={user} />
          </Route>

          <Route exact path="/details">
            <PostDetailPage handleAddComment={handleAddComment} user={user} />
          </Route>
          <Route exact path="/edit">
            <EditPostPage handleUpdatePost={handleUpdatePost} user={user} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Redirect to="/" />
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
