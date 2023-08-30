import { Actions, createEffect, ofType } from "@ngrx/effects";
import { increment, decrement, init, set } from './counter.actions';

import { switchMap, tap, withLatestFrom, of } from 'rxjs';
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectCount } from "./counter.selector";

@Injectable()
export class CounterEffects{

    loadCount = createEffect(()=>this.actions$.pipe(
        ofType(init),
        switchMap(()=>{
            const storedCounter = localStorage.getItem('count');
            if (storedCounter)
                return of(set({myvalue:+storedCounter}));
            return of(set({myvalue:0}));
        }),
    ));

    saveCount = createEffect(()=>this.actions$.pipe(
        ofType(increment, decrement),
        withLatestFrom(this.store.select(selectCount)),
        tap(([action,counter])=>{
            console.log(action);
            localStorage.setItem('count',counter.toString());
        })
    ),{dispatch:false});

    constructor(private actions$:Actions, private store:Store<{counter:number}>){}
}

//@Effect is no longer supported