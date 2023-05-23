import { CHECKS_TYPE } from "./checkbox.types";

const INITIANL_STATE = {
  checks: [],
};

export const checksReducer = (state = INITIANL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CHECKS_TYPE.SET_CHECKS:
      //    console.log(payload);
      return { ...state, checks: [...state.checks, ...payload] };
    default:
      return state;
  }
};
