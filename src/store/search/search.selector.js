import { createSelector } from "reselect";

const selectSearchesFromReducer = state => state.search;

export const selectHistorySearch_SELECTOR = createSelector(
  [selectSearchesFromReducer],
  searchSlice => {
    const historySearch = searchSlice.historySearch;
    const recentSearches = historySearch.slice(-5); //限制展示的历史搜索的数量
    const uniqueSearches = new Set(recentSearches);
    const result = [...uniqueSearches].reverse();
    return result;
  }
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
