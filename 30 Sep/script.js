"use strict";
// Generics for functions interfaces classes
function load(msg) {
    console.log(msg);
}
load("Hey");
load(5);
load(true);
let lock = { key: 1234 };
console.log(lock);
let lock2 = { key: "abc" };
console.log(lock2);
//---------------------------------------
// class LaptopBuilder<T> {
//     constructor(public id:T) {
//     }
// }
// let b = new LaptopBuilder<string>("onetwothree")
// let b2 = new LaptopBuilder<number>(123)
//---------------------------------------
function recorder(a) {
    return "sey"; // type assertion
    return "sey"; // type assertion
}
recorder("yes");
let num = "123";
console.log(Number(num));
let n = 531;
console.log(String(n));
