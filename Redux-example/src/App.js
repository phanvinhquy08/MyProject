import React from 'react';
import './App.css';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import Counter from './Counter';
import Modal from './Modal';
import Products from './Products'
import Countreducer from "./reducers/CountReducer";
import ModalReducer from './reducers/ModalReducer';
import ProductReducer from './reducers/ProductReducer';

const middleware = [thunk];


function App() {
  // khời tạo state
  // const defaultState = {
  //   count: 27,
  //   name: 'quý'
  // }
  // đầu tiên tạo reducer trước

  // sau đó tạo store
  const store = createStore(combineReducers({
    countState: Countreducer,
    modalState: ModalReducer,
    productState: ProductReducer
  }),composeWithDevTools(applyMiddleware(...middleware)));


  return (
    <Provider store={store}>
      <Counter />
      <Modal/>
      <Products/>
    </Provider>
  );
}

export default App;
