import React from 'react';
import './App.css';
import TaskViewer from './components/task-viewer/TaskViewer';
import CreateTaskForm from './components/forms/CreateTaskForm';

function App() {

  const data = [
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2025, 3, 12)
    },
    {
      id: "T-2",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2025, 3, 13)
    },
    {
      id: "T-3",
      name: "15 Create a Design System for Enum Workspace.",
      status: "Complete",
      dueDate: new Date(2025, 3, 14)
    },
    {
      id: "T-4",
      name: "152 Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2025, 3, 15)
    },
    {
      id: "T-5",
      name: "15 Create a Design System for Enum Workspace.",
      status: "Complete",
      dueDate: new Date(2025, 3, 14)
    },
    {
      id: "T-6",
      name: "152 Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2025, 3, 15)
    }
  ];

  return (
    <div className='app-container'>
      <div className='app-content'>
        <TaskViewer taskList={data}/>
        <div className='side-bar-right'>
          <div className='card-xl'>
            <h3>Create task</h3>
            <form></form>
          </div>
        </div>
      </div>
    </div>
  );

}

export default App;
