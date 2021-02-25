import React, { useEffect, useState } from "react";
import classes from "./Header.module.css";
import axios from "../../api/axios/axios";
import { bothTypes_request } from "../../api/TMDB/themoveidb";
import infoIcon from "../../info-icon.svg";

const Header = () => {
  const [headerMovie, setHeaderMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await axios.get(bothTypes_request.fetchTrending);
      const randomNum = Math.floor(Math.random() * res.data.results.length - 1);
      res.data.results[randomNum].backdrop_path === undefined
        ? setHeaderMovie(res.data.results[0])
        : setHeaderMovie(res.data.results[randomNum]);
      return res.data.results;
    };
    fetchMovie();
  }, []);

  return (
    <div
      className={classes.Header}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${
          headerMovie.backdrop_path && headerMovie.backdrop_path
        }")`,
      }}
    >
      <div className={classes.Header_content}>
        <h1 className={classes.Header_header}>
          {headerMovie.name ? headerMovie.name : headerMovie.title}
        </h1>
        <h2>{headerMovie.media_type === "tv" ? "TV Series" : "Movies"}</h2>
        <p style={{ maxWidth: "60%" }}>{headerMovie.overview}</p>
        <div className={classes.Header_content_button_container}>
          <button className={classes.Header_content_button}>
            <img
              src="https://img.icons8.com/android/24/000000/play.png"
              alt=""
            />
            <p> Play</p>
          </button>
          <button
            className={`${classes.Header_content_button} ${classes.Header_content_button_black}`}
          >
            <img src={infoIcon} alt="" /> More Info
          </button>
        </div>
      </div>
      <div className={classes.fakeBottom}></div>
    </div>
  );
};

export default Header;
