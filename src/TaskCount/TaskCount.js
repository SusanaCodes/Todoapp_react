import React from "react";

function TaskCount (props){
    return(
        <break>
        <p></p>
        </break>
        <p><button type="button" class="btn btn-outline-danger">You have <button type="button" class="btn btn-danger">{props.count}</button> outstanding tasks</button></p>
    );
}

export default TaskCount;
