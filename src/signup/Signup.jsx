import React from 'react'
import "../signup/Signup.css"
import { Link } from "react-router-dom"


const Signup = () => {
    return (
        <div className="addUser">
            <h3>Sign Up</h3>
            <form className="addUserForm">
                <div className="inputGroup">
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        id="name"
                        autocomplete="off"
                        placeholder="Enter your name"
                    />
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

                    <button type="submit" class="btn btn-success">Sign Up</button>

                </div> 
            </form>
            <div className='login'>
                <p>Already have an account ? </p>
                <Link to="/login" type="submit" class="btn btn-primary">
                Login
                </Link>
            </div>
        </div>
    );
};

export default Signup
