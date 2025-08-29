import { createStore, type Action } from "redux";

export type State={
    happyCount:number;
    sadCount:number
};
const initialState={
    happyCount:0,
    sadCount:0
}
function reducer(currentState: State=initialState, action:Action): State{
    if(action.type==="happy button clicked"){
        return {...currentState,happyCount:currentState.happyCount+1};
    }else if(action.type==="sad button clicked"){
        return {...currentState,sadCount:currentState.sadCount+1};
    }
    return currentState;
}
const store=createStore(reducer,(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
export default store;