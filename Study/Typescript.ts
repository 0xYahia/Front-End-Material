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
    }
    return n1 + n2;
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
  return null;
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
  addEmployee(employee: string) {
    this.employees.push(employee);
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
// we can add optional parameters, properties and methods to interfaces by adding ? after the property or parameter or method name
//! We can make parameter is optional by two way:
// 1) adding ? after the parameter name
// 2)  by adding = after the parameter name and add the default value

interface Named1 {
  readonly name?: string;
  outputName?: string;
}
interface Greetable1 extends Named {
  great(phrase: string): void;
}

class Person2 implements Greetable1 {
  name: string;
  age = 26;
  outputName = ".....";
  constructor(n?: string) {
    //! if name is not empty because it is optional
    if (n) {
      this.name = n;
    }
  }

  great(phrase: string): void {
    if (this.name) {
      console.log(` ${phrase} ${this.name}`);
    } else {
      console.log("Hi");
    }
  }
}

let user3: Greetable1;

user3 = new Person2();

user2.great("Hi There - I am");
console.log(user2);
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 79- Compiling Interfaces to JavaScript
// interfaces are not compiled to JavaScript code, they are only used by the TypeScript compiler to check the structure of an object
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Section 6: Advanced Types
//! 83- Intersection Types
// we can combine multiple types to create a new type using intersection types
// we use the & symbol to combine types
// we can combine any types together
// we can combine interfaces, types, primitives, union types, function types, object types, etc...

//!

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "yahia",
  privileges: ["create-server"],
  startDate: new Date(),
};

console.log(e1);

//! We can also use intersection types with interfaces:

interface Admin1 {
  name: string;
  privileges: string[];
}

interface Employee1 {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee1 extends Employee1, Admin1 {}

type Combinable1 = string | number;
type Numeric = number | boolean;

type Universal = Combinable1 & Numeric;

const universal: Universal = 2;
//! NOTE => when we use intersection types with objects, we get all the properties of the objects
//! But when we use intersection types with union types, we get the common types between the union types
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 84- Type Guards
// we can use type guards to check the type of a variable or to check if a property exists in an object
//  or to check a property in class and to make sure that the code will work as expected

//! We can use more than way to check the type:
// 1) we can use typeof to check the type of a variable
// 2) we can use in to check if a property exists in an object
// 3) we can use instanceof to check if an object is an instance of a class

function add5(a: Combinable1, b: Combinable1) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type unknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: unknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation({
  name: "Ahmed",
  privileges: ["update-server"],
  startDate: new Date(),
});

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ("loadCargo" in vehicle) {
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 85- Discriminated Unions
// we can use discriminated unions to combine union types with type guards
// we can use a common property (literal type) in each object to check the type of the object

//! Example

interface Bird {
  type: "bird"; //! this is a literal type we must write it like this and we can't change it
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 }); //! we can't add any other property except flyingSpeed because it is a literal type
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 86- Type Casting
// we can use type casting to tell TypeScript that a certain variable is of a specific type

//! We can use more than way to do type casting:
// 1) we can use <type>variableName
// 2) we can use variableName as type  (and use it with exclamation mark when we cast element in html )
// 3) we can use if condition <type>variableName when we cast element in html

//! NOTE => when we hold the html element by tag name we don't need to use type casting or exclamation mark because it is already know
//! the type of the element (but) when we hold html element using id we need type casting adn exclamation mark

//! Example

// const userInputElement = document.querySelector("input");
//! OR
// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")
// );
//! OR
// const userInputElement = document.getElementById(
//   "user-input"
// )! as HTMLInputElement;

//! OR
// userInputElement.value = "Hi there!";

//! OR with condition like
const userInputElement = document.getElementById("user-input");

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there!";
}
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 87- Index Properties
// we can use index properties to create objects that are more flexible regarding the properties they might hold
// to strict validation and type of properties that should be in the object

//! Example

interface ErrorContainer {
  // {email: 'Not a valid email, username: 'Must start with a capital character}
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!",
};
//! NOTE => when we choice type of properties is string this mean any thing can convert to a string
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 88- Function Overloads
// we can use function overloads to add more than one signature to a function

//! Example

type Combinable2 = string | number;

function add6(a: number, b: number): number;
function add6(a: string, b: string): string;
function add6(a: string, b: number): string;
function add6(a: number, b: string): string;
function add6(a: Combinable1, b: Combinable1) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

