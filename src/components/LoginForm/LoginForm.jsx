import React from 'react'
import { User } from '../../../data/data';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

const LoginForm = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()




  const handleLogin = () => {

    const user = User.find((u) => u.name === username && u.password === password);

    if (user) {

      setLoggedIn(true);
      return navigate('/products')

    } else {

      alert('Invalid credentials');
    }
  };



  return (
    <div className='loginform'>
      <div className='loginwrapper'>
      
          <div className=' imgwrapper  '>
            <img src="src/assets/electro1.png" alt="log_img"  />
          </div>

     

        <div className='formwrapper'>
          <form className='form '>
            <p className=' Poppins'>login</p>
            <div>
              <label htmlFor="email" className=" label  Poppins">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="input"
                placeholder="Enter your email here"
                onChange={(e) => setUsername(e.target.value)}

              />
            </div>
            <div className=''>
              <label htmlFor="password" className=" label Poppins">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="input"
                placeholder="Enter your password here"
                onChange={(e) => setPassword(e.target.value)}

              />
              <a href="/" className='a Poppins  float-end    '>Forgot Password?</a>
            </div>
            <button className='button Poppins' onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm