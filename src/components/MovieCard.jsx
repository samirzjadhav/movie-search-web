import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow-md rounded-lg w-60 p-4 text-center">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/200x300?text=No+Image"
        }
        alt={movie.Title}
        className="w-full h-80 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{movie.Title}</h3>
      <p className="text-gray-500">{movie.Year}</p>
      <p className="text-sm uppercase text-gray-400">{movie.Type}</p>
    </div>
  );
};

export default MovieCard;