// const result6 = add6("yahia", "mohamed") as string;
const result6 = add6("yahia", "mohamed");
result6.split(" , ");
console.log(result6);

//! After overloading when we use Combinable type only the function can't determine the type of the variable
//! so we can't use split with result6 variable because the function can't know the type of the return
//! so we can use type casting to tell the function the type of the return
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 89- Optional Chaining
// we can use optional chaining to access properties that might not exist without getting errors
// You can add a question mark after the thing you're not sure whether it's defined or not.
// we do this to avoid errors when we try to access properties that might not exist (run time errors)

//! Example

const fetchedUserData = {
  id: "u1",
  name: "Yahia",
  job: { title: "CEO", description: "My own company" },
};

// console.log(fetchedUserData.job && fetchedUserData.job.title); //! in JavaScript
//! OR
console.log(fetchedUserData?.job?.title); //! in TypeScript
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 90- Nullish Coalescing
// we can use nullish coalescing to provide default values for variables that might be null or undefined
// we write it use duple question mark (??)

// The different between nullish coalescing and || or:
// (||) or => if the value is null or undefined or empty string or 0 or false it will return the second value (fallback value)
// (??) nullish coalescing => if the value is null or undefined it will return the second value (fallback value)

//! Example

const userInput1 = undefined;

const storedData = userInput1 ?? "DEFAULT";

console.log(storedData);
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Section 7: Generics
//! 94- Built-in Generics & What are Generics?
//! What are generics?
// Generics are a way to create reusable components. They allow us to create functions and classes which can work with
//  a variety of types rather than a single one.

//! Built-in Generics like:
// 1) Array
// 2) Promise

const names1: Array<string> = ["yahia", "Ahmed"];
const names2: string[] = ["yahia", "Ahmed"];

//! What different between names1 and names2?

// 1) Consistency: It's important to maintain consistency within your codebase. If your project or team has an established convention or coding style that favors one syntax over the other, it's generally a good practice to follow that guideline for the sake of consistency.
// 2) Readability: Consider which syntax provides better readability and understanding of the code. Some developers may find the Array<string> syntax more explicit and easier to comprehend, especially when dealing with more complex types or generic types. On the other hand, others may prefer the brevity and familiarity of the string[] syntax.
// 3) Integration: If you are working with libraries or codebases that predominantly use one form of syntax, it may be beneficial to align with that convention to maintain consistency and simplify integration with existing code.
// 4) Tooling and IDE Support: Different code editors and IDEs may handle the two syntaxes differently in terms of autocompletion, type inference, and documentation display. You may want to consider how your preferred development environment supports these syntaxes and choose the one that provides a better development experience.

const promise: Promise<string> = new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve("This is done!"); // git error if the input in resolve is not a string
  }, 2000);
});

promise.then((data) => {
  data.split(" "); // will git error if i user method is not a string
});
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 95- Creating a Generic Function (Retrying)
// we can use generic function to create a function that can work with a variety of types

function merge(objA: object, objB: object) {
  // return Object.assign(objA, objB);
  return { ...objA, ...objB };
}

const mergedObj = merge({ name: "yahia" }, { age: 30 });
console.log(mergedObj); // we can't access the properties because function take two unknown objects and return unknown object

// to solve the problem we use generic function

function merge1<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const mergedObj1 = merge1({ name: "yahia" }, 30); // silent failure here because second argument is not a object and not get error and not added to the object
console.log(mergedObj1);

// we can also specify the type of the generic function like this

const mergedObj2 = merge1<{ name: string }, { age: number }>(
  { name: "yahia" },
  { age: 30 }
);
console.log(mergedObj2.age);

// But this will restrict the function to only this type of objects

//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 96- Working with Constraints
// we can use constraints to restrict the types that a generic function can work with to avoid silent failures
// to add constraints to generic type we write (extends then we write constraints we want to put)
// we can add any type constraints

function merge3<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const mergedObj3 = merge1({ name: "yahia" }, 30); // we get error here because second argument is not a object
console.log(mergedObj1);

//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 97- Another Generic Function
// if we want check the length of arguments, when we use generic type we will ger error because
// will got error because length is not exist in type T

//! To solve the problem we create interface Lengthy and add length property to it then we extend Length interface
//! in T  to implement length property in T

