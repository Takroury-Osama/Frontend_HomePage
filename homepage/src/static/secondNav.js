import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function SecondNav() {
  return (
    <section className="section-content bg-white">
  <nav className="navbar navbar-expand-lg navbar-light bg-white">

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">Browse Category</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">What's New</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Trending</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">For You</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search GarbOne" aria-label="Search "/>
    </form>
  </div>
</nav>
</section>
  );
}

export default SecondNav;
