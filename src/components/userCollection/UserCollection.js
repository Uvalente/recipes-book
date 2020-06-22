import React, { useState, useEffect } from 'react'
import { db } from '../../firebase'
import Loader from '../loader/Loader'
import UserCard from '../userCard/UserCard'

const UserCollection = () => {
  const [userList, setUserList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      let userRef = db.collection('users')
      await userRef.orderBy('displayName').get()
        .then(snapshot => {
          const users = []
          snapshot.forEach(user => {
            users.push({ id: user.id, displayName: user.data().displayName })
          })
          setUserList(users)
          setIsLoading(false)
        })
        .catch(err => {
          console.log('Error getting users', err)
        })
    }

    fetchData()
  }, [])

  const userComponents = userList.map(user =>
    <UserCard
      key={user.id}
      id={user.id}
      displayName={user.displayName}
    />
  )

  return (
    <div className='flex flex-1 flex-wrap p-6'>
      {isLoading ?
        <Loader />
        :
        userComponents}
    </div>
  )
}

export default UserCollection