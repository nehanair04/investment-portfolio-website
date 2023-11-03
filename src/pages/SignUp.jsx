import React from 'react';
import {useState} from "react"
import axios from 'axios'
import { Link } from 'react-router-dom';

const SignUpPage = () => {
   
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '100px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    marginBottom: '20px',
  };

  const inputStyle = {
    padding: '8px',
    marginTop: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  const loginTextStyle = {
    marginTop: '20px',
    marginBottom: '10px',
    fontSize: '14px',
  };

  const loginButtonStyle = {
    padding: '8px 15px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const[name, setName]=useState()
  const[email, setEmail]=useState()
  const[password, setPassword]=useState()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/Signup',{name, email,password})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
  }

  return (
    <div style={containerStyle}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" style={inputStyle} required 
            onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" style={inputStyle} required
           onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" style={inputStyle} required 
          onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type="submit" style={buttonStyle}>Sign Up</button>
      </form>
      <p style={loginTextStyle}>Already have an account?</p>
      <Link to="/pages/Login">
        <button style={loginButtonStyle}>Login</button>
      </Link>
    </div>
  );
};

export default SignUpPage;