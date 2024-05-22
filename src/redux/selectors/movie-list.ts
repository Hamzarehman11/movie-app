import { RootState } from '../store';
export function selectMovieList(state: RootState) {
  return state.movie.movieList;
}

export function selectFetchingState(state: RootState) {
  return state.movie.fetchingMovieList;
}


export function selectMovieDetail(state: RootState) {
  return state.movie.movieDetail;
}


export function selectSearchText(state: RootState) {
  return state.movie.searchText;
}