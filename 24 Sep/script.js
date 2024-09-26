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
var SuperDancer = /** @class */ (function () {
    function SuperDancer(name, age, danceStyle) {
        this.name = name;
        this.age = age;
        this.danceStyle = danceStyle;
    }
    SuperDancer.prototype.getData = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Dance Style: ").concat(this.danceStyle);
    };
    return SuperDancer;
}());
var s = new SuperDancer("Aarvi", 10, "Hip Hop");
console.log(s.getData());
