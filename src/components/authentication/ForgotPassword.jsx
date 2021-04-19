import React, { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSignIn(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setError('Check your inbox for further information');
        } catch {
            setError('Failed to reset password')
        };
        setLoading(false);
    }

    return (
        <div className="container">
            <div className={"auth-container"} id="container">
                <div className={"form-container"}>
                    <form onSubmit={handleSignIn}>
                        <h1>Reset Password</h1>
                        <span className={error ? 'alert' : ''} >{error ? error : 'enter your email below'}</span>
                        <input type="email" placeholder="Email" ref={emailRef} required />
                        <button type="submit" disabled={loading}>Reset Password</button>
                        <Link to='/login'>Sign In</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
