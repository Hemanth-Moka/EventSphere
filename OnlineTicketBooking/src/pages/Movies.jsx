import React from "react";
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
    image: "https://via.placeholder.com/200x300",
  },
  {
    id: 3,
    title: "John Wick 4",
    image: "https://via.placeholder.com/200x300",
  },
  {
    id: 4,
    title: "Spider-Man: No Way Home",
    image: "https://via.placeholder.com/200x300",
  },
];

export default function Movies() {
  return (
    <div className="movies-container">
      <h2 className="movies-title">Now Showing</h2>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <h3 className="movie-title">{movie.title}</h3>
            <button className="book-btn">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
