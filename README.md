# JavaScript Notes

# Variables

```js
const accountId = 144553 // const cannot be reassigned
let accountEmail = "sample" // let can be reassigned

var accountPassword = "Kshitij@362000" // var can be reassigned

let accountState; 
 

accountId = 2 

accountEmail = "sample23"
accountPassword = "Kshi@3620"
accountCity = "Pune"

console.log(accountId); // 144553

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword]) // 144553, sample, Kshitij@362000
```

# Data Types

- number => 2 to power 53
- string => ""
- boolean => true or false
- null => standalone value
- undefied => 
- symbol => unique

```js
let name = "Kshitij" // string
let age = 24 // number
let isLoggedIn = true // boolean
let state = null // null
let city; // undefined
```

## Type Conversion

```js
let score = "33" // String

console.log(typeof(score)); // String

let valueInNumber = Number(score) // this is type conversion
let valueInString = String(score) // this is type conversion

console.log(typeof(valueInNumber)); // Number
```

## Operations

```js
// **************** Operations *****************

let value = 3
let negValue = -value
let str1 = "hello"
let str2 = " Kshitij"

console.log(negValue); // -3
console.log(2 + 2); // 4
console.log(2 ** 3); // 8

console.log(str1 + str2); // hello Kshitij
```

## Comparison

```js
console.log(2 > 1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true
```

# Data Types Summary

## Primitive Data Types
- String, Number, Boolean, null, undefined, Symbol, BigInt

```js
const score = 100 // Integer
const scoreValue = 100.3 // Float

const isLoggedIn = false // Boolean
const outsideTemp = null // Null

let userEmail; // undefined

const id = Symbol("123") // Symbol
const bigNumber = 7828323832n // BigInt
```

## Non primitive
- Array, Objects, Functions

```js
const heros = ["Spiderman", "Hanuman", "Batman", "Superman"]; // array

let obj = {             // object
    name : "Kshitij",
    age : 22,
}

const myFunction = function(){
   console.log('Hello World');
}
```

# String 

```js
const  name = "hitesh"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ("Valorant")
 
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4)
console.log(newString);

console.log(gameName.slice(-5, 2));

const newString1 = "     hitesh   "
console.log(newString1.trim());

const url = "https://kshtiij.com/kshitij%20nehete"
console.log(url.replace("%20", "-"));
console.log(url.includes("kshitij"));

const newString2 = "kshitij-nehete-hello"
console.log(newString2.split('-'));
```

# Numbers & Maths in JavaScript

```js
// ************************* Numbers *******************

const score = 400

const balance = new Number(100)

console.log(score); // 400
console.log(balance); // [Number: 100]

console.log(balance.toString()); // 100 (This is in String)

console.log(balance.toFixed(2)); // 100.0

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3)); // 124
console.log(otherNumber.toPrecision(2)); // 1.2e+2

const hundreds = 100000

console.log(hundreds.toLocaleString()); // 1,00,000
console.log(hundreds.toLocaleString('en-IN'));
```

```js
// ************************* Maths *******************

console.log(Math);
console.log(Math.abs(-4)); // 4
console.log(Math.round(4, 6)); // 4 
console.log(Math.sqrt(8)); // 2
console.log(Math.min(2, 5, 6, 9)); // 2

const min = 10
const max = 20

console.log(Math.round((Math.random() * (max - min + 1)))) // Random Valure Eg. 9
```

# Date & Time in JavaScript

```js
let myDate = new Date()

console.log(myDate); // 2024-05-25T08:55:57.730Z
console.log(myDate.toString()); // Sat May 25 2024 14:26:38 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleDateString()); // 25/5/2024

console.log(typeof(myDate)); // object

let myCreatedDate = new Date(2024, 0, 23)
console.log(myCreatedDate.toString()); // Tue Jan 23 2024 00:00:00 GMT+0530 (India Standard Time)

let myCreatedDate2 = new Date("2023-01-14")
console.log(myCreatedDate2.toString()); // Sat Jan 14 2023 05:30:00 GMT+0530 (India Standard Time)


let myTimeStamp  = Date.now()
console.log(myTimeStamp.toString()); // 1716627914933

console.log(Math.round(Date.now()/1000)); 1716628667

let newDate = new Date()

console.log(newDate.toLocaleDateString('default', {
    weekday : "long",
})); // Saturday
```

# Arrays in JavaScript

