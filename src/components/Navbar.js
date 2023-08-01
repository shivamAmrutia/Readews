import React, { Component } from "react";

export default class navBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg">
          <div className="container-fluid justify-content-end">
            {/* <a className="navbar-brand brand" href="/">Readews</a> */}
            <div className="d-flex justify-content-end">
              <button
                className="navbar-toggler navbar-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    about
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    general
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    technology
                  </a>
                </li>
                <li className="nav-item dropdown"></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
