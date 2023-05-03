import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import axios  from 'axios';

const Register = () => {
  const [uname, setUname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    const postData = {
        uname,
        email,
        password,
        cpassword,
    };
    axios.post('http://localhost:8080/auth',
    postData,
    );

}
  return (
    <div>

      <h1 style={{fontSize:"30px"}}>Register</h1>
      <form onSubmit={ saveUser }>
            <div className='field'>
                <label className='label'>Name</label>
                <input type='text' className='input'
                value={uname}
                onChange={(e) => setUname(e.target.value)}
                placeholder='uname' required/>
                 
                </div>
            <div className='field'>
                <label className='label'>Email</label>
                <input type='email' className='input'
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                placeholder='email' required/>
                </div>
            <div className='field'>
                <label className='label'>Password</label>
                <input type='password' className='input'
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                placeholder='Password' required/>
                </div>
            <div className='field'>
                <label className='label'>Confirm Password</label>
                <input type='password' className='input'
                   value={cpassword}
                   onChange={(e) => setCpassword(e.target.value)}
                placeholder='Confirm Password' required/>
                </div>
            <div className='field'>
            <Link to={'/'} className='button is-danger'>Back</Link>
                <button className='button is-primary' style={{marginLeft: "20px"}}>Sign Up</button>
                </div>
        </form>
    </div>
    
  )
}

export default Register