```js
// Arrays

const myArr = [0, 1, 2, 3, 4, true, "Kshitij"]
const myArr2 = ["Shhaktiman", "Spiderman", "Hanuman"]
const myArr3 = new Array (1, 2, 4, 5)

// Arrays Methods

console.log(myArr.push(6));
console.log(myArr2.pop());

console.log(myArr3.shift());

console.log(myArr.includes(3)); // true
console.log(myArr.indexOf("Kshitij"));

console.log(myArr.join()); // 0,1, 2,3,4,true,Kshitij,6 (Its convertedd to String)

// slice & splice methods

const arr2 = [1, 2, 3, 4, 5]

const newArr3 = arr2.slice(1, 3) // [ 2, 3 ]

const newArr4 = arr2.splice(1, 3) // [ 2, 3, 4 ]

console.log(newArr3);
console.log(newArr4);

/*

Note :  slice create new array and do modify in that
        splice do modifications in same array

*/
```

```js
const marvel = ["thor", "spiderman", "hulk"]
const dc = ["batman", "superman", "flash"]

const arr1 = marvel.concat(dc)
console.log(arr1); // [ 'thor', 'spiderman', 'hulk', 'batman', 'superman', 'flash' ]

const arr2 = [...marvel, ...dc]
console.log(arr2); // [ 'thor', 'spiderman', 'hulk', 'batman', 'superman', 'flash' ]

const arr3 =[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const arr4 = arr3.flat(Infinity)
console.log(arr4);

/*
[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]
*/

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
```

# Objects in JavaScript

## object literals

```js
// object literals

const mySym = Symbol()

const JsUser = {
  name : "Kshitij",
  "full name" : "Kshitij Nehete",
  age : 18,
  [mySym] : "myKey1", // This is declaratio of symbol
  location : "Pune",
  email : "ksh@kncricket.com",
  isLoggedIn : false

}

console.log(JsUser.name); // Kshitij
console.log(JsUser["email"]); // ksh@kncricket.com

console.log(JsUser["full name"]); // Kshitij Nehete
console.log(JsUser[mySym]); // myKey1

JsUser.name = "Omendra" // Changing values

Object.freeze(JsUser) // After this values will not change for objects
```

```js
const mySym = Symbol()

const JsUser = {
  name : "Kshitij",
  "full name" : "Kshitij Nehete",
  age : 18,
  [mySym] : "myKey1", // This is declaratio of symbol
  location : "Pune",
  email : "ksh@kncricket.com",
  isLoggedIn : false

}

JsUser.greeeting = function(){
  console.log("Hello JsUsers");
}

JsUser.greeetingTwo = function(){
  console.log(`Hello JS USer, ${this.name}`);
}

console.log(JsUser.greeeting()); // Hello JsUsers
console.log(JsUser.greeetingTwo()); // Hello JS USer, Kshitij
```

```js
const tinderUser = {}

tinderUser.id = "123ABC"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = true

const regularUser = {
  email : "sam@gmail.com",
  fullName : {
    userFullName : {
      firstName : "Kshitij",
      lastName : "Nehete"
    }
  }
}

console.log(regularUser.fullName); // { userFullName: { firstName: 'Kshitij', lastName: 'Nehete' } }
console.log(regularUser.fullName.userFullName.firstName); // Kshitij
```

```js
const obj1 = {
  1 : "a",
  2 : "b"
}

const obj2 = {
  3 : "c",
  4 : "d"
}

const obj3 = Object.assign(obj1, obj2)
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj4 = Object.assign({}, obj1, obj2) // Good Practice
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5 = {...obj1, ...obj2}
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }\
```

```js
const tinderUser = {}

tinderUser.id = "123ABC"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = true

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '123ABC', 'Sammy', true ]
```

## object de-structuring

```js
const course = {
  name : "JS",
  price : "999",
  courseIntructor : "hitesh"
}

const {courseIntructor} = course // Object de-structuring

console.log(courseIntructor); // hitesh
```
# Functions in JS

```js
function sayMyName(){ // This is Function
  console.log("K");
  console.log("s");
  console.log("h");
  console.log("i");
  console.log("t");
  console.log("i");
  console.log("j");
}

sayMyName() // Function Calling
```

