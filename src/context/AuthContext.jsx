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
    // Real app la inga thaan Backend API call pannuvom
    // Example-ku dummy user data create panrom
    const fakeUser = { name: email.split('@')[0], email };
    setUser(fakeUser);
    localStorage.setItem('user', JSON.stringify(fakeUser)); // Save to storage
  };

  const register = (name, email, password) => {
    // Backend API call for register inga varum
    const newUser = { name, email };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser)); // Auto login after register
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
