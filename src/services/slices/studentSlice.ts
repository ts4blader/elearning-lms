import { getDocuments } from "@services/firebase/firestore";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { StudentProps } from "@types";
import { COLLECTION } from "@services/firebase/collection";

type StudentSliceProps = {
  value: StudentProps[];
  status: "loading" | "success" | "fail" | "idle";
};

const initialState: StudentSliceProps = {
  value: [],
  status: "idle",
};

export const fetchStudent = createAsyncThunk<StudentProps[]>(
  "student/fetch",
  async () => {
    const result = await getDocuments<StudentProps>(COLLECTION.student);
    return result;
  }
);

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action: PayloadAction<StudentProps>) => {
      state.value.push(action.payload);
    },
    removeStudent: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    updateStudent: (state, action: PayloadAction<StudentProps>) => {
      let foundIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (foundIndex !== -1) state.value[foundIndex] = action.payload;
      else console.log("Item not found");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStudent.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchStudent.fulfilled, (state, { payload }) => {
      state.value = payload;
      state.status = "success";
    });
    builder.addCase(fetchStudent.rejected, (state) => {
      state.status = "fail";
    });
  },
});

export default studentSlice.reducer;
export const { addStudent, removeStudent, updateStudent } =
  studentSlice.actions;
