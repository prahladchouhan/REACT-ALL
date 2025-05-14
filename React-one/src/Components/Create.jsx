import {useState} from 'react'

const Create = (props) => {
    const[fullname,setfullname]=useState('john');
  const [age ,setage]=useState(18);

  const submitHandler=(e)=>{
    e.preventDefault();
    const newuser={fullname,   age: parseInt(age)};
    console.log(newuser);
  };

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
      type='Number'
      placeholder='fullName' />
      <button>submit</button>
      </form>
    </div>
  )
}

export default Create
