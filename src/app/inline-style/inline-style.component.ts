import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-style',
  templateUrl: './inline-style.component.html',
  styles: [
    `
      h1 {
        color: red;
      }
    `
  ]
})
export class InlineStyleComponent {

}
