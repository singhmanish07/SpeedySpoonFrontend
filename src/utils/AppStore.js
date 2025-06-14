import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import logReducer from './userLogSlice'
import { saveState, loadState } from "./LoadState";

const persistedState = loadState();
const AppStore = configureStore({
    reducer: {
        cart: cartReducer,
        userlog: logReducer,
    },
    preloadedState: persistedState,
});

AppStore.subscribe(() => {
    saveState({
      // cart: AppStore.getState().cart,
      userlog: AppStore.getState().userlog,
    });
  });
export default AppStore;