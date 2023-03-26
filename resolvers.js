const axios = require("axios");
const { ApolloError } = require("apollo-server-express");

const API_KEY = "2431bdcbb32f54f769ef9c1f7028381"

const BASE_URL_PATH = "https://api.themoviedb.org/3/"

const BACKDROP_PATH_URL = "https://image.tmdb.org/t/p/w1280"

const resolvers = {
    Query: {
        search: async (parent, args, context, info) => {
            // Search anything tv show or movie
            try {
                const SEARCH_API = BASE_URL + "search/multi";
                const { query } = args;
                const request = await axios.get(
                    `${SEARCH_API}?api_key=${API_KEY}&query=${query}`
                );
                const data = await request.data.results;
                return data;
            } catch (e) {
                ApolloError(e);
            }
        },
        getSeasonDetails: async (parent, args, context, info) => {
            // get webseries episodes info
            try {
                const { id, season } = args;
                const SEASON_API = BASE_URL + `tv/${id}/season/${season}`;
                const request = await axios.get(
                    `${SEASON_API}?api_key=${API_KEY}`
                );
                const data = await request.data.episodes;
                console.log(data);
                return data;
            } catch (e) {
                ApolloError(e);
            }
        },
        getSeriesImages: async (parent, args, context, info) => {
            try {
                const { id } = args;
                const SERIES_IMAGES = BASE_URL + `/tv/${id}/images`;
                const request = await axios.get(
                    `${SERIES_IMAGES}?api_key=${API_KEY}`
                );
                const data = await request.data;
                return data;
            } catch (e) {
                ApolloError(e);
            }
        },
        getSeriesTrailer: async (parent, args, context, info) => {
            try {
                const { id } = args;
                const SERIES_TRAILER_API = BASE_URL + `tv/${id}/videos`;
                const request = await axios.get(
                    `${SERIES_TRAILER_API}?api_key=${API_KEY}`
                );
                const data = await request.data.results;
                return data;
            } catch (e) {
                ApolloError(e);
            }
        },
        getSeriesCast: async (parent, args, context, info) => {
            try {
                // https://api.themoviedb.org/3/tv/74074/aggregate_credits?api_key=a2431bdcbb32f54f769ef9c1f7028381
                const { id } = args;
                const SERIES_CAST_API = BASE_URL + `tv/${id}/credits`;
                const request = await axios.get(
                    `${SERIES_CAST_API}?api_key=${API_KEY}`
                );
                const data = await request.data.cast;
                return data;
            } catch (e) {
                ApolloError(e);
            }
        },
        getShowInfo: async (parent, args, context, info) => {
            try {
                const { id } = args;
                const SHOW_API = BASE_URL + `/tv/${id}`;
                const request = await axios.get(
                    `${SHOW_API}?api_key=${API_KEY}`
                );
                const data = await request.data;
                return data;
            } catch (e) {
                ApolloError(e);
            }
        },
        trendingNow: async (parent, args, context, info) => {
            try {
                // https://api.themoviedb.org/3/trending/all/day?api_key=a2431bdcbb32f54f769ef9c1f7028381
                const { media_type } = args;
                const TRENDING_API = BASE_URL + `trending/${media_type}/day`;
                const request = await axios.get(
                    `${TRENDING_API}?api_key=${API_KEY}`
                );
                const data = await request.data.results;
                return data;
            } catch (e) {
                ApolloError(e);
            }
        },
        getMovieInfo: async (parent, args, context, info) => {
            try {
                const { id } = args;
                const MOVIE_INFO_API = BASE_URL + `/movie/${id}`;
                const request = await axios.get(
                    `${MOVIE_INFO_API}?api_key=${API_KEY}`
                );
                const data = request.data;
                return data;
            } catch (e) {
                ApolloError(e);
            }
        },
        getMovieTrailer: async (parent, args, context, info) => {
            try {
                const { id } = args;
                const SERIES_TRAILER_API = BASE_URL + `movie/${id}/videos`;
                const request = await axios.get(
                    `${SERIES_TRAILER_API}?api_key=${API_KEY}`
                );
                const data = await request.data.results;
                return data;
            } catch (e) {
                ApolloError(e);
            }
        },
        getMovieImages: async (parent, args, context, info) => {
            try {
                const { id } = args;
                const SERIES_IMAGES = BASE_URL + `/movie/${id}/images`;
                const request = await axios.get(
                    `${SERIES_IMAGES}?api_key=${API_KEY}`
                );
                const data = await request.data;
                return data;
            } catch (e) {
                ApolloError(e);
            }
        },
        getMovieCast: async (parent, args, context, info) => {
            try {
                const { id } = args;
                const SERIES_CAST_API = BASE_URL + `movie/${id}/credits`;
                const request = await axios.get(
                    `${SERIES_CAST_API}?api_key=${API_KEY}`
                );
                const data = await request.data.cast;
                return data;
            } catch (e) {
                ApolloError(e);
            }
        },
        getMoviesWithJenres: async (parent, args, context, info) => {
            try {
                const { genre } = args;
                const GENERE_MOVIE_API = BASE_URL + `discover/movie`;
                const request = await axios.get(
                    `${GENERE_MOVIE_API}?api_key=${API_KEY}&with_genres=${genre}`
                );
                const data = await request.data.results;
                return data;
            } catch (e) {
                ApolloError(e);
            }
        },
        getShowsWithJenres: async (parent, args, context, info) => {
            try {
                const { genre } = args;
                const GENERE_TV_API = BASE_URL + `discover/tv`;
                const request = await axios.get(
                    `${GENERE_TV_API}?api_key=${API_KEY}&with_genres=${genre}`
                );
                const data = await request.data.results;
                return data;
            } catch (e) {
                ApolloError(e);
            }
        },
        getPersonBasicInfo: async (parnt, args, context, info) => {
            try {
                const { id } = args;
                const PERSON_INFO_API = BASE_URL + `person/${id}`;
                const request = await axios.get(
                    `${PERSON_INFO_API}?api_key=${API_KEY}`
                );
                const data = await request.data;
                return data;
            } catch (e) {
                ApolloError(e);
            }
        },
        getPersonsWork: async (parent, args, context, info) => {
            try {
                const { id } = args;
                const PERSON_WORK_API =
                    BASE_URL + `/person/${id}/combined_credits`;
                const request = await axios.get(
                    `${PERSON_WORK_API}?api_key=${API_KEY}`
                );
                const data = await request.data.cast;
                return data;
            } catch (e) {
                ApolloError(e);
            }
        },
    },
};

module.exports = resolvers;
