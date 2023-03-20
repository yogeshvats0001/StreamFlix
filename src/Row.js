import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // a snippet of code which will run based on a specific condition/variable
  useEffect(() => {
    // if [], run once when the row loads, and dont run again(like on page loading)
    // if[<variable>], it will loads whenever that variable change.
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // console.log(typeof movies);
  console.log(movies);
  // console.table(movies);

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      {/* container -> posters for the movie */}
      <div className="rows__posters">
        {/* several rows__poster(s) */}
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.original_title || movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
