import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import TaskCount from "./TaskCount/TaskCount";
import Task from "./Task/Task";
import AddNewTask from "./NewTask/AddNewTask";

function App() {

  const [tasks, setTasks] = useState([
    { text: "HIIT", urgent: false, completed: false, dueDate: "2020-30-03" },
    { text: "Study", urgent: true, completed: true, dueDate: "2020-23-03" },
    { text: "Weekly shopping", urgent: false, completed: false, dueDate: "2020-27-03" },
    { text: "Clean house", urgent: false, completed: true, dueDate: "2020-22-03" },
    { text: "Organize food routa for the week", urgent: false, completed: false, dueDate: "2020-30-03" },
    { text: "Prepare homeschooling for the week", urgent: true, completed: true, dueDate: "2020-23-03" },
    { text: "Call family", urgent: false, completed: true, dueDate: "2020-20-03" },
  ]);

  return (
    <div className="App">
      <Header />
      <main>
        <TaskCount count={tasks.length} />
        <div className="container">
          <AddNewTask /> 
          {tasks.map(function(task){
            return <Task text={task.text} urgent={task.urgent} completed={task.completed} dueDate={task.dueDate} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
