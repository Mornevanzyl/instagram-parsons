import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

export default function Signin() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signin } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSignIn(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await signin(emailRef.current.value, passwordRef.current.value);
            history.push('/');
        } catch {
            setError('Failed to sign in')
        };
        setLoading(false);
    }

    return (
        <div className={"container"} id="container">
            <div className={"form-container"}>
                <form onSubmit={handleSignIn}>
                    <h1>Sign in</h1>
                    <div className={"social-container"}>
                        <a href="#" className={"social"}><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#" className={"social"}><FontAwesomeIcon icon={faGooglePlusG} /></a>
                        <a href="#" className={"social"}><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                    <span className={error ? 'alert' : ''} >{error ? error : 'or use your account'}</span>
                    <input type="email" placeholder="Email" ref={emailRef} required />
                    <input type="password" placeholder="Password" ref={passwordRef} />
                    <button type="submit" disabled={loading}>Sign In</button>
                    <a href="#">Forgot your password?</a>
                </form>
            </div>
        </div>
    )
}
