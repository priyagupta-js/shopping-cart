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
                <label>Register Number </label><br/>
                <input type="text" placeholder="Register Number"/><br/>
                <label>Password</label><br/>
                <input type="password" placeholder="password"/><br/>
                <button type="button" className="submit-btn">Login</button>
               <p>Don't have a account?</p><Link to="/signup">Register </Link>
            </form>
            </div>
            </div>
        </>
    )
}

export default Login;