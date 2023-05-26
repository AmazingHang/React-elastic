import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//redux相关

//渲染组件
import HomePage from "../../components/home/home.component";
//数据：其中的 leftSideData,rightSideData,contentData 将被代编写的函数替换
import {
  leftSideData,
  rightSideData,
  getDataFromDatabase,
} from "../../utils/database/database.utils";
//jobs-redux组件
import { selectTotalJobs } from "../../store/jobs/jobs.selector";
import { setTotalJobs } from "../../store/jobs/jobs.action";
import { selectChecks } from "../../store/checkbox/checkbox.selector";

const dateFilter = (checks, totalJobs) => {
  const filteredJobsData = totalJobs.filter(job => {
    let filterFiled = true; // 默认为满足条件
    if (
      checks.includes("百度") ||
      checks.includes("腾讯") ||
      checks.includes("阿里")
    ) {
      filterFiled =
        filterFiled && checks.some(check => job.company.includes(check));
    }
    if (
      checks.includes("北京市") ||
      checks.includes("上海市") ||
      checks.includes("深圳市") ||
      checks.includes("大连市") ||
      checks.includes("成都市") ||
      checks.includes("重庆市")
    ) {
      filterFiled =
        filterFiled && checks.some(check => job.location.includes(check));
    }
    if (
      checks.includes("校招") ||
      checks.includes("日常") ||
      checks.includes("AIDU项目")
    ) {
      filterFiled =
        filterFiled && checks.some(check => job.type.includes(check));
    }
    if (
      checks.includes("技术") ||
      checks.includes("产品") ||
      checks.includes("用户体验") ||
      checks.includes("专业服务和管理支持")
    ) {
      filterFiled =
        filterFiled && checks.some(check => job.category.includes(check));
    }
    return filterFiled;
  });

  return filteredJobsData;
};

const Home = () => {
  const dispatch = useDispatch();
  //从后端获得的数据
  const jobsArray = getDataFromDatabase();
  //从redux中获得的数据
  const totalJobs = useSelector(selectTotalJobs);
  const checks = useSelector(selectChecks);
  //传入组件的数据
  const [jobsData, setJobsData] = useState(totalJobs);

  useEffect(() => {
    const getJobsArray = () => {
      dispatch(setTotalJobs(jobsArray));
    };
    getJobsArray();
  }, [dispatch, jobsArray]);

  useEffect(() => {
    const setJobs = () => {
      setJobsData(dateFilter(checks, totalJobs));
    };
    if (checks.length === 0) {
      setJobsData(totalJobs);
    } else setJobs();
  }, [checks, totalJobs]);

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
