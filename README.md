# Table of contents:
### [Chapter 1 - Variables & Data Types](https://github.com/Kshi3620/JavaScript_Course?tab=readme-ov-file#chapter-1---variables--data-types-1)
### [Chapter 2 - Operators & Conditional Statements](https://github.com/Kshi3620/JavaScript_Course?tab=readme-ov-file#chapter-2---operators--conditional-statements-1)
### [Chapter 3 - Loops & String](https://github.com/Kshi3620/JavaScript_Course?tab=readme-ov-file#chapter-3---loops--string-1)
### [Chapter 4 - Arrays]


# What is JavaScript?
- JS is a programming language. We use it to give instructions to the computer.

Inspect > Console (Here also we can write JS code)

# Chapter 1 - Variables & Data types

## console.log()
console.log is used to print message to the console.

```js
console.log("My name is Kshitij Nehete");
```

## Variables in JS:
- Variables are containers for data.

```js
age = 23;
name = "MS Dhoni";
x=null;
y=undefined;
isFollow = false;

console.log(name); // Output - "MS Dhoni"
console.log(x); // Output - null
console.log(y); // Output - "undefined"
console.log(isFollow); // Output - "false"
```
### Variables Rules
1. Variable name are case sensitive a & A is different.
2. Only _, & is allowed. Space is not allowed.
3. Only letters, _, $ is allowed at 1st character.
4. Reserved words cannot be variable names.

### let, const & var
- let : Variable can't re-declared but can be updated. A block scope variable. By deafault value of let variables is undefined.

- const : Variable can't be re-declared or updated. A block scope variable. const must be initialized with some value.

- var : Variable can be re-declared & updated. A global scope variable.

```js
let age = 23, b;
const name = "Kshitij";
```

## DataTypes in JS:

### Primitive DataType
Number, String, Boolean, Undefined, Null, BigInt, Symbol

### Non-primitive DataType
Objects (Arrays, Functions)
```js
const student = {
    age : 20,
    name : "Kshitij"
};

console.log(student.name);

student["age"] = student["age"] + 1; 

console.log(student["age"]);
```

# Chapter 2 - Operators & Conditional Statements

## Operators in JS
- Used to perform some operation on data.

### Arithmetic Opearators & Unary Opearators
(+, -, *, /)
Modulus (%)
Exponentiation (**)

Increment (++)
Decrement (--)

```js
let a = 5;
let b = 6;

console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);

console.log("a % b =", a % b);
console.log("a ** b =", a ** b);

// Unary Operators
a++;                    // Post Increment
console.log("a =", a);  

b--;                    // Post Decrement
console.log("b =", b);  

++a;                    // Pre Increment
console.log("a =", a);  

--b;                    // Pre Decrement
console.log("b =", b);  
```

### Assignment Opearators
=  +=  -=  *=  %=  **=
```js
// Assignment Operator
let a = 5;
let b = 6;

a += 4; // a = a + 4
```

### Comparison Operators
Equal to (==)
Not equal to (!=)
Equal to & type (===)
Not equal & type (!==)
Others (<, >, >=, <=)

```js
// Comparison Operator
let a = 2;
let b = 2;
let c = "2";

console.log("2 == 2", a == b) // Output - True
console.log(a == c) // Output - True
console.log(a === c) // Output - False
console.log(a > b) // Output - False
```

### Logical Operators
Logical AND (&&) - T T = True all others are false
Logical OR (||)  - F F = False all others are True
Logical NOT (!)  - Make true to false & make false to true

```js
// Logical Operators
let a  = 5;
let b  = 3;
let c = 4;

let cond1 = a > b;
let cond2 = a ===5;
let cond3 = c ===2;

console.log(cond1 && cond2); // Output - True
console.log(cond1 || cond3); // Output - True
console.log(!(c === 4));    // Output - False
```

## Conditional Statements
- To implement some condition in the code

### if Statement
```js
if(age > 18){
    console.log("You can vote");
}
```

### if-else Statement
```js
let color = "Black";

if(color === "Black"){
    console.log("Dark Mode");
} else {
    console.log("Its not dark mode");
}
```

### else if Statement
```js
let num = 7;

if(num % 2 === 0){
    console.log("Its even number");
} else if(num % 2 !== 0){
    console.log("Its odd");
} else{
    console.log("Its zero")
}
```

### Ternary Operators
- condition ? true output : false output
```js
// Ternary Opearators

let age = 15;

let result = age >= 18 ? "adult" : "not adult"; // Simple & compact if-else
console.log(result);
// Output - not adult
```

