import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ScoreTypeProps } from "@types";
import { getDocuments } from "@services/firebase/firestore";
import { COLLECTION } from "@services/firebase/collection";

type ScoreTypeSliceProps = {
  value: ScoreTypeProps[];
  status: "loading" | "success" | "fail" | "idle";
};

const initialState: ScoreTypeSliceProps = {
  value: [],
  status: "idle",
};

export const fetchScoreType = createAsyncThunk<ScoreTypeProps[]>(
  "scoreType/fetch",
  async () => {
    const result = await getDocuments<ScoreTypeProps>(COLLECTION.scoreType);
    return result;
  }
);

export const scoreTypeSlice = createSlice({
  name: "scoreType",
  initialState,
  reducers: {
    addScoreType: (state, action: PayloadAction<ScoreTypeProps>) => {
      state.value.push(action.payload);
    },
    removeScoreType: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    updateScoreType: (state, action: PayloadAction<ScoreTypeProps>) => {
      let foundIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (foundIndex !== -1) state.value[foundIndex] = action.payload;
      else console.log("Item not found");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchScoreType.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchScoreType.fulfilled, (state, { payload }) => {
      state.value = payload;
      state.status = "success";
    });
    builder.addCase(fetchScoreType.rejected, (state) => {
      state.status = "fail";
    });
  },
});

export default scoreTypeSlice.reducer;
export const { addScoreType, removeScoreType, updateScoreType } =
  scoreTypeSlice.actions;
