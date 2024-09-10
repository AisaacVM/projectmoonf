import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark-bg-subtle">
      <div className="container-fluid">
        <Link to="/">
          <img src="./PMLogo.jpg" width="100px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link text-warning text-md " href="#">
              Intro
            </a>
            <a className="nav-link text-warning text-md" href="#">
              Games
            </a>
            <a
              className="nav-link disabled text-warning text-md"
              aria-disabled="true"
            >
              About us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
