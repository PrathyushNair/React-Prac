import React from 'react';
import { useTheme } from '../contexts/ThemeContexts';
import { useAuth } from '../contexts/AuthContext';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useAuth();
console.log(user)
  return (
    <>
        <nav style={{ padding: '10px', backgroundColor: theme === 'light' ? '#f0f0f0' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {user ? (
        <>
          <span style={{ marginLeft: '10px' }}>Welcome, {user.name}</span>
          <button onClick={logout} style={{ marginLeft: '10px' }}>Logout</button>
        </>
      ) : (
        <button onClick={() => login('Prathyush')} style={{ marginLeft: '10px' }}>Login</button>
      )}
    </nav>
    </>

  );
};
