import { Action, createAction,props } from "@ngrx/store";

export const increment = createAction(
    '[Counter] Increment', props<{myvalue:number}>()
);

export const decrement = createAction(
    '[Counter] Decrement', props<{myvalue:number}>()
);

export const init = createAction(
    '[Counter] Init'
)

export const set = createAction(
    '[Counter] Set', props<{myvalue:number}>()
)

//Alternative way (2nd)
// export const INCREMENT = '[Counter] Increment';
// export const DECREMENT = '[Counter] Decrement';

// export class IncrementAction implements Action{
//     readonly type = '[Counter] Increment';

//     constructor(public value:number){}
// }

// export class DecrementAction implements Action{
//     readonly type = '[Counter] Decrement';

//     constructor(public value:number){}
// }

// export type CounterActions = IncrementAction | DecrementAction;
//EOF Alternative way