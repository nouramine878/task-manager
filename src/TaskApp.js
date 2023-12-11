import React, { useEffect, useState } from "react";
import Task from "./Task";
import Input from "./Input";

const TaskApp = () => {
    const [tasks, setTasks] = useState([]);

    const taskList = tasks.map((e, i) => (
        <Task
            key={Math.random() * 1000}
            task={e}
            taskIndex={i}
            tasks={tasks}
            setTasks={setTasks}
        />
    ));

    useEffect(() => {
        console.log(tasks);
    }, [tasks, setTasks]);

    return (
        <div className="container mt-5">
            <h2>Add your task here</h2>
                    <Input
                        className='form-control'
                        placeholder="Add task..."
                        whatList={2}
                        tasks={tasks}
                        setTasks={setTasks}
                    />
                    {taskList}
        </div>
    );
};

export default TaskApp;

