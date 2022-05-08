import { configureStore } from "@reduxjs/toolkit";
import deleteModalReducer from "@slices/deleteModalSlice";
import formModalReducer from "@slices/formModalSlice";
import pageSizeReducer from "@slices/pageSizeSlice";
import selectedRowsReducer from "@slices/selectedRowsSlice";
import scheduleSwitchReducer from "@slices/scheduleSwitchSlice";

export const store = configureStore({
  reducer: {
    pageSize: pageSizeReducer,
    deleteModal: deleteModalReducer,
    formModal: formModalReducer,
    selectedRows: selectedRowsReducer,
    scheduleSwitch: scheduleSwitchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [
          "deleteModal/showDeleteModal",
          "formModal/showFormModal",
        ],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        // Ignore these paths in the state
        ignoredPaths: ["items.dates"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
