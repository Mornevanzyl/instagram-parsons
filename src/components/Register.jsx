import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { useAuth } from '../contexts/AuthContext';
import { useHistory, Link } from 'react-router-dom';

export default function Register() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { register } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSignUp(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        };

        try {
            setError('');
            setLoading(true);
            await register(nameRef.current.value, emailRef.current.value, passwordRef.current.value);
            history.push('/');
        } catch {
            setError('Failed to create an account')
        };
        setLoading(false);
    }

    return (
        <div className={"container"} id="container">
            <div className={"form-container"}>
                <form onSubmit={handleSignUp}>
                    <h1>Create Account</h1>
                    <div className={"social-container"}>
                        <a href="#" className={"social"}><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#" className={"social"}><FontAwesomeIcon icon={faGooglePlusG} /></a>
                        <a href="#" className={"social"}><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                    <span className={error ? 'alert' : ''} >{error ? error : 'or use your email for registration'}</span>
                    <input type="text" placeholder="Name" ref={nameRef} />
                    <input type="email" placeholder="Email" ref={emailRef} required />
                    <input type="password" placeholder="Password" ref={passwordRef} required />
                    <input type="password" placeholder="Confirm Password" ref={passwordConfirmRef} required />
                    <button type="submit" disabled={loading}>Sign Up</button>
                    <Link to='/login'>Been here before? Sign in</Link>
                </form>
            </div>
        </div>
    )
}
