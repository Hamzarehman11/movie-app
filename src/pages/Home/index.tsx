import React from "react";
import MovieList from "components/MovieList";
import SearchInput from "components/Search";

function HomePage() {
  return (
    <div className={"container mt-5"}>
      <div className="row">
        <div className="col-12 mb-5 d-flex justify-content-center">
          <SearchInput />
        </div>
      </div>

      <MovieList />
    </div>
  );
}

export default HomePage;
