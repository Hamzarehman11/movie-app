import React from "react";
import style from "./index.module.css";

import { useAppSelector } from "../../redux/store";
import {
  selectMovieDetail,
  selectFetchingState,
} from "../../redux/selectors/movie-list";

import Loader from "components/Loader";
import { Link } from "react-router-dom";

interface Actor {
  "@type": string;
  name: string;
  url: string;
}

function MovieDetailsPage() {
  const movieDetail = useAppSelector(selectMovieDetail);
  const movieFetching = useAppSelector(selectFetchingState);

  const renderActorName = movieDetail?.short?.actor?.map((actor: Actor) => {
    return actor.name;
  });

  return (
    <div className={"container m-auto py-5 text-white"}>
      <Link className={style["back-link"]} to={"/"}>
        ⇽ Back
      </Link>
      {movieFetching ? (
        <Loader />
      ) : (
        <div className="row">
          <div className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-between">
            <img
              className={style["movie-page-img"]}
              src={movieDetail?.short?.image}
              alt=""
            />
          </div>
          <div className="col-12 col-lg-7 d-flex flex-column gap-5 p-5 p-lg-0 mx-0 mx-lg-4">
            <div className="row">
              <div className="col-12">
                <h1>{movieDetail?.short?.name}</h1>
                <h6 className="fst-italic">Description:</h6>
                <p>{movieDetail?.short?.description}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h6 className="fst-italic">Actors Name:</h6>
                <p>{renderActorName?.join(", ")}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="fst-italic">Rating:</p>
                <p>{movieDetail?.short?.review?.reviewRating?.ratingValue}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h6 className="fst-italic">Keywords</h6>
                <p>{movieDetail?.short?.keywords}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetailsPage;
