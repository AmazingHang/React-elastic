import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//渲染组件
import HomePage from "../../components/home/home.component";
//公共项
import { leftSideData, dateFilter } from "../../utils/database/utils";
//发送axios请求从API中获得数据
import {
  getSearchedData,
  getHitsdData,
  getDataFromDatabase,
  getFuzzySearchData,
} from "../../utils/database/api";
//jobs-redux组件-action
import { setTotalJobs_ACTION } from "../../store/jobs/jobs.action";
import {
  setSearch_ACTION,
  setFuzzySearchField_ACTION,
} from "../../store/search/search.action";
//jobs-redux组件-selector
import { selectTotalJobs_SELECTOR } from "../../store/jobs/jobs.selector";
import {
  selectSearch_SELECTOR,
  selectIsCleared_SELECTOR,
  selectFuzzySearch_SELECTOR,
  selectFuzzySearchField_SELECTOR,
} from "../../store/search/search.selector";
import { selectChecks_SELECTOR } from "../../store/checkbox/checkbox.selector";

const Home = () => {
  const dispatch = useDispatch();
  //从后端获得的初始数据
  const jobsArray = getDataFromDatabase();
  //从redux中获得的 jobs,checks,searchFiled,clearSearch
  const totalJobs = useSelector(selectTotalJobs_SELECTOR);
  const checks = useSelector(selectChecks_SELECTOR);
  const searches = useSelector(selectSearch_SELECTOR);
  const isSearchCleared = useSelector(selectIsCleared_SELECTOR);

  const fuzzySearch = useSelector(selectFuzzySearch_SELECTOR);
  const fuzzySearchFiled = useSelector(selectFuzzySearchField_SELECTOR);
  //传入组件的数据
  const [jobsData, setJobsData] = useState(totalJobs);
  const [rightSideData, setRightSideData] = useState([]);

  //设置热门搜索
  useEffect(() => {
    getHitsdData().then(data => setRightSideData(data));
  }, []);
  //数据录入redux中
  useEffect(() => {
    const setReducerJobsArray = () => {
      dispatch(setTotalJobs_ACTION(jobsArray));
    };
    const jobsSearcherSetter = () => {
      //console.log(searches);
      getSearchedData().then(data => dispatch(setTotalJobs_ACTION(data)));
    };
    //搜索框里没有内容，则录入原始数据
    searches.length === 0 && setReducerJobsArray();
    //搜索框里有内容，则录入搜索结果
    searches.length !== 0 && jobsSearcherSetter();
  }, [dispatch, jobsArray, searches]);
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
  //模糊搜索使用的数据，其中fuzzySearch由search-input设置
  useEffect(() => {
    const setFuzzySearch = () => {
      // console.log(fuzzySearch);
      getFuzzySearchData().then(data =>
        dispatch(setFuzzySearchField_ACTION(data))
      );
    };
    setFuzzySearch();
  }, [dispatch, fuzzySearch]);
  //清除搜索带来的影响
  useEffect(() => {
    const clearLocalJobs = () => {
      dispatch(setSearch_ACTION(""));
    };
    clearLocalJobs();
  }, [dispatch, isSearchCleared]);

  return (
    <>
      <Outlet />
      <HomePage
        leftSideData={leftSideData}
        rightSideData={rightSideData}
        jobsData={jobsData}
        fuzzySearchLength={fuzzySearch.length}
        fuzzySearchFiled={fuzzySearchFiled}
      />
    </>
  );
};
export default Home;
