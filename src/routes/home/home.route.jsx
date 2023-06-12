import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//渲染组件
import HomePage from "../../components/home/home.component";
//公共项
import { leftSideData, dateFilter } from "../../utils/database/utils";
//actions---------------------------------------------------------------------
import {
  fetchHitsJobsStartAsync,
  fetchTotalJobsStartAsync,
} from "../../store/jobs/jobs.action";
//selectors-------------------------------------------------------------------
import {
  selectTotalJobs_SELECTOR,
  selectHitsJobs_SELECTOR,
} from "../../store/jobs/jobs.selector";
import { selectChecks_SELECTOR } from "../../store/checkbox/checkbox.selector";
import { selectFuzzySearchArray_SELECTOR } from "../../store/search/search.selector";
//------------------------------------------------------------------------------
const Home = () => {
  const dispatch = useDispatch();
  //从redux中获得的 jobs,checks,searchFiled,clearSearch---------------------------
  const hitsFromRedux = useSelector(selectHitsJobs_SELECTOR);
  const totalJobsFromRedux = useSelector(selectTotalJobs_SELECTOR);
  const fuzzySearchArrayFromRedux = useSelector(
    selectFuzzySearchArray_SELECTOR
  );
  const checks = useSelector(selectChecks_SELECTOR);
  //-----------------------------------------------------------------------------
  const [totalJobs, setTotalJobs] = useState(totalJobsFromRedux);
  //从后端获得数据
  useEffect(() => {
    console.log("首次渲染");
    dispatch(fetchTotalJobsStartAsync()).then(() =>
      dispatch(fetchHitsJobsStartAsync())
    );
  }, [dispatch]);
  useEffect(() => {
    setTotalJobs(totalJobsFromRedux);
  }, [totalJobsFromRedux]);
  useEffect(() => {
    const setFilteredLocalJobs = () => {
      const filtedData = dateFilter(checks, totalJobsFromRedux);
      setTotalJobs(filtedData);
    };
    //如果没有选择筛选，则返回原数据
    checks.length === 0 && setTotalJobs(totalJobsFromRedux);
    //如果存在筛选，则返回筛选后的数据
    checks.length !== 0 && setFilteredLocalJobs();
  }, [checks, dispatch, totalJobsFromRedux]);
  //-----------------------------------------------------------------------------
  return (
    <>
      <Outlet />
      <HomePage
        leftSideData={leftSideData}
        rightSideData={hitsFromRedux}
        jobsData={totalJobs}
        fuzzySearchFiled={fuzzySearchArrayFromRedux}
      />
    </>
  );
};
export default Home;
