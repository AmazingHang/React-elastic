import { combineReducers } from "redux";

import { jobsReducer } from "./jobs/jobs.reducer";
import { checksReducer } from "./checkbox/checkbox.reducer";

import { searchReducer } from "./search/search.reducer";

export const rootReducer = combineReducers({
  jobs: jobsReducer,
  checks: checksReducer,
  search: searchReducer,
});
