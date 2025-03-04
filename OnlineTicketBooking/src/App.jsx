import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'; // Ensure this matches the actual file/component name
import Events from './pages/Events';
import Movies from './pages/Movies';
import Concerts from './pages/Concerts';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Concerts" element={<Concerts />} />


        
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
