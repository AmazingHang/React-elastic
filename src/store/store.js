import { compose, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
//它允许你在 Redux 中分发函数，而不仅仅是对象。函数可以包含异步逻辑，并且在完成异步操作后再分发普通的 action 对象。
import thunk from "redux-thunk";
// import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

//列出中间件
const middlerWares = [thunk];
//集成中间件
const composeEnhancers = compose(applyMiddleware(...middlerWares));
//创建redux存储
export const store = createStore(rootReducer, undefined, composeEnhancers);
