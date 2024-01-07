import { useDispatch, useSelector } from "react-redux";

//改变redux中的数据---------------------------------------------------------------
import {
  setIsFuzzySearch_ACTION,
  setFuzzySearch_ACTION,
  fetchFuzzySearchArrayStartAsync,
  setHistorySearch_ACTION,
  setFuzzySearchArray_ACTION,
} from "../../store/search/search.action";
import {
  fetchHitsJobsStartAsync,
  fetchTotalJobsStartAsync,
  fetchSearchedJobsStartAsync,
} from "../../store/jobs/jobs.action";
//selectors---------------------------------------------------------------------
import {
  selectIsLoading_SELECTOR,
  selectIsFuzzySearch_SELECTOR,
  selectFuzzySearch_SELECTOR,
  selectHistorySearch_SELECTOR,
} from "../../store/search/search.selector";

//-------------------------------------------------------------------------------
import FuzzySearchList from "../fuzzy-search-list/fuzzy-search-list.component";
//样式----------------------------------------------------------------------------
import { Input, Button } from "antd";
import { useEffect, useRef } from "react";

const { Search } = Input;

const SearchFrom = () => {
  const dispatch = useDispatch();
  //-----------------------------------------------------------------------
  const isFuzzySearch = useSelector(selectIsFuzzySearch_SELECTOR);
  const fuzzySearchFromRedux = useSelector(selectFuzzySearch_SELECTOR);
  const isLoadingFromRedux = useSelector(selectIsLoading_SELECTOR);
  const historySearchFromRedux = useSelector(selectHistorySearch_SELECTOR);
  //-----------------------------------------------------------------------
  const formRef = useRef(null);
  //
  const onClickHandler = () => {
    fuzzySearchFromRedux.length === 0 &&
      historySearchFromRedux.length !== 0 &&
      dispatch(setFuzzySearchArray_ACTION(historySearchFromRedux)) &&
      dispatch(setIsFuzzySearch_ACTION(true)) &&
      console.log("历史搜索");
  };
  const onSearchHandler = value => {
    console.log("搜索中");
    const updatedHistorySearch = [...historySearchFromRedux];
    if (!updatedHistorySearch.includes(value)) {
      updatedHistorySearch.push(value);
    }
    dispatch(setIsFuzzySearch_ACTION(false));
    dispatch(fetchSearchedJobsStartAsync(value))
      .then(() => dispatch(fetchHitsJobsStartAsync()))
      .then(() => dispatch(setHistorySearch_ACTION(updatedHistorySearch)));
  };
  const onChangeHandler = e => {
    console.log("模糊搜索中");
    dispatch(setFuzzySearch_ACTION(e.target.value));
    dispatch(setIsFuzzySearch_ACTION(true));
  };
  //清除搜索结果，改变redux中clearSearch的值
  const onClearHandler = () => {
    console.log("清空数据");
    dispatch(setFuzzySearch_ACTION(""));
    dispatch(fetchTotalJobsStartAsync());
  };

  const handleOutsideClick = event => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      // 点击的目标元素在表单之外
      formRef.current.blur(); // 让表单失去焦点
      dispatch(setIsFuzzySearch_ACTION(false));
    }
  };
  useEffect(() => {
    // 添加事件监听器，在点击事件时调用处理函数
    document.addEventListener("click", handleOutsideClick);
    // 在组件卸载时移除事件监听器
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    fuzzySearchFromRedux.length !== 0 &&
      dispatch(fetchFuzzySearchArrayStartAsync(fuzzySearchFromRedux));
    fuzzySearchFromRedux.length === 0 &&
      dispatch(setIsFuzzySearch_ACTION(false));
  }, [dispatch, fuzzySearchFromRedux]);
  //-----------------------------------------------------------------------------
  const suffix = (
    <Button size="small" type="ghost" onClick={onClearHandler}>
      &#10005;
    </Button>
  );
  //-----------------------------------------------------------------------------
  return (
    <form style={{ display: "grid", marginBottom: "5%" }} ref={formRef}>
      <Search
        placeholder="Input search text here !"
        enterButton="搜索"
        value={fuzzySearchFromRedux}
        suffix={suffix}
        loading={isLoadingFromRedux}
        size="large"
        onBlur={e => {
          e.stopPropagation();
        }}
        onClick={onClickHandler}
        onChange={onChangeHandler}
        onSearch={onSearchHandler}
      />
      {isFuzzySearch && <FuzzySearchList />}
    </form>
  );
};

export default SearchFrom;
