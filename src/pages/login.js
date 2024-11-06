import React from 'react';

const Login = () =>{
    return(
        <form>
            <label>
                Username:
                <input type="text" name="username" />
            </label>
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <input type="submit" value="Submit" />
            <p>Don't have an account? Sign Up</p>
            <p>Forgot Password?</p>
        </form>
    )
}
export default Login;