import { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () =>{

    const [name ,setName] = useState("");
    const [reg , setReg] = useState("");
    const [email,setEmail] = useState("");
    const [phoneno , setPhoneno] =useState("");
    const [password , setPassword] =useState("");

const handleSubmit = () =>
{
console.log("sign up");
}
    return(
        <div className="signup-container">
            <div className="signup-box">
                <h2>SignUp</h2>
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" onChange={(e) =>setName(e.target.value)}/><br/>
                <input type="text" placeholder="Register Number" onChange={(e) =>setReg(e.target.value)}/><br/>
                <input type="number" placeholder="Phone number" onChange={(e) =>setPhoneno(e.target.value)}/><br/>
                <input type="email" placeholder="Email id"  onChange={(e) =>setEmail(e.target.value)}/><br/>
                <input type="password" placeholder="Password" onChange={(e) =>setPassword(e.target.value)}/><br/>
                <button type="button">Register</button>
</form>
<p className="toggle-link">Already have a account ?
<span className="link"><Link to="/login">  Login</Link></span></p>
            </div>
        </div>
    )
}

export default SignUp;