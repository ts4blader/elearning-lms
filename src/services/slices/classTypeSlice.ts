import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ClassTypeProps } from "@types";
import { getClassTypes } from "@services/firebase/classType";

type ClassTypeSliceProps = {
  value: ClassTypeProps[];
  status: "loading" | "success" | "fail" | "idle";
};

const initialState: ClassTypeSliceProps = {
  value: [],
  status: "idle",
};

export const fetchClassType = createAsyncThunk<ClassTypeProps[]>(
  "classType/fetch",
  async () => {
    const result = await getClassTypes();
    return result;
  }
);

export const classTypeSlice = createSlice({
  name: "classType",
  initialState,
  reducers: {
    addClassType: (state, action: PayloadAction<ClassTypeProps>) => {
      state.value.push(action.payload);
    },
    removeClassType: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    updateClassType: (state, action: PayloadAction<ClassTypeProps>) => {
      let foundIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (foundIndex !== -1) state.value[foundIndex] = action.payload;
      else console.log("Item not found");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchClassType.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchClassType.fulfilled, (state, { payload }) => {
      state.value = payload;
      state.status = "success";
    });
    builder.addCase(fetchClassType.rejected, (state) => {
      state.status = "fail";
    });
  },
});

export default classTypeSlice.reducer;
export const { addClassType, removeClassType, updateClassType } =
  classTypeSlice.actions;
