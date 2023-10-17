import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Welcome } from '../products/Product';
import { JResponse } from '../products/Employees';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = "https://dummyjson.com/products";
  URL = "http://localhost:65041/WebService1.asmx/GetAllEmployees";

  constructor(private client:HttpClient) {}

  getProducts() {
    return this.client.get<Welcome>(this.url);
  }

  getEmployees() {
    return this.client.get<JResponse>(this.URL);
  }
}