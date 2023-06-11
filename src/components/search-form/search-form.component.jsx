import { useDispatch, useSelector } from "react-redux";
//改变redux中的数据---------------------------------------------------------------
import {
  setSearch_ACTION,
  setIsFuzzySearch_ACTION,
  setFuzzySearch_ACTION,
} from "../../store/search/search.action";
//selectors---------------------------------------------------------------------
import {
  selectIsLoading_SELECTOR,
  selectIsFuzzySearch_SELECTOR,
  selectFuzzySearch_SELECTOR,
} from "../../store/search/search.selector";
//-------------------------------------------------------------------------------
import FuzzySearchList from "../fuzzy-search-list/fuzzy-search-list.component";
//样式----------------------------------------------------------------------------
import { Input, Form, Button } from "antd";

const { Search } = Input;

const SearchFrom = ({ fuzzyFiledData }) => {
  const dispatch = useDispatch();
  //-----------------------------------------------------------------------
  const isDropDownOpenFromRedux = useSelector(selectIsFuzzySearch_SELECTOR);
  const fuzzySearchFromRedux = useSelector(selectFuzzySearch_SELECTOR);
  const isLoadingFromRedux = useSelector(selectIsLoading_SELECTOR);

  //-----------------------------------------------------------------------
  const onSearchHandler = value => {
    dispatch(setSearch_ACTION(value));
    dispatch(setIsFuzzySearch_ACTION(false));
  };
  const onChangeHandler = e => {
    dispatch(setFuzzySearch_ACTION(e.target.value));
    dispatch(setIsFuzzySearch_ACTION(true));
  };
  //清除搜索结果，改变redux中clearSearch的值
  const onClearHandler = () => {
    dispatch(setFuzzySearch_ACTION(""));
    dispatch(setSearch_ACTION(""));
  };
  //-----------------------------------------------------------------------------
  const suffix = (
    <Button size="small" type="ghost" onClick={onClearHandler}>
      &#10005;
    </Button>
  );
  //-----------------------------------------------------------------------------
  return (
    <Form style={{ marginBottom: "5%" }}>
      <Search
        placeholder="Input search text here !"
        enterButton="搜索"
        value={fuzzySearchFromRedux}
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
