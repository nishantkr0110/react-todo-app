import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, onToggle, onDelete, onEdit }) {
  return (
    <div>
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default ToDoList;
