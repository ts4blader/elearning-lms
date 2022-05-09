import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { EducationLevelProps } from "@types";
import { getEducationLevels } from "@services/firebase/educationLevel";

type EducationLevelSliceProps = {
  value: EducationLevelProps[];
  status: "loading" | "success" | "fail" | "idle";
};

const initialState: EducationLevelSliceProps = {
  value: [],
  status: "idle",
};

export const fetchEducationLevel = createAsyncThunk<EducationLevelProps[]>(
  "educationLevel/fetch",
  async () => {
    const result = await getEducationLevels();
    return result;
  }
);

export const educationLevelSlice = createSlice({
  name: "educationLevel",
  initialState,
  reducers: {
    addEducationLevel: (state, action: PayloadAction<EducationLevelProps>) => {
      state.value.push(action.payload);
    },
    removeEducationLevel: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    updateEducationLevel: (
      state,
      action: PayloadAction<EducationLevelProps>
    ) => {
      let foundIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (foundIndex !== -1) state.value[foundIndex] = action.payload;
      else console.log("Item not found");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEducationLevel.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchEducationLevel.fulfilled, (state, { payload }) => {
      state.value = payload;
      state.status = "success";
    });
    builder.addCase(fetchEducationLevel.rejected, (state) => {
      state.status = "fail";
    });
  },
});

export default educationLevelSlice.reducer;
export const { addEducationLevel, removeEducationLevel, updateEducationLevel } =
  educationLevelSlice.actions;
