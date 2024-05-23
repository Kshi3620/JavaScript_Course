# JavaScript Notes

# Index

1. Variables
2. Data Types
3. Data Types Summary

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