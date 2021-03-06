import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { SubjectTypeProps } from "@types";
import { getDocuments } from "@services/firebase/firestore";
import { COLLECTION } from "@services/firebase/collection";

type SubjectTypeSliceProps = {
  value: SubjectTypeProps[];
  status: "loading" | "success" | "fail" | "idle";
};

const initialState: SubjectTypeSliceProps = {
  value: [],
  status: "idle",
};

export const fetchSubjectType = createAsyncThunk<SubjectTypeProps[]>(
  "subjectType/fetch",
  async () => {
    const result = await getDocuments<SubjectTypeProps>(COLLECTION.subjectType);
    return result;
  }
);

export const subjectTypeSlice = createSlice({
  name: "subjectType",
  initialState,
  reducers: {
    addSubjectType: (state, action: PayloadAction<SubjectTypeProps>) => {
      state.value.push(action.payload);
    },
    removeSubjectType: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    updateSubjectType: (state, action: PayloadAction<SubjectTypeProps>) => {
      let foundIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (foundIndex !== -1) state.value[foundIndex] = action.payload;
      else console.log("Item not found");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSubjectType.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchSubjectType.fulfilled, (state, { payload }) => {
      state.value = payload;
      state.status = "success";
    });
    builder.addCase(fetchSubjectType.rejected, (state) => {
      state.status = "fail";
    });
  },
});

export default subjectTypeSlice.reducer;
export const { addSubjectType, removeSubjectType, updateSubjectType } =
  subjectTypeSlice.actions;
