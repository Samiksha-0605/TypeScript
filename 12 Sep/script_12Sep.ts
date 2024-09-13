// *** Interface ***

// Ex.1
// interface Gola {
//   x: number;
//   y: number;
//   r: number;
// }
// var circle: Gola = { x: 2, y: 3, r: 4 };
// function Area(c: Gola) {
//   console.log(`Area of given circle having coordinates (${c.x},${c.y}) 
// with radius:${c.r} is ${3.14 * c.r ** 2} sq.cm`);
// }

// Area({ x: 2, y: 3, r: 4 });
// Area({ x: 5, y: 7, r: 2 });
// Area({ x: 9, y: 2, r: 3 });

// -------------------------------------------------

// *** Difference between type vs interface ***

// Ex.1
// type digit = number;
// var a: number = 89;
// var b: digit = 89;

// interface Digit {

// }

// Ex.2
// interface Animal {
//   name: string;
// }
// interface Bear extends Animal {
// //   name: string;
//   honey: boolean;
// }
// const bear: Bear = { name: "Bhaalu", honey: true };
// console.log(bear.name);
// console.log(bear.honey);

// -----------------------------------------------------

// type animal = {
//   name: string;
// };
// type bear = animal & {
//   honey: boolean;
// };
// const Beear: bear = { name: "Bhaalu", honey: false };
// console.log(Beear.name);
// console.log(Beear.honey);

// Ex. 3
// interface Hero {
//   fly: boolean;
//   fastRunner: boolean;
// }
// interface Hero{
//     intelligenceLevel:number;
// }
// var hero:Hero = {
//     fly: true,
//     fastRunner: true,
//     intelligenceLevel: 100
// }


// type Hero = {
//     fly: boolean;
//     fastRunner: boolean;
// }
// type Person= {   //error
//     intelligenceLevel: number;
// }
// type SuperHuman = Hero & Person