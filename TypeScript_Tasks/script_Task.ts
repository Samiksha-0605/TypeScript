
// Ex.1: Subtraction Function
function subtract(a: number, b: number): number {
    return a - b;
}
console.log("Subtraction: " + subtract(10, 3));


//Ex.2: Multiplication Function
function multiply(a: number, b: number): number {
    return a * b;
}
console.log("Product: " + multiply(5, 6));


// Ex.3: Calculate square of given number
function square(a: number): number {
    return a * a;
}
console.log("Square: " + square(5));


// Ex.4: Check number is Even or Odd
function isEvenOdd(n: number):void {
    if  (n % 2 === 0) {
        console.log(`${n} is Even number`);
    }
    else {
        console.log(`${n} is Odd number`);
    }
}
console.log(isEvenOdd(6));


// Ex.5: Factorial of number
function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log("Factorial: ",factorial(5));


// Ex.6: Fibonacci Series
function fibonacciSeries(n: number): void {
    let a = 0, b = 1, next;
    console.log(`Fibonacci series of ${n} : `);
    console.log(a);
    if (n > 1) console.log(b);
    for (let i = 2; i < n; i++) {
        next = a + b;
        console.log(next);
        a = b;
        b = next;
    }
}
fibonacciSeries(6);


// Ex.7: find length of string
function stringLength(str: string): number {
    return str.length;
}
console.log(`Length of string : ${stringLength("TypeScript")}`);


// Ex.8: Sum of arrray
function sumArray(arr: number[]): number {
    return arr.reduce((a, b) => a + b, 0);
}
console.log(`Sum of array = ${sumArray([1, 2, 3, 4])}`);


// Ex.9: Find max number
function findMax(arr: number[]): number {
    return Math.max(...arr);
}
console.log(`Maximum number : ${findMax([3, 5, 1, 9])}`);


// Ex.10: Reverse string
function reverseString(str: string): string {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(`Reversed string : ${reverseString("TypeScript")}`);


// Ex.11: Check string is Palindrome or not
function checkPalindrome(str: string): void {
    let length = str.length;
    let isPalindrome = true;
    for (let i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }
    if (isPalindrome) {
        console.log("Given string is palindrome");
    } else {
        console.log("Given string is not palindrome");
    }
}
checkPalindrome("madam");


// Ex.12: Interface
interface Person {
    name: string;
    age: number;
}
const person: Person = {
    name: "John",
    age: 30
};
console.log("Person Name : ",person.name);
console.log("Person Age : ",person.age);


// Ex.13: Arrow function
const greet = (name: string): string => {
    return `Hello, ${name}`;
}
console.log(greet("Samiksha"));


// Ex.14: Multiply two numbers using arrow function
const add = (a: number, b: number): number => a + b;
console.log("Addition : ",add(6, 4));


// Ex.15: Check number is Prime or not
function checkPrime(n: number): void {
    let isPrime = true;
    if (n <= 1)  {
        isPrime = false;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0)
                isPrime = false;
                break;
        }
    }
    if (isPrime) {
        console.log("Given number is prime");
    } else {
        console.log("Given number is not prime");
    }
}
checkPrime(11);