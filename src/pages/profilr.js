import React from 'react';

const Profile = () =>{
    const [user, setUser] = useState({
        name: '',
        email: '',
        age: 0
    });
    
    const handleInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Update user profile with the new data
    }
    
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} placeholder="Name" />
            <input type="email" name="email" value={user.email} onChange={handleInputChange} placeholder="Email" />

            <input type="number" name="age" value={user.age} onChange={handleInputChange} placeholder="Age" />
            <button type="submit">Update Profile</button>
        </form>
    )
}
export default Profile;