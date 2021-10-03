import './register.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try{
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            })
            res.data && window.location.replace("/login")
        } catch(err) {
            if(err.response.status === 409) {
                setError('Username already in use!')
            } else {
                setError('Something went wrong!')
            }
            console.log(err);
        }
        
    }
    return (
        <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
                type="text" 
                className="registerInput" 
                placeholder="Enter your username..." 
                onChange={e=>setUsername(e.target.value)}
                />
            <label>Email</label>
            <input 
                type="email" 
                className="registerInput" 
                placeholder="Enter your email..." 
                onChange={e=>setEmail(e.target.value)}
                />
            <label>Password</label>
            <input 
                type="password" 
                className="registerInput" 
                placeholder="Enter your password..." 
                onChange={e=>setPassword(e.target.value)}
                />
            <button className="registerButton" type="submit">Register</button>
        </form>
        <button className="registerLoginButton">
            <Link className="link" to="/login">Login</Link>
        </button>
        {error && <span className="error">{error}</span> }
    </div>
    )
}
