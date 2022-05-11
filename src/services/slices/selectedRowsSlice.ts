import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Selected = {
  name: string;
  value: any[];
};

type SelectedRowsProps = Selected[];

const initialState: SelectedRowsProps = [];

export const selectedRowsSlice = createSlice({
  name: "selectedRows",
  initialState,
  reducers: {
    pushSelectedRows: (state, action: PayloadAction<Selected>) => {
      let foundIndex = state.findIndex(
        (item) => item.name === action.payload.name
      );
      if (foundIndex === -1) state.push(action.payload);
    },
    resetSelectedRow: (state, action: PayloadAction<string>) => {
      let foundIndex = state.findIndex((item) => item.name === action.payload);
      if (foundIndex !== -1) {
        state[foundIndex].value = [];
      }
    },
    setSelectedRow: (state, action: PayloadAction<Selected>) => {
      let foundIndex = state.findIndex(
        (item) => item.name === action.payload.name
      );
      if (foundIndex !== -1) state[foundIndex].value = action.payload.value;
    },
  },
});

export const { pushSelectedRows, resetSelectedRow, setSelectedRow } =
  selectedRowsSlice.actions;
export default selectedRowsSlice.reducer;
