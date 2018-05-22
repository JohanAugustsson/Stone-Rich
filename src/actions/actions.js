import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  TOGGLE_LOGIN_MENU,
  IS_ADMIN,
  REMOVE_FROM_NUMBERINSTORE
} from './constants.js'

let addToBasket = (nb, id) => {
  return ({
    type: ADD_TO_BASKET,
    nb,
    id
  })
}
let removeFromNumberInstore = (nb, id) => {
  return ({
    type: REMOVE_FROM_NUMBERINSTORE,
    nb,
    id
  })
}

let toggleLoginMenu = () => {
  return ({
    type: TOGGLE_LOGIN_MENU
  })
}

let isAdmin = (isAdmin) => {
  return ({
    type: IS_ADMIN,
    isAdmin
  })
}

export {
  addToBasket,
  toggleLoginMenu,
  isAdmin,
  removeFromNumberInstore
};
