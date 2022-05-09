import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { SubjectGroupProps } from "@types";
import { getSubjectGroups } from "@services/firebase/subjectGroup";

type SubjectGroupSliceProps = {
  value: SubjectGroupProps[];
  status: "loading" | "success" | "fail" | "idle";
};

const initialState: SubjectGroupSliceProps = {
  value: [],
  status: "idle",
};

export const fetchSubjectGroup = createAsyncThunk<SubjectGroupProps[]>(
  "subjectGroup/fetch",
  async () => {
    const result = await getSubjectGroups();
    return result;
  }
);

export const subjectGroupSlice = createSlice({
  name: "subjectGroup",
  initialState,
  reducers: {
    addSubjectGroup: (state, action: PayloadAction<SubjectGroupProps>) => {
      state.value.push(action.payload);
    },
    removeSubjectGroup: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    updateSubjectGroup: (state, action: PayloadAction<SubjectGroupProps>) => {
      let foundIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (foundIndex !== -1) state.value[foundIndex] = action.payload;
      else console.log("Item not found");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSubjectGroup.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchSubjectGroup.fulfilled, (state, { payload }) => {
      state.value = payload;
      state.status = "success";
    });
    builder.addCase(fetchSubjectGroup.rejected, (state) => {
      state.status = "fail";
    });
  },
});

export default subjectGroupSlice.reducer;
export const { addSubjectGroup, removeSubjectGroup, updateSubjectGroup } =
  subjectGroupSlice.actions;
