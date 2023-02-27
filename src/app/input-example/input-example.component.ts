import {Component, ViewChild} from "@angular/core";
import {map, Subject} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {SignalInputDirective} from "./signal-input.directive";

@Component({
  selector: 'input-example',
  template: `
    <input signalInput type="text">
    {{ input.value() }}
  `,
  standalone: true,
  imports: [AsyncPipe, SignalInputDirective]
})
export class InputExampleComponent {

  @ViewChild(SignalInputDirective, {static: true}) input!: SignalInputDirective;

}
