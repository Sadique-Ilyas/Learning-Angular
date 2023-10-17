import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent {
  divStringStyles = "color space";
  divArrayStyles = ["color", "font", "space"];

  public style = new MyDivStyles();
}

class MyDivStyles {
  font = true;
  color = false;
}