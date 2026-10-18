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
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Blog from './pages/Blog';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import ScrollToTop from './components/common/ScrollToTop';
import CustomerCare from './pages/CustomerCare';
import Bespoke from './pages/Bespoke';
import Sustainability from './pages/Sustainability';
import Careers from './pages/Careers';
import Press from './pages/Press';
import Legal from './pages/Legal';
import styles from './App.module.css';

export default function App() {
  const [cartCount, setCartCount] = useState(2);
  const [wishlistCount, setWishlistCount] = useState(2);
  const navigate = useNavigate();

  return (
    <div className={styles.appLayout}>
      <ScrollToTop />
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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/product/:id" element={
            <ProductDetail
              cartCount={cartCount}
              setCartCount={setCartCount}
              wishlistCount={wishlistCount}
              setWishlistCount={setWishlistCount}
            />
          } />
          <Route path="/blog" element={<Blog />} />

          {/* Shopping Bag & Checkout Flow */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/bag" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/order-confirmation" element={<OrderSuccess />} />

          {/* Customer Care & Support Hub */}
          <Route path="/customer-care" element={<CustomerCare />} />
          <Route path="/help" element={<CustomerCare />} />
          <Route path="/size-guide" element={<CustomerCare initialTab="size-guide" />} />
          <Route path="/shipping" element={<CustomerCare initialTab="shipping" />} />
          <Route path="/returns" element={<CustomerCare initialTab="returns" />} />
          <Route path="/care-guide" element={<CustomerCare initialTab="care-guide" />} />
          <Route path="/faq" element={<CustomerCare initialTab="faq" />} />
          <Route path="/track-order" element={<CustomerCare initialTab="track-order" />} />

          {/* Maison & Company Pages */}
          <Route path="/bespoke" element={<Bespoke />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />

          {/* Legal Pages */}
          <Route path="/privacy" element={<Legal defaultTab="privacy" />} />
          <Route path="/terms" element={<Legal defaultTab="terms" />} />
          <Route path="/cookies" element={<Legal defaultTab="cookies" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
