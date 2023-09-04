import { CHECKS_TYPE } from "./checkbox.types";

const INITIANL_STATE = {
  checks: [],
};
//前台传参数，redux负责对数据进行处理
export const checksReducer = (state = INITIANL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    //设置筛选
    case CHECKS_TYPE.SET_CHECKS:
      return { ...state, checks: payload };
    //处理减少的筛选
    case CHECKS_TYPE.REDUCE_CHECKS:
      const reducedChecks = state.checks.filter(
        item => !payload.includes(item)
      );
      return { ...state, checks: reducedChecks };
    //清除筛选
    case CHECKS_TYPE.CLEAR_CHECKS:
      return { ...state, checks: [] };
    default:
      return state;
  }
};
