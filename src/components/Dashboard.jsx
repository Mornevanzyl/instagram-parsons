import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom';

export default function Dashboard() {
  const [error, setError] = useState('');
  const { currentUser, logOut } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError('');
    try {
      await logOut();
      history.pushState('/signup');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <div>
      <strong>Email: </strong>{currentUser.email}<br></br>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}
