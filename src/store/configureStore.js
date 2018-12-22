import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';//引入异步操作
import logger from 'redux-logger'
import reducers from './../reducers';//引入所有的reducers
import axiosMiddle from './axiosConfig'
import {persistStore, persistCombineReducers} from 'redux-persist'
import storage from 'redux-persist/es/storage'// default: localStorage if web, AsyncStorage if react-native

const config = {
    key: 'root',
    storage
};
const abc = function () {
    let reducer = persistCombineReducers(config,reducers);
    if (__DEV__) {
          let store = createStore(
              reducer,
              compose(
                  applyMiddleware(thunk, axiosMiddle, logger),
              )
          );
          let persistor = persistStore(store)
          return {persistor, store};
      } else {
          let store = createStore(
              reducer,
              compose(
                  applyMiddleware(thunk, axiosMiddle),
              )
          );

          if (module.hot) {
              module.hot.accept('./../reducers', () => {
                  store.replaceReducer(reducer);
              })
          }
          let persistor = persistStore(store)
          return {persistor, store};
      }
}();
let {persistor, store} = abc;
export {persistor, store};

