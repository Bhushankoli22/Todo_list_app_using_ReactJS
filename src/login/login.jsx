import React from 'react'
import "../login/login.css"
import { Link } from "react-router-dom"


const Login = () => {
    return (
        <div className="addUser">
            <h3>Sign In</h3>
            <form className="addUserForm">
                <div className="inputGroup">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        id="email"
                        autocomplete="off"
                        placeholder="Enter your email"
                    />
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        autocomplete="off"
                        placeholder="Enter your password"
                    />
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
            </form>
            <div className='login'>
                <p>Don't have account ? </p>
                <Link to="/" type="submit" class="btn btn-success">
                    Sign up
                </Link>

            </div>
        </div>
    )
}

export default Login
