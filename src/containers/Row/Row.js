import React, { useState, useEffect } from "react";
import classes from "./Row.module.css";
import axios from "../../api/axios/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseURl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchURL, isHighlight }) => {
  const [shows, setShows] = useState([]);
  const [trailerURL, setTrailerURL] = useState(null);
  //Fetch shows from the give title
  useEffect(() => {
    const fetchData = async () => {
      // const request = await axios.get(fetchURL);
      // setShows(request.data.results);
      // return request;
      await axios
        .get(fetchURL)
        .then((res) => {
          const showsToDisplay = res.data.results;
          setShows(showsToDisplay);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [fetchURL]);

  //Trailer Player
  const youtube_options = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  //Show trailer when clicked
  const onClickPosterHandler = (e, show) => {
    if (trailerURL) {
      setTrailerURL(null);
    }

    movieTrailer(show?.name || " ")
      .then((url) => {
        !url &&
          e.target.nextElementSibling.classList.replace(
            null,
            classes.show_container_backdrop_true
          );

        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerURL(urlParams.get("v"));
      })
      .catch((err) => {
        console.log(
          "[422] Can't find trailer URL -> [DISPLAYED]: Trailer is not available"
        );
      });
  };

  return (
    <div className={`${classes.Row}`}>
      <div className={classes.title_container}>
        <h2>{title}</h2>
        <p>Scroll to left or right</p>
      </div>
      <div className={classes.Row_shows_container}>
        {shows.map((show) => {
          if (!show.backdrop_path || !show.poster_path) {
            console.log(
              "[404]: There are shows with no IMG_URL -> [HANDLED]: Shows with no IMG_URL was removed"
            );
          }
          return (
            <div
              key={show.id}
              className={`${classes.Row_show_container} ${
                isHighlight && classes.isHighlight
              }`}
              onClick={(e) => onClickPosterHandler(e, show)}
            >
              <img
                key={show.id}
                className={classes.Row_show_img}
                src={encodeURI(
                  !isHighlight
                    ? baseURl + show.backdrop_path
                    : baseURl + show.poster_path
                )}
                alt={show.name}
              />

              <div className={`${classes.show_container_backdrop} ${null}`}>
                <p>No trailer currently available</p>
              </div>
            </div>
          );
        })}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={youtube_options} />}
    </div>
  );
};
export default Row;
// useLayoutEffect(() => {
//   console.log("will mount");
//   shows.map((show) => {
//     return movieTrailer(show?.name || " ")
//       .then((url) => {
//         if (url !== null) {
//           show.hasTrailer = true;
//         } else {
//           show.hasTrailer = false;
//         }
//       })
//       .catch((err) => err);
//   });
// }, []);

// ${show.hasTrailer && classes.show_container_backdrop_false}
//  {!show.hasTrailer && (
//   <div className={`${classes.show_container_backdrop} `}>
//   <p>No trailer currently available</p>
// </div>
// )}
