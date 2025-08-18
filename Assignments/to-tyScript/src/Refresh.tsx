import type { FC } from 'react';
import { sampleTasks,sampleTasksDone } from './SampleData.ts';
import type { updateStateType } from './TaskType.js';
 const Refresh:FC<updateStateType>=({updateTasks,updateCompleted})=>{
    function handleRefresh(){
        updateTasks(sampleTasks);
        updateCompleted(sampleTasksDone);
    }
    return (
        <div className="md:flex-row w-full px-10 sm:px-20 py-5 flex flex-col items-start gap-2">
            <h1 className="text-3xl font-bold text-gray-800 grow">Things to get done</h1>
            <button className="py-2 px-4 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-white" onClick={handleRefresh}>Refresh</button>
        </div>
    )
}
export default Refresh;