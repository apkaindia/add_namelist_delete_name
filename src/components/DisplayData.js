import { Delete } from '@mui/icons-material';
import React from 'react'

export default function DisplayData({contact,deletRow}) {


 const list=contact.map((item)=>{
 
    return (
    <>
      <tr style={{ border: "solid 2px red" }}>
        <td style={{ border: "solid 2px red" }}>{item.data.fname}</td>
        <td style={{ border: "solid 2px red" }}>{item.data.lname}</td>
        <span onClick={()=>deletRow(item.id)}><Delete/></span>
      </tr>
    </>
  );
 });
  return (
    <div style={{display:'flex', marginLeft:'500px'}}>
      <br/>
      <table style={{border:"solid 2px red" }}>
        
        <tr style={{border:"solid 2px red"}}>
          <th style={{border:"solid 2px red"}}> First Name </th>
          <th style={{border:"solid 2px red"}}> Last Name </th>
        </tr>
        {list}
      </table>
 
      
    </div>
  )
}

