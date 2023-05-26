import { CHECKS_TYPE } from "./checkbox.types";

const INITIANL_STATE = {
  checks: [],
};
//前台传参数，redux负责对数据进行处理
export const checksReducer = (state = INITIANL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CHECKS_TYPE.SET_CHECKS:
      console.log("set_checks: payload: " + payload);
      return { ...state, checks: payload };
    case CHECKS_TYPE.REDUCE_CHECKS:
      console.log("reducer_checks: diff: " + payload);
      const reducedChecks = state.checks.filter(
        item => !payload.includes(item)
      );
      return { ...state, checks: reducedChecks };
    case CHECKS_TYPE.CLEAR_CHECKS:
      console.log("clear_checks: clear");
      return { ...state, checks: [] };
    default:
      return state;
  }
};
