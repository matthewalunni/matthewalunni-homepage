import React from 'react';
import './App.css';
import NavbarPage from './components/NavbarPage';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <>
      <NavbarPage />
      <HomePage/>
      <AboutPage/>
    </>
  );
}

export default App;
