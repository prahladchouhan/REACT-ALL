
import { useState } from 'react';
import Create from './Components/Create';
import Render from './Components/Render';

function App() {
  const [username,setUsername]=useState([
    {name:'john',age:19},
    {name:'ankur',age:32},
    {name:'rohan',age:19}
  ]);

  return (
    <div>
      
      <Create/>
      <hr/>
      <Render username={username} setUsername={setUsername}></Render>
      
    </div>
  )
}

export default App;
