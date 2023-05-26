import { createAction } from "../../utils/reducer/reducer.utils";
import { JOBS_TYPE } from "./jobs.types";

export const setTotalJobs = totalJobs =>
  createAction(JOBS_TYPE.SET_TOTAL_JOBS, totalJobs);

export const setFilteredJobs = filterdJobs =>
  createAction(JOBS_TYPE.SET_FILTERED_JOBS, filterdJobs);
