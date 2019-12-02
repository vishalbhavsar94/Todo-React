import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';

const intialState = {};

const Middleware = [thunk];

const store = createStore(
  rootReducer,
  intialState,
  compose(
      applyMiddleware(...Middleware),
      //window.__REDUX_DEVTOOLS_EXTENTION__&& Window.__REDUX_DEVTOOLS_EXTENTION__()
  )  
)

export default store;