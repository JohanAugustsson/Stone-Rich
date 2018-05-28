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
  REDO_BASKET,
  SAVE_CHANGED_PRODUCT,
  UNDO_PRODUCT,
  REDO_PRODUCT
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


    case UNDO_PRODUCT :
      const previous = state.past[state.past.length - 1]
      const newPast =  state.past.slice(0, state.past.length - 1)

      return {
        past: newPast,
        present: previous,
        future: [state.present, ...state.future]
      }


    case REDO_PRODUCT :

      const next = state.future[0]
      const newFuture = state.future.slice(1)
      return {
        past: [...state.past, state.present],
        present: next,
        future: newFuture
      }

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
        stateToReturn[index] = {...state.present[index]} // gör en djup kopiering av valt element i arrayen
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
        stateToReturn[index] = {...state.present[index]} // gör en djup kopiering av valt element i arrayen
        stateToReturn[index].numberinstore = numbers
      } else {
        stateToReturn = [...state.present , newObj];
      }

      return {
        past : [...state.past, state.present ],
        present :  stateToReturn ,
        future : []

      }

    case SAVE_CHANGED_PRODUCT:
      index = state.present.findIndex(item => item.id === action.obj.id); //kontrollerar om det produkten redan finns
      if (index >= 0) {
        stateToReturn = [...state.present]
        stateToReturn[index] = action.obj
      } else {
        console.log("hittades ej");
        return state; // produkten hittades ej
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
      id : action.id,
      numberInBasket : action.nb,
      type : action.type
    }
  }

  switch (action.type) {

    case UNDO_BASKET :

    const previous = state.past[state.past.length - 1]
    const newPast =  state.past.slice(0, state.past.length - 1)
    return {
      past: newPast,
      present: previous,
      future: [state.present, ...state.future]
    }


    case REDO_BASKET :

    const next = state.future[0]
    const newFuture = state.future.slice(1)
    return {
      past: [...state.past, state.present],
      present: next,
      future: newFuture
    }




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
        stateToReturn[index] = {...state.present[index]} // gör en djup kopiering av valt element i arrayen
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

    case IS_ADMIN:
      let isAdmin = action.isAdmin
      return { ...state,
        "isAdmin": isAdmin
      }
    default:
      return state;
  }

}

const pageReducer = (state="products", action) => {
  switch (action.type) {
    case CHANGE_PAGE :
      return action.currentPage;

    default:
      return state;
  }
}


const historyActionsReducer = (state=[], action) => {
  return [...state, action.type ]
}



const rootReducer = combineReducers({
  basket: customerReducer,
  products: productReducer,
  user: userReducer,
  currentPage: pageReducer,
  historyActions: historyActionsReducer
});




export default rootReducer;
