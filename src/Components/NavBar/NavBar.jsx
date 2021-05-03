import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar() {
  return (
   <>
      <header>AUNTY WAHALA</header>
	  <div>
	  
	  <nav>
	  <Link to="/article">Article</Link>
      &nbsp; | &nbsp;
	  <Link to="/about">About Us</Link>
      &nbsp; | &nbsp;
	  </nav>
	 </div>
	  
   </>
  );
}
