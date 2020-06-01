import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'
import { UserContext } from '../../providers/UserProvider'
import './Header.css'

const Header = () => {
  const user = useContext(UserContext)

  const AuthHeader = (props) =>
    <Fragment>
      <h1>{props.displayName} recipe book</h1>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/recipes/new'}>Add Recipe</Link>
        <Link to={'/'} onClick={() => auth.signOut()}>Sign Out</Link>
      </div>
    </Fragment>

  const NonAuthHeader = () =>
    <Fragment>
      <h1>Stranger recipe book</h1>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/signup'}>Register</Link>
        <Link to={'/login'}>Log In</Link>
      </div>
    </Fragment>

  return (
    <nav>
        {
            user
              ?
              <AuthHeader {...user} />
              :
              <NonAuthHeader />
        }
    </nav>
  )
}

export default Header
