// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;

// const e1: ElevatedEmployee = {
//   name: "yahia",
//   privileges: ["create-server"],
//   startDate: new Date(),
// };

// type Combinable1 = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable1 & Numeric;

// const paragraph = document.querySelector("p");
// const paragraph1 = document.getElementById("message-output");

// // const userInputElement = document.querySelector("input");
// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")
// );
// // const userInputElement = document.getElementById(
// //   "user-input"
// // )! as HTMLInputElement;

// userInputElement.value = "Hi there!";

// // const userInputElement = document.getElementById("user-input");

// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = "Hi there!";
// }

// interface ErrorContainer {
//   // {email: 'Not a valid email, username: 'Must start with a capital character}
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "Not a valid email!",
//   username: "Must start with a capital character!",
// };
////////////////////////////////

// function merge(objA: object, objB: object) {
//   // return Object.assign(objA, objB);
//   return { ...objA, ...objB };
// }

// const mergedObj = merge({ name: "yahia" }, { age: 30 });
// console.log(mergedObj); // we can't access the properties because function take two unknown objects and return unknown object

// to solve the problem we use generic function

// function merge1<T extends object, U extends object>(objA: T, objB: U) {
//   return { ...objA, ...objB };
// }

// const mergedObj1 = merge1(
//   { name: "yahia", hobbies: ["football"] },
//   { age: 30 }
// );
// console.log(mergedObj1);
////////////////////////////////

// function Logger(logString: string) {
//   console.log("LOGGER FACTORY");
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   console.log("TEMPLATE FACTORY");
//   return function (constructor: any) {
//     console.log("Rendering template");
//     const hookEl = document.getElementById(hookId);
//     const p = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector("h1")!.textContent = p.name;
//     }
//   };
// }

// @Logger("LOGGING- PERSON")
// @WithTemplate("<h1>My Person Object</h1>", "app")
// class Person {
//   name = "Yahia";
//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// const person = new Person();
// console.log(person);

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target);
  console.log(propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
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

// function LogGetter(
//   _target: any,
//   propertyName: string,
//   descriptor: PropertyDescriptor
// ) {
//   const originalGetter = descriptor.get;

//   descriptor.get = function () {
//     console.log(`Getting value of property: ${propertyName}`);
//     return originalGetter.apply(this);
//   };
// }

// class Person {
//   private _name: string;

//   @LogGetter
//   get name(): string {
//     return this._name;
//   }

//   set name(value: string) {
//     this._name = value;
//   }
// }

// const person = new Person();
// person.name = "John";
// console.log(person.name);

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
  // additionalProperty: any;
}

const myObject = new MyClass();
console.log(myObject);
console.log(myObject.originalProperty); // Output: "Original Property Value"
// console.log(myObject.additionalProperty); // Output: "Additional Property Value"
