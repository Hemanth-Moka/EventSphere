import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'; // Ensure this matches the actual file/component name
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />


        
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
