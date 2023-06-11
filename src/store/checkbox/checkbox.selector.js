import { createSelector } from "reselect";

const selectChecksFromReducer = state => state.checks;

export const selectChecks_SELECTOR = createSelector(
  [selectChecksFromReducer],
  checksSlice => checksSlice.checks
);

export const selectIsClearChecks_SELECTOR = createSelector(
  [selectChecksFromReducer],
  checksSlice => checksSlice.isClear
);
