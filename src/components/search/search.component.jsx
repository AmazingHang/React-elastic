import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "antd";
const { Search } = Input;

const SearchInput = () => {
  const dispatch = useDispatch();
  const [searchField, setSearchField] = useState("");

  const onSearchChange = value => {
    const searchedFieldString = value;
    setSearchField(searchedFieldString);
  };

  return (
    <Search
      placeholder="Input search text here !"
      enterButton="Search"
      size="large"
      onSearch={onSearchChange}
    />
  );
};

export default SearchInput;
