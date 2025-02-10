import React from 'react';
import { useState } from 'react';
function Login()
{

    const [isLogin , setIsLogin] = useState("false");
    return(
        <>
            <div className="login-page">
            <h3>{isLogin? 'Login': 'Register'}</h3>
            <form>
            <label>Register Number </label><br/>
                <input type="text" placeholder="Register Number"/><br/>
                <label>Password</label><br/>
                <input type="password" placeholder="password"/><br/>
                <button type="button" className="submit-btn">Login</button>
               <p>{isLogin ? `Don't have a account? Register`:`Already Registered , Login`} </p>
            </form>
            </div>
        </>
    )
}

export default Login;