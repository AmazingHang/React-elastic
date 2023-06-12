import { compose, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";

//列出中间件
const middlewares = [
  process.env.NODE_ENV === "development" && thunk,
  logger,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["search"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

//集成中间件
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

//创建redux存储
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);
export const persistor = persistStore(store);
