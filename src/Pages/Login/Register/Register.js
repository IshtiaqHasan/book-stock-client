import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.name.value;
        const password = event.target.password.value;
    }
    return (
        <div className='register-form'>
            <h2 className='register-form-head text-primary'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder='Enter Name' />
                <input type="email" name="email" id="" placeholder='Enter Your Email Address' required />
                <input type="password" name="password" id="" placeholder='Enter Password' required />
                <input className='submit-button' type="submit" value="Register" />
            </form>
            <p>Already Have An Account? <Link to='/login' onClick={navigateLogin} className='text-danger text-decoration-none' > Please Login</Link></p>
        </div>
    );
};

export default Register;