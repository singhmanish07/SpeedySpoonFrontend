import { createSlice } from "@reduxjs/toolkit";

const logSlice = createSlice({
    name: 'userlog',
    initialState: {
        userState: "login",
    },

    reducers: {
        userLogin: (state, action) => {
            state.userState = action.payload;
        },
        userLogout: (state, action) => {
            state.userState = action.payload;
        }
    }
});

export const { userLogin, userLogout } = logSlice.actions;

export default logSlice.reducer;
