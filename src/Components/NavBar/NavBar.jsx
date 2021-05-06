import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import './NavBar.css'


export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
 
  return (
	  <>
	  <header>AUNTY
		   WAHALA</header>
    <nav className="navbar navbar-center bg-success navbar-light">
		
      <Link className="link" to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/posts/new">New Post</Link>
      &nbsp; | &nbsp;
      {user && <span>Welcome, {user.name}</span>}
      &nbsp; | &nbsp;
	  <Link to="/about">About Us</Link>
	  &nbsp; | &nbsp;
	  {user &&
		<Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
	  }
	   
	
     
      
    </nav>
	</>
  );
}
