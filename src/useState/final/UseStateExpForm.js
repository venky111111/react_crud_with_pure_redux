import React, { useState } from 'react';

export const UseStateExpForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const updateName = (e) => { setName(e.target.value); };
  const updateAge = (e) => { setAge(e.target.value); };
  const updatePass = (e) => { setPassword(e.target.value); };

  const updateData = (filed,e) => { 
    if (filed === "name"){
        setName(e.target.value);
    }
    if (filed === "age") { 
        setAge(e.target.value)
    }if (filed ==='password'){
        setPassword(e.target.value);
    }
}
  return (
    <>
      <form>
        <input placeholder='Enter Name' type='text' value={name} onChange={(e) => setName(e.target.value)} /><br />
        <input placeholder='Enter Age' type='text' value={age} onChange={(e) => setAge(e.target.value)} /><br />
        <input placeholder='Enter Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

export default UseStateExpForm;
