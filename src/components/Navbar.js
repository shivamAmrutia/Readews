import React, { Component } from 'react'


export default class navBar extends Component {
  
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg">
            <div className="container-fluid justify-content-end">
                {/* <a className="navbar-brand brand" href="/">Readews</a> */}
                <div className="d-flex justify-content-end">
                  <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="/">Home</a>
                      </li>
                      <li className="nav-item">
                      <a className="nav-link" href="/">about</a>
                      </li>
                      <li className="nav-item">
                      <a className="nav-link" href="/">contat us</a>
                      </li>
                      <li className="nav-item dropdown">
                      </li>
                  </ul>
                 
                </div>
                
            </div>
        </nav>
      </div>
    )
  }
}
