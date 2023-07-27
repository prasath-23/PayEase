import React from 'react';
import './Login.css';
import { robot } from '../assets';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../components/action';
import { caseSuccess } from '../components/userSlice';

function Log() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,email,password)

    try {
      axios.post("http://127.0.0.1:8181/api/v1/auth/authenticate", {
        name: name,
        email: email,
        password: password
      })
      .then((response) => {
        console.log(response);
        dispatch(caseSuccess({
          name: name,
          email: email,
          password: password
        }));
        nav("/home");
      })
      
      
      
    }
    catch (error) {
      console.error(error)
    }

  }

  return (
    <div>
    <div className="LoginPageContainer">
      <div className="LoginPageInnerContainer">
        <div className="ImageContianer">
          <img src={robot} />
        </div>
        <div className="LoginFormContainer">
          <div className="LoginFormInnerContainer">
            <div className="LogoContainer">
            </div>
            <header className="header">Log in</header>
            <header className="subHeader">
              Welcome to <b>HooBank!</b> Please Enter your Details
            </header>

            <form>
              <div className="inputContainer">
                <label className="label">
                  <img src="https://i.imgur.com/Hn13wvm.png" className="labelIcon" alt="LabelIcon" />
                  <span>Your Name*</span>
                </label>
                <input
                  type="text"
                  className="input"
                  id="name"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="inputContainer">
                <label className="label" htmlFor="emailAddress">
                  <img src="https://i.imgur.com/Hn13wvm.png" className="labelIcon" alt="LabelIcon" />
                  <span>Email Address*</span>
                </label>
                <input
                  type="email"
                  className="input"
                  id="emailAddress"
                  placeholder="Enter your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="inputContainer">
                <label className="label" htmlFor="password">
                  <img src="https://i.imgur.com/g5SvdfG.png" className="labelIcon" alt="LabelIcon" />
                  <span>Password*</span>
                </label>
                <input
                  type="password"
                  className="input"
                  id="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="OptionsContainer">
                <div className="checkboxContainer">
                  <input type="checkbox" id="RememberMe" className="checkbox" />
                  <label htmlFor="RememberMe">Remember me</label>
                </div>
                <a href="#" className="ForgotPasswordLink">
                  Forgot Password?
                </a>
              </div>
              <button type="submit" className="LoginButton" onClick={handleSubmit} >
                Login
              </button>
              <div className='SignUp'>
                <p>Don't have an account?&nbsp;<Link to={'/signup'} style={{ color: '#4520ff', textDecoration: 'underline' }}>SignUp</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Log;