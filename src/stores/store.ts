import { configureStore } from '@reduxjs/toolkit'
import deleteModalReducer from "@slices/deleteModalSlice"
import counterReducer from "@slices/counterSlice"


export const store = configureStore({
  reducer: {
    deleteModal: deleteModalReducer,
    counter: counterReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
