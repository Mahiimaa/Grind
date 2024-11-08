import  React from 'react';

const Signup = () =>{
    return(
        <div>
            <h2>Sign Up Form</h2>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <br />
                <input type="submit" value="Submit" />
                <p>Already have an account? Login</p>
            </form>
        </div>
    );
};
export default Signup;
