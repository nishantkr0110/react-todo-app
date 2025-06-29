import { useState } from 'react'
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);

  const addTask = () => {
    if (!input.trim()) return;

    if (editingId !== null) {
      const updatedTasks = tasks.map(task =>
        task.id === editingId ? {...task, text : input} : task
      );
      setTasks(updatedTasks);
      setEditingId(null);
    } else {
      const newTask = {
        id:Date.now(),
        text:input,
        completed: false
      };
      setTasks([...tasks, newTask]);
    }

    setInput("");
  };

  //Toggle completed/incompleted status of a task

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? {...task, completed: !task.completed} : task
    );
    setTasks(updatedTasks);
  };

  //Delete a Task from the list

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  //Start editing a task

  const editTask = (id) => {
    const taskToEdit = tasks.find(task => task.id === id);
    setInput(taskToEdit.text);
    setEditingId(id);
  };

  return (
    <div className="container">
      {/*Heading Section*/}
      <Header/>

      {/*Input box and Addd/Update button*/}
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
          <button onClick={addTask}>
            {editingId ? "Update" : "Add"}
          </button>
      </div>
      
      {/*Task List*/}

      <ToDoList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />

    </div>
  );
}

export default App;
