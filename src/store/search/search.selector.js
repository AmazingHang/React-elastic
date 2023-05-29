export const selectSearch_SELECTOR = state => state.search.search;

export const selectIsCleared_SELECTOR = state => state.search.isClearedSearch;

export const selectIsFuzzySearch_SELECTOR = state => state.search.isFuzzySearch;

export const selectFuzzySearch_SELECTOR = state => state.search.fuzzySearch;

export const selectFuzzySearchField_SELECTOR = state =>
  state.search.fuzzySearchFiled;
