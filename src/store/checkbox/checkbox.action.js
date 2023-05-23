import { createAction } from "../../utils/reducer/reducer.utils";
import { CHECKS_TYPE } from "./checkbox.types";

export const setChecks = checks => createAction(CHECKS_TYPE.SET_CHECKS, checks);

export const reduceChecks = checks =>
  createAction(CHECKS_TYPE.REDUCE_CHECKS, checks);

export const clearChecks = () => createAction(CHECKS_TYPE.CLEAR_CHECKS, []);