```js
alert("Hello!"); // It will show alert with message

let name = prompt("Give your name"); // To get input from user
console.log(name);
```

# Chapter 3 - Loops & String

## Loops in jS
- Loops are used to execute a piece of code again & again.

### for Loop:
```js
// Print MS DHoni 5 times
for(let i = 1; i <= 5; i++){        // (Initilize; Stopping cond; Updatation)
    console.log("MS Dhoni");
}
console.log("Loop has ended.");
```
```js
//  Calculate sum of 1 to 5
let sum = 0;
for(let i=1; i<=5; i++){
    sum = sum + i;
}
console.log("Sum =", sum);
```
### while Loop:
```js
// Print 1 to 5
let i = 1;
while(i<=5){        // while(stoping cond)
    console.log(i);
    i++;
}
```
### do-while loop:
```js
let i = 20;
do{
    console.log("MS Dhoni");
    i++;
} while(i<=10);
```
### for-of Loop:
- It helps to apply loops for Arrays, Strings
```js
let str = "MS Dhoni";

for(let i of str){  // Iterator
    console.log(i);
}
```
### for-in Loop:
```js
let str = "MS Dhoni";

for(let i of str){  // Iterator
    console.log(i);
}
```
```js
// Practice Question - Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let gameNumber = 7;

let userNumber = prompt("Guess the game number = ");

while(userNumber != gameNumber){
    userNumber = prompt("You entered wrong number, Try again")
}
console.log("Congrats you enter the right number");
```

## Strings in JS
- String is sequence of characters used to represent text.

### Create String
```js
let str = "MS Dhoni";
let str2 = 'Mahi';
```
### String Length
```js
str.length
```
### String Indices
```js
str[0], str[1], str[2]
```

### Template Literals
```js
let obj = {
    item: "pen",
    price: 10,
};

let output = `the cost of ${obj.item} is ${obj.price} rupees`; // ${expression} --> This is String interpolation
console.log(output);
```
## String Methods in JS
- These are built-in functions to manipulate a string.
```js
let str = "MS Dhoni";

str.toUpperCase();

str.toLowerCase();

str.trim(); // removes whitespaces

str.slice(start, end?); // returns part of string

str.concat(str2);   // joins str2 with str

str.replace(searchVal, newVal);

str.charAt(2);
```

# Chapter 4 - Arrays

## Arryas in JS
- Collections of items

### Create Array
```js
let cricketers = ['MS Dhoni', "Virat", "Rohit"];    // This is array 
let runs = [70, 13, 45];

cricketers.length();    // Array property
console.log(cricketers.concat(runs));
```
### Array Indices
```js
arr[0], arr[1], arr[2] 
```

### Looping over an Array
- Print all elements of an array.
```js
let cricketers = ["MS Dhoni", "Virat", "Rohit", "Jadeja"];

// for loop
for(let i=0; i<cricketers.length; i++){
    console.log(cricketers[i])
}

// for of
for(let ele of cricketers){
    console.log(ele);
    console.log(ele.toUpperCase());
}
```
```js
// Practice Question - For a given array with marks of students -> [85, 97, 44, 37, 76, 60] Find the average marks of the entire class.

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let i in marks) {
    sum = marks[i] + sum; 
}
let avg = sum / marks.length;
console.log(avg);
```

## Array Methods in JS

```js
let players = ["MS Dhoni", "Jadeja", "Rohit", "Virat"]
let runs = [45, 83, 90, 12];

players.push("Kane");   // Add to end

players.pop("Ruturaj"); // delete from end & return

runs.toString();     // coverts array to string

players.concat(runs);   // joins multiple arrays & return results

players.unshift("Rinku");      // add to start 

players.shift("Conway");        // delete from start and return

players.slice(1, 3);          // returns a poece of the array -->  strat indx, end indx

players.splice(2, 3, "Surya", "Bumrah");    // change original array (add, remove, replace) --> start indx, delCount, newElement

```

# Chapter 5 - Functions & Methods

## Functions in JS
- Block of code that performs a specific task, can be invoked whenever needed.

```js
// Function Definition
function functionName{
    //do some work
}

// Function call
functionName();
```

```js
function myFunction(msg){   // parameter - input
    console.log(msg)
}

myFunction("I Love you");   // argument
```
```js
// Function -> 2 numebers, sum

function sum(num1,num2){
    total = (num1 + num2);
    return total;
}

let c = sum(2, 4);
console.log(c);
```

## Arrow Function
- Compact way of writing function 

```js
let arrowSum = (num1, num2) => {
    c = num1 + num2
    return c;
}

console.log(arrowSum(2, 3))
```
