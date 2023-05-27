import { createAction } from "../../utils/reducer/reducer.utils";
import { JOBS_TYPE } from "./jobs.types";

export const setReducerTotalJobs = totalJobs =>
  createAction(JOBS_TYPE.SET_TOTAL_JOBS, totalJobs);
