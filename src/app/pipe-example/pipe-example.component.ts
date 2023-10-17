import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent {
  text = "Learning angular is fun !!!";
  date = Date.now();
  public obj = new Heroes(101, "Steve Rogers", "Brooklyn");
}

class Heroes {
  public Id: number;
  public Name: string;
  public Location: string;

  public constructor(Id: number, Name: string, Location: string) {
    this.Id = Id;
    this.Name = Name;
    this.Location = Location;
  }
}
