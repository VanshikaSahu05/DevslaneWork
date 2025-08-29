import type { State } from "./store";

export function happyCountSelector(State:State){
    return State.happyCount;
}
export function SadCountSelector(State:State){
    return State.sadCount;
}