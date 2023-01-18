import { createSlice } from "@reduxjs/toolkit";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const userSlice = createSlice({
    name: 'user' , 
    initialState: {
        user : null
    } ,

    reducers : {
            loginUser: (state , actions) => {
                state.user  = actions.payload
            },

            logoutUser: (state) => {
                state.user  = null
            },
    }
})

export const {loginUser ,logoutUser } = userSlice.actions;
export default userSlice.reducer;