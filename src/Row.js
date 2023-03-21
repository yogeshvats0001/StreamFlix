import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
// import ReactPlayer from "react-player";
import axios from "./axios";
import "./Row.css";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");

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

  //for Youtube
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      //
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      console.log(typeof movie?.name, movie?.name);
      movieTrailer(`${movie?.name}` || "")
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          console.log(urlParams.get("v"));
          setTrailerURL(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      {/* container -> posters for the movie */}
      <div className="rows__posters">
        {/* several rows__poster(s) */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.original_title || movie.name}
          />
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
}

export default Row;
