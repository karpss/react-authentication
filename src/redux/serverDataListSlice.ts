/* eslint-disable */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface serverDataListSliceState {
    servers: { name: string; distance: number }[];
}

const initialState: serverDataListSliceState = {
    servers: []
}

export const serverDataListSlice = createSlice({
name: "serverDataList",
initialState,
reducers: {
    setServerDataList: (
      state,
      action: PayloadAction<Array<{ name: string; distance: number }>>
    ) => {
      state.servers = action.payload;
    },
  },


    
});

export const { setServerDataList } = serverDataListSlice.actions;

export const selectServerDataList = (state: RootState) => state.serverDataList.servers;

export default serverDataListSlice.reducer;