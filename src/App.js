import './App.css';
import TaskCard from './components/task-card/TaskCard';

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
    }
  ]

  return (
    <div className='app-container'>
      <TaskCard 
        id={data[0].id}
        status={data[0].status}
        name={data[0].name}
        dueDate={data[0].dueDate}
      />
      <TaskCard 
        id={data[1].id}
        status={data[1].status}
        name={data[1].name}
        dueDate={data[1].dueDate}
      />
      <TaskCard 
        id={data[2].id}
        status={data[2].status}
        name={data[2].name}
        dueDate={data[2].dueDate}
      />
    </div>
  );

}

export default App;
