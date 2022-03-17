import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "@stores/store"

type FormModalState = {
    show: boolean;
    title: string;
    innerForm: React.ComponentType<any>  | null;
}

type Payload = {
    title: string;
    innerForm: React.ComponentType<any> | null;
}

const initialState: FormModalState = {
    show: false,
    title: "",
    innerForm: null
}

export const formModalSlice = createSlice({
    name: "formModal",
    initialState,
    reducers: {
        showFormModal : (state, action : PayloadAction<Payload>) => {
            state.show = true;
            state.title = action.payload.title;
            state.innerForm = action.payload.innerForm;
        },
        hideFormModal: (state) => {
            state.show = false;
        }
    }
})

export const {showFormModal, hideFormModal} = formModalSlice.actions
export const selectFormModal = (state : RootState) => state.formModal;
export default formModalSlice.reducer;