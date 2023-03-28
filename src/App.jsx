import './App.css';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Tech from './components/Tech';
import React, { useState } from 'react';
function App() {
  const [darkMode, setDarkMode] =
    useState(false);
  return (
    <div
      className={darkMode ? 'dark' : ''}
    >
      <Nav
        handleclick={() =>
          setDarkMode(!darkMode)
        }
      />
      <Hero />
      <Tech />
      <Portfolio />
      <Services />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
