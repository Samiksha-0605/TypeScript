// Example 1: Hierarchical Inheritance

// abstract class BankAcc {
//     abstract CalInterest():number;
// }

// class SavingAcc extends BankAcc {
//     constructor(public name:string, private balance:number) {super()}
//     public CalInterest(): number {
//         return 0.05 * this.balance;
//     }
// }

// class CurrentAcc extends BankAcc {
//     constructor(public name:string, private balance:number) {super()}
//     public CalInterest(): number {
//         return 0.07 * this.balance;
//     }
// }

// let sanketAcc = new SavingAcc("Sanket",50000);
// console.log(sanketAcc.CalInterest());

// let sohamAcc = new CurrentAcc("Soham",50000);
// console.log(sohamAcc.CalInterest());

// ------------------------------------------------------------------

// Example 2: Calculator - Addtion of numbers and matrix

// type Matrix = {
//  0:[number,number,number];
//  1:[number,number,number];
//  2:[number,number,number];
// }

// abstract class Calculator {
//     abstract add(A,B):number | Matrix;
//     abstract add(A,B):number | Matrix;
// }

// class ArithmaticCal extends Calculator {
//     add(...nums): number {
//         let sum = 0;
//         for (let i = 0; i < nums.length; i++) {
//             sum += nums[i];
//         }
//         return sum;
//     }
// }

// class MatrixCal extends Calculator {
//     add(A:Matrix, B:Matrix):Matrix {
//         let M:Matrix = {
//             0:[0,0,0],
//             1:[0,0,0],
//             2:[0,0,0],
//         };
//         for (let i = 0; i < 3; i++) {
//             for (let j = 0; j < 3; j++) {
//                 M[i][j] = A[i][j] + B[i][j];
//         }
//     }
//     return M
//     }
// }

// let c1 = new ArithmaticCal();
// console.log(c1.add(3,4,5,7,6,5,10));

// let A:Matrix = {
//     0:[3,4,5],
//     1:[1,2,3],
//     2:[6,7,8],
// };
// let B:Matrix = {
//     0:[1,2,3],
//     1:[4,5,6],
//     2:[8,7,2]
// };

// let c2 = new MatrixCal();
// console.log(c2.add(A,B));

// --------------------------------------------------

// Example 3:Calculator - Multiplication of numbers and matrix

type Matrix = {
    0:[number,number,number];
    1:[number,number,number];
    2:[number,number,number];
   }
   
abstract class Calculator {
    abstract multiply(A,B):number | Matrix;
    abstract multiply(A,B):number | Matrix;
}
   
class ArithmaticCal extends Calculator {
multiply(...nums): number {
    let product = 1;
    for (let i = 1; i < nums.length; i++) {
        product *= nums[i];
    }
    return product;
    }
}

class MatrixCal extends Calculator {
    multiply(A: Matrix, B: Matrix): Matrix {
        let M: Matrix = {
            0: [0, 0, 0],
            1: [0, 0, 0],
            2: [0, 0, 0],
        };

        // Matrix multiplication logic
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    M[i][j] += A[i][k] * B[k][j];
                }
            }
        }
        return M;
    }
}

let c1 = new ArithmaticCal();
console.log(c1.multiply(3, 4, 5, 7, 6, 5, 10)); // Example multiplication

let A: Matrix = {
    0: [1, 2, 3],
    1: [4, 5, 6],
    2: [7, 8, 9],
};
let B: Matrix = {
    0: [9, 8, 7],
    1: [6, 5, 4],
    2: [3, 2, 1]
};

let c2 = new MatrixCal();
console.log(c2.multiply(A, B));