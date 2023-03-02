import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" class="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/account" class="nav-link active" aria-current="page" >Account</Link>
        </li>
        <li class="nav-item">
          <Link to="/post" class="nav-link active" aria-current="page" >Post</Link>
        </li>
        <li class="nav-item">
          <Link to="/message" class="nav-link active" aria-current="page" >Message</Link>
        </li>
        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
