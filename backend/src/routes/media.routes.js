const { Router } = require("express");
const mediaController = require("../controllers/media.controller");

const movieRouter = Router();
// /media routes

// movies

movieRouter.get("/movies/trending", mediaController.getTrendingMoviesController);
movieRouter.get("/movies/popular", mediaController.getPopularMoviesController);
movieRouter.get("/movies/:id/videos", mediaController.getMovieVideos);
movieRouter.get("/movies/:id/details", mediaController.getMovieDetails);

//search

movieRouter.get("/movies/search", mediaController.searchMoviesController);

// tv shows
movieRouter.get("/tv/trending", mediaController.getTrendingTVShowsController);
movieRouter.get("/tv/popular", mediaController.getPopularTVShowsController);
movieRouter.get("/tv/:id/videos", mediaController.getTVVideos);
movieRouter.get("/tv/:id/details", mediaController.getTVDetails);

//people

movieRouter.get("/people/trending", mediaController.getTrendingPeopleController);
movieRouter.get("/people/popular", mediaController.getPopularPeopleController);
movieRouter.get("/people/:id/details", mediaController.getPersonDetails);

module.exports = movieRouter;
