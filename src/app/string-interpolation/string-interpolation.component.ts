import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styles: [
    `
      div {background-color: grey}
    `
  ]
})
export class StringInterpolationComponent {
  name = "Learning Angular"

  display(message:string) {
    return message;
  }
}
