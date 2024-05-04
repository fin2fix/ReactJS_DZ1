// ./store/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/CounterSlice.js";
import todoListReducer from "../reducers/TodoListSlice.js";
import favoritesSlice from "../reducers/favoritesSlice .js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todoList: todoListReducer,
    favList: favoritesSlice,
  },
});

// ./main.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// ./reducers/TodoListSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    array: [
      {
        id: 1,
        text: "Todo #1",
      },
      {
        id: 2,
        text: "Todo #2",
      },
      {
        id: 3,
        text: "Todo #3",
      },
    ],
  },
  reducers: {
    addTodo: (state, { payload: newTodoItem }) => {
      if (state.array.some((item) => item.id === newTodoItem.id)) {
        return;
      }
      state.array.push(newTodoItem);
    },
    deleteTodo: (state, { payload: todoItem }) => {
      const filteredArray = state.array.filter(
        (item) => item.id !== todoItem.id
      );
      state.array = filteredArray;
    },
  },
});

export const { addTodo, deleteTodo } = todoListSlice.actions;

export default todoListSlice.reducer;

// ./components/TodoList.jsx
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../reducers/TodoListSlice";
import AddTodo from "./AddTodo";

export default function TodoList() {
  const todos = useSelector((state) => state.todoList.array);
  const dispatch = useDispatch();
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <AddTodo todos={todos} />
      {todos.map((todo) => (
        <div key={todo.id} style={{ display: "flex", gap: "20px" }}>
          <p>id: {todo.id}</p>
          <p>Text: {todo.text}</p>
          <button onClick={() => dispatch(deleteTodo(todo))}>Delete</button>
        </div>
      ))}
    </section>
  );
}

// ./components/AddTodo.jsx

/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/TodoListSlice";
import { useState } from "react";

export default function AddTodo({ todos }) {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  function inputHandler(e) {
    setTodo(e.target.value);
  }

  function addNewTodo(e) {
    dispatch(addTodo({ id: +todos.length + 1, text: `${todo}` }));
    e.target.closest("div").querySelector("input").value = "";
  }

  return (
    <div>
      <label htmlFor="todo">Enter new todo </label>
      <input
        id="todo"
        type="text"
        value={todo}
        onChange={(e) => inputHandler(e)}
      />
      <button onClick={(e) => addNewTodo(e)}>Add new todo</button>
    </div>
  );
}

// ./App.jsx

/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import "./App.css";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <>
      <TodoList />
    </>
  );
}
