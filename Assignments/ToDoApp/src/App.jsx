import { useEffect, useState } from 'react'
import Header from './Header.jsx';
import Refresh from './Refresh.jsx';
import TodoList from './TodoList.jsx';
import { sampleTasks,sampleTasksDone } from './SampleData.js';
function App() {
const savedTasks = JSON.parse(
  localStorage.getItem("To-do") ||
  JSON.stringify(sampleTasks)
);

const completedTasks = JSON.parse(
  localStorage.getItem("completed") ||
  JSON.stringify(sampleTasksDone)
);




  const [tasks,updateTasks]=useState(savedTasks);
  const [completed,updateCompleted]=useState(completedTasks);
  useEffect(()=>{
    localStorage.setItem("To-do",JSON.stringify(tasks));
  }
  ,[tasks]);
  useEffect(()=>{
    localStorage.setItem("completed",JSON.stringify(completed));
  }
  ,[completed]);




  return (
    <div className='min-h-screen w-full flex flex-col items-center'>
      <Header/>
      <Refresh updateCompleted={updateCompleted} updateTasks={updateTasks}/>
      <TodoList tasks={tasks} completed={completed} updateTasks={updateTasks} updateCompleted={updateCompleted}/>
    </div>
  )
}

export default App