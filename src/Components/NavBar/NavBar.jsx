import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();

    setUser(null);
  }

  return (
    <>
      <header></header>
      <nav className="navbar navbar-center bg-dark navbar-light">
        <Link to="/">Home</Link>
        &nbsp; | &nbsp;
        <Link to="/posts/new">New Post</Link>
        &nbsp; | &nbsp;
        {user && <span>Welcome, {user.name}</span>}
        &nbsp; | &nbsp;
        <Link to="/about">About Us</Link>
        &nbsp; | &nbsp;
        {user && (
          <Link to="" onClick={handleLogOut}>
            Log Out
          </Link>
        )}
      </nav>
    </>
  );
}
