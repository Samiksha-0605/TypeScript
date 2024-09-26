// *** Single Inheritance ***
// class Person {
//     constructor(public name:string,public age:number) {}
//     getPersonDetails() {
//         return `Name:${this.name}, Age:${this.age}`
//     }
// }
// class Student extends Person {
//     constructor(public name:string,public age:number,public rollno:number) {
//         super (name,age);
//     }
//     getStudentDetails() {
//         return `${this.getPersonDetails()}, Roll No.: ${this.rollno}`
//     }
// }
// let s1 = new Student("Samiksha",22,1);
// console.log(s1.getStudentDetails());


// *** Multi-level Inheritance ***
// class Person {
//     constructor(public name: string, public age: number) {}
//     getPersonDetails() {
//       return `Name: ${this.name}, Age: ${this.age}`;
//     }
// }
// class Employee extends Person {
//     constructor(
//     public name: string,
//     public age: number,
//     public department: string
// ) {
//     super(name, age);
// }
// getEmployeeDetails() {
//         return `${this.getPersonDetails()}, Department: ${this.department}`;
//     }
// }
// class Manager extends Employee {
//     constructor(
//     public name: string,
//     public age: number,
//     public department: string,
//     public project: string
// ){
//     super(name, age, department);
// }
// getManagerDetails() {
//         return `${this.getEmployeeDetails()}, Project: ${this.project}`;
//     }
// }
// let s2 = new Manager("Samiksha",22,"Computer","Web Development");
// console.log(s2.getManagerDetails());


// *** Hierarchical Inheritance ***
// class Person {
//     constructor(public name: string, public age: number) {}
//     getPersonDetails() {
//       return `Name: ${this.name}, Age: ${this.age}`;
//     }
// }
// class Student extends Person {
//     constructor(public name: string, public age: number, public rollno: number) {
//       super(name, age);
//     }
//     getStudentDetails() {
//       return `${this.getPersonDetails()}, RollNo.: ${this.rollno}`;
//     }
// }
// class Employee extends Person {
//     constructor(
//       public name: string,
//       public age: number,
//       public department: string
//     ) {
//       super(name, age);
//     }
//     getEmployeeDetails() {
//       return `${this.getPersonDetails()}, Department: ${this.department}`;
//     }
// }
// let s3 = new Employee("Samiksha",22,"Computer");
// console.log(s3.getEmployeeDetails());


// *** Multiple Inheritance ***
interface Person {
    name: string;
    age: number;
}
interface Dancer {
    danceStyle: string;
}
class SuperDancer implements Person, Dancer {
    constructor (
        public name: string,
        public age: number,
        public danceStyle: string
    ) {}
    getData() {
        return `Name: ${this.name}, Age: ${this.age}, Dance Style: ${this.danceStyle}`;
    }
}
let s = new SuperDancer ("Aarvi",10,"Hip Hop");
console.log(s.getData());