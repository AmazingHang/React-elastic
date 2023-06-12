import { createSelector } from "reselect";

const selectSearchesFromReducer = state => state.search;

export const selectHistorySearch_SELECTOR = createSelector(
  [selectSearchesFromReducer],
  searchSlice => searchSlice.historySearch
);

export const selectIsFuzzySearch_SELECTOR = createSelector(
  [selectSearchesFromReducer],
  searchSlice => searchSlice.isFuzzySearch
);

export const selectFuzzySearch_SELECTOR = createSelector(
  [selectSearchesFromReducer],
  searchSlice => searchSlice.fuzzySearch
);

export const selectFuzzySearchArray_SELECTOR = createSelector(
  [selectSearchesFromReducer],
  searchSlice => searchSlice.fuzzySearchArray
);

export const selectIsLoading_SELECTOR = createSelector(
  [selectSearchesFromReducer],
  searchSlice => searchSlice.isLoading
);