//! Example
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = "Got no value.";
  if (element.length === 1) {
    // if we don't use interface will got error because length is not exist in type T
    description = "Got 1 elements.";
  } else if (element.length > 1) {
    description = "Got " + element.length + " elements.";
  }
  return [element, description];
}
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 98- The "keyof" Constraint
// we can use keyof to ensure that the generic type can only be a key of another object

//! Example
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

console.log(extractAndConvert({ name: "yahia" }, "name"));

// if we make the second parameter is string type we will get error so we use keyof to make sure that the second parameter is a key of the first parameter

//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 99- Generic Classes
// we can use generic classes to create classes that work with a variety of types

//! Example
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  removeItem(item: T): void {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems(): T[] {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("yahia");
textStorage.addItem("ahmed");
textStorage.removeItem("yahia"); // -1
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.removeItem(10);
console.log(numberStorage.getItems());

const objectStorage = new DataStorage<object>();
objectStorage.addItem({ name: "Yahia" });
objectStorage.addItem({ name: "Ahmed" });
objectStorage.removeItem({ name: "Yahia" });
console.log(objectStorage.getItems());

// But when we passed object we see problem it removed last object added to the storage not the object we want to remove
// because object is reference type and when we passed it to the function it passed by reference not by value and the reference
// object when we pass it to the addItem function it's different from the reference object that we passed to the removeItem function
// so splice it removes the last element in the array here, because this in the end returns -1. IndexOf returns -1 even

//! To solve this problem
// first we will check in removeItem function if not find the item in the array return;
// then we will store the object i wand add it in variable and pass it to the removeItem function to ensure that we will remove the same object
// to ensure that object has the same reference like this

// const obj = { name: "Yahia" };
// objectStorage.addItem(obj);
// objectStorage.addItem({ name: "Ahmed" });
// objectStorage.removeItem(obj);
// console.log(objectStorage.getItems());

//! But if i want pass any object to this class we put constraint on the generic type

//! NOTE => We can also have methods, which have their own generic types instead of classes.
// So you could introduce new generic types in class methods,if you have some generic type, which only is needed in a certain method,
// and not in the entire class. So you are really flexible there You can use constraints everywhere and in general, generic types are there
// to make your life easier and to give you that perfect combination of full flexibility. We can use any primitive value you want here
// and type safety, because we know perfectly well what is stored in this DataStorage and what is stored in this DataStorage.
// So this combination is the awesome thing generic types give us.
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 100- Generic Utility Types
// we have some utility types that we can use with generic types
//! Partial:
// partial make all properties in object is optional, so we can create object and give it initial value empty object
// then we add the property to the object

//! Example

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function creteCourseGoal(title: string, description: string, date: Date) {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = "title " + title;
  courseGoal.description = "description " + description;
  courseGoal.completeUntil = date;
  return courseGoal;
}

console.log(creteCourseGoal("TS", "football", new Date()));

//! Readonly:
// Readonly make all properties in object or all elements in array is readonly, so we can't change the value of the property

//! Example

const names: Readonly<string[]> = ["yahia", "ahmed"];

// names.push("mohamed"); // we get error here because names is readonly
// names.pop(); // we get error here because names is readonly
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 101- Generic Types vs Union Types

//! Union Type
// Union types can be great if you want to have a function which you can call with one of these types every time you call it.

//! Generic Types
// Generic types are great if you want to lock in a certain type. Use the same type throughout the entire class instance you create.
// Use the same type throughout the entire function. That's where you want the generic type. You want union types when you are
// flexible to have a different type with every method call, with every function call. Then, you can use union types. Generic types lock in a type.

// https://www.typescriptlang.org/docs/handbook/generics.html

//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Section 8: Decorators
//! 104- Module introduction
// let's say when we add an event listener, we can easily write code which have a direct impact on the users of our page. If we register a listener on the button
// and we show an alert after the button gets clicked, then the user visiting our page immediately see something. With decorators we don't typically work on that,
// but instead we can for example guarantee that one of our classes gets used correctly, or a method in a class, or we do some hidden transformations, stuff like that.
// So in detail in this module, we'll see what exactly decorators are, are about, and why we would use them. We will of course use them
// and you will learn about the different types of decorators, types of supports. And we'Ll see a couple of examples
// that should make it clearer which role decorators fill and why they can be useful.
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 105- A First Class Decorator
// Decorators are just functions, and they are functions you apply to something, to a class, to a property, to a method, to an argument.
// And they get called with different arguments depending on what you apply them to. So they are functions you apply to something.
// We called it use @expression
//! https://www.typescriptlang.org/docs/handbook/decorators.html#introduction (Reference)

function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person3 {
  name = "Yahia";
  constructor() {
    console.log("Creating person object...");
  }
}

const person1 = new Person3();
console.log(person1);

//! NOTE VIP:
// Please also note that our decorator output, Logging, and this class or this constructor function log here is printed first, before we see Creating person object
// and our Person object. Because, indeed, decorators and that's really important, decorators execute when your class is defined. Not when it is instantiated.
// You don't need to instantiate your class at all. We could remove that code for instantiating the class, and we would still get that decorator output.
// So the decorator runs when JavaScript finds your class definition, your constructor function definition. Not when you use that constructor function
// to instantiate an object. That's really important to understand.
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 106- Working with Decorator Factories
// Decorator factories are functions that return valid decorators. So functions that return a decorator function.
// we can also define a decorator factory, which basically returns a decorator function,
// but allows us to configure it when we assign it as a decorator to something.

// I will return a new, anonymous function which takes that constructor argument and which then holds this logging which I want to execute inside of the decorator.
function Logger1(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// Now we can call this function and pass in the string we want to log. because it returns a decorator function, we can use it as a decorator.
@Logger1("LOGGING- PERSON")
class Person4 {
  name = "Yahia";
  constructor() {
    console.log("Creating person object...");
  }
}

const person5 = new Person4();
console.log(person5);

//! The benefits of using decorator factories:
// 1- We can configure our decorator from outside.
// So now we can customize the value the decorator function uses when it executes with our factory function. We now call our decorator here, because we're not executing the decorator function,
// but we're executing a function that will return such a decorator function. And the advantage to this is that we can now pass in values which will be used by
// that inner returned decorator function. So, if I now save that, we see the old output, but with our custom log string here. So, using decorator factories can give us
// more power and more possibilities of configuring what the decorator then does internally.
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 107- Building More Useful Decorators
// we can create decorator to render html content like decorators in angular

//! Example
function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    // here we write type any because we don't know the type of the constructor
    console.log("Rendering template");
    const hookEl = document.getElementById(hookId); // here we hold the main template
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template; // here we added the html element in the root element
      hookEl.querySelector("h1")!.textContent = p.name; // here we added the content of the template element in the root element
    }
  };
}

