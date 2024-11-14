import React from "react";

const Forgot = () =>{
    return(
        <div className= 'bg-red-200 w-full h-[100vh] flex justify-center items-center '>
            <h2  className='font-extrabold text-4xl text-blue-700 font-serif' >Forgot Password</h2>
            <form>
                <label className=' font-sans font-semibold text-xl' >
                    Email:
                    <input type="email" name="email" />
                </label >
                <br />
                <input className="bg-slate-400 p-2 rounded-md w-64" type="submit" value="Submit" />
            </form>
           {/* OTP Section */}
            <h3>Enter OTP sent to your registered email address</h3>
            <input type="text" placeholder="otp"/>

        </div>

    );
}
export default Forgot;