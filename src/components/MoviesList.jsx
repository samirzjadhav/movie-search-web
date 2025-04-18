import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ movies }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
