import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Movies from './pages/Movies';
import Concerts from './pages/Concerts';
//import Login from './pages/Login';  // Capitalized import

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/concerts" element={<Concerts />} />
     
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
