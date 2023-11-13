
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: false },
    { id: 3, text: 'Task 3', completed: true },
  ]);

  const [newTaskText, setNewTaskText] = useState('');
  const [editTask, setEditTask] = useState(null);

  const handleAddTask = () => {
    if (newTaskText) {
      const newTask = {
        id: tasks.length + 1,
        text: newTaskText,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskText('');
    }
  };

  const handleToggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleEditTask = (task) => {
    setEditTask(task);
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditTask(null);
  };

  return (
    <div>
      <h1>Task List</h1>
      <div>
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            {task === editTask ? (
              <div>
                <input
                  type="text"
                  value={task.text}
                  onChange={(e) =>
                    setEditTask({ ...task, text: e.target.value })
                  }
                />
                <button onClick={() => handleUpdateTask(editTask)}>Update</button>
              </div>
            ) : (
              <span>{task.text}</span>
            )}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            <button onClick={() => handleEditTask(task)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;































/*import React, { useState } from "react";
import TaskList from "./Components/CRUD app/TaskList";
import AddTask from "./Components/CRUD app/AddTask";
import EditTask from "./Components/CRUD app/EditTask";
import { tasks } from "./Components/CRUD app/data";

function App() {
  const [taskList, setTaskList] = useState(tasks);
  const [editingTask, setEditingTask] = useState(null);

  const handleAddTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTaskList([...taskList, newTask]);
  };

  const handleToggleTask = (taskId) => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((task) =>
        task.id === taskId ? {
          ...task, completed: !task.completed
        } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTaskList((prevTaskList) =>
      prevTaskList.filter((task) => task.id !== taskId)
    );
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleUpdateTask = (updatedTask) => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((task) =>
        task.id === updatedTask.id ? updatedTask : task)
    )
  };
  setEditingTask(null);


  return (
    <div className="App">
      <h1>Lista Tasqeve</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList
        tasks={taskList}
        onToggle={handleToggleTask}
        onDelete={handleDeleteTask}
        onEdit={handleEditTask}
      />
      {editingTask && (
        <EditTask task={editingTask} onUpdate={handleUpdateTask} />
      )}
    </div>
  );
}

export default App;
*/