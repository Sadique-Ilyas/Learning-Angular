import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-example',
  templateUrl: './ng-for-example.component.html',
  styleUrls: ['./ng-for-example.component.css']
})
export class NgForExampleComponent {
  cars = ["Porsche", "Ferrari", "Bugatti", "Koenseigg", "Pagani"];

  employees = [
    new Employee("E101", "Jack", "Sales", 40000.00, ["Business Talks", "Daily Sales"]),
    new Employee("E102", "Jon", "Finance", 48000.00, ["Client Meetings", "Problem Solving"]),
    new Employee("E103", "Emma", "Legal", 36000.00, ["Client Information", "Court Room", "Legal Practice"]),
    new Employee("E104", "Carl", "Fraud", 50000.00, ["Cheque Fraud"]),
    new Employee("E105", "Tim", "IT", 40000.00, ["C#", ".NET", "Angular", "Entity Framework"]),
  ];
}

class Employee {
  public EmpId : string;
  public EmpName: string;
  public Department: string;
  public Salary: number;
  public TechStack: Array<string>;

  constructor(EmpId : string, EmpName: string, Department: string, Salary: number, TechStack: Array<string>) {
    this.EmpId = EmpId;
    this.EmpName = EmpName;
    this.Department = Department;
    this.Salary = Salary;
    this.TechStack = TechStack;
  }
}
