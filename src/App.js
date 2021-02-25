import "./App.css";
import React, { useEffect, useState } from "react";
import * as requests from "./api/TMDB/themoveidb";
import Row from "./containers/Row/Row";
import Header from "./containers/Header/Header";
import Navbar from "./components/NavBar/Navbar";

//loader
import BounceLoader from "react-spinners/BounceLoader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 10000);
  }, []);

  return (
    <div className={loading ? "stop-scrolling" : "App"}>
      <div
        className={`loader_container ${!loading && "loader_container_hidden"}`}
      >
        <BounceLoader color={"#D0021B"} loading={loading} size={150} />
      </div>
      <>
        <Navbar />
        <Header />
        <Row
          title="Trending Now"
          fetchURL={requests.bothTypes_request.fetchTrending}
        />
        <Row
          title="Popular TV Shows"
          fetchURL={requests.tv_request.fetchPopularTvs}
        />
        <Row
          title="Popular Movies"
          fetchURL={requests.movie_request.fetchPopularMovies}
        />
        <Row
          title="Netflix Orginals"
          fetchURL={requests.tv_request.fetchNetflixOriginals}
          isHighlight
        />
        <h1>TV Shows</h1>
        <Row
          title="Top Rated TV Shows"
          fetchURL={requests.tv_request.fetchTopRatedTvs}
        />
        <Row
          title="Discover TV Shows"
          fetchURL={requests.tv_request.fetchDiscoverTvs}
        />
        <Row
          title="Action & Adventure TV Shows"
          fetchURL={requests.tv_request.fetchActionAndAdventureTvs}
        />
        <Row
          title="Comedy TV Shows"
          fetchURL={requests.tv_request.fetchComedyTvs}
        />
        <Row
          title="Animation TV Shows"
          fetchURL={requests.tv_request.fetchAnimationTvs}
        />
        <Row
          title="Crime TV Shows"
          fetchURL={requests.tv_request.fetchCrimeTvs}
        />
        <Row
          title="Mystery TV Shows"
          fetchURL={requests.tv_request.fetchMysteryTvs}
        />
        <Row
          title="Documentary TV Shows"
          fetchURL={requests.tv_request.fetchDocumentaryTvs}
        />
        <h1>Movies</h1>
        <Row
          title="Top Rated Movies"
          fetchURL={requests.movie_request.fetchTopRatedMovies}
        />
        <Row
          title="Discover Movies"
          fetchURL={requests.movie_request.fetchDiscoverMovies}
        />
        <Row
          title="Action Movies"
          fetchURL={requests.movie_request.fetchActionMovies}
        />
        <Row
          title="Comedy Movies"
          fetchURL={requests.movie_request.fetchComedyMovies}
        />
        <Row
          title="Horror Movies"
          fetchURL={requests.movie_request.fetchHorrorMovies}
        />
        <Row
          title="Animation Movies"
          fetchURL={requests.movie_request.fetchAnimationMovies}
        />
        <Row
          title="Crime Movies"
          fetchURL={requests.movie_request.fetchCrimeMovies}
        />
        <Row
          title="Adventures Movies"
          fetchURL={requests.movie_request.fetchAdventureMovies}
        />
        <Row
          title="Mystery Movies"
          fetchURL={requests.movie_request.fetchMysteryMovies}
        />
        <div>
          <a
            style={{
              textAlign: "center",
              textDecoration: "none",
              color: "inherit",
            }}
            href="https://emilydang.dev"
          >
            <p>Emily Dang © 2021</p>
          </a>
        </div>
      </>
      )}
    </div>
  );
};

export default App;
