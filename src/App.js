import React from 'react';
import './App.css';
import NavbarPage from './components/NavbarPage';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import { BrowserRouter, Route } from 'react-router-dom';
import ContactPage from './components/ContactPage';

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
      <ProjectsPage/>
      <ContactPage/>
    </>
  );
}

export default App;
