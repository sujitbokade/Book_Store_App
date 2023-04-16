import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    value: 'Sort by relevence',
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        item => item._id === action.payload._id,
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({...action.payload, quantity: 1});
      }
    },

    incrementOrder: (state, action) => {
      const itemInCart = state.cart.find(
        item => item._id === action.payload._id,
      );
      if (itemInCart) {
        if (itemInCart.quantity < itemInCart.stock) {
          itemInCart.quantity++;
        }
      }
    },

    decrementOrder: (state, action) => {
      const itemInCart = state.cart.find(
        item => item._id === action.payload._id,
      );
      if (itemInCart) {
        itemInCart.quantity--;
        if (itemInCart.quantity === 0) {
          state.cart.pop({...action.payload});
        }
      }
    },

    sortFilter: (state, action) => {
      state.value = action.payload;
    },

    checkOut: state => {
      state.cart = [];
    },
  },
});

export const {addToCart, incrementOrder, decrementOrder, sortFilter, checkOut} =
  cartSlice.actions;
export default cartSlice.reducer;
