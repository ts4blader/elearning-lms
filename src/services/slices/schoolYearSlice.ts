import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { SchoolYearProps } from "@types";
import { getDocuments } from "@services/firebase/firestore";
import { COLLECTION } from "@services/firebase/collection";

type SchoolYearSliceProps = {
  value: SchoolYearProps[];
  status: "loading" | "success" | "fail" | "idle";
};

const initialState: SchoolYearSliceProps = {
  value: [],
  status: "idle",
};

export const fetchSchoolYear = createAsyncThunk<SchoolYearProps[]>(
  "schoolYear/fetch",
  async () => {
    const result = await getDocuments<SchoolYearProps>(COLLECTION.schoolYear);
    return result;
  }
);

export const schoolYearSlice = createSlice({
  name: "schoolYear",
  initialState,
  reducers: {
    addSchoolYear: (state, action: PayloadAction<SchoolYearProps>) => {
      state.value.push(action.payload);
    },
    removeSchoolYear: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    updateSchoolYear: (state, action: PayloadAction<SchoolYearProps>) => {
      let foundIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (foundIndex !== -1) state.value[foundIndex] = action.payload;
      else console.log("Item not found");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSchoolYear.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchSchoolYear.fulfilled, (state, { payload }) => {
      state.value = payload;
      state.status = "success";
    });
    builder.addCase(fetchSchoolYear.rejected, (state) => {
      state.status = "fail";
    });
  },
});

export default schoolYearSlice.reducer;
export const { addSchoolYear, removeSchoolYear, updateSchoolYear } =
  schoolYearSlice.actions;
