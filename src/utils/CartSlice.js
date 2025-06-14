import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.items) {
        state.items = []; 
      }
      state.items.push(action.payload);
    },

    removeItem: (state) => {
      if (!state.items) {
        state.items = []; 
      }
      state.items.pop();
    },

    clearCart: (state) => {
      if (!state.items) {
        state.items = []; 
      }
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
