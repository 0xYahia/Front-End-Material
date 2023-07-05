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
//! 36- Including and Excluding Files
//! If i want ignore any files to compile from ts to js:
// 1- Create tsconfig.json file
// 2- Add exclude property and add the files that you want to ignore it
// 3- Run tsc command to compile all files

//! We use include:
// 1- Create tsconfig.json file
// 2- Add include property and add the files or folders that you want to compile it

//! We use files:
// 1- Create tsconfig.json file
// 2- Add files property and add the files only that you want to compile it

//! NOTE => So basically we compile include minus exclude

//! Example:
// {
//   "compilerOptions": {
//     "target": "es5",
//     "module": "commonjs",
//     "outDir": "dist",
//     "rootDir": "src",
//     "strict": true,
//     "noImplicitAny": true,
//     "strictNullChecks": true,
//     "strictFunctionTypes": true,
//     "noImplicitThis": true,
//     "noUnusedLocals": true,
//     "noUnusedParameters": true,
//     "noImplicitReturns": true,
//     "noFallthroughCasesInSwitch": true,
//     "inlineSourceMap": true,
//     "inlineSources": true
//   },
//   "exclude": ["node_modules", "dist"],
//   "include": [
//     // "src/**/*" // would be the default
//     "app.ts",
//     "analytics.ts"
// ]
// }
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 37- Setting a Compilation Target
// We use Target:
// Add target property and add the version of javascript that you want to compile to it
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 38- Understanding TypeScript Libs and Configuration Options
// "allowJs": true, => Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files.
// "checkJs": true, => Enable error reporting in type-checked JavaScript files.
// "declaration": true,    => Generate .d.ts files from TypeScript and JavaScript files in your project.
// "declarationMap": true, => Create sourcemaps for d.ts files.
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 40- Working with source maps
// "sourceMap": true, => Create source map files for emitted JavaScript files.

// SourceMap helps us with debugging and development. So to show what this does let me compile everything without that sourceMap setting.
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 41- rootDir and outDir
//! outDir:
// "outDir": "dist", => Specify an output folder for all emitted files.
//! rootDir:
// "rootDir": "src", => Specify the root directory of input files. Use to control the output directory structure with --outDir.
//! removeComments: true;
// "removeComments": true, => Do not emit comments to output.
//! noEmit: true;
// "noEmit": true, => Do not emit outputs.

// if you don't want to generate any JavaScript files. Now this might sound strange because that's the idea of TypeScript,
// but if you just want to check whether your files are correct but you don't want to write all these output files,
// to save some time, for example, in a bigger project, then you could set this to "true"

//! downlevelIteration: true;
// "downlevelIteration": true, => Emit more compliant, but verbose and less performant JavaScript for iteration.
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 42- Stop Emitting files on compilation errors:
//! noEmitOnError:
// "noEmitOnError": true, => Do not emit outputs if any errors were reported.
// it will be false by default
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 43- Strict Compilation
//! strict: true;
// "strict": true, => Enable all strict type checking options.

//! NOTE => If i user strict: true; We don't need the rest of the settings in this lesson

//! noImplicitAny: true;
// "noImplicitAny": true, => Raise error on expressions and declarations with an implied 'any' type.
// For variables this is okay will work with 'any' type. but For parameters it's not okay.

//! strictNullChecks: true;
// "strictNullChecks": true, => When type checking, take into account 'null' and 'undefined'.

//! strictFunctionTypes: true;
// "strictFunctionTypes": true, => When assigning functions, check to ensure parameters and the return values are subtype-compatible.

//! strictBindCallApply: true;
// "strictBindCallApply": true, => Check that the arguments for 'bind', 'call', and 'apply' methods match the original function.
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 44- Code Quality Options
//! noUnusedLocals
// "noUnusedLocals": true, => Report errors on unused locals.
//! noUnusedParameters
// "noUnusedParameters": true, => Report errors on unused parameters.

const button1 = document.querySelector("button")!;

function clickHandler(message: string, age: number /* unused parameter */) {
  let yahia = "yahia"; // unused variable
  console.log("Clicked" + message);
}

button1.addEventListener(
  "click",
  clickHandler.bind(null, "You're welcome!", 25)
);
//! noImplicitReturns
// "noImplicitReturns": true, => Report error when not all code paths in function return a value.
// if we have a function that sometimes returns something and sometimes it does not.

