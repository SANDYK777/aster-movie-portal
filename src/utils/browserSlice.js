import { createSlice } from "@reduxjs/toolkit";
let browserSlice = createSlice({
    name:'browsingHistory',
    initialState:{
     browesedMovies:[]  ,
     selectBy:"ByPopular",
     viewCount:0 
    },
    reducers:{
        addItem:(state,action)=>{
            state.browesedMovies.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.browesedMovies.pop(state.browesedMovies.indexOf(action.payload.id));
             },
        setSelection:(state,action)=>{
            state.selectBy=action.payload;
        },
       

    }

});
export const {addItem,removeItem,setSelection,clearSelection}=browserSlice.actions
export default browserSlice.reducer;