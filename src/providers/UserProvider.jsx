import React, { createContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

export const UserContext = createContext({ user: null })

const UserProvider = (props) => {
  const [user, setUser] = useState({ user: null })

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      setUser({ user: userAuth })
    })
    console.log(user)
  }, [])

  return (
    <UserContext.Provider value={user}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider
