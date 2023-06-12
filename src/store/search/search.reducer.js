import { SEARCH_TYPE } from "./search.types";

const INITIANL_STATE = {
  historySearch: [],
  isFuzzySearch: false,
  fuzzySearch: "",
  fuzzySearchArray: [],
  error: null,
  isLoading: false,
};

export const searchReducer = (state = INITIANL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_TYPE.SET_HISTORY_SEARCH:
      return { ...state, historySearch: payload };
    case SEARCH_TYPE.SET_FUZZY_SEARCH_ARRAY:
      return { ...state, fuzzySearchArray: payload };
    case SEARCH_TYPE.IS_FUZZY_SEARCH:
      return { ...state, isFuzzySearch: payload };

    case SEARCH_TYPE.FUZZY_SEARCH:
      return { ...state, fuzzySearch: payload };

    case SEARCH_TYPE.FETCH_FUZZY_SEARCH_ARRAY_START:
      return {
        ...state,
        isLoading: true,
      };
    case SEARCH_TYPE.FETCH_FUZZY_SEARCH_ARRAY_SUCCESS:
      return { ...state, isLoading: false, fuzzySearchArray: payload };
    case SEARCH_TYPE.FETCH_FUZZY_SEARCH_ARRAY_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
