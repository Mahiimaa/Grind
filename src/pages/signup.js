import  React from 'react';

const Signup = () =>{
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  const [user, setUser] = useState({
    user_name: "",
    user_email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser((prev) => {
      const updatedUser = { ...prev, [e.target.name]: e.target.value };
      return updatedUser;
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${apiBaseUrl}/api/signup`, user);
      navigate("/");
    } catch (error) {
      setError(error.response.data.error);
    }
  };
    return(
        <div className= 'bg-red-200 w-full h-[100vh] flex justify-center items-center '>
            <h2 className='font-extrabold text-4xl text-blue-700 font-serif'>Sign Up Form</h2>
            <form>
                <label className=' font-sans font-semibold text-xl'>
                    Username:
                    <input className="bg-slate-400 p-2 rounded-md w-64" type="text" name="username" />
                </label>
                <br />
                <label className=' font-sans font-semibold text-xl'>
                    Password:
                    <input className="bg-slate-400 p-2 rounded-md w-64" type="password" name="password" />
                </label>
                <br />
                <input type="submit" value="Submit" />
                <p>Already have an account? Login</p>
            </form>
        </div>
    );
};
export default Signup;
