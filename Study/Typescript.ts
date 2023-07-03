//!2- What is TypeScript & Why Should you use it?
//! What is Typescript:
// => TypeScript extends JavaScript by adding types. It’s a superset of JS that compiles to
// building up on JavaScript. It's not a brand new language, instead it takes the JavaScript language and adds new features and advantages to it.
// It makes writing JavaScript code easier and more powerful, you could say.

//! But, we have one huge disadvantage.
// TypeScript can't be executed by JavaScript environments like the browser. Browsers can't execute TypeScript,
// and for example, Node.js also can't execute TypeScript,
// so the environments where we can execute JavaScript don't support TypeScript.

//! What's the idea behind TypeScript then? It's a better version of JavaScript and we can't use it?
// TypeScript is a programming language, but it's also a tool. It's a powerful compiler which you run over your code
// to compile your typescript code to JavaScript.So, what you get as a result when writing code in TypeScript is JavaScript.
// But you didn't write that JavaScript code, you wrote TypeScript code with all the new features and all the advantages,
// and you get normal JavaScript code.

//! How can TypeScript add new features if what you get in the end is regular JavaScript?
// And the answer is, the TypeScript compiler compiles these new features to JavaScript workarounds, so in the end it might give you a nicer syntax,
// an easier way of doing something, and it will then compile that nicer, easier way to a more complex JavaScript snippet,
// which you would have to write otherwise. So it's not magic, of course it can't add what's not possible at all
// in the JavaScript language, but it can add new features that simply are easier to use, nicer syntax
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 4- Installing & using Typescript
//! Example:
const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

{
  function add1(num1: number, num2: number) {
    return num1 + num2;
  }

  button?.addEventListener("click", function () {
    console.log(add1(+input1.value, +input2.value));
  });
}

//! tsc fileName => compile typescript file to javascript

// If i select element from dom Typescript can't know if this will really work maybe will be null
// So could let typescript know that we are sure that we will get an element by adding an exclamation mark !
// Now in addition, I also know it will always be an input element. So we can use as HTMLInputElement, (! as HTMLInputElement)
// a syntax called typecasting which I will also explain in greater detail later, to let TypeScript know which type of element this will be.

//! This instead of i check if funded input element do this and else do this
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Section 2: Typescript Basics & Basic Types
//! 5- TypeScript Advantages - Overview
//! TypeScript adds:
// 1- Types
// 2- Next-gen javascript features (compiled down for older browsers)
// 3- Non-javascript features like interfaces or generics
// 4- Meta-Programming features like decorators
// 5- Rich configuration options
// 6- Modern tooling that helps even in non-TypeScript projects
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 11- Using Types
//! Core Types:
//  number => 1, 5.3, -10 => All numbers, nod differentiation between integers or floats
// string => 'Hi', "Hi", `Hi` => All text values
// boolean => true, false => Just these two, no "truthy", or "falsy" values

//! NOTE => Typescript's type system only helps you during development (i.e before the code gets compiles)
// It doesn't change JavaScript to work differently at runtime, because browsers have no built-in Typescript support.
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 12- Typescript types vs Javascript types
// The key difference is: JavaScript uses "dynamic types" (resolved at runtime), TypeScript uses "static types" (set during development)
// Sometimes it can be useful to get the type at runtime. But sometimes, like in this example, it's way better to get it during development.
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 14- Working with Numbers, Strings & Booleans
//! Example:

{
  function add2(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //   throw new Error('Incorrect input!');
    // }
    const result = n1 + n2;
    if (showResult) {
      console.log(phrase + result);
    } else {
      return result;
    }
  }

  let num1 = 10; // 5.0
  const num2 = 2.8;
  const printResult = true;
  const resultPhrase = "Result is: ";
  add2(num1, num2, printResult, resultPhrase);
}
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 15- Type Assignment & Type Inference
//! Type inference:
// it a built in feature in typescript TypeScript will try to infer the type for you, if you don't set it explicitly.

//! Note => we don't need to write the type of const variable Because you'll not be able to assign a new number, or a new value to a const value anyways.

// and if you hover on the const variable the IDE doesn't write type of this variable
//is a built-in feature in typescript TypeScript will try to infer the type for you, if you don't set it explicitly.

