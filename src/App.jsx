import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import styles from './App.module.css';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [cartCount, setCartCount] = useState(2);

  return (
    <div className={styles.appLayout}>
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        cartCount={cartCount}
      />

      <main className={styles.appContent}>
        {activePage === 'home' && (
          <Home
            onNavigateAbout={() => setActivePage('about')}
            cartCount={cartCount}
            setCartCount={setCartCount}
          />
        )}
        {activePage === 'about' && <About />}
      </main>

      <Footer />
    </div>
  );
}
