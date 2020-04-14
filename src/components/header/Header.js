import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'
import { UserContext } from '../../providers/UserProvider'
import './Header.css'

const Header = () => {
  return (
    <nav>
      <h1>Your recipe book</h1>
      <UserContext.Consumer>
        {
          currentUser =>
            currentUser.user
              ?
              <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/recipes/new'}>Add Recipe</Link>
                <Link to={'/'} onClick={() => auth.signOut()}>Sign Out</Link>
              </div>
              :
              <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/signup'}>Register</Link>
                <Link to={'/login'}>Log In</Link>
              </div>
        }
      </UserContext.Consumer>
    </nav>
  )
}

export default Header
