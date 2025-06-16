import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export const ProtectedContent = () => {
  const { user } = useAuth();

  return (
    <div style={{ padding: '20px' }}>
      {user ? <p>This is protected content only visible to logged-in users.</p> : <p>Please login to see the content.</p>}
    </div>
  );
};