//! Example

function add3(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  // return null;
}
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 45- Debugging with visual studio code:
// we put sourceMap => true;
// Then we put breakpoint in the line we want start debug from it
// Then we go to run in VS code and click on start debugging
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Section 5: Classes & Interfaces
//! 58- What are classes?
//! Classes:
// Classes are blueprints for objects. They can contain data in form of properties and code in form of methods.
// Define how objects look like, which properties and methods they have
// Classes make creation of multiple, similar objects much easier

//! Objects:
// The things you work with in code
// Instances of classes (= based on classes)
// Class-based creation is an alternative to using object literals!
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 60- Compiling to JavaScript:

// class Department {
//   name: string;
//   constructor(n: string) {
//     this.name = n;
//   }
// }

// const accounting = new Department("Accounting");
// console.log(accounting);

//! After ES6

// class Department {
//   name: string;
//   constructor(n: string) {
//     this.name = n;
//   }
// }

// const accounting = new Department("Accounting");
// console.log(accounting);

//! Before ES6
// var Department = (function () { //! constructor function
//   function Department(n) {
//     this.name = n;
//   }
//   return Department;
// })();
// var accounting = new Department("Accounting");
// console.log(accounting);
//# sourceMappingURL=app.js.map
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 61- Constructor Functions & The "this" Keyword:
//! What New keyword make?
// 1- It creates a new object
// 2- It sets the type of this to be that new object
// 3- It executes the constructor function to initialize the object

//! Without new keyword this will be undefined because it not refer to the instance from this class
class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting");
console.log(accounting);
accounting.describe(); // output : Accounting

const accountingCopy = { name: "DUMMY", describe: accounting.describe };

accountingCopy.describe(); // output : undefined
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 62- "private" and "public" Access Modifiers:
// public is a default it make can access any property and methods inside or outside class
// private make can access any property and methods inside class only

class Department2 {
  name: string;
  private employees: string[];
  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmploys(employee) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting2 = new Department2("Accounting");
accounting2.addEmploys("Yahia");
accounting2.addEmploys("Ahmed");

accounting2.printEmployeeInformation(); // output : 2 ["Yahia", "Ahmed"]

// accounting2.employees[2] = "Joe"; // property 'employees' is private and only accessible within class 'Department2
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 63- Shorthand Initialization:

class Department3 {
  // public name: string;
  // private id: string;
  private employees: string[];
  constructor(private id: string, public name: string) {
    // this.name = name;
    // this.id = id;
  }

  describe(this: Department3) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
}
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 64- "readonly" Properties:
// readonly make can access any property and methods inside or outside class but can't change it
// i can give the same property private with readonly this mean we can access this property inside class only but we can't change it

abstract class Department4 {
  static fiscalYear = 2023;
  // public name: string;
  // private id: string;
  protected employees: string[];

  constructor(protected readonly id: string, public name: string) {
    // this.name = name;
    // this.id = id;
  }

  abstract describe(): void;

  static createEmployee(name: string) {
    return { name };
  }

