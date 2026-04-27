import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const getTodos = () => {
  return axios.get(`${API_URL}/todos`);
};

export const createTodo = (todoData) => {
  return axios.post(`${API_URL}/todos`, todoData);
};

export const updateTodo = (id, todoData) => {
  return axios.put(`${API_URL}/todos/${id}`, todoData);
};

export const toggleTodoDone = (id) => {
  return axios.patch(`${API_URL}/todos/${id}/done`);
};

export const deleteTodo = (id) => {
  return axios.delete(`${API_URL}/todos/${id}`);
};