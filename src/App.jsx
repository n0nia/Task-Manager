import React from 'react';
import './App.css';
import TaskViewer from './components/task-viewer/TaskViewer';

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

  return React.createElement(
    `div`,
    {
      className: "app-container"
    },
    React.createElement(
    `div`,
    {
      className: "app-content"
    },
    React.createElement('h3', {}, ""),
    React.createElement(TaskViewer, { taskList: data })
    )
  );

  //return (
  //  <div className='app-container'>
  //    <div className='app-content'>
  //      <h3>Task Manager</h3>
  //      <TaskViewer taskList={data}/>
  //    </div>
  //  </div>
  //);

}

export default App;
