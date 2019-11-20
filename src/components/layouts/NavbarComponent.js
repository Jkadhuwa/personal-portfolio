import React from 'react';
import '../../common/styles/navbar.scss';

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto my-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/about">
              About <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contacts">
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
