import React from "react";

const Forgot = () =>{
    return(
        <div>
            <h2>Forgot Password</h2>
            <form>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
           {/* OTP Section */}
            <h3>Enter OTP sent to your registered email address</h3>
            <input type="text" placeholder="otp"/>

        </div>

    );
}
export default Forgot;