import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <div className="container">
        <Link to="/">
          <Navbar.Brand>Todo</Navbar.Brand>
        </Link>

        <Link to="/cart">
          <Navbar.Brand className="float-right">Cart</Navbar.Brand>
        </Link>
      </div>
    </Navbar>
  )
}

export default Header
