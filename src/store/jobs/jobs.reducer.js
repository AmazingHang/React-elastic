import { JOBS_TYPE } from "./jobs.types";

const INITIANL_STATE = {
  totalJobs: [],
};

export const jobsReducer = (state = INITIANL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case JOBS_TYPE.SET_TOTAL_JOBS:
      return { ...state, totalJobs: payload };
    default:
      return state;
  }
};
