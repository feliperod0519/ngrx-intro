import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment,decrement } from '../store/counter.actions';

//import {  DecrementAction, IncrementAction } from '../store/counter.actions';

//import { CounterService } from '../counter.service'; //OLD-CODE

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {

  constructor(private store:Store){
  }

  increment() {
    this.store.dispatch(increment({myvalue:4}));
    //this.store.dispatch(new IncrementAction(4));
  }

  decrement() {
    this.store.dispatch(decrement({myvalue:4}));
    //this.store.dispatch(new DecrementAction(4));
  }

  //OLD-CODE
  //constructor(private counterService: CounterService) {}

  // increment() {
  //   this.counterService.increment();
  // }

  // decrement() {
  //   this.counterService.decrement();
  // }
  //EOF:OLD-CODE
}
