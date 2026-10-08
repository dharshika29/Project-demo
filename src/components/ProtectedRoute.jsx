import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  // User login aagalana login page-ku anuppiduvom
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Login aagiruntha keta page-a kaatuvom (e.g. Profile)
  return children;
}
