const { gql } = require("apollo-server-express");

const typedefs = gql`
    scalar Date
    type Genre {
        name: String
    }
    type Season {
        air_date: Date
        episode_count: Int
        name: String
        overview: String
        poster_path: String
        season_number: Int
    }
    type Show {
        id: ID
        media_type: String
        name: String
        backdrop_path: String
        overview: String
        popularity: Float
        first_air_date: Date
        original_language: String
        poster_path: String
        title: String
        number_of_episodes: Int
        number_of_seasons: Int
        vote_average: Float
        original_name: String
        genres: [Genre]
        seasons: [Season]
    }
    type Episode {
        episode_number: Int
        name: String
        overview: String
        still_path: String
    }
    type Backdrop {
        file_path: String
    }
    type Poster {
        file_path: String
    }
    type SeriesImages {
        backdrops: [Backdrop]
        posters: [Poster]
    }
    type Trailer {
        name: String
        site: String
        key: String
    }
    type SeriesCast {
        id: ID
        original_name: String
        profile_path: String
        gender: Int
        character: String
        popularity: Float
    }
    type Card {
        id: ID
        poster_path: String
    }
    type Trending {
        id: ID
        name: String
        poster_path: String
        backdrop_path: String
        overview: String
        title: String
        media_type: String
    }
    type Movie {
        id: ID
        backdrop_path: String
        title: String
        original_title: String
        overview: String
        genres: [Genre]
        vote_average: Float
    }
    type MovieCast {
        id: ID
        original_name: String
        profile_path: String
        gender: Int
        character: String
        popularity: Float
    }
    type MovieImages {
        backdrops: [Backdrop]
        posters: [Poster]
    }
    type BasicInfo {
        id: ID
        biography: String
        birthday: Date
        name: String
        place_of_birth: String
        profile_path: String
        gender: Int
        known_for_deprtment: String
        homepage: String
        popularity: Float
    }
    type ActorWork {
        id: ID
        poster_path: String
        media_type: String
    }
    type Query {
        search(query: String): [Show]
        getSeasonDetails(id: ID, season: Int): [Episode]
        getSeriesTrailer(id: ID): [Trailer]
        getSeriesCast(id: ID): [SeriesCast]
        getShowInfo(id: ID): Show
        trendingNow(media_type: String): [Trending]
        getMovieInfo(id: ID): Movie
        getMovieTrailer(id: ID): [Trailer]
        getMovieCast(id: ID): [MovieCast]
        getMoviesWithJenres(genre: Int): [Card]
        getShowsWithJenres(genre: Int): [Card]
        getPersonBasicInfo(id: ID): BasicInfo
        getPersonsWork(id: ID): [ActorWork]
        getSeriesImages(id: ID): SeriesImages
        getMovieImages(id: ID): MovieImages
    }
`;

module.exports = typedefs;
