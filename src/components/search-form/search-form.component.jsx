import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FuzzySearchList from "../fuzzy-search-list/fuzzy-search-list.component";
//改变redux中的数据s---------------------------------------------------------------
import {
  setSearch_ACTION,
  setIsClearedSearch_ACTION,
  setIsFuzzySearch_ACTION,
  setFuzzySearch_ACTION,
  setIsLoading_ACTION,
} from "../../store/search/search.action";
//selectors---------------------------------------------------------------
import {
  selectSearch_SELECTOR,
  selectIsLoading_SELECTOR,
  selectIsFuzzySearch_SELECTOR,
  selectFuzzySearch_SELECTOR,
} from "../../store/search/search.selector";
//样式s--------------------------------------------------------------------
import { Input, Form, Button } from "antd";

const { Search } = Input;

const SearchFrom = ({ fuzzyFiledData }) => {
  const dispatch = useDispatch();
  //-----------------------------------------------------------------------
  const isDropDownOpenFromRedux = useSelector(selectIsFuzzySearch_SELECTOR);
  const searchesFromRedux = useSelector(selectSearch_SELECTOR);
  const fuzzySearchFromRedux = useSelector(selectFuzzySearch_SELECTOR);
  const isLoadingFromRedux = useSelector(selectIsLoading_SELECTOR);
  //-----------------------------------------------------------------------
  const [searchString, setSearchString] = useState(searchesFromRedux);
  const [isFuzzySearch, setIsFuzzySearch] = useState(isDropDownOpenFromRedux);
  const [isSearchCleared, setIsSearchCleared] = useState(false);
  const [fuzzySearch, setFuzzySearch] = useState("");
  const [loading, setLoading] = useState(isLoadingFromRedux);
  //-----------------------------------------------------------------------
  const onSearchHandler = value => {
    setLoading(true);
    setSearchString(value);
  };
  const onChangeHandler = e => {
    //之前出问题主要因为没有触发isFuzzySearch的钩子，现在设置和全局状态保持一致
    isDropDownOpenFromRedux !== isFuzzySearch &&
      setIsFuzzySearch(isDropDownOpenFromRedux);
    setFuzzySearch(e.target.value);
  };

  const onClearHandler = () => {
    setIsSearchCleared(!isSearchCleared);
  };

  const suffix = (
    <Button size="small" type="ghost" onClick={onClearHandler}>
      &#10005;
    </Button>
  );

  //清除搜索结果，改变redux中clearSearch的值
  useEffect(() => {
    const submitClear = () => {
      setFuzzySearch("");
      dispatch(setIsClearedSearch_ACTION(isSearchCleared));
    };
    submitClear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isSearchCleared]);

  //提交搜索值，改变redux中search的值
  useEffect(() => {
    const submitSearch = () => {
      dispatch(setSearch_ACTION(searchString));
      setIsFuzzySearch(false);
    };
    submitSearch();
  }, [dispatch, searchString]);

  //决定是否开启模糊搜索框，改变redux中isFuzzySearch的值
  useEffect(() => {
    const setIsFuzzySearch = () => {
      dispatch(setIsFuzzySearch_ACTION(isFuzzySearch));
    };
    setIsFuzzySearch();
  }, [dispatch, isFuzzySearch]);

  //提交模糊搜索的搜索值，改变redux中fuzzySearch的值
  useEffect(() => {
    const submitFuzzySearch = () => {
      setIsFuzzySearch(true);
      dispatch(setFuzzySearch_ACTION(fuzzySearch));
    };
    fuzzySearch.length !== 0 && submitFuzzySearch();
    fuzzySearch.length === 0 && setIsFuzzySearch(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, fuzzySearch]);

  //当其他地方修改搜索时，在搜索框更新数据
  useEffect(() => {
    const updateSearchStringFromSearch = () => {
      setFuzzySearch(searchesFromRedux);
    };
    searchesFromRedux.length !== 0 && updateSearchStringFromSearch();
  }, [dispatch, searchesFromRedux]);
  useEffect(() => {
    const updateSearchStringFromFuzzy = () => {
      setFuzzySearch(fuzzySearchFromRedux);
    };
    fuzzySearchFromRedux.length !== 0 && updateSearchStringFromFuzzy();
  }, [dispatch, fuzzySearchFromRedux]);

  useEffect(() => {
    const submitLoading = () => {
      dispatch(setIsLoading_ACTION(loading));
    };
    submitLoading();
  }, [dispatch, loading]);

  return (
    <Form style={{ marginBottom: "5%" }}>
      <Search
        placeholder="Input search text here !"
        enterButton="搜索"
        value={fuzzySearch}
        suffix={suffix}
        loading={isLoadingFromRedux}
        size="large"
        onChange={onChangeHandler}
        onSearch={onSearchHandler}
      />
      {isDropDownOpenFromRedux && (
        <FuzzySearchList fuzzyFiledData={fuzzyFiledData} />
      )}
    </Form>
  );
};

export default SearchFrom;