//! Note => We don't need to write the type of const variable Because you'll not be able to assign a new number, or a new value to a const value anyways.

// and if you hover on the const variable the IDE doesn't write the type of this variable
// but in var or let variable when we assign value in this variables IDE write type of this variables implicitly
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 16- Object Types:
// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: "Yahia",
  age: 25,
};

console.log(person.name);

// Of course object types can also be created for nested objects.

//! Let's say you have this JavaScript object:

const product = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};
// This would be the type of such an object:

// {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   }
// }
//   id: 'abc1',
//   price: 12.99,
//   tags: ['great-offer', 'hot-and-new'],
//   details: {
//     title: 'Red Carpet',
//     description: 'A great carpet - almost brand-new!'
//   }
// }
// This would be the type of such an object:

// {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   }
// }
// So you have an object type in an object type so to say.
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 17- Arrays Types:

// const person2: {
//   name: string;
//   age: number;
// } = {
const person2 = {
  name: "Yahia",
  age: 25,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person2.name);

for (const hobby of person2.hobbies) {
  console.log(hobby.toUpperCase());
  // So hobby, on the upper hand, is correctly identified as being a string, because since we go through an array of strings, well the individual values have to be just strings.
  // console.log(hobby.map()); // !!! ERROR !!! The map method is available on arrays, but not on strings.
}
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 19- Working with Tuples
// Tuples are basically fixed-length arrays with fixed types. (but we can add and using push and pop)
// Push and pop actually is an exception which is allowed in tuples So unfortunately TypeScript can't catch this error,
// but at least it ensures that we're not assigning a wrong value here, and outside of push

// But you can access elements based on their index and you can also access multiple elements in a row.
type Coordinates = [number, number]; //! Tuple Type Definition Syntax
let coordinates: Coordinates = [10, 20]; //! Tuple Type Definition Syntax
coordinates[0] += 3; //! Index Access Operator

//! Example

const person3: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //! Tuple Type Definition Syntax
} = {
  // const person2 = {
  name: "Yahia",
  age: 25,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"], //! Tuple Type Definition Syntax
};

// if you have a scenario where you need exactly X amount of values in an array and  you know the type of each value in advance,
// then you might want to consider a tuple instead of an array to get even more strictness into your app to be even clearer about the type of data
// you're working with and the type of data you're expecting.
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 20- Working with Enums:
// Enums allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.
// TypeScript provides both numeric and string-based enums.
// Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.
// Enum => added by typescript: Automatically enumerated global constant identifiers
//! NOTE =>> I can give default value for element in enum types

//! Example:

enum Role {
  ADMIN = "ADMIN",
  USER = 100,
  AUTHOR = 200,
}

const person4 = {
  name: "Yahia",
  age: 25,
  hobbies: ["Sports", "Cooking"],
  role: Role.USER,
};

