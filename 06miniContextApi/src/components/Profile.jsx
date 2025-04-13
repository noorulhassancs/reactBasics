import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
  if(!user) return <div>Please Login!</div>

  if(user.username === user.password) 
    return <div>Welcome {user.username}</div>

  return <div>Username {user.username} & Password {user.password} doesn't match! </div>
}

export default Profile
