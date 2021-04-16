import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { useAuth } from '../contexts/AuthContext'

export default function Signup() {
    const signUpNameRef = useRef();
    const signUpEmailRef = useRef();
    const signUpPasswordRef = useRef();
    const signUpPasswordConfirmRef = useRef();
    const loginEmailRef = useRef();
    const loginPasswordRef = useRef();
    const [rightPanelActive, setRightPanelActive] = useState(false);
    const { signUp } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    function handleSlider() {
        setRightPanelActive(!rightPanelActive);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (signUpPasswordRef.current.value !== signUpPasswordConfirmRef.current.value) {
            return setError('Passwords do not match')
        };

        try {
            setError('');
            setLoading(true);
            await signUp(signUpNameRef.current.value, signUpEmailRef.current.value, signUpPasswordRef.current.value);
        } catch {
            console.log('Failed in create')
            setError('Failed to create an account')
        };
        setLoading(false);
    }

    return (
        <div className={`container ${rightPanelActive ? 'right-panel-active' : ''}`} id="container">
            <div className={"form-container sign-up-container"}>
                <form onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <div className={"social-container"}>
                        <a href="#" className={"social"}><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#" className={"social"}><FontAwesomeIcon icon={faGooglePlusG} /></a>
                        <a href="#" className={"social"}><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" ref={signUpNameRef} />
                    <input type="email" placeholder="Email" ref={signUpEmailRef} required />
                    <input type="password" placeholder="Password" ref={signUpPasswordRef} required />
                    <input type="password" placeholder="Confirm Password" ref={signUpPasswordConfirmRef} required />
                    <button type="submit" disabled={loading}>Sign Up</button>
                </form>
                {error && <h3>{error}</h3>}
            </div>
            <div className={"form-container sign-in-container"}>
                <form action="#">
                    <h1>Sign in</h1>
                    <div className={"social-container"}>
                        <a href="#" className={"social"}><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#" className={"social"}><FontAwesomeIcon icon={faGooglePlusG} /></a>
                        <a href="#" className={"social"}><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" ref={loginEmailRef} required />
                    <input type="password" placeholder="Password" ref={loginPasswordRef} />
                    <a href="#">Forgot your password?</a>
                    <button>Sign In</button>
                </form>
            </div>
            <div className={"overlay-container"}>
                <div className={"overlay"}>
                    <div className={"overlay-panel overlay-left"}>
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className={"ghost"} id="signIn" onClick={handleSlider}>Sign In</button>
                    </div>
                    <div className={"overlay-panel overlay-right"}>
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className={"ghost"} id="signUp" onClick={handleSlider}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
