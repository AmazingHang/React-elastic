import { createSelector } from "reselect";

const selectChecksFromReducer = state => state.checks;
//createSelector 的主要优势在于它可以缓存计算结果，
//只有在输入选择器的输入值发生变化时，它才会重新计算。
//这可以减少不必要的计算，提高性能，特别是在具有复杂计算的场景下。
//例如，在 Redux 中，当你的 Redux store 中的数据发生变化时，Redux 的 mapStateToProps 函数会被调用，但如果你使用了 createSelector，只有当与 selectJobsFromReducer 相关的部分数据发生变化时，selectTotalJobs_SELECTOR 才会重新计算，从而减少了不必要的重新计算和渲染。

export const selectChecks_SELECTOR = createSelector(
  [selectChecksFromReducer],
  checksSlice => checksSlice.checks
);
