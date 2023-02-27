import {Component} from "@angular/core";

@Component({
  selector: 'spinner',
  template: ` <div class="loading"></div> `,
  styles: [
    `
      .loading {
        width: 30px;
        height: 30px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: black;
        animation: spin 1s ease-in-out infinite;
        -webkit-animation: spin 1s ease-in-out infinite;
      }
      @keyframes spin {
        to {
          -webkit-transform: rotate(360deg);
        }
      }
      @-webkit-keyframes spin {
        to {
          -webkit-transform: rotate(360deg);
        }
      }
    `,
  ],
  standalone: true
})
export class SpinnerComponent {
}
