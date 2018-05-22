import {ADD_TO_BASKET, REMOVE_FROM_BASKET} from './constants.js'

let addToBasket = ( nb, id ) => {
  return (
    {
      type: ADD_TO_BASKET,
      nb,
      id
    }
  )
}


export { addToBasket };
