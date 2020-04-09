import React, { createContext, useState, componentDidMount } from 'react'
import { auth } from '../firebase'

export const UserContext = createContext({ user: null })

const UserProvider = (props) => {
  const [user, setUser] = useState({ user: null })

  componentDidMount(
    auth.onAuthStateChanged(userAuth => {
      setUser({user: userAuth})
    })
  )

  return (
    <UserContext.Provider value={user}>
      {props.children}
    </UserContext.Provider>
  )

}

export default UserProvider
