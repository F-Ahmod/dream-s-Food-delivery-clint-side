import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import './HelpMore.css'

const HeplMore = () => {
    return (
        <div>
            <div >
            <nav id="hephNav"  class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-center " id="navbarNa">
      <ul class="navbar-nav fw-bold fs-3">
        <li class="nav-item ">
          <Link class="nav-link active text-light" aria-current="page" to="about">About us  ||</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/privacy">Privacy & Policy ||</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/contact">Contact With Us</Link>
        </li> 
        
      </ul>
    </div>
  </div>
</nav>
            </div>

<About></About>
        </div>
    );
};

export default HeplMore;