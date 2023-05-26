import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

const Home = () => {
  const dispatch = useDispatch();
  //从后端获得的数据
  const jobsArray = getDataFromDatabase();
  //从redux中获得的数据
  const totalJobs = useSelector(selectTotalJobs);
  //传入组件的数据
  const [jobsData, setJobsData] = useState(totalJobs);

  useEffect(() => {
    const getJobsArray = () => {
      dispatch(setTotalJobs(jobsArray));
    };
    getJobsArray();
  }, [dispatch, jobsArray]);

  useEffect(() => {
    setJobsData(totalJobs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalJobs]);

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
