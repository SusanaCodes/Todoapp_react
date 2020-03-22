import React from "react";

function TaskCount (props){
    return(
        <p>You have {props.count} outstanding tasks</p>
    );
}

export default TaskCount;
