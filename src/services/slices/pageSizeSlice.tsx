import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@stores";

type PageSizeState = {
  value: number;
};

const initialState: PageSizeState = {
  value: 8,
};

export const pageSizeSlice = createSlice({
  name: "pageSize",
  initialState,
  reducers: {
    setPageSize: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    resetPageSize: (state) => {
      state = initialState;
    },
  },
});

export const { setPageSize, resetPageSize } = pageSizeSlice.actions;
export const selectPageSize = (state: RootState) => state.pageSize;
export default pageSizeSlice.reducer;
