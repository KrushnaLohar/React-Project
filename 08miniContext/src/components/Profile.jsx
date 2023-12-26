// ab tum sikhoge how to get data from th user

import React from 'react'
import { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <div>Please Login</div>
  return (
    <div>Welcome {user.username}</div>
  )
}

export default Profile