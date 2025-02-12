import React from 'react';
import { useState } from 'react';

function Login()
{

    const [isLogin , setIsLogin] = useState("true");
    const toggleform = () =>{
        setIsLogin(!isLogin);
    }

    return(
        <>
            <div className="login-container">
            <div className='login-box'>
            <h2>{isLogin? 'Login': 'Register'}</h2>
            <form>
            {!isLogin && (
                <>
                <label>Name </label><br/>
                <input type="text" placeholder="Name"/><br/>
                <label>Phone Number</label><br/>
                <input type="number" placeholder="Phone Number"/><br/>
                </>
            )}
                <label>Register Number </label><br/>
                <input type="text" placeholder="Register Number"/><br/>
                <label>Password</label><br/>
                <input type="password" placeholder="password"/><br/>
                <button type="button" className="submit-btn">{isLogin?'Login': 'Register'}</button>
               <p onClick={toggleform} className='toggle-link'>{isLogin ? `Don't have a account? Register`:`Already Registered? Login`} </p>
            </form>
            </div>
            </div>
        </>
    )
}

export default Login;