import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../config";

const Banner = () => {
  const [bannerMovie, setBannerMovie] = useState([]);

  useEffect(() => {
    axios
      .get(requests.fetchNetflixOriginals)
      .then((res) => {
        setBannerMovie(
          res.data.results[
            Math.floor(Math.random() * res.data.results.length - 1)
          ]
        );
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner-background"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://tmdb.org/t/p/original/${bannerMovie?.backdrop_path}")`,
      }}
    >
      <div className="banner-inside">
        <h1 className="banner-title">
          {bannerMovie?.title ||
            bannerMovie?.name ||
            bannerMovie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">
          {truncate(bannerMovie?.overview, 150)}
        </h1>
      </div>
      <div className="banner-fade" />
    </header>
  );
};

export default Banner;
