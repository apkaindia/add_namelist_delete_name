import { useState } from "react";
import uuid4 from 'uuid4';

import DisplayData from "./components/DisplayData";
import Form from "./components/Form";

function App() {
const [contact,setContact]=useState([]);

  const adddata=(data)=>{
        setContact([...contact,{id:uuid4(),data}])
        }
  const deletRow=(id)=>{
    const updatedList=contact.filter((item)=>{return item.id!==id})
    setContact(updatedList);
    }
    
  
  return (
    <div>
      <Form adddata={adddata} />
      <DisplayData contact={contact} deletRow={deletRow}/>
    </div>
  );
}

export default App;
