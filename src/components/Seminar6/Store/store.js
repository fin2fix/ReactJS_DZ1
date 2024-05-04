import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "../Reducers/TodoListSlice";

export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});
