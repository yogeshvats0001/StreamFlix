import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      //   console.log(request);
      setMovie(
        request.data.results.at(
          Math.floor(Math.random() * request.data.results.length - 1)
        )
      );
    }
    fetchData();
  }, []);

  console.log(movie);
  console.log(
    `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path})`
  );

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        height: "430px",
      }}
    >
      {/* <<< Background image */}
      <div className="banner__contents">
        {/* title */}
        <h1 className="banner__title">
          {movie?.original_title || movie?.name || movie?.title}
        </h1>
        {/* div > 2 buttons */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        {/* description */}
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
