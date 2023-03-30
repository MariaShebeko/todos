import axios from "axios";

axios.defaults.baseURL = "https://todos-serverr.herokuapp.com/api";

export const fetchTodos = async () => {
  const { data } = await axios.get("/todos");
  return data.data.result;
};

export const getTodoById = async (id) => {
  const { data } = await axios.get(`/todos/${id}`);
  return data.data.result;
};

export const addTodoSer = async (todo) => {
  const { data } = await axios.post("/todos", todo);
  return data.data.result;
};

export const deleteTodo = async (id) => {
  axios.delete(`/todos/${id}`);
};

export const updateTodoStatus = async (id, updateTodo) => {
  const { data } = await axios.patch(`/todos/${id}/status`, updateTodo);
  return data.data.result;
};
