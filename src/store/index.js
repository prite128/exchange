import rootSaga from "../saga";
import localforage from "localforage";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import RootReducer from "./reducers";

const storage =  localforage 
const persistConfig = {
  storage,
  key: 'root',
  whitelist: ["ExchangeReducer"]
};
const SagaMiddleware = createSagaMiddleware();
// const persistedReducer = persistReducer(persistConfig, RootReducer);
const store = createStore(RootReducer, compose(applyMiddleware(SagaMiddleware)
))
// const persistor = persistStore(store);
SagaMiddleware.run(rootSaga);
export { store };
