import React from "react";
import MyUser from './MyUser.js'


const UserList = (props) => {
  const allusers = props.users.map(user => {
    return <MyUser key={user.id} user={user}/>
  })
  return(
    <div>
    <h2>Current Users</h2>
    <ul>{allusers}</ul>
    </div>
  )
}

export default UserList
