import {effect, SettableSignal} from "@angular/core";
import {Subject} from "rxjs";

export function toObservable(signalValue: SettableSignal<any>){
  const result = new Subject();

  effect(() => {
    result.next(signalValue());
  });

  return result.asObservable();
}
