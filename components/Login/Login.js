"use client";
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import SimpleReactValidator from 'simple-react-validator';

const Login = () => {
    const [forms, setForms] = useState({
        username: '',
        password: ''
    });
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState('');

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
            setLoginError('');

            try {
                //  Replace authenticateUser with your actual authentication logic
                // const response = await authenticateUser(forms.username, forms.password);

                //Simulated success:
                const response = {success: true}

                if (response.success) {
                    // Handle successful login (e.g., redirect, store token)
                    console.log('Login successful!');
                    router.push('/comment'); // Redirect to comment page
                } else {
                    // Handle login failure
                    setLoginError(response.message || 'Login failed. Please check your credentials.');
                }
            } catch (error) {
                console.error('Error during login:', error);
                setLoginError('An unexpected error occurred. Please try again later.');
            } finally {
                setIsLoading(false);
                setForms({
                    username: '',
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
                <h2>Login</h2>
                <form method="post" className="contact-validation-active" onSubmit={submitHandler}>
                    {loginError && <div className="errorMessage">{loginError}</div>}

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
                        {validator.message('username', forms.username, 'required|alpha_num')}
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
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>

                    <div id="loader" style={{ display: isLoading ? 'block' : 'none' }}>
                        <i className="ti-reload"></i>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;