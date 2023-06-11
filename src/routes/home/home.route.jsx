import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//渲染组件
import HomePage from "../../components/home/home.component";
//公共项
//import originJobsData from "../../utils/database/origin-data";
import { leftSideData, dateFilter } from "../../utils/database/utils";
//actions---------------------------------------------------------------------
import {
  fetchHitsJobsStartAsync,
  fetchTotalJobsStartAsync,
  fetchSearchedJobsStartAsync,
} from "../../store/jobs/jobs.action";
import { fetchFuzzySearchArrayStartAsync } from "../../store/search/search.action";
//selectors-------------------------------------------------------------------
import {
  selectTotalJobs_SELECTOR,
  selectHitsJobs_SELECTOR,
} from "../../store/jobs/jobs.selector";
import {
  selectSearch_SELECTOR,
  selectFuzzySearch_SELECTOR,
  selectFuzzySearchArray_SELECTOR,
} from "../../store/search/search.selector";
import { selectChecks_SELECTOR } from "../../store/checkbox/checkbox.selector";
//------------------------------------------------------------------------------
const Home = () => {
  const dispatch = useDispatch();
  //从redux中获得的 jobs,checks,searchFiled,clearSearch---------------------------
  const totalJobs = useSelector(selectTotalJobs_SELECTOR);
  const checks = useSelector(selectChecks_SELECTOR);
  const hits = useSelector(selectHitsJobs_SELECTOR);
  const searches = useSelector(selectSearch_SELECTOR);
  const fuzzySearch = useSelector(selectFuzzySearch_SELECTOR);
  const fuzzySearchArray = useSelector(selectFuzzySearchArray_SELECTOR);
  //-----------------------------------------------------------------------------
  const [jobsData, setJobsData] = useState(totalJobs);
  //-----------------------------------------------------------------------------
  //从后端获得数据
  useEffect(() => {
    dispatch(fetchHitsJobsStartAsync());
    dispatch(fetchTotalJobsStartAsync());
  }, [dispatch]);
  //数据录入redux中
  useEffect(() => {
    //搜索框里有内容，则录入搜索结果
    searches.length === 0 && dispatch(fetchTotalJobsStartAsync());
    searches.length !== 0 && dispatch(fetchSearchedJobsStartAsync(searches));
  }, [dispatch, searches]);
  //数据筛选后传入到内容组件中，其中checks由left-sidebar设置
  useEffect(() => {
    const setFilteredLocalJobs = () => {
      const filtedData = dateFilter(checks, totalJobs);
      setJobsData(filtedData);
    };
    //如果没有选择筛选，则返回原数据
    checks.length === 0 && setJobsData(totalJobs);
    //如果存在筛选，则返回筛选后的数据
    checks.length !== 0 && setFilteredLocalJobs();
  }, [checks, totalJobs]);
  //用fuzzySearch的值改变fuzzSearchArray的值
  useEffect(() => {
    fuzzySearch.length !== 0 &&
      dispatch(fetchFuzzySearchArrayStartAsync(fuzzySearch));
  }, [dispatch, fuzzySearch]);
  //-----------------------------------------------------------------------------
  return (
    <>
      <Outlet />
      <HomePage
        leftSideData={leftSideData}
        rightSideData={hits}
        jobsData={jobsData}
        fuzzySearchFiled={fuzzySearchArray}
      />
    </>
  );
};
export default Home;
