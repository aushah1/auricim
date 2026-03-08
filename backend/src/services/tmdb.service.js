const axios = require("axios");

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
  },
});

// MOVIES

const fetchTrendingMovies = async () => {
  const res = await api.get("/trending/movie/week");
  return res.data;
};

const fetchPopularMovies = async () => {
  const res = await api.get("/movie/popular");
  return res.data;
};

const fetchMovieDetails = async (id) => {
  const res = await api.get(`/movie/${id}`);
  return res.data;
};

const fetchMovieVideos = async (id) => {
  const res = await api.get(`/movie/${id}/videos`);
  return res.data;
};

const fetchMovieCredits = async (id) => {
  const res = await api.get(`/movie/${id}/credits`);
  return res.data;
};

const fetchMovieImages = async (id) => {
  const res = await api.get(`/movie/${id}/images`);
  return res.data;
};

// TV SHOWS

const fetchTrendingTVShows = async () => {
  const res = await api.get("/trending/tv/week");
  return res.data;
};

const fetchPopularTVShows = async () => {
  const res = await api.get("/tv/popular");
  return res.data;
};

const fetchTVDetails = async (id) => {
  const res = await api.get(`/tv/${id}`);
  return res.data;
};

const fetchTVVideos = async (id) => {
  const res = await api.get(`/tv/${id}/videos`);
  return res.data;
};

// PEOPLE (ACTORS)

const fetchTrendingPeople = async () => {
  const res = await api.get("/trending/person/week");
  return res.data;
};

const fetchPopularPeople = async () => {
  const res = await api.get("/person/popular");
  return res.data;
};

const fetchPersonDetails = async (id) => {
  const res = await api.get(`/person/${id}`);
  return res.data;
};

// SEARCH

const searchMulti = async (query) => {
  const res = await api.get(`/search/multi?query=${query}`);
  return res.data;
};

module.exports = {
  // movies
  fetchTrendingMovies,
  fetchPopularMovies,
  fetchMovieDetails,
  fetchMovieVideos,
  fetchMovieCredits,
  fetchMovieImages,

  // tv shows
  fetchTrendingTVShows,
  fetchPopularTVShows,
  fetchTVDetails,
  fetchTVVideos,

  // people
  fetchTrendingPeople,
  fetchPopularPeople,
  fetchPersonDetails,

  // search
  searchMulti,
};
