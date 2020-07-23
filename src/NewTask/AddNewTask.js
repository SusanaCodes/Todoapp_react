import React, { useState } from "react";

// function AddNewTask(props) {
//   const [taskText, setTaskText] = useState("");
//   const [date, setDate] = useState("2020-05-01");
//   const [urgent, setUrgent] = useState(false);

//   const handleTextChange = (event) => {
//     setTaskText(event.target.value);
//   };

//   const handleDateChange = (event) => {
//     setDate(event.target.value);
//   };

//   const handleUrgentChange = (event) => {
//     setUrgent(event.target.checked);
//   };

//   const handleAddTask = () => {
//     props.addNewTaskFunc(taskText, date, urgent);
//   };

//   return (
//     <div className="row">
//       <div className="col-4">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Task"
//           value={taskText}
//           onChange={handleTextChange}
//         />
//       </div>
//       <div className="col-4">
//         <input
//           type="date"
//           className="form-control"
//           value={date}
//           onChange={handleDateChange}
//         />
//       </div>
//       <div className="col-2">
//         <input
//           type="checkbox"
//           className="form-check-input"
//           id="urgentCheck"
//           checked={urgent}
//           onChange={handleUrgentChange}
//         />
//         <label class="form-check-label" htmlFor="urgentCheck">
//           URGENT
//         </label>
//       </div>
//       <div className="col-2">
//         <button class="btn btn-primary" type="submit" onClick={handleAddTask}>
//           Add
//         </button>
//       </div>
//     </div>
//   );
// }

function AddNewTask(props) {
  const [taskText, setTaskText] = useState("");
  const [date, setDate] = useState("2020-05-01");
  const [urgent, setUrgent] = useState(false);

  const handleTextChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleUrgentChange = (event) => {
    setUrgent(event.target.checked);
  };

  const handleAddTask = (event) => {
    props.addNewTaskFunc(taskText, date, urgent);
  };

  return (
    <div className="row">
      <div className="col-4">
        <input
          type
          text="Task"
          className="form-control"
          placeholder="Task"
          value={taskText}
          onChange={handleTextChange}
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={handleDateChange}
        />
      </div>
      <div className="col-2">
        <input
          type="checkbox"
          className="form-check-input"
          id="urgentCheck"
          checked={urgent}
          onChange={handleUrgentChange}
        />
        <label class="form-check-label" htmlfor="urgentCheck">
          URGENT
        </label>
      </div>
      <div className="col-2">
        <button class="btn btn-primary" type="submit" onClick={handleAddTask}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddNewTask;
