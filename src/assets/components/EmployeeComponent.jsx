import React, { useState } from 'react'


const EmployeeComponent = () => {

      const [username,setUserName]=useState(' ');
      const [lastname,setLastName]=useState(' ');
      const [email,setEmail]=useState(' ');

      function handleUsername(e){
             setUserName(e.target.value);
      }

      function handleLastname(e){
        setLastName(e.target.value);
      }

      function handleEmail(e){
        setEmail(e.target.value);
      }

  return (
    <div  >
        <h1 className='container'>
           <div className='row'>
           <div className="card">
            <h2 className='text-center'>Add Employee</h2>
  <div className="card-body">
   <form action="">
    <div className='form-group mb-2'>
        <label htmlFor="" className='form-label'> Username </label>
        <input type="text" placeholder='Enter Employee Username' name='username' value={username} className='form-control' 
        onChange={handleUsername} ></input>
    </div>

    <div className='form-group mb-2'>
        <label htmlFor="" className='form-label'> Lastname </label>
        <input type="text" placeholder='Enter Employee Lastname' name='lastname' value={lastname} className='form-control' 
        onChange={handleLastname} ></input>
    </div>


    <div className='form-group mb-2'>
        <label htmlFor="" className='form-label'> Email </label>
        <input type="text" placeholder='Enter Employee Email' name='email' value={email} className='form-control' 
        onChange={handleEmail} ></input>
    </div>
     <button className='btn btn-success'>Submit</button>
   </form>
  </div>
</div>
           </div>
        </h1>
    </div>
  )
}

export default EmployeeComponent