import React from 'react';
import { Link } from 'react-router-dom';
const LoginPage = () => {
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
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  const signUpTextStyle = {
    marginTop: '20px',
    marginBottom: '10px',
    fontSize: '14px',
  };

  const signUpButtonStyle = {
    padding: '8px 15px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h2>Login</h2>
      <form style={formStyle}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" style={inputStyle} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" style={inputStyle} required />
        </div>
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
      <p style={signUpTextStyle}>Don't have an account?</p>
      <Link to="/pages/SignUp">
        <button style={signUpButtonStyle}>Sign Up</button>
      </Link>
    </div>
  );
};
export default LoginPage;
