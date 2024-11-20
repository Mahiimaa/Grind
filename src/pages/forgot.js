import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/forgorPassword.css";
import { IoChevronBackOutline } from "react-icons/io5";
import axios from "axios";
const Forgot = () =>{
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const navigate = useNavigate();
    
      const handleChange = (index, event) => {
        const { value } = event.target;
        if (/^\d?$/.test(value)) {
          const otpArray = otp.split("");
          otpArray[index] = value;
          setOtp(otpArray.join(""));
    
          if (value && index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
          }
        }
      };
    
      const handleEmailSubmit = async (e) => {
        e.preventDefault();
        try {
          setLoading(true);
          const response = await axios.post(
            `${apiBaseUrl}/api/requestOTP`,
            { email },
            { withCredentials: true }
          );
    
          setEmailFormVisiblity(false);
          setShowOtp(true);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
    
      const handleBack = () => {
        if (emailBoxVisiblity && !showOtp) {
          navigate("/");
        } else if (!emailBoxVisiblity && showOtp) {
          setEmailFormVisiblity(true);
          setShowOtp(false);
          setOtp(""); // Reset OTP state
          // Clear OTP input fields
          inputRefs.forEach((ref) => ref.current && (ref.current.value = ""));
        }
      };
    
      const handleOTPSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(
            `${apiBaseUrl}/api/submitOTP`,
            { otp, email },
            { withCredentials: true }
          );
    
          if (response.status === 200) {
            navigate("/reset", { state: { email } });
          }
        } catch (error) {
          console.log(error);
        }
      };
    
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