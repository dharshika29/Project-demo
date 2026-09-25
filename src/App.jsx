import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Collections from './pages/Collections';
import NewArrivals from './pages/NewArrivals';
import Lookbook from './pages/Lookbook';
import Sale from './pages/Sale';
import styles from './App.module.css';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [cartCount, setCartCount] = useState(2);
  const [wishlistCount, setWishlistCount] = useState(2);

  return (
    <div className={styles.appLayout}>
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        cartCount={cartCount}
        wishlistCount={wishlistCount}
      />

      <main className={styles.appContent}>
        {activePage === 'home' && (
          <Home
            onNavigateAbout={() => setActivePage('about')}
            cartCount={cartCount}
            setCartCount={setCartCount}
            wishlistCount={wishlistCount}
            setWishlistCount={setWishlistCount}
          />
        )}
        {activePage === 'about' && <About />}
        {activePage === 'collections' && <Collections />}
        {activePage === 'new-arrivals' && <NewArrivals />}
        {activePage === 'lookbook' && <Lookbook />}
        {activePage === 'sale' && <Sale />}
      </main>

      <Footer />
    </div>
  );
}
