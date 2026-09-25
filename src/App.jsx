import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Collections from './pages/Collections';
import NewArrivals from './pages/NewArrivals';
import Lookbook from './pages/Lookbook';
import Sale from './pages/Sale';
import EveningGowns from './pages/EveningGowns';
import SilkFestive from './pages/SilkFestive';
import SummerMaxi from './pages/SummerMaxi';
import CocktailSparkle from './pages/CocktailSparkle';
import Contact from './pages/Contact';
import styles from './App.module.css';

export default function App() {
  const [cartCount, setCartCount] = useState(2);
  const [wishlistCount, setWishlistCount] = useState(2);
  const navigate = useNavigate();

  return (
    <div className={styles.appLayout}>
      <Navbar
        cartCount={cartCount}
        wishlistCount={wishlistCount}
      />

      <main className={styles.appContent}>
        <Routes>
          <Route path="/" element={
            <Home
              onNavigateAbout={() => navigate('/about')}
              cartCount={cartCount}
              setCartCount={setCartCount}
              wishlistCount={wishlistCount}
              setWishlistCount={setWishlistCount}
            />
          } />
          <Route path="/home" element={
            <Home
              onNavigateAbout={() => navigate('/about')}
              cartCount={cartCount}
              setCartCount={setCartCount}
              wishlistCount={wishlistCount}
              setWishlistCount={setWishlistCount}
            />
          } />
          <Route path="/about" element={<About />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/evening-gowns" element={<EveningGowns />} />
          <Route path="/silk-festive" element={<SilkFestive />} />
          <Route path="/summer-maxi" element={<SummerMaxi />} />
          <Route path="/cocktail-sparkle" element={<CocktailSparkle />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
