import React, { useState } from 'react'
import "./Addcontact.css"

function AddContact (addcontact) {
 
    const[contactdata,setcontactdata]= useState({name:"",email:""})

    const handlechange=(e)=>{
      if(e.target.name === "name"){
        setcontactdata({...contactdata, name: e.target.value})
      }else{
        setcontactdata({...contactdata, email: e.target.value})
      }
    }

    const handleadd=()=>{
        if(contactdata.name === "" || contactdata.email === "" ){
            alert("All fildes are mandatory")
            return
        }
        addcontact(contactdata)
    }
  return (
    <div>
      <h2 style={{paddingLeft : "25px"}}>Add Contact</h2>
      <form className='form'>
        <label className='name'>Name</label>
        <input className='input' type="text" placeholder='Enter Your Name' name='name' value={contactdata.name} onChange={handlechange}/>
        <label className='name'>Email</label>
        <input className='input' type="email" placeholder='Enter Your Email' name='email' value={contactdata.email} onChange={handlechange}/>
      </form>
      <div className="btn1">
      <button className='btn'onClick={handleadd}>Add Contact</button>
      </div>
    </div>
  )
}

export default AddContact
