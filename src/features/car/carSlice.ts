import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface CarState {
  navbarScroll: boolean;
  navToggle: boolean;
}

const initialState: CarState = {
  navbarScroll: false,
  navToggle: false,
};

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setNavbarScroll: (state, action: PayloadAction<boolean>) => {
      state.navbarScroll = action.payload;
    },
    setNavToggle: (state, action: PayloadAction<boolean>) => {
      state.navToggle = action.payload;
    },
  },
});

export const { setNavbarScroll, setNavToggle } = carSlice.actions;

export default carSlice.reducer;