if (person4.role === Role.ADMIN) {
  console.log("is admin");
} else if (person4.role === Role.USER) {
  console.log("is user");
} else {
  console.log("is author");
}
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 21- The Any Type:function generateError(message: string, code: number): never {
//   throw { message, errorCode: code };
//   // while(true){} // infinite loop
// }

// const result = generateError("An error occurred!", 500);
// console.log(result);

// The any type is the most flexible type in TypeScript and basically allows you to assign any value to that variable.
// You can basically turn off TypeScript's type checking for that variable.
// You can use it if you don't know what the type of a variable will be yet.
// But you should use it with caution because you lose all the benefits of TypeScript's type system.
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 22- Union Type:
// Union types allow you to combine multiple types into one type.
// You can use the pipe | symbol to separate the types.
// Union types are useful if you want a variable or parameter to hold more than one type.
// Union types are a powerful way to express a value that can be one of the several types.

//! Example:

function combine(input1: number | string, input2: number | string) {
  let result;

  if (typeof input1 === "number" && typeof input2 === "number")
    result = input1 + input2;
  else result = input1.toString() + " " + input2.toString();

  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Mohamed", "Yahia");
console.log(combinedNames);
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 23- Literal Types:
// Literal types allow you to specify exact values a string, number, or boolean must have.
// In practice, union types are much more common than literal types.
// Literal types combine nicely with union types, type guards, and type aliases.
// A string literal type can be used to allow a string to have exactly one value.

//! Example:
function combine1(
  input1: number | string,
  input2: number | string,
  // resultConversion: string,
  resultConversion: "as-number" | "as-text" // union types with literal types
) {
  let result;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  )
    result = +input1 + +input2;
  else result = input1.toString() + input2.toString();

  // if (resultConversion === "as-number") return +result;
  // else return result.toString();

  return result;
}

const combinedAges1 = combine1(30, 26, "as-number");
console.log(combinedAges1);

const combinedStringAges1 = combine1("30", "26", "as-number");
console.log(combinedStringAges1);

const combinedNames1 = combine1("Mohamed", "Yahia", "as-text");
console.log(combinedNames1);
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 24- Type Aliases / Custom Types:
// Type aliases create a new name for a type. Type aliases are sometimes similar to interfaces,
// but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.
// Type aliases are exactly the same as their original types; they are simply alternative names.
// Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.

//! Example:

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine2(
  input1: Combinable,
  input2: Combinable,
  // resultConversion: string,
  resultConversion: ConversionDescriptor // union types with literal types
) {
  let result;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  )
    result = +input1 + +input2;
  else result = input1.toString() + input2.toString();

  // if (resultConversion === "as-number") return +result;
  // else return result.toString();

  return result;
}
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 24- Type Aliases & Object Types

// Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide
//  an alias to a (possibly complex) object type.

//! Example:

type User = { name: string; age: number };
const u1: User = { name: "Max", age: 30 }; // this works!

// This allows you to avoid unnecessary repetition and manage types centrally.

//! For example, you can simplify this code:

function greet(user: { name: string; age: number }) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}

//! To:
type User1 = { name: string; age: number };

function greet1(user: User1) {
  console.log("Hi, I am " + user.name);
}

function isOlder1(user: User1, checkAge: number) {
  return checkAge > user.age;
}
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 26- Function Return Types & "Void":
// In TypeScript, you can specify what type of value a function returns.
// You can specify a return type by adding a colon (:) after the parameters.
// If a function doesn't return a value, you can specify void as the return type.
// Void is a little like the opposite of any: the absence of having any type at all.
// You may commonly see this as the return type of functions that do not return a value:

//! The different between void and undefined?
// The void type, in TypeScript, represents the absence of a value.
// It is used as the return type of functions that do not return a value.
// The undefined type is a sub-type of void type that represents the value undefined.
// It is used when a variable has not been assigned a value.

//! Example:

// function add(n1: number, n2: number): number {
//   return n1 + n2;
// }

// function printResult(num: number): void {
//   console.log("Result: " + num);
// }

// function printResult2(num: number): undefined {
//   console.log("Result: " + num);
//   return;
// }

// console.log(printResult(add(5, 12)));
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 27- Functions as Types:

function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

console.log(printResult(add(5, 12)));
// let combineValues: Function //! here the variable type of any function take any parameter and return any type
let combineValues: (n1: number, n2: number) => number; //! here function should take two parameter type of number and return type of number

combineValues = add;
// combineValues = 8;
// combineValues = printResult;

console.log(combineValues(8, 8));
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 28- Function Types & Callbacks:
// In typescript We can pass parameter type of function
// and return type of function

//! Example:

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result): void => {
  console.log(result);
});

//! NOTE => callback functions can return something, even if the argument on which they're passed does NOT expect a returned value (void).
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 29- The "unknown" Type:

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Yahia";

if (typeof userInput === "string") {
  userName = userInput;
}

//! The different between unknown and any?
// We can't assign any value to unknown type without type checking
// userName = userInput; // Error
// But we can assign any value to any type
// userName = userInput; // True (Work)
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 30- The "never" Type:
// The never type represents the type of values that never occur.
// For instance, never is the return type for a function expression or an arrow function expression that always throws an exception
//  or one that never returns for example function has infinite loop before return.

function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
  // while(true){} // infinite loop
}

const result = generateError("An error occurred!", 500);
console.log(result);
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Section 3: The Typescript Compiler (and its configuration):
//! 34- Using Watch Mode
//! 35- Compiling the entire project / multiple files
