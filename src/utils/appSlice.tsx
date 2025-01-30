import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const appSlice=createSlice({
    name:"toggle",
    initialState,
    reducers:{
        toggleMenu:(state,action)=>{
            return action.payload;
        }
    }
})

export const {toggleMenu} =appSlice.actions;
export default appSlice.reducer;