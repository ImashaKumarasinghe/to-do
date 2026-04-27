import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {
  getTodos,
  createTodo,
  updateTodo,
  toggleTodoDone,
  deleteTodo,
} from "./api/todoApi";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState("");

  const loadTodos = async () => {
    try {
      setLoading(true);
      const response = await getTodos();
      setTodos(response.data);
      setPageError("");
    } catch (error) {
      setPageError("Could not load todos. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAddTodo = async (todoData) => {
    try {
      const response = await createTodo(todoData);
      setTodos([response.data, ...todos]);
    } catch (error) {
      setPageError("Could not create todo.");
    }
  };

  const handleUpdateTodo = async (id, todoData) => {
    try {
      const response = await updateTodo(id, todoData);

      const updatedTodos = todos.map((todo) =>
        todo._id === id ? response.data : todo
      );

      setTodos(updatedTodos);
    } catch (error) {
      setPageError("Could not update todo.");
    }
  };

  const handleToggleDone = async (id) => {
    try {
      const response = await toggleTodoDone(id);

      const updatedTodos = todos.map((todo) =>
        todo._id === id ? response.data : todo
      );

      setTodos(updatedTodos);
    } catch (error) {
      setPageError("Could not update todo status.");
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);

      const remainingTodos = todos.filter((todo) => todo._id !== id);
      setTodos(remainingTodos);
    } catch (error) {
      setPageError("Could not delete todo.");
    }
  };

  return (
    <main className="app">
      <section className="app-card">
        <h1>TODO App</h1>
        <p className="subtitle">Simple full-stack task manager</p>

        <TodoForm onAddTodo={handleAddTodo} />

        {pageError && <p className="error-box">{pageError}</p>}

        {loading ? (
          <p className="loading-text">Loading todos...</p>
        ) : (
          <TodoList
            todos={todos}
            onDelete={handleDeleteTodo}
            onToggleDone={handleToggleDone}
            onUpdate={handleUpdateTodo}
          />
        )}
      </section>
    </main>
  );
}

export default App;