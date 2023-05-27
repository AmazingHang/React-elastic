import { SEARCH_TYPE } from "./search.types";

const INITIANL_STATE = {
  searchFiled: "",
  clearSearch: false,
};

export const searchReducer = (state = INITIANL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_TYPE.SET_SEARCH_FIELD:
      return { ...state, searchFiled: payload };
    case SEARCH_TYPE.CLEAR_SEARCH:
      return { ...state, clearSearch: payload };
    default:
      return state;
  }
};
