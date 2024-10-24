import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS if needed

const Header = () => {
  return (
    <header className="bg-dark py-5 text-white">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top container-fluid px-4">
        <a className="navbar-brand" href="/">Restaurant Mini Project</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#menu">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#promotion">Promotion</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          <button className="btn btn-light me-2">Cart</button>
          <a href="#register" className="btn btn-outline-light">Register</a>
          <a href="#login" className="btn btn-outline-light ms-2">Login</a>
        </div>
      </nav>
      <div className="container px-4 text-center">
        <h1 className="fw-bolder">Welcome to Restaurant Mini Project</h1>
        <p className="lead">This is a Single page Restaurant Website</p>
        <a className="btn btn-lg btn-light" href="#about">Start scrolling!</a>
      </div>
    </header>
  );
};

export default Header;
