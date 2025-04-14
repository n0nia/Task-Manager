import React, { useState } from "react";
import './CreateTaskForm.css'

const CreateTaskForm = () => {

    //const [taskName, setTaskName] = useState("");
    //const [dueDate, setDueDate] = useState();
    //const [taskDetails, setTaskDetails] = useState("");

    const [formData, setFormData] = useState({
        taskName: "",
        dueDate: "",
        taskDetails: ""
    });
/*
    const handleNameChange = (event) => {
        setFormData((prevState) => ({
                ...prevState,
                taskName: event.target.value
        }));
        //setTaskName(event.target.value);
    };

    const handleDateChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            dueDate: event.target.value
        }));
        //setDueDate(event.target.value);
    };

    const handleDetailsChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            taskDetails: event.target.value
        }));
        //setTaskDetails(event.target.value);
    };
*/
    const handleInputChange = (event) => {
        console.log(event.target.name);

        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
            //ex: ["taskName"]: event.target.value
        }));
    }

    const handleSubmit= (event) => {
        event.preventDefault();
        console.log("FormData: ", formData);

        //const newTask = {
        //    name: taskName,
        //    dueDate: dueDate,
        //    taskDetails: taskDetails
        //};

        //console.log("newTask", newTask);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <label className="label-md">Task Name</label>
                    <input name='taskName' onChange={handleInputChange} className="input-primary" type="text" />
                </div>
                <div className="form-row">
                    <label className="label-md">Due Date</label>
                    <input name='dueDate' onChange={handleInputChange} className="input-primary" type="date" />
                </div>
                <div className="form-row">
                    <label className="label-md">Task Details</label>
                    <textarea name='taskDetails' onChange={handleInputChange} className="input-primary" cols="30" rows="10"></textarea>
                </div>

                <button className="button-primary" type="submit">Create Task</button>
            </form>
        </div>
    )
}

export default CreateTaskForm;