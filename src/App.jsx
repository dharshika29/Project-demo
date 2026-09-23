import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="app-layout">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main className="app-content">
        {activePage === 'home' && (
          <Home onNavigateAbout={() => setActivePage('about')} />
        )}
        {activePage === 'about' && <About />}
      </main>

      <Footer />
    </div>
  );
}
