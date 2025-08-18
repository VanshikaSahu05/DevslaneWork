import { type Dispatch, type SetStateAction } from 'react'
export type task={
    id:string;
    title:string
}
export type tasksData=task[];
//base type with all the common properties
type BaseTodoProps = {
    tasks: tasksData;
    completed: tasksData;
    updateTasks: Dispatch<SetStateAction<tasksData>>;
};
//extended base type (DRY)

export type TodoListProps = BaseTodoProps & {
    updateCompleted: Dispatch<SetStateAction<tasksData>>;
};

export type CreateTodoProps = BaseTodoProps & {
    setAdd: Dispatch<SetStateAction<boolean>>;
};
export type formikValueType={
    input:string
}
export type updateStateType={
    updateCompleted: Dispatch<SetStateAction<tasksData>>;
    updateTasks: Dispatch<SetStateAction<tasksData>>;
};