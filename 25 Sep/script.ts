abstract class Shape {
    abstract Area(...args: number[]):number ;
}

class Square extends Shape {
    Area(side:number) {
        return side*side;
    }
}
class Circle extends Shape {
    Area(radius:number):number {
        return Math.PI * radius *radius;
    }
}
let circle = new Circle();
let a = circle.Area(3);
console.log(a);


class Triangle extends Shape {
    Area(base: number, height: number): number;
    Area(a: number, b: number, c: number): number;
  
    Area(a: number, b: number, c?: number): number {
      if (typeof c == "undefined") {
        return 0.5 * a * b;
      } 
      else {
        let s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
      }
    }
  }
  
  let tri = new Triangle();
  console.log(tri.Area(3,6));
