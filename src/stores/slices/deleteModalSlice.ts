import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from "@stores/store";

type DeleteModalState = {
    show: boolean;
    name: string;
    onAction: (id: string) => void;
}

type Payload = {
    name: string;
    onAction: (id: string) => void;
}

const initialState: DeleteModalState = {
    name: "",
    show: false,
    onAction: () => null,
}

export const deleteModalSlice = createSlice({
    name: "deleteModal",
    initialState,
    reducers: {
        showDeleteModal: (state, action : PayloadAction<Payload>) => {
            state.show = true;
            state.onAction = action.payload.onAction;
            state.name = action.payload.name;
        },
        hideDeleteModal: (state) => initialState,
    }
})

export const {showDeleteModal, hideDeleteModal} = deleteModalSlice.actions;

export const selectDeleteModal = (state: RootState) => state.deleteModal;

export default deleteModalSlice.reducer;