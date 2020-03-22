import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import TaskCount from "./TaskCount/TaskCount";
import Task from "./Task/Task";

function App() {

  const [tasks, setTasks] = useState([
    { text: "HIIT", URGENT: false, completed: false, dueDate: "2020-30-03" },
    { text: "Study", URGENT: true, completed: true, dueDate: "2020-23-03" },
    { text: "Weekly shopping", URGENT: false, completed: false, dueDate: "2020-27-03" },
    { text: "Clean house", URGENT: false, completed: true, dueDate: "2020-22-03" },
    { text: "Organize food routa for the week", URGENT: false, completed: false, dueDate: "2020-30-03" },
    { text: "Prepare homeschooling for the week", URGENT: true, completed: true, dueDate: "2020-23-03" },
    { text: "Call family", URGENT: false, completed: true, dueDate: "2020-20-03" },
  ]);

  return (
    <div className="App">
      <Header />
      <main>
        <TaskCount count={tasks.length} />
        <div className="container">
          {tasks.map(function(task){
            return <Task text={task.text} URGENT={task.urgent} />
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