  addEmploys(employee) {
    // this.id = "5"; //! can't change it because it readonly
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 65- Inheritance:
//! super keyword:
// super() => call the constructor of the base class

// Now, important, you have to call super first in your constructor before you do anything with the "this" keyword.
// So if you plan on assigning any other special properties here you have to do that after calling super.

class ITDepartment extends Department4 {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

const it1 = new ITDepartment("d1", ["Yahia"]);

it1.addEmploys("Yahia");
it1.addEmploys("Ahmed");

it1.describe();
it1.name = "New Name";
it1.printEmployeeInformation();

console.log(it1);

class AccountingDepartment extends Department4 {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  describe(): void {
    console.log("Accounting Department - ID: " + this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting4 = new AccountingDepartment("d2", []);

accounting4.addReport("Something went wrong...");
accounting4.printReports();

console.log(accounting4);

//! But there problem ITDepartment and Accounting has employees[]

//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 66- Overriding Properties & The "protected" Modifier
//! Protected:
// protected make can access any property and methods inside class and inside class that inherit from it

class AccountingDepartment2 extends Department4 {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  describe(): void {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmploys(name: string): void {
    if (name === " Yahia") {
      return;
    }

    this.employees.push(name);
  }
  addReport(text: string): void {
    this.reports.push(text);
  }

  printReports(): void {
    console.log(this.reports);
  }
}

const accounting5 = new AccountingDepartment2("d2", []);

accounting4.addReport("Something went wrong...");
accounting4.printReports();

accounting4.addEmploys("Yahia"); // not added because yahia is admin
accounting4.addEmploys("Joe"); // will added

console.log(accounting4);
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 67- Getters & Setters:
// getter => get value we use get keyword to and we can access it like property without calling
// setter => set value we use set keyword to and we can access it like property without calling
class AccountingDepartment3 extends Department4 {
  private lastReport: string;
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("Not report found!");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  describe(): void {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmploys(name: string): void {
    if (name === " Yahia") {
      return;
    }

    this.employees.push(name);
  }
  addReport(text: string): void {
    this.reports.push(text);
  }

  printReports(): void {
    console.log(this.reports);
  }
}

const accounting6 = new AccountingDepartment3("d2", []);

accounting6.addReport("Something went wrong...");
accounting6.mostRecentReport = "Year End Report"; //! We can pass value to set like we assign value in property
console.log(accounting6.mostRecentReport); //! we call getters without () like property
accounting6.printReports();

console.log(accounting6);
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 68- Static Methods & Properties:
// Static properties and methods allow you to add properties and methods to classes which are not accessed on an instance of the class,
// so where you don't need to call new class name first, but which you access directly on the class.
// This is often used for utility functions that you want to group or map to a class logically,
// or global constants which you also wanna store in a class.An example built into JavaScript,

const emp1 = Department4.createEmployee("Yahia");
console.log(emp1, Department4.fiscalYear); // {name: 'Yahia} 2023

//! NOTE => We can't access static property or method inside class because this does refer to the instance created based on the class
//!  while the static property is not available on instance because the whole idea behind static properties and static methods is that they're detached from instances.
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 69- Abstract Classes:
// To create abstract method we put abstract keyword after the method and mus abstract method inside abstract class
// To create abstract class we put abstract keyword after the class
// Abstract class can't be instantiated

//! Example

abstract class Department5 {
  static fiscalYear = 2023;
  protected employees: string[];

  constructor(protected readonly id: string, public name: string) {}

  abstract describe(): void;

  static createEmployee(name: string) {
    return { name };
  }

  addEmploys(employee) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class AccountingDepartment4 extends Department5 {
  private lastReport: string;
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("Not report found!");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  describe(): void {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmploys(name: string): void {
    if (name === " Yahia") {
      return;
    }

    this.employees.push(name);
  }
  addReport(text: string): void {
    this.reports.push(text);
  }

  printReports(): void {
    console.log(this.reports);
  }
}
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 70- Singletons & private Constructors:
// The singleton pattern is about ensuring that you always only have exactly one instance of a certain class.

// This can be useful in scenarios where you somehow can't use static methods or properties or you don't want to,
// but at the same time you want to make sure that you can't create multiple objects based on a class
// but that you always have exactly one object based on a class.

class AccountingDepartment5 extends Department5 {
  private lastReport: string;
  private static instance: AccountingDepartment5; //! Must be static
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("Not report found!");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  static getInstance() {
    if (AccountingDepartment5.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment5("d2", []);
    return this.instance;
  }

  describe(): void {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmploys(name: string): void {
    if (name === " Yahia") {
      return;
    }

    this.employees.push(name);
  }
  addReport(text: string): void {
    this.reports.push(text);
  }

  printReports(): void {
    console.log(this.reports);
  }
}

const accounting7 = AccountingDepartment5.getInstance(); // The object because it the same instance.
const accounting8 = AccountingDepartment5.getInstance(); // The object because it the same instance.
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 72- A First Interface
// Interfaces are a very powerful tool in TypeScript and they're used to basically define a structure of an object.
// So how an object should look like, what properties it should have, what methods it should have.
// Interfaces are not compiled to JavaScript, they're only used during development to basically check your code for errors.
// that an interface cannot have an initializer.

// we'll not use this as a blueprint, however. Just as a custom type, we could say. Here, you could say a person could have a name,
// which is of type string, and an age which is of type number.

//! What is the idea behind interfaces?
// The idea is that you can then use this interface as a type. So you can use it as a custom type, as a type for a property,
// It allows us to define the structure of an object. We can use it as a type to type check for objects that must have this structure.

interface Person {
  name: string;
  age: number;

  great(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Yahia",
  age: 26,
  great(phrase: string) {
    console.log(`${phrase} - I am ${this.name}`);
  },
};

user1.great("Hi There");
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 73- Using Interfaces with Classes

//! what different between interface and custome type?

//! Interfaces:
// 1) Interfaces are primarily used to describe the structure of objects and define contracts for classes to follow.
// 2) They can define properties, methods, and index signatures.
// 3) Interfaces can be extended using the extends keyword to inherit properties and methods from other interfaces.
// 4) Interfaces support declaration merging, meaning you can declare multiple interfaces with the same name, and their declarations will be merged into a single interface.
// 5) class can be implement from interface using implements keyword
//!  Here's an example of an interface declaration:
interface Person1 {
  name: string;
  age: number;
  greet(): void;
}

//! Custom Types (Type Aliases):
// 1) Custom types, or type aliases, allow you to create a new name for a type. They are useful when you want to create complex types or combine existing types.
// 2) Type aliases can represent any valid type, including primitive types, union types, intersection types, and more.
// 3) Type aliases are flexible and can be used to create complex types that are not possible with interfaces alone.
// 4) Type aliases do not support declaration merging like interfaces do.
//! Here's an example of a type alias declaration:

type Point = {
  x: number;
  y: number;
};

//! In general, when deciding whether to use an interface or a custom type alias, you can consider the following guidelines:

// If you need to define the shape of an object or describe the contract for a class, interfaces are often the preferred choice.
// If you need to create a complex type, such as a union type or an intersection type, or if you want to give a name to an existing type for better readability, type aliases can be more suitable.

interface Greetable {
  name: string;

  great(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 26;
  constructor(n: string) {
    this.name = n;
  }

  great(phrase: string): void {
    console.log(` ${phrase} ${this.name}`);
  }
}

let user2: Greetable;

user2 = new Person("Yahia");

user2.great("Hi There - I am");

console.log(user2);

//! what different between interface and abstract class?
// You can't have implementation or values inside of interfaces but regarding the structure, regarding the features a class should have.
// It's a bit like working with abstract classes, therefore, the difference being that an interface has no implementation details at all,
// whereas abstract classes can be a mixture of you have to overwrite these parts and I have a concrete implementation parts.
// That's an important difference between interfaces and abstract classes.
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 74- Why Interfaces?
// where we know we want to have a certain set of functionalities. Let's say a greet method, and we want to ensure
// that a class has such a greet method, and another class has it maybe as well, well, then, we can implement an interface
// which forces the existence of this method. Then we can easily share functionality amongst class,
// and every clause has to add its own implementation, the exact code that should execute when the method is called
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 75- Readonly Interface Properties
// we can add readonly to the interface properties to make it readonly to prevent any instance from changing it after initialization
// but we can't add public or private or protected to the interface properties
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 76- Extending Interfaces

// we can extend interfaces from other interfaces to add more properties and methods to the new interface
// we can extend multiple interfaces from other interfaces but we can't do that with classes

//! Example

interface Named {
  readonly name: string;
}
interface Greetable extends Named {
  great(phrase: string): void;
}

class Person1 implements Greetable {
  name: string;
  age = 26;
  constructor(n: string) {
    this.name = n;
  }

  great(phrase: string): void {
    console.log(` ${phrase} ${this.name}`);
  }
}

//! Why would we split an interface like this?
// Well, maybe you have an application where on some objects, you only want to force them to have a name, and not a greet method,
// whereas on other objects, you need both greet and name. With this split, this is possible. Some objects, or some classes can just implement Named,
// and others can implement Greetable and are forced to have both greet and a name.
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 77- Interfaces as Function Types
// we can use interfaces as function types to define the structure of a function

// type AddFn = (a: number, b: number) => number; // this is define a type for a function

//! to define a function type using interface we do it like this
interface AddFn {
  (a: number, b: number): number; //! anonymous function to be different from the function name in the interface
}

let add4: AddFn;

add4 = (n1: number, n2: number) => {
  return n1 + n2;
};
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 78- Optional Parameters & Properties
//
