import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { StudentProps } from "@types";

type StudentEditSliceProps = {
  value: StudentProps | null;
};

const initialState: StudentEditSliceProps = {
  value: null,
};

const studentEditSlice = createSlice({
  name: "studentEditSlice",
  initialState,
  reducers: {
    setStudentEdit: (state, action: PayloadAction<StudentProps>) => {
      state.value = action.payload;
    },
    resetStudentEdit: (state) => {
      state.value = null;
    },
  },
});

export default studentEditSlice.reducer;
export const { setStudentEdit, resetStudentEdit } = studentEditSlice.actions;
