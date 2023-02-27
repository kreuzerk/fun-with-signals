import {Component, signal} from "@angular/core";
import {toObservable} from "./to-observable";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'to-observable',
  template: `
    <button (click)="increment()">Click me</button>
    <h1>Signal</h1>
    <h3>{{ count() }}</h3>

    <h1>Observable</h1>
    <h3>{{ count$ | async }}</h3>
  `,
  imports: [AsyncPipe],
  standalone: true
})
export class ToObservableComponent {
  count = signal(0);
  count$ = toObservable(this.count);

  increment(){
    this.count.update(state => state + 1);
  }
}
