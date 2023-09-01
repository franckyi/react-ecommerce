// // import { createSlice } from '@reduxjs/toolkit';
// // import { configureStore } from '@reduxjs/toolkit';
// import redux from 'redux';

// // DEFINE THE createStore() METHOD
// export const createStore = redux.legacy_createStore

// // ACTION
// export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
// export function receiveProducts() {
//     return {
//         type: RECEIVE_PRODUCTS
//     }
// }

// // DEFINE THE INITIAL STATE
// export const initialState = {
//     loading: false,
//     products: [],
//     error: ''
// }

// // REDUCER
// export const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case RECEIVE_PRODUCTS:
//             return {
//                 loading: true,
//                 products: state.products.concat([]),
//                 error: ''
//             }
//         default:
//             return state;
//     }
// }

// // CREATE THE STORE
// export const store = createStore(reducer)
// console.log('initial state', store.getState())

// // SUBSCRIBE TO THE STORE
// export const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))

// // TRIGGER ACTION TEST
// // store.dispatch(receiveProducts())

// // TO UNSUBSCRIBE CALL FN RETURNED BY SUBSCRIPTION
// unsubscribe()
