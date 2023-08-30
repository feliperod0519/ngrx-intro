import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store'
import { selectCount, selectDoubleCount } from '../store/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  
  count$: Observable<number>;
  doubleCount$ : Observable<number>;

  constructor(private store:Store<{counter:number}>){
    this.count$ = store.select(selectCount);
    this.doubleCount$ = store.select(selectDoubleCount);
  }
  //OLD-CODE
  //counter = 0;
  //counterServiceSub?: Subscription;

  // constructor(private counterService: CounterService) {}

  // ngOnInit(): void {
  //   this.counterServiceSub = this.counterService.counterChanged.subscribe(
  //     (newVal) => (this.counter = newVal)
  //   );
  // }

  // ngOnDestroy(): void {
  //   if (this.counterServiceSub) {
  //     this.counterServiceSub.unsubscribe();
  //   }
  // }
  //EOF:OLD-CODE
}
