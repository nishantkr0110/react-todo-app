function ToDoItem({task, onToggle, onDelete, onEdit}) {
  return (
    <div className={`todo-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}>
      </input>

      <span>{task.text}</span>
      <button onClick={() => onEdit(task.id)}>✏️</button>
      <button onClick={() => onDelete(task.id)}>🗑️</button>
    </div>
  );
}

export default ToDoItem;