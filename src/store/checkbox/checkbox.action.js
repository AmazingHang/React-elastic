import { createAction } from "../../utils/reducer/reducer.utils";
import { CHECKS_TYPE } from "./checkbox.types";

export const setReducerChecks = checks =>
  createAction(CHECKS_TYPE.SET_CHECKS, checks);

export const reduceReducerChecks = checks =>
  createAction(CHECKS_TYPE.REDUCE_CHECKS, checks);

export const clearReducerChecks = () =>
  createAction(CHECKS_TYPE.CLEAR_CHECKS, []);
