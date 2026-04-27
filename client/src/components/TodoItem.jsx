import { useState } from "react";

function TodoItem({ todo, onDelete, onToggleDone, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description || "");

  const handleUpdate = () => {
    if (title.trim() === "") {
      alert("Title cannot be empty");
      return;
    }

    onUpdate(todo._id, {
      title,
      description,
    });

    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.done ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="todo-actions">
            <button onClick={handleUpdate}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <div className="todo-content">
            <h3>{todo.title}</h3>
            {todo.description && <p>{todo.description}</p>}
          </div>

          <div className="todo-actions">
            <button onClick={() => onToggleDone(todo._id)}>
              {todo.done ? "Mark Undone" : "Mark Done"}
            </button>

            <button onClick={() => setIsEditing(true)}>Edit</button>

            <button className="delete-btn" onClick={() => onDelete(todo._id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;