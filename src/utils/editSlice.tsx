import { createSlice } from "@reduxjs/toolkit";


interface editState{
    editId:string|null;
}

const initialState:editState={
    editId:null,
};

const editSlice=createSlice({
    name:"edit",
    initialState,
    reducers:{
        addEditId:(state,action)=>{
            state.editId=action.payload;
        }
    }
})


export const {addEditId}=editSlice.actions;
export default editSlice.reducer;