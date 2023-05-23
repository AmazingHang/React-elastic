import React from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//渲染组件
import HomePage from "../../components/home/home.component";
//数据：其中的 leftSideData,rightSideData,contentData 将被代编写的函数替换
import {
  leftSideData,
  rightSideData,
  contentData,
  getDataFromDatabase,
} from "../../utils/database/database.utils";
//jobs-redux组件
import { selectTotalJobs } from "../../store/jobs/jobs.selector";

import { setTotalJobs } from "../../store/jobs/jobs.action";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getJobsArray = async () => {
      const jobsArray = await getDataFromDatabase();
      dispatch(setTotalJobs(jobsArray));
    };
    getJobsArray();
  }, [dispatch]);

  // eslint-disable-next-line no-unused-vars
  const totalJobs = useSelector(selectTotalJobs);

  return (
    <>
      <Outlet />
      <HomePage
        leftSideData={leftSideData}
        rightSideData={rightSideData}
        contentData={contentData}
      />
    </>
  );
};
export default Home;
