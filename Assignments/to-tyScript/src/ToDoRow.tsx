import { ImCross } from "react-icons/im";
import type { FC } from "react";
import type { task, TodoListProps } from "./TaskType";
const TodoRow:FC<TodoListProps&task>=({id,title,tasks,completed,updateCompleted,updateTasks})=> {
    function handleCheckbox(){
        const thisTask = tasks.find(t => t.id === id);
        if(!thisTask) return;
        const newTasks = tasks.filter(t => t.id !== id);
        const newCompleted = [thisTask,...completed] ;
        updateCompleted(newCompleted);
        updateTasks(newTasks);
    }
    function handleRemove(){
        const newTasks = tasks.filter(t => t.id !== id);
        updateTasks(newTasks);
    }
    return (
        <div className="">
            <input className="accent-yellow-500" type="checkbox" id={id} onChange={handleCheckbox}/>
            <label className="text-gray-600 font-medium ml-2" htmlFor={id}>{title}</label>
            <button className="ml-3 text-sm text-yellow-500 hover:text-yellow-600" onClick={handleRemove}><ImCross /></button>
        </div>
    )
}
export default TodoRow;