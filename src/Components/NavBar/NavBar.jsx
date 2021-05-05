import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
  return (
    <>
      <header>AUNTY WAHALA</header>

      <nav>
		  
		 
		<Link to='/'>Home</Link>
		&nbsp; | &nbsp;
        <Link to="/posts/new">New Post</Link>
        &nbsp; | &nbsp;
    
        {/* <span>Welcome,{user.name}</span> */}
        &nbsp;&nbsp;
        <Link to="" onClick={handleLogOut}>
          Log Out
        </Link>
      </nav>
    </>
  );
}
