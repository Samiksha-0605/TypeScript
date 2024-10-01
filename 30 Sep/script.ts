// Generics for functions interfaces classes
function load<T>(msg:T) {
    console.log(msg);
}
load<string>("Hey");
load<number>(5);
load<boolean>(true);

//--------------------------------------

interface locker<T> {
  key: T;
}
let lock: locker<number> = { key: 1234 };
console.log(lock);

let lock2: locker<string> = { key: "abc" };
console.log(lock2);

//---------------------------------------

// class LaptopBuilder<T> {
//     constructor(public id:T) {

//     }
// }
// let b = new LaptopBuilder<string>("onetwothree")
// let b2 = new LaptopBuilder<number>(123)

//---------------------------------------

function recorder<T>(a: T): T {
  return <T>"sey"     // type assertion
  return "sey" as T   // type assertion
}
recorder<string>("yes");


let num = "123"
console.log(Number(num))

let n = 531
console.log(String(n))
