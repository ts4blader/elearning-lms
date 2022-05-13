import { getDocuments } from "@services/firebase/firestore";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { LectureProps } from "@types";
import { COLLECTION } from "@services/firebase/collection";

type LectureSliceProps = {
  value: LectureProps[];
  status: "loading" | "success" | "fail" | "idle";
};

const initialState: LectureSliceProps = {
  value: [],
  status: "idle",
};

export const fetchLecture = createAsyncThunk<LectureProps[]>(
  "lecture/fetch",
  async () => {
    const result = await getDocuments<LectureProps>(COLLECTION.lecture);
    return result;
  }
);

export const lectureSlice = createSlice({
  name: "lecture",
  initialState,
  reducers: {
    addLecture: (state, action: PayloadAction<LectureProps>) => {
      state.value.push(action.payload);
    },
    removeLecture: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    updateLecture: (state, action: PayloadAction<LectureProps>) => {
      let foundIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (foundIndex !== -1) state.value[foundIndex] = action.payload;
      else console.log("Item not found");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLecture.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchLecture.fulfilled, (state, { payload }) => {
      state.value = payload;
      state.status = "success";
    });
    builder.addCase(fetchLecture.rejected, (state) => {
      state.status = "fail";
    });
  },
});

export default lectureSlice.reducer;
export const { addLecture, removeLecture, updateLecture } =
  lectureSlice.actions;
