// *** Literal Types ***

// Ex. 2
// function compare(a: string, b: string): -1 | 0 | 1 {
//     return a === b ? 0 : a > b ? 1 : -1;
// }

// // Ex. 3
// function handleRequest(url: string, method: "GET" | "POST"): void{
//     console.log("Request accepted.")
// }

// var url = "https://example.com";
// var method = "GET";
// handleRequest(url,method as "GET")

// ---------------------------------------------------

// *** tuple ***
// Ex.1
// var marks: (string|number)[] = [98, 96, 95, 91,"hello"];
 
// var itemsCol1:(string|number|boolean)[] = ["PI", 3.14159, true,"E",2.17,true];
// var itemsCol2: [string, number, boolean] = ["PI", 3.14159, true];

// ...... types: any,unknown,undefined,never .......

// Ex.1
// var a: any;
// a = 10;
// a = 20;
// a = "hello"

// Ex.2
// var b:unknown;
// b = 7
// b = "Hello"

// function accepted(x:unknown){
//     if(typeof x === "number"){

//     }
// }

// Ex.3
// var a : undefined;
// a = undefined;

// Ex.4
// function abc(): never {
//   while (true) {
//     console.log("Hello");
//   }
// }

// abc();
// console.log("Task End!");

// --------------------------------------------------------
// *** Enums ***

// type direction = {
//   TOP: "top";
//   BOTTOM: "bottom";
//   LEFT: "left";
//   RIGHT: "right";
// };

// interface DIRECTION{
//     TOP: "top";
//     BOTTOM: "bottom";
//     LEFT: "left";
//     RIGHT: "right";
// }

enum Direction {
  TOP = "top",
  LEFT = "left",
  RIGHT = "right",
  BOTTOM = "bottom",
}

console.log(Direction.TOP);