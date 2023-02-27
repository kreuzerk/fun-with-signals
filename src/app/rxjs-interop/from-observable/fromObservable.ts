import {Observable, takeUntil} from "rxjs";
import {signal} from "@angular/core";

export function fromObservable(source: Observable<any>, initialValue: any, cleanupStream?: Observable<any>) {
  const result = signal(initialValue);

  const observer = {
    next: (value: any) => result.set(value),
    error: (error: any) => result.set(error)
  }

  if (cleanupStream) {
    source.pipe(
      takeUntil(cleanupStream)
    ).subscribe(observer);
  } else {
    source.subscribe(observer);
  }
  return result;
}