```js
function addTwoNumbers(num1, num2){ // num1, num2 are the parameter
  return num1 + num2
}

const result = addTwoNumbers(2, 3) // 2, 3 are the arguments
console.log(result); // 5
```
```js
function loginUserMessage(username){
  return `${username} just logged in`
}

console.log(loginUserMessage("Kshitij")); // Kshitij just logged in
console.log(loginUserMessage()); // undefined just logged in
```

## Functions with objects & array

```js
function calculateCartPrice(...num){ // ... this is rest operator
  return num
}

console.log(calculateCartPrice(200, 300, 400)); // [ 200, 300, 400 ]

const user = {
  username : "kshitij",
  price : 199
}

function handleObject(anyObject){
  console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user) // username is kshitij and price is 199
```

# Scopes in JS

```js
if (true){
  let a = 10
  const b = 20
  var c = 30
}

console.log(a); // Error
console.log(b); // Error
console.log(c); // 30
```
```js
if (true){
  let a = 10
  const b = 20
  var c = 30
}

console.log(a); // Error
console.log(b); // Error
console.log(c); // 30
```
```js
if (true){
  const username = "MSD"
  if (true){
    const website = " YouTube"
    console.log(username + website); // MSD YouTube
  }
  console.log(website); // Error
}
console.log(username); // Error
```
```js
// ************************ interesting ****************

console.log(addOne(5)) // 6 Since We have declare function it will show outout

function addOne(num){
  return num + 1
}


console.log(addTwo(5)) // Error - We have declare function but it is in variable

const addTwo = function(num){
  return num + 2
}
```

# Arrow Function & This keyword

## this keyword

```js
const user = {
  username : "Kshitij",
  price : 999,
  welcomeMessage : function(){
    console.log(`${this.username} welcome to website`); // this keyword ref current context
  }
}

const username = "sam" // Here we are changing current context
```

## Arrow function

```js
const chai = () => {     // Arrow Function
  let username = "MSD"
  console.log(username);
}

chai() // MSD
```

```js
const addTwo = (num1, num2) => { // Explicit Arrow function
  return num1 + num2
}
console.log(addTwo(2, 3)); // 5

const addThree = (num1, num2) => num1 + num2 // Implicit Arrow function

/*
  Note :  if we are using  {} then we have to use return
*/
```

## Immediately Invoked Function Expression (IIFE)

```js
// Immediately Invoked Function Expression (IIFE)

(function chai(){
  // named IIFE
  console.log(`DB Coonnected`);
}) (); // DB Connected

( (name) => {
  // unnamed IIFE
  console.log(`DB connected ${name}`);
}) ("Kshitij"); // DB connected Kshitij
```

# Important for Interview

## JavaScript Execution Context (EC)

1. Global Execution Context
2. Function Execution Context

```js
let val1 = 10
let val2 = 5

function addNumber(num1, num2){
  let total = num1 + num2
  return total
}

let result1 = addNumber(val1, val2)
let result2 = addNumber(10, 2)

/*

// ****************** Memory Phase ******************

val1 => undefined
val2 => undefined
addNum => defination
result1 => undefined
result2 => undefined

*/

/*

// **************** Execution Phase ***************

val1 => 10
val2 => 5
addNum => defination
result1 => executional context =>{
  new variable
  +
  execution thread
}     => {
  ********** Memory Phase *********
  val1 => undefined
  val2 => undefined
  total => udefined
  
  ********* Execution Context *********
  num1 => 10
  num2 => 5
  total => 15   // This total will return in execution context

}
result2 => undefined
*/
```
# Control Flow

## If

```js
// if

temperature = 41

if (temperature <= 40){
    console.log("Less than 41");
} else {
    console.log("Greater than 41");
}
```
```js
const score = 200

if (score > 100){
    const power = "fly"
    console.log(`user power: ${power}`); // user power: fly
}

console.log(`User power: ${power}` ); // Error as const in block scope
```

```js
const balance = 1000

if (balance < 500){
    console.log('Less than');
} else if (balance < 750){
    console.log("Less than 750");
} else if (balance < 950){
    console.log("Less than 950");
} else {
    console.log("Less than 1200");
}
```
```js
// && (and) ==> all condn should be true

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy courses");
}
```

```js
// || (or) ==> one condition should be true

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromEmail || loggedInFromEmail){
    console.log("User logged in");
}
```

## Switch

