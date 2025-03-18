import React, { useState } from "react";
import "../styles/Movie.css";

const movies = [
  {
    id: 1,
    title: "Oppenheimer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4PZBIpG9XX-40CYV2ZJPtLUQH9DsposMVQ&s",
  },
  {
    id: 2,
    title: "Avatar: The Way of Water",
    image: "https://m.media-amazon.com/images/M/MV5BNmQxNjZlZTctMWJiMC00NGMxLWJjNTctNTFiNjA1Njk3ZDQ5XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 3,
    title: "Pirates of the Caribbean",
    image: "https://m.media-amazon.com/images/M/MV5BMTYyMTcxNzc5M15BMl5BanBnXkFtZTgwOTg2ODE2MTI@._V1_.jpg",
  },
  {
    id: 4,
    title: "Spider-Man: No Way Home",
    image: "https://comenian.org/wp-content/uploads/2022/01/spidermannowayhomeposter.jpg",
  },
];

export default function Movies() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="movies-container">
      <div className="movies-header">
        <h2 className="movies-title">Now Showing</h2>
        <input
          type="text"
          placeholder="Search movies..."
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="movies-seat-container">
        {/* Movie List */}
        <div className="movies-grid">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className={`movie-card ${selectedMovie === movie.id ? "selected" : ""}`}
              onClick={() => setSelectedMovie(movie.id)}
            >
              <img src={movie.image} alt={movie.title} className="movie-image" />
              <h3 className="movie-title">{movie.title}</h3>
              <button className="book-btn">Book Now</button>
            </div>
          ))}
        </div>

        {/* Seat Selection Appears on Right */}
        {selectedMovie && (
          <div className="seat-container">
            <h3>Choose Your Seats</h3>
            <div className="seat-map">
              {[...Array(5)].map((_, rowIndex) => (
                <div key={rowIndex} className="seat-row">
                  {[...Array(8)].map((_, seatIndex) => (
                    <div key={seatIndex} className="seat"></div>
                  ))}
                </div>
              ))}
            </div>
            <button className="confirm-btn">Confirm Booking</button>
            <button className="back-btn" onClick={() => setSelectedMovie(null)}>Back</button>
          </div>
        )}
      </div>
    </div>
  );
}
