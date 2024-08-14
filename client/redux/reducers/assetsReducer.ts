import {createSlice} from "@reduxjs/toolkit";

const initialState = {}
const assetSlice = createSlice({
    name:'asset',
    initialState,
    reducers:{
      assetsAdded(state,action){

      },
      assetsDeleted(state,action){

      },
      assetsUpdated(state,action){

      }
    }
})

export const {assetsAdded, assetsDeleted,assetsUpdated} = assetSlice.actions;
export default assetSlice.reducer;