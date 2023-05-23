import { combineReducers } from "redux";

import { jobsReducer } from "./jobs/jobs.reducer";
import { checksReducer } from "./checkbox/checkbox.reducer";

export const rootReducer = combineReducers({
  jobs: jobsReducer,
  checks: checksReducer,
});
