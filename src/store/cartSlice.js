import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(
  localStorage.getItem("shopcraft-cart") || "[]"
);

const cartSlice = createSlice({
  name: "cart",

  initialState: savedCart,

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingProduct = state.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({
          ...product,
          quantity: 1
        });
      }
    },

    removeFromCart: (state, action) => {
      return state.filter(
        (item) => item.id !== action.payload
      );
    },

    increaseQty: (state, action) => {
      const item = state.find(
        (product) => product.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQty: (state, action) => {
      const item = state.find(
        (product) => product.id === action.payload
      );

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        const index = state.findIndex(
          (product) => product.id === action.payload
        );

        state.splice(index, 1);
      }
    },

    clearCart: () => {
      return [];
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;