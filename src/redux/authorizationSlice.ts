import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthorizationSliceState {
  token: string | null;
}

const initialState: AuthorizationSliceState = {
  token: null,
};

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    tokenAssign: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    tokenReset: (state) => {
      state.token = null;
    },
  },
});

export const { tokenAssign, tokenReset } = authorizationSlice.actions;

export const tokenSelect = (state: RootState) => state.authorization.token;

export default authorizationSlice.reducer;
