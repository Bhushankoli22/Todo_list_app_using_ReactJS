import React, { useState } from 'react'
import "../login/login.css"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const [userEmail, setUseremail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const validateForm = () => {
        if (!userEmail || !password) {
            setError('Username and password are required');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) return;
        setLoading(true);

        const formDetails = new URLSearchParams();
        formDetails.append('username', userEmail);
        formDetails.append('password', password);

        try {
            const response = await fetch('http://localhost:8000/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formDetails,
            });

            setLoading(false);

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.access_token);
                navigate('/protected');
            } else {
                const errorData = await response.json();
                setError(errorData.detail || 'Authentication failed!');
            }
        } catch (error) {
            setLoading(false);
            setError('An error occurred. Please try again later.');
        }
    };


    return (
        <div className="addUser">
            <h3>Sign In</h3>
            <form className="addUserForm" onSubmit={handleSubmit}>
                <div className="inputGroup">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        id="email"
                        autocomplete="off"
                        value={userEmail}
                        placeholder="Enter your email"
                        onChange={(e) => setUseremail(e.target.value)}
                    />
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        autocomplete="off"
                        value={password}
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" class="btn btn-primary" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
            <div className='login'>
                <p>Don't have account ? </p>
                <Link to="/Signup" type="submit" class="btn btn-success">
                    Sign up
                </Link>

            </div>
        </div>
    )
}

export default Login
