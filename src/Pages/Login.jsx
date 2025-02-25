import React from 'react';
import { useState } from 'react';
import { Link ,Navigate, useNavigate} from 'react-router-dom';

function Login()
{

    const navigate = useNavigate();
    // const [isLogin , setIsLogin] = useState("true");
    // const toggleform = () =>{
    //     setIsLogin(!isLogin);
    // }

//     const handleLogin =() =>
// {
// console.log("logged In");
// }    
return(
        <>
            <div className="login-container">
            <div className='login-box'>
            <h2>Login</h2>
            <form>
                <label>Register Number </label><br/>
                <input type="text" placeholder="Register Number"/><br/>
                <label>Password</label><br/>
                <input type="password" placeholder="password"/><br/>
                <button type="button" className="submit-btn" onClick={ () => navigate("/home")}>Login</button>
               <p className='toggle-link'>Don't have a account? <span className='link'><Link to="/signup">Register </Link></span></p>
            </form>
            </div>
            </div>
        </>
    )
}

export default Login;