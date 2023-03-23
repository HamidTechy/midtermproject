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
          <Link to="/authors" class="nav-link active" aria-current="page" >Authors</Link>
        </li>
        <li class="nav-item">
          <Link to="/category" class="nav-link active" aria-current="page" >Category</Link>
        </li>
        
        
      </ul>
      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
        
        <li class="nav-item ">
          <Link to="/signin" class="nav-link active" aria-current="page" >Signin</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
