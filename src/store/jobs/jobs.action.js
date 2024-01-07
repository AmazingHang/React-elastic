import { createAction } from "../../utils/reducer/reducer.utils";
import { JOBS_TYPE } from "./jobs.types";
//发送axios请求从API中获得数据----------------------------------------------------
import {
  getHitsData,
  getDataFromDatabase,
  getSearchedData,
} from "../../apis/jobs.js";

const fetchJobsStart = () => createAction(JOBS_TYPE.FETCH_JOBS_START);
const fetchHitsJobsStart = () => createAction(JOBS_TYPE.FETCH_HITS_JOBS_START);
const fetchSearchJobsStart = () =>
  createAction(JOBS_TYPE.FETCH_SEARCH_JOBS_START);

const fetchJobsSuccess = jobsArray =>
  createAction(JOBS_TYPE.FETCH_JOBS_SUCCESS, jobsArray);

const fetchHitsJobsSuccess = hitsData =>
  createAction(JOBS_TYPE.FETCH_HITS_JOBS_SUCCESS, hitsData);

const fetchJobsFailure = error =>
  createAction(JOBS_TYPE.FETCH_JOBS_FAILED, error);

export const setTotalJobs_ACTION = total => {
  createAction(JOBS_TYPE.SET_TOTAL_JOBS, total);
};

export const fetchTotalJobsStartAsync = () => {
  return async dispatch => {
    dispatch(fetchJobsStart());
    try {
      const jobsArray = await getDataFromDatabase();
      dispatch(fetchJobsSuccess(jobsArray));
    } catch (error) {
      dispatch(fetchJobsFailure(error));
    }
  };
};

export const fetchHitsJobsStartAsync = () => {
  return async dispatch => {
    dispatch(fetchHitsJobsStart());
    try {
      const hitsData = await getHitsData();
      dispatch(fetchHitsJobsSuccess(hitsData));
    } catch (error) {
      dispatch(fetchJobsFailure(error));
    }
  };
};

export const fetchSearchedJobsStartAsync = search => {
  return async dispatch => {
    dispatch(fetchSearchJobsStart());
    try {
      const jobsArray = await getSearchedData(search);
      dispatch(fetchJobsSuccess(jobsArray));
    } catch (error) {
      dispatch(fetchJobsFailure(error));
    }
  };
};
