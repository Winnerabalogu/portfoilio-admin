"use client";
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import SimpleReactValidator from 'simple-react-validator';
import Link from 'next/link';

const SignUp = () => {
    const [forms, setForms] = useState({
        username: '',
        email: '',
        phone: '',
        password: ''
    });
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [SignUpError, setSignUpError] = useState('');

    const validator = useRef(new SimpleReactValidator({
        className: 'errorMessage'
    })).current;

    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value });
    };

    const submitHandler = async e => {
        e.preventDefault();

        if (validator.allValid()) {
            validator.hideMessages();
            setIsLoading(true);
            setSignUpError('');

            try {
                //  Replace authenticateUser with your actual authentication logic
                // const response = await authenticateUser(forms.username, forms.password);

                //Simulated success:
                const response = {success: true}

                if (response.success) {
                    // Handle successful login (e.g., redirect, store token)
                    console.log('Registration successful!');
                    router.push('/Login'); // Redirect to comment page
                } else {
                    // Handle SignUP failure
                    setSignUpError(response.message || 'Registration failed. Please check your credentials.');
                }
            } catch (error) {
                console.error('Error during login:', error);
                setSignUpError('An unexpected error occurred. Please try again later.');
            } finally {
                setIsLoading(false);
                setForms({
                    username: '',
                    email: '',
                    phone: '',
                    password: ''
                });
            }
        } else {
            validator.showMessages();
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Register</h2>
                <form method="post" className="contact-validation-active" onSubmit={submitHandler}>
                    {SignUpError && <div className="errorMessage">{SignUpError}</div>}

                    <div className="form-group">
                        <label htmlFor="username">Username*</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={forms.username}
                            onChange={changeHandler}
                            className="form-control"
                            placeholder="Your Username"
                            required
                        />
                        {validator.message('email', forms.email, 'required|alpha_num')}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">email*</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={forms.email}
                            onChange={changeHandler}
                            className="form-control"
                            placeholder="Your Email"
                            required
                        />
                        {validator.message('email', forms.email, 'required|alpha_num')}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phonenumber*</label>
                        <input
                            type="number"
                            id="number"
                            name="phone"
                            value={forms.phone}
                            onChange={changeHandler}
                            className="form-control"
                            placeholder="Your Phone Number"
                            required
                        />
                        {validator.message('phone', forms.phone, 'required|numeric')}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password*</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={forms.password}
                            onChange={changeHandler}
                            className="form-control"
                            placeholder="Your Password"
                            required
                        />
                        {validator.message('password', forms.password, 'required')}
                    </div>

                    <button type="submit" className="theme-btn" disabled={isLoading}>
                        {isLoading ? 'Registering in...' : 'Register'}
                    </button>
                    <h2 style={{ fontSize: '15px' }}>Have an account? <Link href="/Login">Login</Link></h2>
                    <div id="loader" style={{ display: isLoading ? 'block' : 'none' }}>
                        <i className="ti-reload"></i>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;