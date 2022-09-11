import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ServerDataListSliceState {
  servers: { name: string; distance: number }[];
}

const initialState: ServerDataListSliceState = {
  servers: [],
};

export const serverDataListSlice = createSlice({
  name: "serverDataList",
  initialState,
  reducers: {
    setServerDataList: (
      state,
      action: PayloadAction<Array<{ name: string; distance: number }>>,
    ) => {
      state.servers = action.payload;
    },
  },
});

export const { setServerDataList } = serverDataListSlice.actions;

export const selectServerDataList = (state: RootState) =>
  state.serverDataList.servers;

export default serverDataListSlice.reducer;
