import { createAction } from "../../utils/reducer/reducer.utils";
import { SEARCH_TYPE } from "./search.types";
import { getFuzzySearchData } from "../../utils/database/api";

const fetchFuzzySeachesStart = () =>
  createAction(SEARCH_TYPE.FETCH_FUZZY_SEARCH_ARRAY_START);
const fetchFuzzySeachesSuccess = fuzzySeachesArray =>
  createAction(SEARCH_TYPE.FETCH_FUZZY_SEARCH_ARRAY_SUCCESS, fuzzySeachesArray);
const fetchFuzzySeachesFailure = error =>
  createAction(SEARCH_TYPE.FETCH_FUZZY_SEARCH_ARRAY_FAILED, error);

export const setHistorySearch_ACTION = search =>
  createAction(SEARCH_TYPE.SET_HISTORY_SEARCH, search);

export const setIsFuzzySearch_ACTION = isFuzzySearch =>
  createAction(SEARCH_TYPE.IS_FUZZY_SEARCH, isFuzzySearch);

export const setFuzzySearch_ACTION = fuzzySearch =>
  createAction(SEARCH_TYPE.FUZZY_SEARCH, fuzzySearch);

export const setFuzzySearchArray_ACTION = array =>
  createAction(SEARCH_TYPE.SET_FUZZY_SEARCH_ARRAY, array);

export const fetchFuzzySearchArrayStartAsync = fuzzySearch => {
  return async dispatch => {
    dispatch(fetchFuzzySeachesStart());
    try {
      const fuzzySearchArray = await getFuzzySearchData(fuzzySearch);
      dispatch(fetchFuzzySeachesSuccess(fuzzySearchArray));
    } catch (error) {
      dispatch(fetchFuzzySeachesFailure(error));
    }
  };
};
