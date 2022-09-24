import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "My first task",
    description: "Task 1",
  },
  {
    id: "2",
    title: "My second task",
    description: "Task 2",
  },
  {
    id: "3",
    title: "My third task",
    description: "Task 3",
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const toUpdate = state.find((t) => t.id === id);
      if (toUpdate) {
        toUpdate.title = title;
        toUpdate.description = description;
      }
    },
    deleteTask: (state, action) => {
      const toRemove = state.find((t) => t.id === action.payload);
      if (toRemove) {
        state.splice(state.indexOf(toRemove), 1);
      }
    },
  },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
