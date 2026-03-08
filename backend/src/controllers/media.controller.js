const {
  fetchTrendingMovies,
  fetchPopularMovies,
  fetchMovieDetails,
  fetchMovieVideos,
  fetchMovieCredits,
  fetchMovieImages,
  fetchTrendingTVShows,
  fetchPopularTVShows,
  fetchTVDetails,
  fetchTVVideos,
  fetchTrendingPeople,
  fetchPopularPeople,
  fetchPersonDetails,
  searchMulti,
} = require("../services/tmdb.service");

//Movies

async function getTrendingMoviesController(req, res) {
  try {
    let data = await fetchTrendingMovies();
    res.status(200).json({
      message: "Movies fetched successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch movies" });
  }
}
async function getPopularMoviesController(req, res) {
  try {
    let data = await fetchPopularMovies();
    res.status(200).json({
      message: "Movies fetched successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch movies" });
  }
}

async function getMovieVideos(req, res) {
  try {
    let data = await fetchMovieVideos(req.params.id);
    res.status(200).json({
      message: "Movies fetched successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch movie videos" });
  }
}

async function getMovieDetails(req, res) {
  try {
    let data = await fetchMovieDetails(req.params.id);
    res.status(200).json({
      message: "Movies fetched successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch movie details" });
  }
}

//Tv Shows
async function getTrendingTVShowsController(req, res) {
  try {
    let data = await fetchTrendingTVShows();
    res.status(200).json({
      message: "TV shows fetched successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch TV show details" });
  }
}
async function getPopularTVShowsController(req, res) {
  try {
    let data = await fetchPopularTVShows();
    res.status(200).json({
      message: "TV shows fetched successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch TV show details" });
  }
}
async function getTVVideos(req, res) {
  try {
    let data = await fetchTVVideos(req.params.id);
    res.status(200).json({
      message: "TV videos fetched successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch TV videos" });
  }
}
async function getTVDetails(req, res) {
  try {
    let data = await fetchTVDetails(req.params.id);
    res.status(200).json({
      message: "TV shows fetched successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch TV show details" });
  }
}

//People

async function getTrendingPeopleController(req, res) {
  try {
    let data = await fetchTrendingPeople(req.params.id);
    res.status(200).json({
      message: "Trending People fetched successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch trending people" });
  }
}
async function getPopularPeopleController(req, res) {
  try {
    let data = await fetchPopularPeople(req.params.id);
    res.status(200).json({
      message: "Popular People fetched successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch popular people" });
  }
}
async function getPersonDetails(req, res) {
  try {
    let data = await fetchPersonDetails(req.params.id);
    res.status(200).json({
      message: "Person details fetched successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch person details" });
  }
}

//Search

async function searchMoviesController(req, res) {
  try {
    let data = await searchMulti(req.query.query);
    res.status(200).json({
      message: "Movies fetched successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch movies" });
  }
}

module.exports = {
  getTrendingMoviesController,
  getPopularMoviesController,
  searchMoviesController,
  getMovieVideos,
  getMovieDetails,
  getTrendingTVShowsController,
  getPopularTVShowsController,
  getTVVideos,
  getTVDetails,
  getPersonDetails,
  getTrendingPeopleController,
  getPopularPeopleController,
};
