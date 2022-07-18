import React from 'react';
import { Link } from 'react-router-dom';

import './Register.css';

const Register = () => {
    return (
        <div className='register-form'>
            <div>
                <h2>Please Register</h2>
                <form action="">
                    <input type="email" name="Email" id="" placeholder='Your Email' />
                    <br />
                    <input type="password" name="Password" id="" placeholder='Your Password' />
                    <br />
                    <input type="password" name="Password" id="" placeholder='Re-enter your Password' />
                    <br /> <br />
                    <input className='btn-regular' type="submit" value="Submit" />

                </form>
                <p>Already have an account? <Link to="/login">Please Login</Link></p>
            </div>
        </div>
    );
};

export default Register;