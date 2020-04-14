import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
      <nav>
        <h1>Your recipe book</h1>
        <div>
          <Link to={'/'}>Home</Link>
          <Link to={'/recipes/new'}>Add Recipe</Link>
          <Link to={'/signup'}>Register</Link>
          <Link to={'/login'}>Log In</Link>
        </div>
      </nav>
  )
}

export default Header
