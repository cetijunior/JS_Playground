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
