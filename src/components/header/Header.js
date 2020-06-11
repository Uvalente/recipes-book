import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'
import { UserContext } from '../../providers/UserProvider'

const Header = () => {
  const user = useContext(UserContext)

  const AuthHeader = (props) =>
    <Fragment>
      <div className='flex justify-center'>
        <h1 className='font-semibold text-white text-2xl tracking-tight'>
          {props.displayName} recipe book
        </h1>
      </div>
      <div className='pt-2 flex justify-evenly text-gray-400 font-semibold uppercase'>
        <Link to={'/'} className='hover:text-white'>Home</Link>
        <p className='hidden md:inline-block px-2 text-blue-600'>|</p>
        <Link to={'/recipes/new'} className='hover:text-white'>Add Recipe</Link>
        <p className='hidden md:inline-block px-2 text-blue-600'>|</p>
        <Link to={'/'} onClick={() => auth.signOut()} className='hover:text-white'>Sign Out</Link>
      </div>
    </Fragment>

  const NonAuthHeader = () =>
    <Fragment>
      <div className='flex justify-center'>
        <h1 className='font-semibold text-white text-2xl tracking-tight'>
          Stranger recipe book
        </h1>
      </div>
      <div className='pt-2 flex justify-evenly text-gray-400 font-semibold uppercase'>
        <Link to={'/'} className='hover:text-white'>Home</Link>
        <p className='hidden md:inline-block px-2 text-blue-600'>|</p>        <Link to={'/signup'} className='hover:text-white'>Register</Link>
        <p className='hidden md:inline-block px-2 text-blue-600'>|</p>
        <Link to={'/login'} className='hover:text-white'>Log In</Link>
      </div>
    </Fragment>

  return (
    <nav className='flex flex-col bg-blue-900 mx-auto py-5 md:flex-row md:justify-between md:px-12'>
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
