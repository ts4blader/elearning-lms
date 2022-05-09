import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { GradeProps } from "@types";
import { getGrades } from "@services/firebase/grade";

type GradeSliceProps = {
  value: GradeProps[];
  status: "loading" | "success" | "fail" | "idle";
};

const initialState: GradeSliceProps = {
  value: [],
  status: "idle",
};

export const fetchGrade = createAsyncThunk<GradeProps[]>(
  "grade/fetch",
  async () => {
    const result = await getGrades();
    return result;
  }
);

export const gradeSlice = createSlice({
  name: "grade",
  initialState,
  reducers: {
    addGrade: (state, action: PayloadAction<GradeProps>) => {
      state.value.push(action.payload);
    },
    removeGrade: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    updateGrade: (state, action: PayloadAction<GradeProps>) => {
      let foundIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (foundIndex !== -1) state.value[foundIndex] = action.payload;
      else console.log("Item not found");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGrade.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchGrade.fulfilled, (state, { payload }) => {
      state.value = payload;
      state.status = "success";
    });
    builder.addCase(fetchGrade.rejected, (state) => {
      state.status = "fail";
    });
  },
});

export default gradeSlice.reducer;
export const { addGrade, removeGrade, updateGrade } = gradeSlice.actions;
