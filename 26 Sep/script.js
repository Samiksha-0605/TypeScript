// Example 1: Hierarchical Inheritance
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
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    return Calculator;
}());
var ArithmaticCal = /** @class */ (function (_super) {
    __extends(ArithmaticCal, _super);
    function ArithmaticCal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArithmaticCal.prototype.multiply = function () {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        var product = 1;
        for (var i = 1; i < nums.length; i++) {
            product *= nums[i];
        }
        return product;
    };
    return ArithmaticCal;
}(Calculator));
var MatrixCal = /** @class */ (function (_super) {
    __extends(MatrixCal, _super);
    function MatrixCal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatrixCal.prototype.multiply = function (A, B) {
        var M = {
            0: [0, 0, 0],
            1: [0, 0, 0],
            2: [0, 0, 0],
        };
        // Matrix multiplication logic
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                for (var k = 0; k < 3; k++) {
                    M[i][j] += A[i][k] * B[k][j];
                }
            }
        }
        return M;
    };
    return MatrixCal;
}(Calculator));
var c1 = new ArithmaticCal();
console.log(c1.multiply(3, 4, 5, 7, 6, 5, 10)); // Example multiplication
var A = {
    0: [1, 2, 3],
    1: [4, 5, 6],
    2: [7, 8, 9],
};
var B = {
    0: [9, 8, 7],
    1: [6, 5, 4],
    2: [3, 2, 1]
};
var c2 = new MatrixCal();
console.log(c2.multiply(A, B));
