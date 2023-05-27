import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//redux相关

//渲染组件
import HomePage from "../../components/home/home.component";
//公共项
import { leftSideData, dateFilter } from "../../utils/database/utils";
//发送axios请求
import {
  getSearchedData,
  getHitsdData,
  getDataFromDatabase,
} from "../../utils/database/api";
//jobs-redux组件-action
import { setReducerTotalJobs } from "../../store/jobs/jobs.action";
import { setReducerSearchFiled } from "../../store/search/search.action";
//jobs-redux组件-selector
import { selectReducerTotalJobs } from "../../store/jobs/jobs.selector";
import {
  selectReducerSearchField,
  selectReducerClear,
} from "../../store/search/search.selector";
import { selectReducerChecks } from "../../store/checkbox/checkbox.selector";

const Home = () => {
  const dispatch = useDispatch();
  //从后端获得的初始数据
  const jobsArray = getDataFromDatabase();
  //从redux中获得的 jobs,checks,searchFiled,clearSearch
  const totalJobs = useSelector(selectReducerTotalJobs);
  const checks = useSelector(selectReducerChecks);
  const searchField = useSelector(selectReducerSearchField);
  const isSearchCleared = useSelector(selectReducerClear);
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
      dispatch(setReducerTotalJobs(jobsArray));
    };
    const jobsSearcherSetter = () => {
      getSearchedData().then(data => dispatch(setReducerTotalJobs(data)));
    };
    //搜索框里没有内容，则录入原始数据
    searchField.length === 0 && setReducerJobsArray();
    //搜索框里有内容，则录入搜索结果
    searchField.length !== 0 && jobsSearcherSetter();
  }, [dispatch, jobsArray, searchField]);

  //数据筛选后传入到组件中
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

  //清除热门搜索的影响
  useEffect(() => {
    const clearLocalJobs = () => {
      dispatch(setReducerSearchFiled(""));
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
      />
    </>
  );
};
export default Home;
