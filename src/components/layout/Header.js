import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ background: '#000', padding: '10px' }}>
      <h1 style={{ color: '#fff' }}>Todo List</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  );
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};
