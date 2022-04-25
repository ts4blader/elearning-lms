import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface ScheduleSwitchState {
  value: boolean;
}

const initialState: ScheduleSwitchState = {
  value: false,
};

export const scheduleSwitchReducer = createSlice({
  name: "scheduleSwitch",
  initialState,
  reducers: {
    toggleScheduleSwitch: (state) => {
      state.value = !state.value;
    },
    setScheduleSwitch: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setScheduleSwitch, toggleScheduleSwitch } =
  scheduleSwitchReducer.actions;
export default scheduleSwitchReducer.reducer;
