import { combineReducers } from 'redux';
import {ADD_TO_BASKET, REMOVE_FROM_BASKET , TOGGLE_LOGIN_MENU, IS_ADMIN,REMOVE_FROM_NUMBERINSTORE} from '../actions/constants.js'


const productReducer = (state=[],action) => {

  switch(action.type){
    case REMOVE_FROM_NUMBERINSTORE :
    let newObj = {
      id : action.id,
      nb : action.nb
    }

    let index = state.findIndex(item => item.id === newObj.id); //kontrollerar om det produkten redan finns
    if(index >= 0 ) {
      let numbers = state[index].numberinstore - 1
      let newState = [...state];
      newState[index].numberinstore = numbers
      return newState;
  }
  default : return state;
}
}

const customerReducer = (state=[],action) => {
  switch (action.type) {

    case ADD_TO_BASKET :
      let newObj = {
        id : action.id,
        numberInBasket : action.nb
      }

      let index = state.findIndex(item => item.id === newObj.id); //kontrollerar om det produkten redan finns
      if(index >= 0 ) {
        let numbers = state[index].numberInBasket + 1
        let newState = [...state];
        newState[index].numberInBasket = numbers
        return newState;
      }

      return [ ...state, newObj ];

    default :
      return state;
  }

}

const userReducer = (state={},action) => {
  switch (action.type) {
    case  TOGGLE_LOGIN_MENU :
      return {...state, "showLogin" : !state.showLogin}

      break;
    case IS_ADMIN :
      let isAdmin = action.isAdmin
      return {...state, "isAdmin" : true}
    default:
      return state;
  }
  return state;
}



const rootReducer = combineReducers({
  basket : customerReducer,
  products : productReducer,
  user : userReducer,
});




export default rootReducer;
