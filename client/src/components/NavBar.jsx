import React from 'react';

const NavBar = () => {
  return (
    <nav className = "navbar navbar-expand-lg navbar-light bg-dark" >
      <div className="container-fluid">
        <a className="navbar-brand text-decoration-underline" href="#">Logo</a>
        <div className="collapse navbar-collapse position-absolute end-0" id="navbarSupportedContent">
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav >
  );
};

export default NavBar;