import React from "react";
import moment from "moment";
import "./Task.css";

function Task(props) {
    return (
        <div className="row">
            <div className="col-12 col-md-4">
                {props.text}
            </div>
            <div className=" col-3 col-md-2">
                {props.urgent === true ? " URGENT" : ""}
            </div>
            <div className="col-3 col-md-2">
                {moment(props.dueDate).format("ddd, MMMM Do, h:mm")}
            </div>
            <div className="col-3 col-md-2">
                {props.completed === false && <button type="button" class="btn btn-success">Completed</button>}
            </div>
            <div className="col-3 col-md-2">
                <button type="button" class="btn btn-outline-primary">Delete</button>
            </div>
        </div>
    );
}

export default Task;