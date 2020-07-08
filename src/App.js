import React from 'react';
import './App.css';
import NavbarPage from './components/NavbarPage';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <Route path="/" component={Application} />
    </BrowserRouter>
  );
}

function Application() {
  return (
    <>
      <NavbarPage />
      <HomePage />
      <AboutPage />
    </>
  );
}

export default App;
