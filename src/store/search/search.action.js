import { createAction } from "../../utils/reducer/reducer.utils";
import { SEARCH_TYPE } from "./search.types";

export const setSearch_ACTION = search =>
  createAction(SEARCH_TYPE.SET_SEARCH, search);

export const setIsClearedSearch_ACTION = isClearedSearch =>
  createAction(SEARCH_TYPE.IS_CLEARED_SEARCH, isClearedSearch);

export const setIsFuzzySearch_ACTION = isFuzzySearch =>
  createAction(SEARCH_TYPE.IS_FUZZY_SEARCH, isFuzzySearch);

export const setFuzzySearch_ACTION = fuzzySearch =>
  createAction(SEARCH_TYPE.FUZZY_SEARCH, fuzzySearch);

export const setFuzzySearchArray_ACTION = fuzzySearchArray =>
  createAction(SEARCH_TYPE.FUZZY_SEARCH_ARRAY, fuzzySearchArray);

export const setIsLoading_ACTION = isLoading =>
  createAction(SEARCH_TYPE.IS_LOADING, isLoading);
