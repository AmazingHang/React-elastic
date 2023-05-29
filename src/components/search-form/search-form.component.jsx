import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FuzzySearchField from "../fuzzy-search-field/fuzzy-search-field.component";
//改变redux中的数据
import {
  setSearch_ACTION,
  setIsClearedSearch_ACTION,
  setIsFuzzySearch_ACTION,
  setFuzzySearch_ACTION,
} from "../../store/search/search.action";
import { selectIsFuzzySearch_SELECTOR } from "../../store/search/search.selector";
//样式
import { Input, Form, Button } from "antd";

const { Search } = Input;

const SearchFrom = ({ fuzzySearchLength, fuzzyFiledData }) => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsFuzzySearch_SELECTOR);
  const [searchString, setSearchString] = useState("");
  const [isFuzzySearch, setIsFuzzySearch] = useState(isCartOpen);
  const [isSearchCleared, setIsSearchCleared] = useState(false);
  const [fuzzySearch, setFuzzySearch] = useState("");

  const onSearchHandler = value => {
    setSearchString(value);
  };
  const onChangeHandler = e => {
    //之前出问题主要因为没有触发isFuzzySearch的钩子，现在设置和全局状态保持一致
    isCartOpen !== isFuzzySearch && setIsFuzzySearch(isCartOpen);
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

  //改变redux中clearSearch的值，清除搜索结果
  useEffect(() => {
    const submitClear = () => {
      setIsFuzzySearch(false);
      setFuzzySearch("");
      dispatch(setIsClearedSearch_ACTION(isSearchCleared));
      dispatch(setIsFuzzySearch_ACTION(isFuzzySearch));
    };
    submitClear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isSearchCleared]);

  //改变redux中search的值，改变搜索值
  useEffect(() => {
    const submitSearch = () => {
      dispatch(setSearch_ACTION(searchString));
      setIsFuzzySearch(false);
    };
    submitSearch();
  }, [dispatch, searchString]);

  //改变redux中isFuzzySearch的值，决定是否开启模糊搜索
  useEffect(() => {
    const setIsFuzzySearch = () => {
      dispatch(setIsFuzzySearch_ACTION(isFuzzySearch));
    };
    setIsFuzzySearch();
  }, [dispatch, isFuzzySearch]);

  //改变redux中fuzzySearch的值，改变模糊搜索的搜索值
  useEffect(() => {
    const submitFuzzySearch = () => {
      setIsFuzzySearch(true);
      dispatch(setFuzzySearch_ACTION(fuzzySearch));
    };
    fuzzySearch.length !== 0 && submitFuzzySearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, fuzzySearch]);

  return (
    <Form>
      <Form.Item>
        <Search
          placeholder="Input search text here !"
          enterButton="搜索"
          value={fuzzySearch}
          suffix={suffix}
          size="large"
          onChange={onChangeHandler}
          onSearch={onSearchHandler}
        />
      </Form.Item>
      <Form.Item>
        {isCartOpen && <FuzzySearchField fuzzyFiledData={fuzzyFiledData} />}
      </Form.Item>
    </Form>
  );
};

export default SearchFrom;
