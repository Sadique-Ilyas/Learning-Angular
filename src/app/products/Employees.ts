export interface Employee
{
	EmployeeID: number;
    LastName: string;
    FirstName: string;
}

export interface JResponse 
{
    employees: Employee[];
}