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
  SAVE_CHANGED_PRODUCT
} from './constants.js'

let addToBasket = (nb, id) => {
  return ({
    type: ADD_TO_BASKET,
    nb,
    id
  })
}

let removeFromBasket = (nb,id) =>{
  return({
    type:REMOVE_FROM_BASKET,
    nb,
    id
  })
}
let emptyBasket = () =>{
  return ({
    type: EMPTY_BASKET
  })
}
let addBackToNumberInStore = (nb,id) =>{
  return({
    type:ADD_BACK_TO_NUMBERINSTORE,
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

let changePage = (page) => {
  return ({
    type: CHANGE_PAGE,
    currentPage : page
  })
}

let removeProduct = (id) => ({ // paranterser för att det ska tolkas som objekt
    type:REMOVE_PRODUCT,
    id
})

let addProduct = (obj) => ({
    type:ADD_PRODUCT,
    obj
})

let saveChangedProduct = (obj, id) => ({
    type: SAVE_CHANGED_PRODUCT,
    obj,
    id
})

export {
  addToBasket,
  removeFromBasket,
  toggleLoginMenu,
  isAdmin,
  removeFromNumberInstore,
  addBackToNumberInStore,
  emptyBasket,
  changePage,
  removeProduct,
  addProduct,
  saveChangedProduct
};
