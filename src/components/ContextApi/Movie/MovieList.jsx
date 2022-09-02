import React, { useContext } from "react";
import MovieContext from "../context/MovieContext";

// Consuming context on the component where we want to retrieve the movies array,
// we need import the useContext hook and pass the createContext we created in the movieContext as a parameter:
const MovieList = () => {
  const { movies, setMovies } = useContext(MovieContext);
  return (
    <div>
      <h1>MoveiesList</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.movie_id}>
            {movie.title} ({movie.release_year})
          </li>
        ))}
      </ul>
      {movies.length < 4 && (
        <button
          onClick={() => {
            setMovies([
              ...movies,
              {
                movie_id: 4,
                title: "Harry Potter and the Goblet of Fire",
                release_year: 2005
              }
            ]);
          }}
        >
          More
        </button>
      )}
    </div>
  );
};

export default MovieList;
