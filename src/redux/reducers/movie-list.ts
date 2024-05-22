import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MovieDetailItem } from "models/movie-detail-item";
import { Movie } from "models/movie-item";

interface InitialState {
  fetchingMovieList: boolean;
  movieList: Movie[];
  movieDetail: MovieDetailItem | undefined;
  searchText: string;
}

const initialState: InitialState = {
  fetchingMovieList: false,
  movieList: [],
  movieDetail: undefined,
  searchText: "",
};

export const getMovieList = createAsyncThunk(
  "user/getMovie",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://search.imdbot.workers.dev/?q=`);
      return response.data;
    } catch (err: any) {
      return console.error("Error", err);
    }
  }
);

export const getMovieDetail = createAsyncThunk(
  "user/getMovieDetail",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://search.imdbot.workers.dev/?tt=${id}`
      );
      return response.data;
    } catch (err: any) {
      return console.error("Error", err);
    }
  }
);

export const movieSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    searchMovies(state, action) {
      state.searchText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovieList.pending, (state) => {
      state.fetchingMovieList = true;
    });
    builder.addCase(getMovieList.fulfilled, (state, action) => {
      state.fetchingMovieList = false;
      state.movieList = action.payload.description;
    });
    builder.addCase(getMovieList.rejected, (state, action) => {
      state.fetchingMovieList = false;
    });
    builder.addCase(getMovieDetail.pending, (state) => {
      state.fetchingMovieList = true;
    });
    builder.addCase(getMovieDetail.fulfilled, (state, action) => {
      state.fetchingMovieList = false;
      state.movieDetail = action.payload;
    });
    builder.addCase(getMovieDetail.rejected, (state, action) => {
      state.fetchingMovieList = false;
    });
  },
});

const { actions } = movieSlice;
export const { searchMovies } = actions;

export default movieSlice.reducer;
