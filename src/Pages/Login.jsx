function Login()
{
    return(
        <>
            <div className="login-page">
            <form>
            <label>Email id: </label><br/>
                <input type="email" placeholder="email"/><br/>
                <label>Password</label><br/>
                <input type="password" placeholder="password"/><br/>
                <button type="button">Login</button>
            </form>
            </div>
        </>
    )
}

export default Login;