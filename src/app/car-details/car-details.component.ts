import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent {

  id:any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => this.id = params.get("id"));
  }

  previous(id: number) {
    id--;
    this.router.navigate(['car_details', id]);
  }

  next(id: number) {
    id++;
    this.router.navigate(['car_details', id]);
  }

  backToCarList(id: number) {
    this.router.navigate(['cars', {id: id}])
  }
}