```js
const month = 3

switch (month){
    case 1:
        console.log("Jan");
        break
    case 2:
        console.log("Feb");
        break
    case 3:
        console.log("Mar");
        break
    case 4:
        console.log("Apr");
        break
    default:
        console.log("Default case match");
}
```

## truthy

```js
const userMail = "Kshitij.ai"

if (userMail){ // This is called truthy value
    console.log('Got user mail');
} else {
    console.log("dont have user mail");
}

/*
Falsy values ==>

false, 0, -0, BigInt 0n, "", null, undefined, NaN
apart from above all other are truthy values

truthy values ==>

"0", 'false', " ", [], {}, function(){}

*/
```
```js
const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("object is empty"); // object is empty
}
```

## Nullish Coalescing Operator (??): null undefined

```js
let val1;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15

console.log(val1); // 5
console.log(val2); // 10
console.log(val3); // undefined
```

## Terniary Operator

```js
//condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80"); // less than 80
```

# Loops in JavaScript

## for loop (Interations) 

```js
// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        console.log(`Numebr is ${element}`);
    }
    console.log(element);
}
```
```js
for (let i = 1; i <= 10; i++) {
    console.log(`inner loop value: ${i}`);
    for(let j = 1; j <= 10; j++){
        // console.log(`outer loop value: ${j}`);
        console.log(i + '*' + j + ' = ' + i*j);
    }
}
```
```js
let myArray = ["flash", "superman", "spiderman"]

for (let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}
```

## break and continue

```js
// break and continue

for (let i = 0; i <= 20; i++){
    if (i == 5){
        console.log(`detected 5`)
        break                       // here loop will stop and program jump to line no 10
    }
    console.log(`value of i is ${i}`);
}
```

```js
// break and continue

for (let i = 0; i <= 20; i++){
    if (i == 5){
        console.log(`detected 5`)
        continue                       // here loop will skip this particular and jump to start of loop
    }
    console.log(`value of i is ${i}`);
}
```

## While and do while loop in JavaScript

```js
// while

let index = 0
while (index <= 10){
    console.log(`Value of index is ${index}`);
    index = index + 2
}
```
```js
let myArray = ["flash", "superman", "sspiderman"]

let arr = 0
while (arr < myArray.length){
    console.log(`value is ${myArray[arr]}`);
    arr++
}
```
```js
// do while

let score = 6

do{
    console.log(`score is ${score}`);
    score++
} while (score <= 10)
```

## for of loop
```js
// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr){
    console.log(num);
}
```
```js
const greeting = "Hello World"

for (const greet of greeting){
    console.log(`Each char is ${greet}`);
}
```
## Maps
- Values in maps are unique and orderwise
```js
// Maps

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")

console.log(map);
```

```js
// for of loop on maps
// Maps

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")

for (const [key, value] of map){ // Array destructruing
    console.log(key, ":-", value );
}
```
```js
// Objects are not iteratable with for of
```

## for in loop

```js
// for in

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby"
}

for (const key in myObject){
    console.log(`${key} shorcut is for ${myObject[key]}`);
}
```
```js
// for in loop on array

const myArray = ["js", "java", "python", "rb"]

for (const key in myArray){
    console.log(myArray[key]);
}
```

## for each loop

```js
// for each loop

const coding = ["java", "js", "python", "ruby"]

coding.forEach( function (val) {
    console.log(val);
})
```

```js
const coding = ["java", "js", "python", "ruby"]

coding.forEach( (val) => {
    console.log(val);
})
```
```js
const coding = ["java", "js", "python", "ruby"]

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)
```

```js
const coding = ["java", "js", "python", "ruby"]

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})
```

```js
const myCoding = [
    {
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "java",
        langFileName: "java"
    },
    {
        langName: "python",
        langFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
})
```

## filter map and reduce

```js
// filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4)
console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

const newNums2 = myNums.filter( (num) => {
    return num > 4  // if we use {} then we have to write return
    
})
console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]
```

```js
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = []

myNums.forEach( (num) => {
    if (num > 4){
        newNums.push(num)
    }
})

console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]
```
```js
// map

const myNums = [1, 2, 3, 4]

const newNums = myNums.map ( (num) => {
    return num + 10
})

console.log(newNums); // [ 11, 12, 13, 14 ]
```

```js
const myNums = [1, 2, 3, 4]

const newNumbs = myNums
                .map( (num) => num + 10)
                .map( (num) => num + 1)

console.log(newNumbs); // [ 12, 13, 14, 15 ]
```

