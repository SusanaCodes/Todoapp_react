import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import TaskCount from "./TaskCount/TaskCount";
import Task from "./Task/Task";
import AddNewTask from "./NewTask/AddNewTask";

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, text: "HIIT", urgent: false, completed: false, dueDate: "2020-30-03" },
    { id: 2, text: "Study", urgent: true, completed: true, dueDate: "2020-23-03" },
    { id: 3, text: "Weekly shopping", urgent: false, completed: false, dueDate: "2020-27-03" },
    { id: 4, text: "Clean house", urgent: false, completed: true, dueDate: "2020-22-03" },
    { id: 5, text: "Organize food routa for the week", urgent: false, completed: false, dueDate: "2020-30-03" },
    { id: 6, text: "Prepare homeschooling for the week", urgent: true, completed: true, dueDate: "2020-23-03" },
    { id: 7, text: "Call family", urgent: false, completed: true, dueDate: "2020-20-03" },
  ]);

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => {
      if (task.id === id) {
        return false;
      } else {
        return true;
      }
    });
    setTasks(filteredTasks);
  };

  const completeTask = (id) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = true;
      }
      return task;
        });

  setTasks(newTasks);
}


return (
  <div className="App">
    <Header />
    <main>
      <TaskCount count={tasks.length} />
      <div className="container">
        <AddNewTask />
        {tasks.map(function (task) {
          return <Task key={task.id} deleteTaskFunc={deleteTask} completeTaskFunc= {completeTask}text={task.text} urgent={task.urgent} completed={task.completed} dueDate={task.dueDate} id={task.id} />;
        })}
      </div>
    </main>
  </div>
);
}

export default App;
