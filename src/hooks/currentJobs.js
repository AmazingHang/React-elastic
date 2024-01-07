import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dateFilter from "../utils/dataFilter";
//actions---------------------------------------------------------------------

//selectors-------------------------------------------------------------------
import { selectTotalJobs_SELECTOR } from "../store/jobs/jobs.selector";
import { selectChecks_SELECTOR } from "../store/checkbox/checkbox.selector";
//------------------------------------------------------------------------------
const useJobs = () => {
  const dispatch = useDispatch();
  const totalJobsFromRedux = useSelector(selectTotalJobs_SELECTOR);
  const [currentJobs, setCurrentJobs] = useState(totalJobsFromRedux);
  const checks = useSelector(selectChecks_SELECTOR);

  useEffect(() => {
    const setFilteredLocalJobs = () => {
      const filteredData = dateFilter(checks, totalJobsFromRedux);
      setCurrentJobs(filteredData);
    };
    //如果没有选择筛选，则返回原数据
    checks.length === 0 && setCurrentJobs(totalJobsFromRedux);
    //如果存在筛选，则返回筛选后的数据
    checks.length !== 0 && setFilteredLocalJobs();
  }, [checks, dispatch, totalJobsFromRedux]);

  return { currentJobs };
};
export default useJobs;
