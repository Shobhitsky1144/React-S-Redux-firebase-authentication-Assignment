import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/RootReducer.js";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginUserReducer from "./reducers/authUserReducer";

const middleware = [thunk];

const persistConfig = {
  key: "root",
  whitelist: ["loginUserReducer"], //Things u want to persist
  // blacklist: [""], //Things u dont

  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);
export default store;
