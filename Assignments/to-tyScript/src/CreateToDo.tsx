import { withFormik,type FormikBag, type FormikProps } from "formik";
import type { CreateTodoProps, formikValueType } from "./TaskType";
import type { FC } from "react";

function saveData(values:formikValueType, bag:FormikBag<CreateTodoProps,formikValueType>) {
    const tasksIds = bag.props.tasks.map(task => +task.id);
    const completeTasksIds = bag.props.completed.map(task => +task.id);
    const nextId = Math.max(...tasksIds, ...completeTasksIds) + 1;
    const newTasks = [...bag.props.tasks, { id: nextId+"", title: values.input }];
    bag.props.updateTasks(newTasks);
    if(!bag.props.setAdd) return;
    bag.props.setAdd(false);
}

const CreateTodo:FC<CreateTodoProps&FormikProps<formikValueType>>=({ values, handleSubmit, handleBlur, handleChange,setAdd })=> {
    function handleAdd() {
        if(!setAdd) return;
        setAdd(false);
    }
    return (
        <div className="w-full shadow-md sm:p-10 p-5">
            <form onSubmit={handleSubmit}
                className="flex flex-col gap-2">
                <h1 className="text-xl font-bold">Create a Todo</h1>
                <input className="w-68 sm:w-80 border border-gray-300 rounded-md placeholder:text-gray-400 px-4 py-2"
                    placeholder="Write an article about @xstate/test"
                    name="input"
                    type="text"
                    value={values.input ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                <div className="flex gap-2">
                    <button type="submit" className="bg-yellow-500 text-white font-medium px-4 py-2 rounded-md">Save</button>
                    <button type="button" onClick={handleAdd} className="hover:bg-yellow-600 hover:text-white  px-4 py-2 rounded-md">Cancel</button>
                </div>
            </form>
        </div>
    )
}

const customHOC = withFormik({ mapPropsToValues: () => ({ input: '' }), handleSubmit: saveData })
export default customHOC(CreateTodo);