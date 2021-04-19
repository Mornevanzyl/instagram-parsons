import React, { useState, useRef } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useHistory, Link } from 'react-router-dom';

export default function UpdateProfile() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const history = useHistory();

  function handleUpdate(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError('Passwords do not match')
    };

    const promises = [];
    setLoading(true);
    setError('');

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value) )
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value) )
    }

    Promise.all(promises).then(() => {
      history.push('/');
    }).catch(() => {
      setError('Failed to update account');
    }).finally(() => {
      setLoading(false);
    })

  }

  return (
    <div className={"container"} id="container">
      <div className={"form-container"}>
          <form onSubmit={handleUpdate}>
              <h1>Update Profile</h1>
              <span className={error ? 'alert' : ''} >{error ? error : `update info for ${currentUser.email} below`}</span>
              <input type="text" placeholder="Name" ref={nameRef} />
              <input type="email" placeholder="Email" ref={emailRef} required defaultValue={currentUser.email} />
              <input type="password" placeholder="Password (leave blank to keep the same)" ref={passwordRef} />
              <input type="password" placeholder="Confirm Password (blank to keep the same)" ref={passwordConfirmRef} />
              <button type="submit" disabled={loading}>Update</button>
              <Link to='/'>Cancel</Link>
          </form>
      </div>
  </div>
  )
}
