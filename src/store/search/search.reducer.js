import { SEARCH_TYPE } from "./search.types";

const INITIANL_STATE = {
  search: "",
  isClearedSearch: false,
  isFuzzySearch: false,
  fuzzySearch: "",
  fuzzySearchFiled: [],
};

export const searchReducer = (state = INITIANL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_TYPE.SET_SEARCH:
      return { ...state, search: payload };

    case SEARCH_TYPE.IS_CLEARED_SEARCH:
      return { ...state, isClearedSearch: payload };

    case SEARCH_TYPE.IS_FUZZY_SEARCH:
      return { ...state, isFuzzySearch: payload };

    case SEARCH_TYPE.FUZZY_SEARCH:
      return { ...state, fuzzySearch: payload };

    case SEARCH_TYPE.FUZZY_SEARCH_FIELD:
      return { ...state, fuzzySearchFiled: payload };

    default:
      return state;
  }
};
