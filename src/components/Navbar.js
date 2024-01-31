import React from "react";

function Navbar() {
  return (
    <div>
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <a class="navbar-brand text-white" href="http://localhost:3000/pagelist">
            Pagelist
          </a>
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
                <a class="nav-link text-white" href="http://localhost:3000/">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="http://localhost:3000/signup">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    </div>
  );
}

export default Navbar;
