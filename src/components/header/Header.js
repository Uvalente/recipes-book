import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'
import './Header.css'

const Header = () => {
  const doSignOut = ()=> auth.signOut()
  const SignoutButton = () => <button onClick={doSignOut}>Sign Out</button>

  return (
    <nav>
      <h1>Your recipe book</h1>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/recipes/new'}>Add Recipe</Link>
        <Link to={'/signup'}>Register</Link>
        <Link to={'/login'}>Log In</Link>
        <SignoutButton />
      </div>
    </nav>
  )
}

export default Header
