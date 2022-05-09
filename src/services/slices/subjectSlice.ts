import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { SubjectProps } from "@types";
import { getSubjects } from "@services/firebase/subject";

type SubjectSliceProps = {
  value: SubjectProps[];
  status: "loading" | "success" | "fail" | "idle";
};

const initialState: SubjectSliceProps = {
  value: [],
  status: "idle",
};

export const fetchSubject = createAsyncThunk<SubjectProps[]>(
  "subject/fetch",
  async () => {
    const result = await getSubjects();
    return result;
  }
);

export const subjectSlice = createSlice({
  name: "subject",
  initialState,
  reducers: {
    addSubject: (state, action: PayloadAction<SubjectProps>) => {
      state.value.push(action.payload);
    },
    removeSubject: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    updateSubject: (state, action: PayloadAction<SubjectProps>) => {
      let foundIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (foundIndex !== -1) state.value[foundIndex] = action.payload;
      else console.log("Item not found");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSubject.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchSubject.fulfilled, (state, { payload }) => {
      state.value = payload;
      state.status = "success";
    });
    builder.addCase(fetchSubject.rejected, (state) => {
      state.status = "fail";
    });
  },
});

export default subjectSlice.reducer;
export const { addSubject, removeSubject, updateSubject } =
  subjectSlice.actions;
