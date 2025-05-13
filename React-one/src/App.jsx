
import { useState } from 'react';

function App() {
  const [username,setUsername]=useState("prahlad");

  const ChangeHandler =() =>{
    setUsername("prahlad chouhan");
  }
   console.log(username);

  return (
    <div>
      <h1>UserName</h1>
      <h2>{username}</h2>
      <button onClick={ChangeHandler}>change name</button>
    </div>
  )
}

export default App;
