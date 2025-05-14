import React from 'react'

const Render = (props) => {
    const user=props.username;
    const renderuser=user.map((user,index)=>{
    return <li key={index}>{user.name}</li>
  });
  return (
    <div>
      <h1>User Data</h1>
      <ol>{renderuser}</ol>
    </div>
  )
}

export default Render;
