import React from "react";

function TaskCount(props) {
  return (
    <div>
      <p>
        <button type="button" class="btn btn-outline-danger">
          You have{" "}
          <button type="button" class="btn btn-danger">
            {props.count}
          </button>{" "}
          outstanding tasks
        </button>
      </p>
    </div>
  );
}

export default TaskCount;
