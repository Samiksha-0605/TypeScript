// var a:number = 5;
// var b:string = "Hello";
// var c:boolean = true;
// var d:number = 3;
// console.log(a**d); // output:125

// var arr:number[] = [3, 5, 8];
// var abc:any; // Avoid any type
// .............................................

// * Type Annotations on Functions *

// function greet():void {
//     console.log("Hello");
// }
// greet();

// function add(a:number, b:number):number {
//     var sum:number = a + b;
//     return sum;
// }
// console.log("Sum: " + add(4,7));
// ...........................................

// "S09AD0923" :string

// function setItemIdInDataBase(id:string):void {
//     id = id.toUpperCase();
//     console.log(`Registration of ${id} done successfully..!`);
// }
// setItemIdInDataBase("s09AD0923");
// .....................................

// var marks = [88, 99, 97, 95];
// marks.forEach(function (m): void {
//     console.log("-->" + m);
// });

// function ShowCoordinates (point: {x:number; y:number}):void {
//     console.log(`Coordinates: (${point.x}, ${point.y})`);
// }
// var Point = {x:5, y:4}
// ShowCoordinates(Point)

// ShowCoordinates({ x:5, y:4, z:5}) // Error
// .....................................................................

// Optional Parameters:
function display (msg:string, m?: string):void {
    console.log(msg);
    console.log(m);
}
display("Hello");
display("Hello", "World");