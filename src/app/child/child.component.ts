import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Input() public data: string = "";

  public myData = "Passing data from Child component to Parent Component";

  @Output() public event = new EventEmitter();
 
 sendData(myData: string) {
  this.event.emit(myData);
 }

}
