import React, { useState } from "react";
import Item from "./Item";

const Subtask = ({
                     subtask,
                     subIndex,
                     task,
                     taskIndex,
                     tasks,
                     setTasks
                 }) => {
    return (
        <div className={'pt-2'}>
            <Item
                subIndex={subIndex}
                subtask={subtask}
                taskIndex={taskIndex}
                task={task}
                tasks={tasks}
                setTasks={setTasks}
                whatList={1}
                value={subtask.subtaskTitle}
                isDone={subtask.isDone}
            />
        </div>
    );
};

export default Subtask;

