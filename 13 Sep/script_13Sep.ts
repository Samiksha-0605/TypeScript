// Rivision Example

// type digit = number
// interface Point {
//     x:digit;
//     y:digit;
// }
// interface Square {
//     a:Point;
//     b:Point;
//     c:Point;
//     d:Point;
// }
// var sqr: Square = {
//   a: { x: 2, y: 2 },
//   b: { x: 4, y: 2 },
//   c: { x: 4, y: 4 },
//   d: { x: 2, y: 4 },
// };

 // --------------------------------------------------

// *** Type Assertion ***
// Type assertions are used to tell the compiler that you know better than it does.
// They are used to assert that a value is of a certain type.
// They are useful when you need to access a value of one type as if it were of another type.

// Ex.1
var box: HTMLElement | null;
box = document.getElementById("box");
console.log(box);

// Ex.2 
// function display(p:HTMLParagraphElement):void{
//     for(let i = 0;i < 5;i++){
//         console.log(p);
//     }
// }
// let p:HTMLParagraphElement = document.querySelector("#box");
// display(p);

// Ex.3
// let Name : "Sakshi";
// Name = "Sakshi"

// let five :5;
// five = 5;
// five = 8;