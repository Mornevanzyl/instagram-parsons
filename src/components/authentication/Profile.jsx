import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom';

export default function Profile() {
  const [error, setError] = useState('');
  const { currentUser, logOut } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError('');
    try {
      await logOut();
      history.pushState('/');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <div className="container">
      <div className={"auth-container"} id="container">
        <div className={"form-container"}>
            <div className={"profile-info"}>
                <h1>User Profile</h1>
                <span className={error ? 'alert' : ''} >{error ? error : `update info for ${currentUser.email} below`}</span>
                <strong>Email:</strong> {currentUser.email}
                <button onClick={handleLogout}>Log Out</button>
                <Link to='/update-profile'>Update Profile</Link>
            </div>
        </div>
    </div>
    </div>
  )
}
