import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <React.Fragment>
      <nav className="blue darken-4">
        <div className="container">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">
              Filgolf
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