@WithTemplate("<h1>My Person Object</h1>", "app")
class Person5 {
  name = "Yahia";
  constructor() {
    console.log("Creating person object...");
  }
}

const person6 = new Person5();
console.log(person6);
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 108- Adding Multiple Decorators
//! in which order do these decorators execute?
// When multiple decorators apply to a single declaration, their evaluation is similar to function composition in mathematics. In this model, when composing functions f and g, the resulting composite (f ∘ g)(x) is equivalent to f(g(x)).

// As such, the following steps are performed when evaluating multiple decorators on a single declaration in TypeScript:

// 1) The expressions for each decorator are evaluated top-to-bottom.
// 2) The results are then called as functions from bottom-to-top.

function Logger2(logString: string) {
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}
function WithTemplate2(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function (constructor: any) {
    // here we write type any because we don't know the type of the constructor
    console.log("Rendering template");
    const hookEl = document.getElementById(hookId); // here we hold the main template
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template; // here we added the html element in the root element
      hookEl.querySelector("h1")!.textContent = p.name; // here we added the content of the template element in the root element
    }
  };
}
@Logger2("LOGGING- PERSON")
@WithTemplate2("<h1>My Person Object</h1>", "app")
class Person6 {
  name = "Yahia";
  constructor() {
    console.log("Creating person object...");
  }
}

const person7 = new Person6();
console.log(person7);

// And of course, regular JavaScript rules apply here and this function execution happens before this function execution.
// Which is why we see the Logger Factory before we see Template Factory.

//But the execution of the actual decorator functions then happens bottom up. Which means the bottom-most decorator executes first, so this decorator function,
// and thereafter the decorator above that executes.It's just something you have to know. With that, we got a solid base knowledge about decorators,

//! Conclusion:
// Factories function execute from top to bottom as rules in javascript
// But the decorator function executes from bottom to top
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 109- Diving into Property Decorators
// Property decorators are only called once, when class definition is registered by javascript, So it executes when you define this property
// Property decorators receive two arguments, the target of the property, so the prototype of the object for an instance member, or the constructor function for a static member.
// And the name of the property.

