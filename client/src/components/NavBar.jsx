import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" >
      <div className="container-fluid text-center">
        <span className="navbar-brand mb-0 h1 text-white fst-italic">MarbleWear</span>
        <div className="collapse navbar-collapse position-absolute end-0" id="navbarSupportedContent">
          <form className="d-flex">
            <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search"></input>
          </form>
        </div>
      </div>
    </nav >
  );
};

export default NavBar;