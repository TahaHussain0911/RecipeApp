import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
<nav class="navbar">
  <div class="container-fluid">
    <Link  to="/">
      {/* <img src="https://tse2.mm.bing.net/th?id=OIP.5ExXcZbSlesWbXRVB49cqQHaHa&pid=Api&P=0" alt="Logo" width="100px" height="60px" class="d-inline-block align-text-top"/> */}
            What to Cook Today?
    </Link>
            <img src="https://tse2.mm.bing.net/th?id=OIP.5ExXcZbSlesWbXRVB49cqQHaHa&pid=Api&P=0" alt="" />
  </div>
</nav>  )
}

export default Navbar