// Property decorators are a type of decorator in TypeScript that can be applied to class properties. They allow you to modify or enhance the behavior of individual properties within a class.
// Property decorators are declared just before a property declaration using the @ syntax followed by the decorator name. They receive two parameters:
// the target object (the prototype of the class) and the property key (the name of the property).

//! Here's an example of a property decorator:

function UpperCase(target: any, propertyKey: string) {
  let value: string;

  const getter = function () {
    return value;
  };

  const setter = function (newValue: string) {
    value = newValue.toUpperCase();
  };

  // Redefine the property with getter and setter
  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}

class Person8 {
  @UpperCase
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const person8 = new Person8("John");
console.log(person8.name); // Output: JOHN

// In this example, the UpperCase property decorator is used to transform the value of the name property to uppercase.\
//  Whenever the name property is accessed or assigned a new value, the decorator intercepts the operation and modifies the value accordingly.

//! Example In course
function Log(target: any, propertyKey: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyKey);
}

class Product {
  @Log
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else throw new Error("Invalid price - should be positive!");
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}

//! Property decorators can be useful in various scenarios, such as:

// 1) Validation: You can validate the assigned values of properties and enforce specific rules or constraints.
// 2) Transformation: You can transform or manipulate the property values before they are used or stored.
// 3) Logging: You can log property access or modification to track changes or monitor behavior.
// 4) Data binding: You can establish data binding between properties and UI elements or other components.

// Property decorators provide a way to add additional functionality to individual properties in a class, making your code more modular,
//  reusable, and easier to maintain.
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 110- Accessor & Parameter Decorators

//! 1) Accessor Decorators
// Accessor decorators are a feature in TypeScript that allow you to modify or observe the behavior of a getter or setter method of a class property at runtime.
//  They are declared using the @ symbol followed by the decorator function name and are applied directly before a getter or setter declaration.

//! Accessor decorators receive three parameters:
// 1) the target object (the prototype of the class), The constructor function of the class.
// 2) the property key (the name of the property), The name of the decorated property.
// 3) the property descriptor (an object that contains the accessor's descriptor), describes the attributes of the accessor.

//! What is the benefit of accessor decorators:
// You can use accessor decorators to perform tasks such as intercepting property access or modification, implementing caching mechanisms,
//  forcing validation or security checks, applying specific behavior based on the accessor's metadata,
//  or even transforming the value before it is accessed or assigned.

//! Here's an example that demonstrates the usage of an accessor decorator:

function LogGetter(
  _target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const originalGetter = descriptor.get;

  descriptor.get = function () {
    console.log(`Getting value of property: ${propertyName}`);
    return originalGetter.apply(this);
  };
}

class Person9 {
  private _name: string;

