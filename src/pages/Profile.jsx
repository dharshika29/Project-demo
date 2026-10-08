import React from 'react';
import { useAuth } from '../context/AuthContext';
import styles from './Login.module.css'; // Reusing auth styles

export default function Profile() {
  const { user, logout } = useAuth();

  return (
    <div className={styles.authContainer}>
      <div className={styles.authBox}>
        <h1 className={styles.authTitle}>My Profile</h1>
        <p className={styles.authSubtitle}>Welcome back, {user?.name}!</p>
        
        <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #eee', borderRadius: '5px' }}>
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
        </div>

        <button className={styles.authButton} onClick={logout} style={{ width: '100%', backgroundColor: '#d9534f' }}>
          Logout
        </button>
      </div>
    </div>
  );
}
