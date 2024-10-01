// Static Method : Static methods and properties are methods and properties that belongs to a class rather than an instance of the class.

// Ex.1:
class Laptop {
  static Company: string = "DELL";
  static OS: string = "Windows";
  static Color: string;
  constructor(
    public ram: number,
    public rom: number,
    public processor: string
  ) {}

  openApp(app: string) {
    console.log(`Opening ${app} on ${Laptop.OS} OS`);
  }

  static GiveColor(Color: string) {
    this.Color = Color;
  }
}
let lp = new Laptop(16, 512, "itel i5");
console.log("Company Name: ", Laptop.Company);
Laptop.Company = "HP";
console.log("Company Name: ", Laptop.Company);

// ------------------------------------------------------------

// Ex.2:
class Employee {
  Company: string = "FastCart";
  static NoOfEmps: number = 0;
  id: number;
  constructor(public Name: string) {
    Employee.NoOfEmps++;
    this.id = Employee.NoOfEmps + 100;
  }

  EmpDate() {
    console.log(`Company Name: ${this.Company}`);
    console.log(`id of Employee: ${this.id}`);
    console.log(`Name of Employee: ${this.Name}`);
  }
}

console.log(Employee.NoOfEmps);
let e1 = new Employee("Samiksha");
let e2 = new Employee("Sanket");
let e3 = new Employee("Aarvi");
let e4 = new Employee("Soham");
console.log(Employee.NoOfEmps);
e3.EmpDate();
