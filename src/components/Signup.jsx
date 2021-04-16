import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Signup() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const [rightPanelActive, setRightPanelActive] = useState(false);

    function handleSlider() {
        setRightPanelActive(!rightPanelActive);
    }

    return (
        <div className={`container ${rightPanelActive ? 'right-panel-active' : ''}`} id="container">
            <div className={"form-container sign-up-container"}>
                <form action="#">
                    <h1>Create Account</h1>
                    <div class={"social-container"}>
                        <a href="#" className={"social"}><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#" className={"social"}><FontAwesomeIcon icon={faGooglePlusG} /></a>
                        <a href="#" className={"social"}><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" ref={nameRef} />
                    <input type="email" placeholder="Email" ref={emailRef} required />
                    <input type="password" placeholder="Password" ref={passwordRef} />
                    <input type="password" placeholder="Confirm Password" ref={passwordConfirmRef} required />
                    <button type="submit" >Sign Up</button>
                </form>
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
                    <input type="email" placeholder="Email" ref={emailRef} required />
                    <input type="password" placeholder="Password" ref={passwordRef} />
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
