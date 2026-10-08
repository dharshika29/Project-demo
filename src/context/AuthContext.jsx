import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Step 1: App load aagumbothu localStorage la user irukkara nu check panrom
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    
    // Check if credentials match
    const existingUser = storedUsers.find(u => u.email === email && u.password === password);
    
    if (existingUser) {
      const { password: _, ...userSession } = existingUser;
      setUser(userSession);
      localStorage.setItem('user', JSON.stringify(userSession));
      return { success: true };
    } else {
      return { success: false, message: 'Invalid email or password. Are you registered?' };
    }
  };

  const register = (name, email, password) => {
    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    
    // Check if email already exists
    if (storedUsers.some(u => u.email === email)) {
      return { success: false, message: 'User already exists with this email!' };
    }

    const newUser = { name, email, password };
    storedUsers.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(storedUsers));
    
    const { password: _, ...userSession } = newUser;
    setUser(userSession);
    localStorage.setItem('user', JSON.stringify(userSession));
    
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // User details-a remove panrom
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Itha use panni thaan namma components-la user data-va eduppom
export const useAuth = () => useContext(AuthContext);
