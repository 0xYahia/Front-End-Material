//! Stack vs Heap
//? stack: is scratch space for crrent javascript thread, usually there is one and has limited size

//? Heap: is dynamic memory store at application level, dynamic store meaning it will expands if needs to and not limited

//? IMPORTANT: when something is stored in stack its stored by value, while in heap its stored by reference

//! var vs let vs const
//? const: block scoped - can't re-assign - must intialize with value - doesn't allow hoisting (unintalized)

//? let: block scoped - can re-assign - doesn't allow hoisting (unintalized) throws an error

//? var: function scoped - can re-declare and re-assign - allow hoisting (undefined) and doesn't throws error

//? NOTE: For let and const, are hoisted but not initialized. but u can say they are not hoisted

//! value vs reference

//? primitive types are value typed and are stored in stack, the variable points to the value itself in stack

//? object types like function, objects, arrays are reference types, the variable is declared in stack but it has a heap reference, that reference is place in memory where values are stored

//! hoisting
//? refers to the behavior of moving variable or function declarations to the top of their respective scope

//? 1- functions are value hoisted, meaning we can access their value at top of their scope

//? 2- var is declaration hoisted, we can access it before declaration without throwing ReferenceError but value will be undefined

//? 3- let,const and class are hoisted, declaration of the binding is hoisted but not intialized, and we cannot use unintialized binding (binding means associate variable name with memory location where value is stored)

//? NOTE: in var both declaration and initialization are hoisted

//! TDZ (temporal dead zone)
//? the time or zone where variables using let and const declaration are hoisted but not intialized, and they cannot be accessed or used (this period is the temporal dead zone)

//? we will get that reference error when trying to access a before decalaration as its binding is not intialized and time before intialization and declaration is called TDZ, ends when we reach let a=4
function tdz() {
  a = 15;
  // ...
  // ...
  // ...
  let a = 4;
}

//! Scoping
//? scopes types which variables can be associated with

//? 1- global scope
//? 2- function scope
//? 3- block scope introduced in ES6 (as let and const came)

//! Shadowing
//? ex: occurs when there is a variable lets say (abc) is declared in global scope, and there is a function that has a variable also with same name (abc) When this happens, the outer variable is said to be shadowed by the inner variable (function will priotrize the variable inside of it not the one in outer scope)

//! Shallow copy vs deep copy

//? 1- shallow: creates a new object with references to the same memory locations as the original object
//? 2- deep: creates a new object with new memory locations for all of its properties

//? note: mutating shallow copy also mutate original, while deep copy doesn't

//! if we have const array, how can we still use methods and edit its value
//? arrays are not constants
//? this doesn't define a constant array, it define a constant reference to the array
const arr1 = [1, 2, 3];

//? so thats why we can change constant object or array, but we cannot re-assign new reference to it

//! scenarios

// ------------------------------(1)-------------------------------

function f() {
  console.log(name); //? var will hoist the variable but with undefined as value
  console.log(age); //? while let will throw referenceError, because its not intalized yet

  var name = 'john';
  let age = 28;
}

f();

// ------------------------------(2)-------------------------------

function f() {
  var name = 'john';
  let age = 28;
}

//? IMPORTANT: name is a property on the global (window), so it will work fine and print empty string ("")
console.log(name); //? this gives error in node, but not in browser
console.log(age); //? age will throw undefined error because its not even declared in the global scope
f();

//? moving the variables even after the function doesn't change anything, as the scope of function has ended
console.log(name);
console.log(age);

// ------------------------------(3)-------------------------------
const a = [1];
const b = [1];
const c = ['1'];
const d = a; //? this will make d copy the reference of a

//? we have 4 variables which are refernce types, they may have same value in memory, but the variables holds different references

console.log(a === b); //? false
console.log(a == b); //? false
console.log(a === c); //? false
console.log(a == c); //? false
console.log(a === d); //? true (both have same reference)
console.log(a == d); //? true (both have same reference)

// ------------------------------(4)-------------------------------
let v = 1;

//? variable inside function will point to the variable declaration in function scope, but will throw referenceError, because binding declaration is hoisted but not intialized and we can't use unintialized binding

function foo() {
  v = 2;
  console.log(v);
  let v = 3;
  console.log(v);
}

foo();

// ------------------------------(5)-------------------------------

//? var i, declaration and intialization are hoisted so we can use it, and give it a value
i = 123;
var i;
console.log(i); //? (123)

//? remember if we used let only declaration is hoisted, and we will get reference error

// ------------------------------(6)-------------------------------

//? this is an example of shallow copy, where only a reference to the values is passed, So when the copy is mutated the original will also be mutated
const obj = {
  name: 'john',
};

const obj2 = obj;
obj.name = 'vroom'; //? this is going to change name in both objects

//? for a deep copy of the object we can use
//? 1: Object.assign()
const obj3 = Object.assign({ age: 24 }, obj);
obj3.name = 'last name';

console.log(obj); //? {name:"vroom"}
console.log(obj2); //? {name:"vroom"}
console.log(obj3); //? {age:24,name:'last name'}

//? 2: spread operator
const obj4 = { ...obj };

//? 3: using JSON.stringify() and JSON.parse()
let obj5 = JSON.parse(JSON.stringify(obj));

// ------------------------------(7)-------------------------------

//? declaring variable without using a keyword, will define it on the globalThis object (window)
job = 123;
console.log(window.job); //? 123

function abc() {
  number = 456;
}
abc();
console.log(window.number); //? 456

//? also var in global scope will attach a property on window
var q = 5;
console.log(window.q); //? 5

//! NOTES

//? 1- there are two places javascript uses to store which are Stack, heap
//? 2- we can access variables of the outer scope, but not the opposite
//? 3- binding means associate variable name with memory location where value is stored
//? 4- you can imagine binding have a flag associated with them saying whether they can be used or not
//? ex: usable = true
//? "Initializing" the binding (making it usable, setting usable to true)
//? 5- function expression ex: const myFunc = function(){}, are not hoisted like normal function, treat them similar to let, const, var depending on the keyword used to define the function
