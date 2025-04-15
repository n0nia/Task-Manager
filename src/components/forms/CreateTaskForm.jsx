import React, { useState } from "react";
import './CreateTaskForm.css'

const CreateTaskForm = () => {

    const [taskName, setTaskName] = useState("Test");
    const [dueDate, setDueDate] = useState();
    const [taskDetails, setTaskDetails] = useState("");


    const handleNameChange = (event) => {
        setTaskName(event.target.value);
    };

    const handleDateChange = (event) => {
        setDueDate(event.target.value);
    };

    const handleDetailsChange = (event) => {
        setTaskDetails(event.target.value);
    };

    const handleSubmit= (event) => {
        event.preventDefault();

        const newTask = {
            name: taskName,
            dueDate: dueDate,
            taskDetails: taskDetails,
            status: "Todo"
        };

        console.log("newTask=", newTask);
        setTaskName("");
        setDueDate("");
        setTaskDetails("");

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <label className="label-md">Task Name</label>
                    <input value={taskName} 
                    name='taskName' onChange={handleInputChange} 
                    className="input-primary" type="text" />
                </div>
                <div className="form-row">
                    <label className="label-md">Due Date</label>
                    <input value={dueDate}
                    name='dueDate' onChange={handleInputChange} 
                    className="input-primary" type="date" />
                </div>
                <div className="form-row">
                    <label className="label-md">Task Details</label>
                    <textarea value={taskDetails}
                    name='taskDetails' onChange={handleInputChange} 
                    className="input-primary" cols="30" rows="10"></textarea>
                </div>

                <button className="button-primary" type="submit">Create Task</button>
            </form>
        </div>
    )
}

export default CreateTaskForm;