import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from './Login.module.css'; // Reusing Login styles for Register

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const result = register(name, email, password); 
    if (result.success) {
      navigate('/'); 
    } else {
      setError(result.message);
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authBox}>
        <h1 className={styles.authTitle}>Create Account</h1>
        <p className={styles.authSubtitle}>Join Aura Couture today</p>
        {error && <div style={{ color: '#d9534f', backgroundColor: '#f9d6d5', padding: '10px', borderRadius: '4px', marginBottom: '16px', textAlign: 'center', fontSize: '14px', fontWeight: 'bold' }}>{error}</div>}
        <form className={styles.authForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your full name"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Create a password"
            />
          </div>
          <button type="submit" className={styles.authButton}>
            Register
          </button>
        </form>
        <p className={styles.authFooter}>
          Already have an account? <Link to="/login">Sign in here</Link>
        </p>
      </div>
    </div>
  );
}
