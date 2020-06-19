import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Header/Header";
import TaskCount from "./TaskCount/TaskCount";
import Task from "./Task/Task";
import AddNewTask from "./NewTask/AddNewTask";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("https://1b3m8txju4.execute-api.eu-west-1.amazonaws.com/dev/tasks")
      .then((response) => {
        console.log("Success", response.data);
        setTasks(response.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  const deleteTask = (id) => {
    axios
      .delete(
        "https://1b3m8txju4.execute-api.eu-west-1.amazonaws.com/dev/tasks/{id}"
      )
      .then((response) => {
        const filteredTasks = tasks.filter((task) => {
          return task.TaskId !== id;
        });
        setTasks(filteredTasks);
      })
      .catch((err) => {
        console.log("API Error, err");
      });
  };

  const completeTask = (id) => {
    axios
      .put(
        `https://1b3m8txju4.execute-api.eu-west-1.amazonaws.com/dev/tasks/{id}`,
        {
          Completed: true,
        }
      )
      .then((response) => {
        const newTasks = tasks.map((task) => {
          if (task.TaskId === id) {
            task.Completed = 1;
          }
          return task;
        });
        setTasks(newTasks);
      })
      .catch((err) => {
        console.log("Error updating Task", err);
      });
  };

  const addNewTask = (text, date, urgent) => {
    axios
      .post(
        "https://1b3m8txju4.execute-api.eu-west-1.amazonaws.com/dev/tasks",
        {
          Description: text,
          DueDate: date,
          Urgent: urgent,
        }
      )
      .then((response) => {
        const newTask = response.data;
        const newTasks = [...tasks, newTask];
        setTasks(newTasks);
      })
      .catch((err) => {
        console.log("Error creating task", err);
      });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <TaskCount count={tasks.length} />
        <div className="container">
          <AddNewTask addNewTaskFunc={addNewTask} />
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                deleteTaskFunc={deleteTask}
                markcompleteTaskFunc={completeTask}
                text={task.Description}
                urgent={task.Urgent}
                completed={task.Completed}
                dueDate={task.DueDate}
                id={task.TaskId}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
