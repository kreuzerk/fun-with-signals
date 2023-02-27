import {Component, effect, OnInit, ViewChild} from '@angular/core';
import {CustomButtonComponent} from "./custom-button.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /*
  @ViewChild('customButton', {static: true}) customButton!: CustomButtonComponent;

  ngOnInit(): void {
    effect(() => {
      console.log('customClickSignal', this.customButton.customClickSignal());
    });
  }
   */

}
