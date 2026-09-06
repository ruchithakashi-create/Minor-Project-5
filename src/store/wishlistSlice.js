import { createSlice } from "@reduxjs/toolkit";

const savedWishlist = JSON.parse(
  localStorage.getItem("shopcraft-wishlist") || "[]"
);

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState: savedWishlist,

  reducers: {
    toggleWishlist: (state, action) => {
      const product = action.payload;

      const index = state.findIndex(
        (item) => item.id === product.id
      );

      if (index >= 0) {
        state.splice(index, 1);
      } else {
        state.push(product);
      }
    }
  }
});

export const { toggleWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;