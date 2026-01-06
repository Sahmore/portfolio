import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div style={{ paddingTop: '70px' }}>
          <Routes>
            <Route path="/" element={<Portfolio/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Projects" element={<Projects/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="*" element={<Portfolio/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;