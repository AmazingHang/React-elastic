import { createAction } from "../../utils/reducer/reducer.utils";
import { CHECKS_TYPE } from "./checkbox.types";

export const setChecks_ACTION = checks =>
  createAction(CHECKS_TYPE.SET_CHECKS, checks);

export const reduceChecks_ACTION = checks =>
  createAction(CHECKS_TYPE.REDUCE_CHECKS, checks);

export const setIsClearChecks_ACTION = isClear => {
  createAction(CHECKS_TYPE.IS_CLEAR_CHECKS, isClear);
};

export const clearChecks_ACTION = () =>
  createAction(CHECKS_TYPE.CLEAR_CHECKS, []);
