import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    if (user) {
        navigate('/home')
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='register-form'>
            <h2 className='register-form-head text-primary'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder='Enter Name' />
                <input type="email" name="email" id="" placeholder='Enter Your Email Address' required />
                <input type="password" name="password" id="" placeholder='Enter Password' required />
                <input className='btn btn-primary w-50 mx-auto' type="submit" value="Register" />
            </form>
            <p>Already Have An Account? <Link to='/login' onClick={navigateLogin} className='text-danger text-decoration-none' > Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;