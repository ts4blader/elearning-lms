import { configureStore } from "@reduxjs/toolkit";
import deleteModalReducer from "@slices/deleteModalSlice";
import formModalReducer from "@slices/formModalSlice";
import pageSizeReducer from "@slices/pageSizeSlice";
import selectedRowsReducer from "@slices/selectedRowsSlice";
import scheduleSwitchReducer from "@slices/scheduleSwitchSlice";
//* dummy data reducer
import classTypeReducer from "@slices/classTypeSlice";
import subjectTypeReducer from "@slices/subjectTypeSlice";
import educationLevelReducer from "@slices/educationLevelSlice";
import subjectGroupReducer from "@slices/subjectGroupSlice";
import subjectReducer from "@slices/subjectSlice";

export const store = configureStore({
  reducer: {
    pageSize: pageSizeReducer,
    deleteModal: deleteModalReducer,
    formModal: formModalReducer,
    selectedRows: selectedRowsReducer,
    scheduleSwitch: scheduleSwitchReducer,
    //* dummy data
    classType: classTypeReducer,
    subjectType: subjectTypeReducer,
    educationLevel: educationLevelReducer,
    subjectGroup: subjectGroupReducer,
    subject: subjectReducer,
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
