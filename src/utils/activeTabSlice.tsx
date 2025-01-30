import { createSlice } from "@reduxjs/toolkit";

type Tab = "basic" | "advance" | "curriculum" | "publish";

interface activeTab{
    tab:Tab;
}

const initialState:activeTab={
    tab:"basic"
}

const activeTabSlice=createSlice({
    name:"tabSelect",
    initialState,
    reducers:{
        setActiveTab:(state,action)=>{
            state.tab=action.payload;
        }
    }
})

export const { setActiveTab } = activeTabSlice.actions;
export default activeTabSlice.reducer;