import { createAction } from "../../utils/reducer/reducer.utils";
import { SEARCH_TYPE } from "./search.types";

export const setReducerSearchFiled = searchFiled =>
  createAction(SEARCH_TYPE.SET_SEARCH_FIELD, searchFiled);

export const clearReducerSearch = clearStatus =>
  createAction(SEARCH_TYPE.CLEAR_SEARCH, clearStatus);
