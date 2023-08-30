import { createSelector } from "@ngrx/store";

export const selectCount = (state:{counter:number})=> state.counter;
//layering selector the second one is based on the first one
export const selectDoubleCount = createSelector(
    selectCount, (state)=>state*2
);
