import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { Route, Routes } from "react-router-dom";

import HomePage from "pages/Home";
import MovieDetailsPage from "pages/Movie";

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie-detail/:id" element={<MovieDetailsPage />} />
        </Routes>
      </Provider>
    </>
  );
};

export default App;
