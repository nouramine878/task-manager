import React, { useState } from "react";
import Subtask from "./Subtask";
import Input from "./Input";
import Item from './Item'

const Task = ({ task, taskIndex, tasks, setTasks }) => {
    // const [taskTitle, setTaskTitle] = useState(task.taskTitle)
    // const [subtasks, setSubtasks] = useState(task.subtask);

    const subtaskList = task.subtask.map((e, i) => (
        <Subtask
            key={e.id}
            subIndex={i}
            subtask={e}
            // subtasks={subtasks}
            // setSubtasks={setSubtasks}
            task={task}
            taskIndex={taskIndex}
            tasks={tasks}
            setTasks={setTasks}
        />
    ));

    const numberOfDone = task.subtask.filter(e=>e.isDone).length



    return (
        <div className={'container'}>
            <br />
            <Item

                taskIndex={taskIndex}
                task={task}
                tasks={tasks}
                setTasks={setTasks}
                whatList={2}
                value={task.taskTitle}
                isDone={task.isDone}
            />
            <span>{numberOfDone}/{task.subtask.length}</span>
            {subtaskList}
            <Input
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                class='form-control'
                placeholder={"Add subtask..."}
                whatList={1}
                task={task}
                taskIndex={taskIndex}
                tasks={tasks}
                setTasks={setTasks}
            />
        </div>
    );
};

export default Task;
