import { combineReducers } from 'redux';
import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  TOGGLE_LOGIN_MENU,
  IS_ADMIN,
  REMOVE_FROM_NUMBERINSTORE,
  ADD_BACK_TO_NUMBERINSTORE,
  EMPTY_BASKET,
  CHANGE_PAGE
} from '../actions/constants.js'


const productReducer = (state = [], action) => {

  switch (action.type) {
    case REMOVE_FROM_NUMBERINSTORE:
      let newObj = {
        id: action.id,
        nb: action.nb
      }

      let index = state.findIndex(item => item.id === newObj.id); //kontrollerar om det produkten redan finns
      if (index >= 0) {
        let numbers = state[index].numberinstore - newObj.nb
        let newState = [...state];
        newState[index].numberinstore = numbers
        return newState;
      }
      return [...state, newObj];

    case ADD_BACK_TO_NUMBERINSTORE:
      let obj = {
        id: action.id,
        nb: action.nb
      }

      let theIndex = state.findIndex(item => item.id === obj.id); //kontrollerar om det produkten redan finns
      if (theIndex >= 0) {
        let numbers = state[theIndex].numberinstore + obj.nb
        let newState = [...state];
        newState[theIndex].numberinstore = numbers
        return newState;
      }
      return [...state, obj];
    default:
      return state;
  }
}

const customerReducer = (state = [], action) => {
  switch (action.type) {

    case ADD_TO_BASKET:
      let newObj = {
        id: action.id,
        numberInBasket: action.nb
      }

      let index = state.findIndex(item => item.id === newObj.id); //kontrollerar om det produkten redan finns
      if (index >= 0) {
        let numbers = state[index].numberInBasket + 1
        let newState = [...state];
        newState[index].numberInBasket = numbers
        return newState;
      }

      return [...state, newObj];
    case REMOVE_FROM_BASKET:

      let obj = {
        id: action.id,
        numberInBasket: action.nb
      }

      let theIndex = state.findIndex(item => item.id === obj.id); //kontrollerar om det produkten redan finns
      if (theIndex >= 0) {
        let numbers = state[theIndex].numberInBasket - 1
        let newState = [...state];
        newState[theIndex].numberInBasket = numbers
        return newState;
      }

      return [...state, obj];

    case EMPTY_BASKET:
      let empty = [];
      state = empty;
      return state;

    default:
      return state;
  }

}

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN_MENU:
      return { ...state,
        "showLogin": !state.showLogin
      }

      break;
    case IS_ADMIN:
      let isAdmin = action.isAdmin
      return { ...state,
        "isAdmin": isAdmin
      }
    default:
      return state;
  }
  return state;
}

const pageReducer = (state="products", action) => {
  switch (action.type) {
    case CHANGE_PAGE :
      return action.currentPage;
      break;
    default:
      return state;
  }
}



const rootReducer = combineReducers({
  basket: customerReducer,
  products: productReducer,
  user: userReducer,
  currentPage: pageReducer,
});




export default rootReducer;
