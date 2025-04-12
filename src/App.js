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
  ];

  return (
    <div className='app-container'>
      <TaskViewer taskList={data}/>
    </div>
  );

}

export default App;
