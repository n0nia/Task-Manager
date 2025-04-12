import "./TaskViewer.css";
import TaskCard from "../task-card/TaskCard";

function TaskViewer(props) {
    return (
        <div className="task-viewer-container">
            <div className="task-list-container">
                <TaskCard 
                id={props.taskList[0].id}
                name={props.taskList[0].name}
                status={props.taskList[0].status}
                dueDate={props.taskList[0].dueDate}
                />
                <TaskCard 
                id={props.taskList[1].id}
                name={props.taskList[1].name}
                status={props.taskList[1].status}
                dueDate={props.taskList[1].dueDate}
                />
                <TaskCard 
                id={props.taskList[2].id}
                name={props.taskList[2].name}
                status={props.taskList[2].status}
                dueDate={props.taskList[2].dueDate}
                />
      </div>
    </div>
    );
}

export default TaskViewer;