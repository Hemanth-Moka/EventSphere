import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Header = () => {
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
        <Link to="/testimonials" className="px-3 py-2 hover:text-blue-400">Testimonials</Link>
        <Link to="/faqs" className="px-3 py-2 hover:text-blue-400">FAQs</Link>
        <Link to="/contact" className="px-3 py-2 hover:text-blue-400">Contact</Link>
        <button class="btn btn-outline-success my-1 my-sm-0" type="submit">Login</button>
      </nav>
    </header>
  );
};

export default Header;