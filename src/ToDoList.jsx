import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import uuid function

const TodoList = () => {
  const [todolist, setTodoList] = useState([{ id: uuidv4(), task: 'Sleep', isDone: false }]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
    console.log(newTask);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const isDuplicate = todolist.some((item) => item.task.toLowerCase() === newTask.toLowerCase());
      if (!isDuplicate) {
        const newTaskObj = { id: uuidv4(), task: newTask, isDone: false };
        setTodoList([...todolist, newTaskObj]);
        console.log("New task added:", newTaskObj); // Log new task and its ID
        setNewTask(''); 
      } else {
        alert('Task already exists in the list!');
      }
    }
  };

  const handleDeleteTask = (id) => {
    console.log("Task to delete:", id); // Log the ID of the task being deleted
    const updatedList = todolist.filter((item) => item.id !== id);
    setTodoList(updatedList);
  };

  const handleCompleteTask = (id) => {
    console.log("Task to complete/undo:", id); // Log the ID of the task being completed/undone
    const updatedList = todolist.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone }; 
      }
      return item;
    });
    setTodoList(updatedList);
  };

  return (
    <div>
      <h2 className="text-center">Welcome to Todo List</h2>
      <div className="input-group input-group-lg">
        <span className="input-group-text" id="inputGroup-sizing-lg">Enter Your task</span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="mx-3 btn btn-primary" onClick={handleAddTask}>
          Add
        </button>
      </div>
      <ol>
        {todolist.map((object) => (
          <li key={object.id} style={{ textDecoration: object.isDone ? 'line-through' : 'none' }}>
            {object.task}
            <button
              className="mx-2 btn btn-danger"
              onClick={() => handleCompleteTask(object.id)}
            >
              {object.isDone ? 'Undo' : 'Complete'}
            </button>
            <button
              className="mx-2 btn btn-dark"
              onClick={() => handleDeleteTask(object.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;