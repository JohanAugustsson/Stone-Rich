import { combineReducers } from 'redux';
import {ADD_TO_BASKET, REMOVE_FROM_BASKET} from '../actions/constants.js'


const adminReducer = (state=[],action) => {
  return state;
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




const rootReducer = combineReducers({
  basket : customerReducer,
  products : adminReducer
});




export default rootReducer;