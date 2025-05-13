
import { use } from 'react';
import { useState } from 'react';

function App() {
  const [username,setUsername]=useState([
    {name:'john',age:19},
    {name:'ankur',age:32},
    {name:'rohan',age:19}
  ]);
  const[fullname,setfullname]=useState('');
  const [age ,setage]=useState(18);

  const submitHandler=(e)=>{
    e.preventDefault();
    const newuser={fullname,age};
    console.log(newuser);
  };

  const renderuser=username.map((user,index)=>{
    return <li key={index}>{user.name}</li>
  });

  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={submitHandler}>
    <input onChange={(e)=>setfullname(e.target.value)}
    value={fullname}
      type='text'
      placeholder='Fullname'/>
      <input onChange={(e)=>setage(e.target.value)}
      value={age}
      type='number'
      placeholder='fullName' />
      <button>submit</button>

      <h1>User Data</h1>
      <ol>{renderuser}</ol>
      </form>
    </div>
  )
}

export default App;
