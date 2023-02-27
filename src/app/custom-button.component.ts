import {Component, EventEmitter, Output, signal} from "@angular/core";

@Component({
  selector: 'custom-button',
  template: `
    <button (click)="handleClick()">Click</button>
  `,
  styles: [`
    button {
      background-color: #00005c;
      border: none;
      color: white;
      border-radius: 4px;
      padding: 15px 32px;
      cursor: pointer;
    }
  `],
  standalone: true
})
export class CustomButtonComponent {
  @Output() customClick = new EventEmitter();
  customClickSignal = signal(0);

  handleClick(){
    this.customClick.emit();
    this.customClickSignal.update(state => state + 1);
  }
}