```js
// map and filter together

const myNums = [1, 2, 3, 4]

const newNumbs = myNums
                .map( (num) => num + 10)
                .map( (num) => num + 1)
                .filter( (num) => num >=14)

console.log(newNumbs); // [ 14, 15 ]
```

```js
// reduce

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currValue) {
    console.log(`acc: ${acc} and currValue: ${currValue}`);
    return acc + currValue
}, 2) // here we have added 2 as initial value

console.log(myTotal);

/* Output:
acc: 2 and currValue: 1
acc: 3 and currValue: 2
acc: 5 and currValue: 3
8
*/
```
```js
const myNums = [1, 2, 3]

const myTotal = myNums.reduce( (acc, currValue) => {
    console.log(`acc: ${acc} and currValue: ${currValue}`);
    return acc = currValue
}, 0)

console.log(myTotal);

/* Output:
acc: 0 and currValue: 1
acc: 1 and currValue: 2
acc: 2 and currValue: 3
3
*/
```

```js
const shopCart = [
    {
        course: "js",
        price: 199
    },
    {
        course: "java",
        price: 299
    },
    {
        course: "python",
        price: 99
    },
    {
        course: "data",
        price: 499
    }
]

const priceTopay = shopCart.reduce( (acc, item) => {
    return acc + item.price
}, 0)

console.log(priceTopay); // 1096
```
# DOM - Manipulation

```js
// file => one.html

// following code in console
document.getElementById('title') // <h1 id="title" class="heading">DOM Learning on chai aur code</h1>

document.getElementById('title').id // 'title'

document.getElementById('title').className // 'heading'

document.getElementById('title').setAttribute('class', 'test') // It will overwrite from class to test2q

title.style.backgroundColor = 'green' // It will change background color

title.style.padding = '15px' // it will style padding

title.innerHTML // 'DOM Learning on chai aur code<span style="display: none;"> test text</span>'

title.innerText // 'DOM Learning on chai aur code test text'

title.textContent // 'DOM Learning on chai aur code'
```

## query selector

```js
// file => one.html

// following code in console

document.querySelector('h2') // <h2> Hello </h2>

const myUl = document.querySelector('li')
myUl.style.backgroundColor = 'green'
```

## query selectorall
```js

document.querySelectorAll('li')

const tempLiList = document.querySelectorAll('li')

tempLiList.style.color = 'green' // Error
tempLiList[0].style.color = 'green' // It give give green color to first element

tempLiList.forEach(function (l) {
  l.style.backgroundColor = 'green'
})
```

```js
document.getElementsByClassName('listItem') // HTMLCollection []

tempClassList.forEach(function(li){
    console.log(li)
})

Array.from(tempClassList) // Converting tempClassList to array
const myConvertedArray = Array.from(tempClassList)

myConvertedArray.forEach(function (li) {
    li.style.color = 'orange'
})
```
## How to create a new element in DOM

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOm | Chai aur code</title>
</head>
<body style="background-color: #212121; color: #fff;">
    <div class="parent">
        <div class="day">Mon</div>
        <div class="day">Tue</div>
        <div class="day">Wed</div>
        <div class="day">Thu</div>
    </div>
</body>
<script>
    const parent = document.querySelector('.parent')
    console.log(parent);
    console.log(parent.children);
    console.log(parent.children[1].innerHTML); // Tue

    for (let i = 0; i< parent.children.length; i++) {
      console.log(parent.children[i].innerHTML); // It will show all values by iterator
    }

    parent.children[1].style.color = "orange"
    console.log(parent.firstElementChild);

    const day1 = document.querySelector('.day')
    console.log(day1.innerHTML);
    console.log(day1.parentElement);

    console.log("NODES: ", parent.childNodes);
</script>
</html>
```

## Create element in DOM

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chai aur code</title>
</head>
<body style="background-color: #212121; color: #fff;">
    <script>
        const div = document.createElement('div')
        console.log(div);
        div.className = "main"
        div.id = Math.round(Math.random() * 10 + 1)

        div.setAttribute("title", "generated title")
        div.style.backgroundColor = "orange"
        div.style.padding = "12px"
        // div.innerText = "Chai aur code"
        const addText = document.createTextNode("Chai aur code")
        div.appendChild(addText)

        document.body.appendChild(div) // attaching to document
    </script>
</body>
</body>
</html>
```
