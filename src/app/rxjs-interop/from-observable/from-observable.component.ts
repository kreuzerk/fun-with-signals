import {Component, OnDestroy} from "@angular/core";
import {delay, from, interval, Subject, take, tap} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {fromObservable} from "./fromObservable";

@Component({
  selector: 'from-observable',
  template: `
    <h1>Observable</h1>
    {{ values | async }}

    <h1>Signal</h1>
    {{ signalValue() }}
  `,
  standalone: true,
  imports: [AsyncPipe]
})
export class FromObservableComponent implements OnDestroy {

  private destroy$ = new Subject<void>();

  values = interval( 1000).pipe(
    take(10),
  )

  signalValue = fromObservable(interval( 1000).pipe(
    take(10),
  ), 0, this.destroy$);

  ngOnDestroy(): void {
    this.destroy$.next()
  }

}
