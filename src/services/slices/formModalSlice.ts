import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@stores";
import { FormModalProps } from "@types";

type FormModalState = {
  show: boolean;
  showClose: boolean;
  title: string;
  innerForm: React.ComponentType<FormModalProps> | null;
};

type Payload = {
  title: string;
  showClose?: boolean;
  innerForm: React.ComponentType<FormModalProps> | null;
};

const initialState: FormModalState = {
  show: false,
  showClose: false,
  title: "",
  innerForm: null,
};

export const formModalSlice = createSlice({
  name: "formModal",
  initialState,
  reducers: {
    showFormModal: (state, action: PayloadAction<Payload>) => {
      state.show = true;
      state.title = action.payload.title;
      state.innerForm = action.payload.innerForm;
      if (action.payload.showClose) state.showClose = action.payload.showClose;
    },
    hideFormModal: (state) => {
      return initialState;
    },
  },
});

export const { showFormModal, hideFormModal } = formModalSlice.actions;
export const selectFormModal = (state: RootState) => state.formModal;
export default formModalSlice.reducer;
