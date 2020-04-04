import React, { useState } from "react";

function AddNewTask() {
    const [taskText, setTaskText] = useState("");
    const [date, setDate] = useState("2020-01-01");
    const [urgent, setUrgent] = useState(false);

    const handleTextChange = (event) => {
        setTaskText(event.target.value);
    }

    const handleDateChange = (event) => {
        setDate(event.target.value);
    }

    const handleUrgentChange = (event) => {
        console.log(event.target.check);
        setUrgent(event.target.check);
    }



    return (
        <div className="row">
            <div className="col-4">
                <input type text="Task" className="form-control" placeholder="Task" value={taskText} onChange={handleTextChange} />
            </div>
            <div className="col-4">
                <input type="date" className="form-control" value={date} onChange={handleDateChange} />
            </div>
            <div className="col-2">
                <input type="checkbox" className="form-check-input" id="urgentCheck" checked={urgent} onChange={handleUrgentChange} />
                <label class="custom-control-label" htmlfor="urgentCheck">
                    URGENT
          </label>
            </div>
            <div className="col-2">
                <button class="btn btn-primary" type="submit">Add</button>
            </div>
        </div>
    );
}

export default AddNewTask;