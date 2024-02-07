import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <Link to="/pagelist" className="navbar-brand text-white">
            Pagelist
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link text-white" to="/">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/signup">
                  Sign up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/userlist">
                  UserList
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
