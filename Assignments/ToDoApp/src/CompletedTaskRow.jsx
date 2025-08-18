export default function CompletedTaskRow({id,title,tasks,completed,updateCompleted,updateTasks}){
    function handleCheckbox(){
        const thisTask=completed.find(t=>t.id===id);
        const newCompletedTasks = completed.filter(t => t.id !== id);
        const newTasks=[...tasks,thisTask];
        updateTasks(newTasks);
        updateCompleted(newCompletedTasks);
    }
    return (
        <div >
            <input className="accent-yellow-500" type="checkbox" defaultChecked={true} id={id} onChange={handleCheckbox} />
            <label className="text-gray-600 font-medium ml-2" htmlFor={id}>{title}</label>
        </div>
    )
}