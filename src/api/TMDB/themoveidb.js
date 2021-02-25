const TMDB_API_KEY = "e13211618ab529760831100a8b8c0b2f";

//Usefull endpoints:
//Movies Genres: https://api.themoviedb.org/3/genre/tv/list?api_key=e13211618ab529760831100a8b8c0b2f&language=en-US
//TV Genres: https://api.themoviedb.org/3/genre/tv/list?api_key=e13211618ab529760831100a8b8c0b2f&language=en-US

export const movie_request = {
  fetchPopularMovies: `/movie/popular?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${TMDB_API_KEY}`,
  fetchDiscoverMovies: `/discover/movie?api_key=${TMDB_API_KEY}&sort_by=popularity.desc`,
  fetchActionMovies: `/discover/movie?api_key=${TMDB_API_KEY}&sort_by=popularity.desc&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${TMDB_API_KEY}&sort_by=popularity.desc&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${TMDB_API_KEY}&sort_by=popularity.desc&with_genres=27`,
  fetchAnimationMovies: `/discover/movie?api_key=${TMDB_API_KEY}&sort_by=popularity.desc&with_genres=16`,
  fetchCrimeMovies: `/discover/movie?api_key=${TMDB_API_KEY}&sort_by=popularity.desc&with_genres=80`,
  fetchAdventureMovies: `/discover/movie?api_key=${TMDB_API_KEY}&sort_by=popularity.desc&with_genres=12`,
  fetchMysteryMovies: `/discover/movie?api_key=${TMDB_API_KEY}&sort_by=popularity.desc&with_genres=9648`,
};

export const bothTypes_request = {
  fetchTrending: `trending/all/day?api_key=${TMDB_API_KEY}&language=en-US`,
};

export const tv_request = {
  fetchPopularTvs: `/tv/popular?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchNetflixOriginals: `discover/tv?api_key=${TMDB_API_KEY}&with_networks=213`,
  fetchTopRatedTvs: `/tv/top_rated?api_key=${TMDB_API_KEY}`,
  fetchDiscoverTvs: `/discover/tv?api_key=${TMDB_API_KEY}&sort_by=popularity.desc`,
  fetchActionAndAdventureTvs: `/discover/tv?api_key=${TMDB_API_KEY}&sort_by=popularity.desc&with_genres=10759`,
  fetchComedyTvs: `/discover/tv?api_key=${TMDB_API_KEY}&sort_by=popularity.desc&with_genres=35`,
  fetchAnimationTvs: `/discover/tv?api_key=${TMDB_API_KEY}&sort_by=popularity.desc&with_genres=16`,
  fetchCrimeTvs: `/discover/tv?api_key=${TMDB_API_KEY}&sort_by=popularity.desc&with_genres=80`,
  fetchMysteryTvs: `/discover/tv?api_key=${TMDB_API_KEY}&sort_by=popularity.desc&with_genres=9648`,
  fetchDocumentaryTvs: `/discover/tv?api_key=${TMDB_API_KEY}&sort_by=popularity.desc&with_genres=99`,
};
