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
