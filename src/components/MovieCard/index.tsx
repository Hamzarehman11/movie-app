import React from "react";
import style from "./index.module.css";

import { useAppDispatch } from "../../redux/store";
import { getMovieDetail } from "../../redux/reducers/movie-list";

import { useNavigate } from "react-router-dom";

import { Movie } from "models/movie-item";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFetchMovieDetail = (id: string) => {
    dispatch(getMovieDetail(id));
    navigate(`/movie-detail/${movie["#IMDB_ID"]}`);
  };

  return (
    <div
      onClick={() => handleFetchMovieDetail(movie["#IMDB_ID"])}
      className={style["movie-card"]}
    >
      <div className="h-100">
        <img className={style["movie-img"]} src={movie["#IMG_POSTER"]} alt="" />
      </div>
      <h4 className={style["movie-title"]}>{movie["#TITLE"]}</h4>
      <p className={style["movie-actor"]}>{movie["#ACTORS"]}</p>
    </div>
  );
};

export default MovieCard;
