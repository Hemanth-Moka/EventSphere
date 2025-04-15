import { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import "../styles/Navbar.css";

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white shadow-lg relative">
      {/* Logo and Title */}
      <h1 className="text-3xl font-bold">
        Event<span className="text-blue-400">Sphere</span>
        
      </h1>

      {/* Hamburger Menu for Mobile */}
      <div className={`hamburger ${isNavOpen ? "open" : ""}`} onClick={() => setIsNavOpen(!isNavOpen)}>
        <div></div>
        <div></div>
        <div></div>
       
      </div>

      {/* Navigation Links */}
      <nav className={`${isNavOpen ? "active" : ""}`}>
        <Link to="/" className="px-3 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">Home</Link>
        <Link to="/about" className="px-3 py-2 hover:text-blue-400">About</Link>
        <Link to="/events" className="px-3 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">Events</Link>
        <Link to="/movies" className="px-3 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">Movies</Link>
       {/* <Link to="/concerts" className="px-3 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">Concerts</Link>*/}
        <Link to="/sports" className="px-3 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">Sports</Link>

        {/* Login Button */}
        <button onClick={() => setIsLoginModalOpen(true)} className="px-3 py-2 hover:text-blue-400">
          Login
        </button>

        {/* Register Button */}
        <button onClick={() => setIsRegisterModalOpen(true)} className="px-3 py-2 hover:text-blue-400">
          Register
        </button>
      </nav>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />

      {/* Register Modal */}
      <RegisterModal isOpen={isRegisterModalOpen} onClose={() => setIsRegisterModalOpen(false)} />
    </header>
  );
};

export default Header;
