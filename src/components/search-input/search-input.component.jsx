import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

//改变redux中的数据
import {
  setReducerSearchFiled,
  clearReducerSearch,
} from "../../store/search/search.action";
//样式
import { Input } from "antd";

import { CloseCircleFilled } from "@ant-design/icons";
const { Search } = Input;

const SearchInput = () => {
  const dispatch = useDispatch();
  const [searchField, setSearchField] = useState("");
  const [isSearchCleared, setIsSearchCleared] = useState(false);

  const onSearchChange = value => {
    setSearchField(value);
  };

  const onClearSearch = () => {
    setIsSearchCleared(!isSearchCleared);
  };

  const suffix = (
    <CloseCircleFilled
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
      onClick={onClearSearch}
    />
  );

  //改变redux中searchFiled的值
  useEffect(() => {
    const submitSearchField = () => {
      dispatch(setReducerSearchFiled(searchField));
    };
    submitSearchField();
  }, [dispatch, searchField]);
  //改变redux中clearSearch的值
  useEffect(() => {
    const submitClear = () => {
      dispatch(clearReducerSearch(isSearchCleared));
    };
    submitClear();
  }, [dispatch, isSearchCleared]);

  return (
    <Search
      placeholder="Input search text here !"
      enterButton="Search"
      suffix={suffix}
      allowClear
      size="large"
      onSearch={onSearchChange}
    />
  );
};

export default SearchInput;
