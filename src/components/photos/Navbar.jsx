import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className={'navbar'} >
      <Link className={'logo'} as={Link} to='/'>instaGram Parsons</Link>
      <Link as={Link} to='/user'>Profile</Link>
    </div>
  )
}