  @LogGetter
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

const person9 = new Person9();
person9.name = "John";
console.log(person9.name);

// In this example, the LogGetter accessor decorator is applied to the name getter method of the Person class. When the name property is accessed,
// the decorator intercepts the access, logs a message to the console, and then invokes the original getter to retrieve and return the value.

// 1) originalGetter is a reference to the original getter method of the property. It is assigned the value of descriptor.get, which represents the existing getter function of the property.
// 2) descriptor.get refers to the original getter method of the property before the decorator modified it. It is stored in originalGetter so that we can invoke it later.
// 3) apply(this) is a method available on functions in JavaScript. It allows you to call a function and specify the value of this within the function's scope.
// 4) In this case, originalGetter.apply(this) calls the original getter function (originalGetter) with the context (this) set appropriately.
// The this value is passed from the current accessor to ensure that the getter is called with the correct context and has access to the instance properties and methods.
// 5) The apply function ensures that the this value inside the original getter remains unchanged and is not affected by the decorator.
// 6) Finally, the return value of the original getter is returned by the decorator. This ensures that the decorated getter method behaves similarly to the original getter, but with additional behavior injected by the decorator.

//!In summary, originalGetter.apply(this) is used to invoke the original getter method with the correct context (this) and retrieve its return value.
//! By doing so, the decorator can preserve the original behavior of the getter while adding additional functionality or logging, as shown in the example.

// Accessor decorators provide a way to modify or observe the behavior of getter and setter methods without modifying the class itself.
//! They can be useful in various scenarios, including:

// 1) Logging or tracking property access or changes.
// 2) Implementing caching mechanisms to avoid unnecessary calculations or operations.
// 3) Enforcing validation or security checks on property values.
// 4) Transforming or modifying property values before they are accessed or assigned.
// 5) Injecting dependencies or applying additional logic to property accessors.

// By using accessor decorators, you can enhance the behavior of class property accessors while keeping your code modular, reusable,
// and separate concerns. It enables you to add specific behavior to property accessors independently,
// providing flexibility and customization options.

//! 2) Methods Decorators
// Method decorators are a feature in TypeScript that allow you to modify or observe the behavior of a class method at runtime. They are declared using the @ symbol
//  followed by the decorator function name and are applied directly before a method declaration.

//! Method decorators receive three parameters:

// 1) The target: The constructor function of the class or the prototype of the class, depending on whether the method is static or instance.
// 2) The method name: The name of the decorated method.
// 3) The property descriptor: An object that describes the attributes of the method.
// You can use method decorators to perform tasks such as intercepting method calls, modifying method behavior, applying specific behavior based on method metadata,
// implementing logging or error handling, enforcing authentication or authorization checks, or even transforming the method's arguments or return value.

//! Here's an example that demonstrates the usage of a method decorator:

function LogMethod(
  _target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling method: ${methodName}`);
    const result = originalMethod.apply(this, args);
    // console.log(`Method ${methodName} returned: ${result}`);
    return `Method ${methodName} returned: ${result}`;
  };
}

class Calculator {
  @LogMethod
  multiply(a: number, b: number): number {
    return a * b;
  }
}

const calculator = new Calculator();
const result2 = calculator.multiply(2, 3);
console.log(result2);

// In this example, the LogMethod decorator is applied to the multiply method of the Calculator class. When the multiply method is called,
// the decorator intercepts the method call, logs a message before and after the method execution, and then invokes the original method
// with the provided arguments.

// Method decorators provide a way to modify or observe the behavior of methods without modifying the class itself.
//! They can be useful in various scenarios, including:
// 1) Logging or tracking method calls.
// 2) Implementing error handling or exception tracking.
// 3) Applying specific behavior based on method metadata or decorators.
// 4) Enforcing authentication or authorization checks.
// 5) Transforming or modifying method arguments or return values.
// 6) Injecting dependencies or applying additional logic to method calls.

// By using method decorators, you can enhance the behavior of class methods while keeping your code modular, reusable,
// and separate concerns. It enables you to add specific behavior to methods independently,
// providing flexibility and customization options.

//! 2) Parameter Decorators
// Parameter decorators are a feature in TypeScript that allow you to modify or observe the behavior of a parameter declaration within a function or method.
// They are declared using the @ symbol followed by the decorator function name and are applied directly before a parameter declaration.

//! Parameter decorators receive three parameters:
// 1) The target: The constructor function of the class or the prototype of the class, depending on whether the parameter belongs to a static method or an instance method.
// 2) The method name: The name of the method that contains the parameter being decorated.
// 3) The parameter index: The index of the parameter within the parameter list.

// You can use parameter decorators to perform tasks such as intercepting or modifying parameter values, applying validation or type checks,
//  tracking parameter usage, injecting dependencies, or implementing custom behavior based on the parameter's metadata.

//! Here's an example that demonstrates the usage of a parameter decorator:

function LogParameter(
  _target: any,
  methodName: string,
  parameterIndex: number
) {
  console.log(
    `Parameter decorator called for method: ${methodName}, parameter index: ${parameterIndex}`
  );
}

class Calculator1 {
  multiply(@LogParameter a: number, @LogParameter b: number): number {
    return a * b;
  }
}

const calculator1 = new Calculator1();
calculator.multiply(2, 3);

// In this example, the LogParameter decorator is applied to the parameters a and b of the multiply method in the Calculator class.
// When the method is called, the decorator is invoked for each decorated parameter, logging a message that includes the method name and parameter index.

// Parameter decorators provide a way to modify or observe the behavior of method parameters without modifying the method itself.

//! They can be useful in various scenarios, including:
// 1) Logging or tracking parameter values.
// 2) Implementing validation or type checks on parameter values.
// 3) Injecting dependencies or applying additional logic based on parameter metadata.
// 4) Modifying or transforming parameter values before they are used within the method.
// 5) Implementing custom behavior or side effects specific to a parameter.

// By using parameter decorators, you can enhance the behavior of method parameters while keeping your code modular, reusable, and separate concerns.
// It enables you to add specific behavior to parameters independently, providing flexibility and customization options.
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 111- When Do Decorators Execute?

// Important to understand All these decorators, no matter if it was a property decorator, a method decorator, an accessor decorator,
// or a parameter decorator, they all executed when you defined this class,

// use the decorator to do some behind the scenes work, to then set up some code that should run whenever this is called. To add extra meta data or store some data
// about a property somewhere else in your project or in your library, which you're creating.This is what you can use decorators for
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 112- Returning (and changing) a Class in a Class Decorator

// Returning or changing a class in a class decorator allows you to modify or replace the original class with a new class dynamically at runtime. This can be useful
// for implementing aspects such as inheritance, composition, or applying mixins to a class.

//! Let's illustrate this with an example:

function AddAdditionalProperty<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    additionalProperty = "Additional Property Value";
  };
}

@AddAdditionalProperty
class MyClass {
  originalProperty = "Original Property Value";
}

const myObject = new MyClass();
console.log(myObject.originalProperty); // Output: "Original Property Value"
// console.log(myObject.additionalProperty); // Output: "Additional Property Value"

// In this example, the AddAdditionalProperty class decorator takes the original class MyClass as an argument and returns a new class dynamically.
// The returned class extends the original class and adds a new property additionalProperty.

// When we instantiate MyClass and create an object myObject, it has both the original property originalProperty and the additional property additionalProperty.
// The class decorator modifies the behavior of the original class by adding the additional property to instances of MyClass.

// This allows you to dynamically modify or enhance the original class by applying decorators and returning a new class that extends the original one.
// It gives you the flexibility to extend or alter the behavior of the class without modifying the original class directly.

// You can use this approach to implement various patterns and techniques such as mixins, aspect-oriented programming,
// or even altering the inheritance hierarchy of a class based on certain conditions or configurations.

//! It's important to note that returning a class in a class decorator replaces the original class, so any methods, properties,
//! or behavior present in the original class will not be inherited unless explicitly implemented or extended in the returned class.

function WithTemplate3(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering template");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@WithTemplate3("<h1>My Person Object</h1>", "app")
class Person10 {
  name = "yahia";

  constructor() {
    console.log("Creating person object...");
  }
}

const person10 = new Person10();
console.log(person10);

// we get error regarding the types not being correct.
// To fix that though, we can turn our decorator function into a generic function where we get a type, and set this as the type of original constructor,
// and now make clear that this will actually be basically a constructor function, and we can make that clear

// by assigning a special type, an object type, where we set a new property, this is a reserve name of course, but it tells TypeScript that in the end this will be an object
// that can be new. So that will be a constructor function, a function we can call with the new keyword to generate a new object. And this new function, this new method,
// which the object T is based on will have, will get any amount of arguments, so I'm using rest parameters here to accept as many arguments as you want,
// so that they're really flexible regarding the arguments that can be passed to the constructor of the class we're trying to change. Add the new function will then in the end return an object here.

// Now I should also just copy that definition of the rest parameter to my constructor here, so that this constructor is also capable of accepting all the arguments we might be getting,
// so that we can, basically instantiate Person with any arguments you want to pass in here. With any arguments we might also need here, in the original constructor function.

//! But still last problem is that we don't know that such a name property exists
// But, we can fix this by simply telling TypeScript that the object T is based on, so our original constructor function, will not just produce any object,
// but actually will produce an object with a name property which will be of type string

// In this example I replace the class with my new custom class here, and that allows us to add extra logic, that should run when the class is instantiated.

//! But this logic we added that does not run when the class is defined, but when the class is instantiated.

//! NOTE VIP:
// And you can not just define them as functions, and you can not just define them with factor functions. In some decorators, like the class decorator,
// you can also return something to replace the thing you added the decorator to in our case the class, with a new class that can implement the old class
// but also add its new custom logic. And with that, if we comment this back in, we again render Max to the screen with our own class
// that replaces, or that extends and replaces the old class.
//! -------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 113- Other Decorator Return Types
// The decorators on properties and on parameters of course, also can return something but TypeScript will ignore it.
// So return values are not supported there or are not used to be precise.
// decorator where we will return something and we can build interesting with the help of decorators.
