import { configureStore } from '@reduxjs/toolkit'
import deleteModalReducer from "@slices/deleteModalSlice"
import counterReducer from "@slices/counterSlice"


export const store = configureStore({
  reducer: {
    deleteModal: deleteModalReducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['deleteModal/showDeleteModal'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
