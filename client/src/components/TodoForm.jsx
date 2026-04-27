import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      setFormError("Please enter a todo title");
      return;
    }

    onAddTodo({
      title,
      description,
    });

    setTitle("");
    setDescription("");
    setFormError("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <h2>Add New TODO</h2>

      {formError && <p className="error-text">{formError}</p>}

      <input
        type="text"
        placeholder="Todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description optional"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Add TODO</button>
    </form>
  );
}

export default TodoForm;