import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
  const [currState,setcurrState] = useState("Login")
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" /> 
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"?<></>: <input type="text" placeholder='Your Name' required />}
          <input type='email' placeholder='Your email' required/>
          <input type='password' placeholder='Your password ' required       />
        </div>
        <button>{currState==="Sign Up"?"Create account":"login"}</button>
        <div className="login-popup-condition">
          <input type='checkbox' required/>
          <p>By contunuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="login"
        ?<p>create a new account? <span onClick={()=>setcurrState("Sign Up")}>Click Here </span></p> :
        <p>Already have an account? <span onClick={()=> setcurrState("login")}>Login here</span></p>
        }
         
        </form>
        
    </div>
  )
}

export default LoginPopup
