import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/task.slice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
