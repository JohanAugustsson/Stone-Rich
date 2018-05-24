import { combineReducers } from 'redux';
import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  TOGGLE_LOGIN_MENU,
  IS_ADMIN,
  REMOVE_FROM_NUMBERINSTORE,
  ADD_BACK_TO_NUMBERINSTORE,
  EMPTY_BASKET,
  CHANGE_PAGE,
  REMOVE_PRODUCT,
  ADD_PRODUCT,
  UNDO_BASKET,
  REDO_BASKET
} from '../actions/constants.js'



const productReducer = (state = {past : [], present : [], future : []} , action) => {
  if(action){
    var stateToReturn, index;
    var newObj = {
      id: action.id,
      nb: action.nb
    }
  }

  switch (action.type) {

    case REMOVE_PRODUCT:
      let newState = state.present.filter((x)=> x.id!==action.id);
      return {
        past : [...state.past, state.present ],
        present :  newState ,
        future : []

      }

    case ADD_PRODUCT:
      return{
        past : [...state.past, state.present],
        present : [...state.present, action.obj],
        future : []
      }

    case REMOVE_FROM_NUMBERINSTORE:

      index = state.present.findIndex(item => item.id === newObj.id); //kontrollerar om det produkten redan finns
      if (index >= 0) {
        let numbers = state.present[index].numberinstore - newObj.nb
        stateToReturn = [...state.present]
        stateToReturn[index].numberinstore = numbers
      }else {
        stateToReturn = [...state.present , newObj]
      }

      return {
        past : [...state.past, state.present ],
        present :  stateToReturn ,
        future : []

      }

    case ADD_BACK_TO_NUMBERINSTORE:

      index = state.present.findIndex(item => item.id === newObj.id); //kontrollerar om det produkten redan finns
      if (index >= 0) {
        let numbers = state.present[index].numberinstore + newObj.nb
        stateToReturn = [...state.present]
        stateToReturn[index].numberinstore = numbers
      } else {
        stateToReturn = [...state.present , newObj];
      }

      return {
        past : [...state.past, state.present ],
        present :  stateToReturn ,
        future : []

      }

    default:
      return state;
  }
}

const customerReducer = (state = {past : [], present : [], future : []}, action) => {
  if(action){
    var stateToReturn, index;
    var newObj = {
      id: action.id,
      numberInBasket: action.nb
    }
  }

  switch (action.type) {


    case ADD_TO_BASKET: //ok

      index = state.present.findIndex(item => item.id === newObj.id); //kontrollerar om det produkten redan finns

      if (index >= 0) {
        let numbers = state.present[index].numberInBasket + 1
        stateToReturn =  [...state.present]
        stateToReturn[index] = {...state.present[index]} // gör en djup kopiering av valt element i arrayen
        stateToReturn[index].numberInBasket = numbers
      }else {
        stateToReturn =  [...state.present , newObj];
      }

      return {
        past : [...state.past, state.present ],
        present : stateToReturn,
        future : []
      }


    case REMOVE_FROM_BASKET:

      index = state.present.findIndex(item => item.id === newObj.id); //kontrollerar om det produkten redan finns
      if (index >= 0) {
        let numbers = state.present[index].numberInBasket - 1
        stateToReturn =  [...state.present]
        stateToReturn[index].numberInBasket = numbers
      } else {
        stateToReturn =  [...state.present ,  newObj];
      }

      return {
        past : [...state.past, state.present ],
        present : stateToReturn,
        future : []
      }

    case EMPTY_BASKET:

      return {
        past : [...state.past, state.present ],
        present : [],
        future : []
      }

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
  currentPage: pageReducer
});




export default rootReducer;
