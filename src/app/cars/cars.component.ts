import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  cars = [
    {"Id": 1, "Name": "BMW", "Price": "64000"},
    {"Id": 2, "Name": "Porsche", "Price": "52000"},
    {"Id": 3, "Name": "Ferrari", "Price": "48000"},
    {"Id": 4, "Name": "Nissan", "Price": "75000"},
    {"Id": 5, "Name": "Dodge", "Price": "34000"},
  ]
  
  selectedId: any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => this.selectedId = params.get("id"));
  }

  carDetails(car: any) {
    this.router.navigate(["car_details", car.Id]);
  }
}