var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.Area = function (side) {
        return side * side;
    };
    return Square;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.Area = function (radius) {
        return Math.PI * radius * radius;
    };
    return Circle;
}(Shape));
var circle = new Circle();
var a = circle.Area(3);
console.log(a);
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Triangle.prototype.Area = function (a, b, c) {
        if (typeof c == "undefined") {
            return 0.5 * a * b;
        }
        else {
            var s = (a + b + c) / 2;
            return Math.sqrt(s * (s - a) * (s - b) * (s - c));
        }
    };
    return Triangle;
}(Shape));
var tri = new Triangle();
console.log(tri.Area(3, 6));
// ---------------------------------------------------- 
// .........Task Example.........
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    return Calculator;
}());
var Addition = /** @class */ (function (_super) {
    __extends(Addition, _super);
    function Addition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Addition.prototype.Add = function (a, b) {
        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        }
        if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
            var result = new Array(a.length);
            for (var i = 0; i < a.length; i++) {
                result[i] = new Array(a[i].length);
                for (var j = 0; j < a[i].length; j++) {
                    result[i][j] = a[i][j] + b[i][j];
                }
            }
            return result;
        }
        return [];
    };
    return Addition;
}(Calculator));
var calculator = new Addition();
var arithmaticAddition = calculator.Add(4, 5);
console.log("Arithmetic Addition:", arithmaticAddition);
var matrixA = [
    [1, 2, 3],
    [4, 5, 6]
];
var matrixB = [
    [7, 8, 9],
    [10, 11, 12]
];
var matrixAddition = calculator.Add(matrixA, matrixB);
console.log("Matrix Addition:", matrixAddition);
