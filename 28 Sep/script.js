// Static Method : Static methods and properties are methods and properties that belongs to a class rather than an instance of the class.
// Ex.1:
var Laptop = /** @class */ (function () {
    function Laptop(ram, rom, processor) {
        this.ram = ram;
        this.rom = rom;
        this.processor = processor;
    }
    Laptop.prototype.openApp = function (app) {
        console.log("Opening ".concat(app, " on ").concat(Laptop.OS, " OS"));
    };
    Laptop.GiveColor = function (Color) {
        this.Color = Color;
    };
    Laptop.Company = "DELL";
    Laptop.OS = "Windows";
    return Laptop;
}());
var lp = new Laptop(16, 512, "itel i5");
console.log("Company Name: ", Laptop.Company);
Laptop.Company = "HP";
console.log("Company Name: ", Laptop.Company);
// ------------------------------------------------------------
// Ex.2:
var Employee = /** @class */ (function () {
    function Employee(Name) {
        this.Name = Name;
        this.Company = "FastCart";
        Employee.NoOfEmps++;
        this.id = Employee.NoOfEmps + 100;
    }
    Employee.prototype.EmpDate = function () {
        console.log("Company Name: ".concat(this.Company));
        console.log("id of Employee: ".concat(this.id));
        console.log("Name of Employee: ".concat(this.Name));
    };
    Employee.NoOfEmps = 0;
    return Employee;
}());
console.log(Employee.NoOfEmps);
var e1 = new Employee("Samiksha");
var e2 = new Employee("Sanket");
var e3 = new Employee("Aarvi");
var e4 = new Employee("Soham");
console.log(Employee.NoOfEmps);
e3.EmpDate();
