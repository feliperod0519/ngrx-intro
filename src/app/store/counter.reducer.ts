import { createReducer, on } from "@ngrx/store";

import { increment,decrement,set } from './counter.actions';

//import { Action } from '@ngrx/store';
//import { CounterActions, INCREMENT, DECREMENT, IncrementAction, DecrementAction } from './counter.actions'

const initialState = 0;

//Official way to create Reducers
export const counterReducer = createReducer(
    initialState,
    on(increment, (state,action) => state + action.myvalue),
    on(decrement, (state,action) => state - action.myvalue),
    on(set,(state,action)=>action.myvalue)
);

//Second way to Create Reducers
// export function counterReducer(state=initialState, action:CounterActions | Action){
//     if (action.type===INCREMENT){
//         return state + (action as IncrementAction).value;
//     }
//     else if (action.type===DECREMENT){
//         return state - (action as DecrementAction).value;
//     }
//     return state
//  }