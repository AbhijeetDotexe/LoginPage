import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <Link
            to="/pagelist"
            className="navbar-brand text-white"
          >
            Pagelist
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link text-white" to="/">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link text-white"
                  to="/signup"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    </div>
  );
}

export default Navbar;
