import React from 'react';

const Login = () =>{
    const handleChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(`${apiBaseUrl}/api/login`, user, {
            withCredentials: true,
          });
          dispatch(setUserInfo(response.data.userData));
    
          localStorage.setItem("userInfo", JSON.stringify(response.data.userData));
    
          localStorage.setItem("isLoggedIn", "true");
    
          if (
            response.data.userData.user_role === "admin" ||
            response.data.userData.user_role === "superadmin"
          ) {
            navigate("/homeAdmin");
          } else if (response.data.userData.user_role === "departmenthead") {
            navigate("/userHome");
          } else {
            navigate("/login");
          }
        } catch (error) {
          if (error.response && error.response.data && error.response.data.error) {
            setError(error.response.data.error);
          } else {
            setError("An unexpected error occurred");
          }
        }
      };
    return(
        <div className= 'bg-red-200 w-full h-[100vh] flex justify-center items-center '>
        <form className='flex flex-col gap-4'>
            <div className='font-extrabold text-4xl text-blue-700 font-serif'> LOG IN </div>
            <div className=''>
            <label className=' font-sans font-semibold text-xl'>
                Username:
                <input className="bg-slate-400 p-2 rounded-md w-64" type="text" name="username" />
            </label>
            </div> 
            <label className=' font-sans font-semibold text-xl'>
                Password: 
                <input className="bg-slate-400 p-2 rounded-md w-64" type="password" name="password" />
            </label>
            <input type="submit" value="Submit" />
            <p>Don't have an account? Sign Up</p>
            <p>Forgot Password?</p>
        </form>
        </div>
    )
}
export default Login;