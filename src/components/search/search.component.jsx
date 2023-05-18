import { Input } from "antd";
const { Search } = Input;

const onSearch = value => console.log(value);

const SearchInput = () => {
  return (
    <Search
      placeholder="Input search text here !"
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
  );
};

export default SearchInput;
