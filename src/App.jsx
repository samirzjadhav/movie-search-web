import React, { useState } from "react";
import MoviesList from "./components/MoviesList";

const App = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const res = await fetch(
      `http://www.omdbapi.com/?s=${query}&apikey=6eb79ec2`
    );
    const data = await res.json();

    if (data.Search) {
      setMovies(data.Search);
      console.log("Movies found:", data.Search);
    } else {
      setMovies([]);
      console.log("No results found:", data);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Movies Search Website
      </h1>

      <form
        onSubmit={handleSearch}
        className="flex justify-center gap-4 mb-8 flex-wrap"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movie...."
          className="px-4 py-2 border rounded-lg shadow-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      <MoviesList movies={movies} />
    </div>
  );
};

export default App;
