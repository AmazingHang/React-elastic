import { createSelector } from "reselect";

const selectJobsFromReducer = state => state.jobs;

export const selectTotalJobs_SELECTOR = createSelector(
  [selectJobsFromReducer],
  jobsSlice => jobsSlice.totalJobs
);

export const selectIsJobsLoading = createSelector(
  [selectJobsFromReducer],
  jobsSlice => jobsSlice.isLoading
);

export const selectHitsJobs_SELECTOR = createSelector(
  [selectJobsFromReducer],
  jobsSlice => jobsSlice.hitJobs
);
