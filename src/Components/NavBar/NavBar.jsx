import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar() {
  return (
    <>
      <header>AUNTY WAHALA</header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <Link to="/" class="nav-item">
              Home
            </Link>
            &nbsp; | &nbsp;
            <li class="nav-item dropdown">
              <Link
                to="/"
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Lifestyle
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/real-life" class="dropdown-item">
                  Real Life
                </Link>
                <div class="dropdown-divider"></div>
                <Link to="/food" class="dropdown-item">
                  Food
                </Link>
                <div class="dropdown-divider"></div>
                <Link to="/side-eye-chronicles" class="dropdown-item">
                  Side Eye Chronicles
                </Link>
                <div class="dropdown-divider"></div>
                <Link to="/book-club" class="dropdown-item">
                  Book Club
                </Link>
                <div class="dropdown-divider"></div>
              </div>
            </li>
            &nbsp; | &nbsp;
            <Link to="/school" class="nav-item">
              School
            </Link>
            &nbsp; | &nbsp;
            <Link to="/love" class="nav-item">
              Love
            </Link>
            &nbsp; | &nbsp;
            <Link to="/career" class="nav-item">
              Career
            </Link>
            &nbsp; | &nbsp;
            <Link to="/dear-aunty-wahala" class="nav-item">
              Dear Aunty Wahala
            </Link>
            &nbsp; | &nbsp;
            <Link to="/about-us" class="nav-item">
              About Us
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
