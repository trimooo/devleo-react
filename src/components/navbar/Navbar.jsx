import React, { useState}from 'react';
import './navbar.css';


const Navbar = () => {
  const [offcanvasVisible, setOffcanvasVisible] = useState(false);

  const toggleOffcanvas = () => {
    setOffcanvasVisible(!offcanvasVisible);
  };

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" id="home" href="#home">
          <img src="../../image-250x70.png" alt="Logo" />
        </a>
        <div className="d-block d-md-none">
          <button className="navbar-toggler" type="button" onClick={toggleOffcanvas} aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div className={`offcanvas ${offcanvasVisible ? 'show' : ''}`} id="offcanvasNavbar">
          <div className="offcanvas-header">
            <h1 className="offcanvas-title" id="offcanvasNavbarLabel">
              <img src="../../image-250x70.png" alt="Logo" />
            </h1>
            <button type="button" className="btn-close" onClick={toggleOffcanvas} aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <ul className="nav d-none d-md-flex">
          <li className="nav-item">
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
