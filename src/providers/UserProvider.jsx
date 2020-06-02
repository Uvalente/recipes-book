import React, { createContext, useState, useEffect } from 'react'
import { auth, getUserDocument } from '../firebase'

export const UserContext = createContext(null)

const UserProvider = (props) => {
  const [user, setUser] = useState()

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      const user = await getUserDocument(userAuth)
      setUser(user)
    })
  }, [])

  return (
    <UserContext.Provider value={user}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider
