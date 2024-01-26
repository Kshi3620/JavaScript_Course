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

