import { Component } from '@angular/core';

@Component({
  selector: 'app-input-value',
  templateUrl: './input-value.component.html',
  styleUrls: ['./input-value.component.css']
})
export class InputValueComponent {
  text = "";
  sendText(inputBox: any) {
    this.text = inputBox.value;
  }
}
