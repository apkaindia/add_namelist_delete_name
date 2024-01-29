import React, { useState } from 'react'

export default function Form({adddata}) {

    const [person,setPerson]=useState({fname:'',lname:''});

    const handlechange=(e)=>{
        setPerson({...person,[e.target.name]:e.target.value})
    }

    const handlesubmit=(e)=>{
     
      if(person.fname===''|| person.lname===''){
        alert("Please fill all details");
      }
      e.preventDefault();
      adddata(person);
      setPerson({fname:'',lname:''})
        
    }

  return (
    <div>
        <input type='text' name='fname'value={person.fname} onChange={handlechange}placeholder='first name'/>
        <input type='text' name='lname'value={person.lname} onChange={handlechange}placeholder='last name'/>
        <button onClick={handlesubmit}>Submit</button>
     

    </div>
  )
}