import { getDocuments } from "@services/firebase/firestore";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ClassProps } from "@types";
import { COLLECTION } from "@services/firebase/collection";

type ClassSliceProps = {
  value: ClassProps[];
  status: "loading" | "success" | "fail" | "idle";
};

const initialState: ClassSliceProps = {
  value: [],
  status: "idle",
};

export const fetchClass = createAsyncThunk<ClassProps[]>(
  "class/fetch",
  async () => {
    const result = await getDocuments<ClassProps>(COLLECTION.class);
    return result;
  }
);

export const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    addClass: (state, action: PayloadAction<ClassProps>) => {
      state.value.push(action.payload);
    },
    removeClass: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    updateClass: (state, action: PayloadAction<ClassProps>) => {
      let foundIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (foundIndex !== -1) state.value[foundIndex] = action.payload;
      else console.log("Item not found");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchClass.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchClass.fulfilled, (state, { payload }) => {
      state.value = payload;
      state.status = "success";
    });
    builder.addCase(fetchClass.rejected, (state) => {
      state.status = "fail";
    });
  },
});

export default classSlice.reducer;
export const { addClass, removeClass, updateClass } = classSlice.actions;
