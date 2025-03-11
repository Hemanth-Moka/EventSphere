import { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal"; // Import the LoginModal
import "../styles/Navbar.css";
import RegisterModal from "./RegisterModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  return (
    <header className="flex flex-col items-center p-4 bg-gray-900 text-white shadow-lg">
      <h1 className="text-3xl font-bold">
        Event<span className="text-blue-400">Sphere</span>
      </h1>
      <nav className="mt-3 flex flex-wrap justify-center gap-4">
        <Link to="/" className="px-3 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">Home</Link>
        <Link to="/about" className="px-3 py-2 hover:text-blue-400">About</Link>
        <Link to="/events" className="px-3 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">Events</Link>
        <Link to="/movies" className="px-3 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">Movies</Link>
        <Link to="/concerts" className="px-3 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">Concerts</Link>
        <Link to="/sports" className="px-3 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">Sports</Link>
        
        {/*Register Modal  THs is */}

        
      
        {/* Instead of Link, use a button to open the modal */}
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="px-3 py-2 hover:text-blue-400"
        >
          Login
        </button>

        <button 
          onClick={() => setIsModalOpen(true)} 
          className="px-3 py-2 hover:text-blue-400"
        >
          Register
        </button>

       
      </nav>

      {/* Login Modal Component */}
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default Header;
