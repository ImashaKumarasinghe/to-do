import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete, onToggleDone, onUpdate }) {
  if (todos.length === 0) {
    return <p className="empty-message">No TODOs yet. Add your first task.</p>;
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onDelete={onDelete}
          onToggleDone={onToggleDone}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default TodoList;