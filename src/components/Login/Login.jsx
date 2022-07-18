import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div>
                <h2>Please Login</h2>
                <form onSubmit="" action="">
                    <input type="email" name="Email" id="" placeholder='Your Email' />
                    <input type="password" name="Password" id="" placeholder='Your Password' />
                    <input type="submit" value="Submit" />
                </form>
                <small>New to Ema-John? <Link to="/register">Create Account.</Link></small>

                <div>--------or-----------</div>
                <button className="btn-regular">
                    Sign In with Google
                </button>
            </div>
        </div>
    );
};

export default Login;