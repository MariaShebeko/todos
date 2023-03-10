import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../types/data";
import { ITodosState } from "./todosTypes";

const initialState: ITodosState = {
  todos: {},
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodoAction: (state, action: PayloadAction<ITodo>) => {
      state.todos = { ...state.todos, [action.payload.id]: action.payload };
    },
    toggleTodoAction: (state, action: PayloadAction<ITodo>) => {
      state.todos = {
        ...state.todos,
        [action.payload.id]: {
          ...action.payload,
          isCompleted: !action.payload.isCompleted,
        },
      };
    },
  },
});

export const { addTodoAction, toggleTodoAction } = todosSlice.actions;
export default todosSlice.reducer;
