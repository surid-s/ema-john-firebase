import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className='login-item'>
            <div>
                <h2>Please Login</h2>
                <form onSubmit="" action="">
                    <input type="email" name="Email" id="" placeholder='Your Email' />
                    <br />
                    <input type="password" name="Password" id="" placeholder='Your Password' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <small>New to Ema-John? <Link to="/register">Create Account.</Link></small>

                <div>--------or-----------</div>
                <button onClick={signInUsingGoogle} className="btn-regular">
                    Sign In with Google
                </button>
            </div>
        </div>
    );
};

export default Login;