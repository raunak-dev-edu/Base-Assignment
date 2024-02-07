import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./loginbox.css";
import Googlesignin from "./googlelogin";

const Loginbox = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email) && validatePassword(password)) {
      navigate("/home");
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email');
    }
    else if (!validatePassword(password)) {
      alert('Password should be at least 8 characters long');
    }
    else {
      alert('Please enter valid email and password');
    }
  }

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  const validatePassword = (password) => {
    return password.length >= 8;
  }

  const handleGoogleSignIn = () => {
    navigate("/home");
  }

  return (
    <div>
      <form className="from" onSubmit={handleFormSubmit}>
        <div className=' font-bold text-4xl m-2'>
          Sign In
        </div>
        <div className=" mb-4 ml-2">
          sign in to your account.
        </div>
        <div className="btn-group gap-x-2">
          <Googlesignin onGoogleSignIn={handleGoogleSignIn} />
          <button className="btn">
            <img
              className="logox ml-2"
              src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/59c1561b-8152-4d05-b617-0680a7629a0e"
              alt=""
            />
            <span className="ml-4">Sign in with Apple</span>
          </button>
        </div>
        <div className="frombox">
          <label htmlFor="email">Email</label>
          <input
            className=" logoinput border-0 bg-gray-100 p-2 w-full rounded-md flex"
            type="text"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            className=" logoinput border-0 bg-gray-100 p-2 w-full rounded-md"
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <a href="#">Forgot password?</a>
          <button type="submit" className="login-btn">
            Sign In
          </button>
        </div>
        <div className="links">
          Do not have an account.
          <div><a className=" cursor-pointer font-medium ml-2" href="/">Register Here</a></div>
        </div>
      </form>
    </div>
  );
};

export default Loginbox;
