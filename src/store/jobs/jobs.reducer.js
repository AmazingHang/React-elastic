import { JOBS_TYPE } from "./jobs.types";

const INITIANL_STATE = {
  totalJobs: [],
  isLoading: false,
  error: null,
  hitJobs: [],
};

export const jobsReducer = (state = INITIANL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case JOBS_TYPE.FETCH_JOBS_START:
      return {
        ...state,
        isLoading: true,
      };
    case JOBS_TYPE.FETCH_HITS_JOBS_START:
      return {
        ...state,
        isLoading: true,
      };
    case JOBS_TYPE.FETCH_SEARCH_JOBS_START:
      return {
        ...state,
        isLoading: true,
      };
    case JOBS_TYPE.FETCH_JOBS_SUCCESS:
      return { ...state, isLoading: false, totalJobs: payload };
    case JOBS_TYPE.FETCH_HITS_JOBS_SUCCESS:
      return { ...state, isLoading: false, hitJobs: payload };
    case JOBS_TYPE.FETCH_JOBS_FAILED:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
