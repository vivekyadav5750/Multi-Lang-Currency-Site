import { CurrencyType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface CurrencyState {
  currency: CurrencyType;
}

const initialState: CurrencyState = {
  currency: "USD"
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    }
  }
});

export const { setCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
