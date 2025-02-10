import React from 'react';
import { useState } from 'react';
function Login()
{

    const [isLogin , setIsLogin] = useState("true");
    return(
        <>
            <div className="login-page">
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
               <p>{isLogin ? `Don't have a account? Register`:`Already Registered , Login`} </p>
            </form>
            </div>
        </>
    )
}

export default Login;