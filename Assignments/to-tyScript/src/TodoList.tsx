import { useState, type FC } from "react"
import CompletedTaskRow from "./CompletedTaskRow";
import { FaPlus } from "react-icons/fa";
import type { TodoListProps } from "./TaskType";
import TodoRow from "./TodoRow";
import CreateTodo from "./CreateTodo";


const TodoList:FC<TodoListProps>=({tasks,completed,updateCompleted,updateTasks})=>{
    const [add,setAdd]=useState(false);
    function handleAdd(){
        setAdd(true);
    }
    return (
        <div className="w-full font-semibold px-10 sm:px-20 flex flex-col">
            <h1>Things to do</h1>
            <div>
                {tasks.map((task)=>(
                    <TodoRow key={task.id} {...task} tasks={tasks} completed={completed} updateTasks={updateTasks} updateCompleted={updateCompleted}></TodoRow>
                ))}
                {!add &&<button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-4 py-2 rounded-full my-4 flex items-center" onClick={handleAdd}> <FaPlus />Add a Todo</button>}
                {add && <CreateTodo tasks={tasks} updateTasks={updateTasks} setAdd={setAdd} completed={completed}/>}
            </div>
            <h1>Things done</h1>
            <div>
                {completed.map((task)=>
                    <CompletedTaskRow key={task.id} {...task} tasks={tasks} completed={completed} updateTasks={updateTasks} updateCompleted={updateCompleted} />
                )}
            </div>
        </div>
    )
}
export default TodoList;