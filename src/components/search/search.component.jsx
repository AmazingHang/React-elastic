import { useState } from "react";

import { Input } from "antd";
const { Search } = Input;

const SearchInput = () => {
  // eslint-disable-next-line no-unused-vars
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
      disabled
    />
  );
};

export default SearchInput;
