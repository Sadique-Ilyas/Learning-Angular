import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-template-style',
  template: `
    <h1>
      inline-template-style works!
    </h1>
  `,
  styles: [
    `
      h1 {
        color: green;
      }
    `
  ]
})
export class InlineTemplateStyleComponent {

}
