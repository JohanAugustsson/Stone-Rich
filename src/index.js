import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from "redux";
import {Provider} from "react-redux";
import productList from "./mocks/products.json";
import rootReducer from "./reducers/reducers";
const initialState = {
  basket: {
    past:[],
    present:[],
    future:[]
  },
  user : {
    password:"ADMIN",
    isAdmin : false,
    showLogin: false
  },
  products: {
    past:[],
    present:[...productList],
    future:[]
  },
  currentPage: "products"
}
const store =  createStore(rootReducer,initialState,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
