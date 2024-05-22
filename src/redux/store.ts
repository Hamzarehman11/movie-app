import { configureStore } from "@reduxjs/toolkit";

import MovieReducer from "../redux/reducers/movie-list";

import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    movie: MovieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector = useSelector;
