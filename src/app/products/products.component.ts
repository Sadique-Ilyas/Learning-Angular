import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from './Product';
import { Employee } from './Employees';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent {
  products:Product[]=[];
  employees: Employee[] = [];

  constructor(private service: ProductsService) { }

  ngOnInit() {
    this.service.getProducts().subscribe((response) => {
      this.products = response.products;
      // console.log(this.products);
    });

    // Data coming from ASP .NET WebService
    this.service.getEmployees().subscribe((response) => {
      this.employees = response.employees;
      console.log(this.employees);
    });
  }
}