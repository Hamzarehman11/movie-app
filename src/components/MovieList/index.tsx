import React, { useEffect } from "react";
import style from "./index.module.css";
import MovieCard from "components/MovieCard";

import { useAppDispatch, useAppSelector } from "../../redux/store";

import {
  selectMovieList,
  selectFetchingState,
  selectSearchText,
} from "../../redux/selectors/movie-list";
import { getMovieList } from "../../redux/reducers/movie-list";
import Loader from "components/Loader";

function MovieList() {
  const dispatch = useAppDispatch();
  const movieList = useAppSelector(selectMovieList);
  const movieFetching = useAppSelector(selectFetchingState);
  const searchText = useAppSelector(selectSearchText);

  const filteredMovies = movieList.filter((movie) => {
    return movie["#TITLE"].toLowerCase().includes(searchText.toLowerCase());
  });

  const renderMovieList = filteredMovies.map((movie, index) => {
    return (
      <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
        <MovieCard movie={movie} />
      </div>
    );
  });

  useEffect(() => {
    dispatch(getMovieList());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style["movie-list"]}>
      <div className="row">
        {movieFetching ? (
          <Loader />
        ) : filteredMovies.length <= 0 ? (
          <div>
            <h6 className="fst-italic text-white">Oops! No movies found.</h6>
          </div>
        ) : (
          renderMovieList
        )}
      </div>
    </div>
  );
}

export default MovieList;
