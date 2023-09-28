// console.log(document);
// console.log(document.documentElement);
// console.log(document.children);
// console.log(document.body);
// console.log(document.childNodes);
// console.log(html.firstelementchild);
// console.log(typeof Array);
// var arr1 = [];

// for (var i = 0; i < 5; i++) {
//   arr1.push(function () {
//     console.log(i);
//   });
// }

// arr1[0](); // 5
// arr1[2](); // 5
// arr1[4](); // 5

// To fix this, you can use an IIFE (Immediately Invoked Function Expression) inside the loop to create a new scope for each iteration.
//or use let

// example to use IIFE
// -----------------------------------------------------------------//

// var arr2 = [];

// for (var i = 0; i < 5; i++) {
//   (function (num) {
//     arr2.push(function () {
//       console.log(num);
//     });
//   })(i);
// }

// arr2[0](); // 0
// arr2[2](); // 2
// arr2[4](); // 4

// -----------------------------------------------------------------//
// // example to use let
// var arr3 = [];

// for (let i = 0; i < 5; i++) {
//   arr3.push(function () {
//     console.log(i);
//   });
// }
// arr3[0](); // 0
// arr3[2](); // 2
// arr3[4](); // 4

// -----------------------------------------------------------------//

// var divs = document.getElementsByTagName("div");
// divs[0].addEventListener(
//   "click",
//   function (e) {
//     if (e.target === this) {
//       console.log(this);
//       alert("iam red");
//     }
//   },
//   false
// );
// divs[1].addEventListener(
//   "click",
//   function (e) {
//     if (e.target === this) {
//       alert("iam green");
//     }
//   },
//   false
// );
// divs[2].addEventListener(
//   "click",
//   function (e) {
//     if (e.target === this) {
//       alert("iam yellow");
//     }
//   },
//   false
// );

// -----------------------------------------------------------------//

// const uri = "https://mozilla.org/?x=шеллы";
// const encoded = encodeURI(uri);
// console.log(encoded);
// // Expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

// try {
//   console.log(decodeURI(encoded));
//   // Expected output: "https://mozilla.org/?x=шеллы"
// } catch (e) {
//   // Catches a malformed URI
//   console.error(e);
// }

// -----------------------------------------------------------------//

// var y = {
//   name: "ahmed",
//   age: 25,
//   print: function () {
//     console.log(this.name);
//   },
// };
// var c = {};
// c = y;
// c.age = 265;
// c.name = "hamada";

// console.log(y.print());
// console.log(c);
// console.log(c.print());
// console.log(y);

// -----------------------------------------------------------------//

// var btn = document.getElementsByTagName("input")[1];
// btn.addEventListener("click", validation);
// function validation() {
//   var input = document.querySelector("input");
//   var span = document.getElementsByTagName("span");
//   if ((input.value = "")) {
//     span.textContent = "this filed required";
//     span.style.display = "inline";
//   }
// }
// var btn = document.getElementsByTagName("input")[1];
// btn.addEventListener("click", validation);
// function validation() {
//   var input = document.querySelector("input");
//   if ((input.value = "")) {
//     span.textContent = "this filed required";
//     span.style.display = "inline";
//   } else if (isFinite(input.value)) {
//     span.textContent = "please enter characters";
//     input.value = " ";
//     span.style.display = "inline";
//   } else {
//     alert("hello" + input.value);
//     span.style.display = "none";
//     input.value = "";
//   }
// }
// -----------------------------------------------------------------//

// function Employee(n, a) {
//   this.name = n;
//   this.age = a;
// }
// name = "menna";
// age = 25;
// var emp1 = Employee("menna", 25);
// console.log(emp1());

// var xhrUsers = new XMLHttpRequest();
// xhrUsers.open("get", "hello.txt", false);
// xhrUsers.send();

// console.log(xhrUsers);
// console.log(xhrUsers.response);

// var xhrUsers = new XMLHttpRequest();
// xhrUsers.open("get", "https://jsonplaceholder.typicode.com/users");
// xhrUsers.send();

// var div = document.getElementById("users");

// xhrUsers.addEventListener("readystatechange", function () {
//   if (xhrUsers.readyState === 4 && xhrUsers.status === 200) {
//     // console.log(xhrUsers.response);
//     var jsUserObj = JSON.parse(xhrUsers.response);
//     // console.log(jsUserObj);
//     jsUserObj.forEach((element) => {
//       div.innerHTML += `<p>${element.name}</p>`;
//     });
//   }
// });

// function saveCookies() {
//   var date = new Date(2023, 5, 20);
//   document.cookie = `name=yahia;expire=${date}`;
// }

// function deleteCookies() {
//   var date = new Date(2020, 11, 6);
//   document.cookie = `name=yahia;expires=${date}`;
// }

// localStorage.setItem("color", "red");
// sessionStorage.setItem("color", "blue");

// document.querySelector(".name").onblur = function () {
//   console.log(this.value);
//   window.sessionStorage.setItem("input-name", this.value);
// };

// if (window.sessionStorage["input-name"]) {
//   document.querySelector(".name").value = sessionStorage.getItem("input-name");
// }

// ES5
// const httpOptions = { timeout: 2000, isCash: true };
// const httpTimeout = httpOptions.timeout;
// const httpCash = httpOptions.isCash;

// console.log(httpTimeout, httpCash)

// ES
// {
//   const httpOptions = { timeout: 2000, isCash: true };
//   // const { timeout: httpTimeout, isCash: httpCash } = httpOptions;
//   const { timeout, isCash } = httpOptions;
//   // console.log(httpTimeout, httpCash);
//   console.log(timeout, isCash);
// }

// function randomeStrudent() {
//   const student = { name: "yahia" };
//   const track = "UI";
//   // ...
//   return { student, track };
// }

// // const { track, student } = randomeStrudent();
// const { student } = randomeStrudent();

// // console.log(track, student);
// console.log(student);

// -----------------------------------------------------------------//

// var maxFinder = {
//   max: 0,
//   find: function (numbers) {
//     // let's iterate
//     numbers.forEach(function (element) {
//       // if the element is greater,set it as the max
//       if (element > this.max) {
//         this.max = element;
//       }
//     });
//   },
// };
// maxFinder.find([2, 3, 4]);
// // log the result
// console.log(maxFinder.max);

// {
//   const maxFinder = {
//     max: 0,
//     find: function (numbers) {
//       numbers.forEach((element) => {
//         if (element > this.max) {
//           // console.log(this.max);
//           this.max = element;
//         }
//       });
//     },
//   };
//   maxFinder.find([2, 3, 4]);
//   // log the result
//   console.log(maxFinder.max);
// }

// const arr1 = [1, 2, 4];

// const arr2 = [...arr1];

// arr2[0] = 5;

// console.log(arr1[0]);
// console.log(arr2[0]);

// -----------------------------------------------------------------//

// shallow copy
// const arr1 = [
//   { name: "yahia", age: 25 },
//   { name: "Bishoy", age: 26 },
// ];

// const arr2 = [...arr1];
// arr2[0] = arr1[0];

// arr2[0].name = "yousef";

// console.log(arr1);
// console.log(arr2);

// shadow copy

// const arr1 = [
//   { name: "yahia", age: 25 },
//   { name: "Bishoy", age: 26 },
// ];

// // const arr2 = arr1.map((obj) => Object.assign({}, obj));

// // OR
// // const arr2 = arr1.map(({ ...obj }) => obj);

// // OR

// const arr2 = arr1.map((person) => ({ ...person }));

// arr2[0].name = "yousef";

// console.log(arr1);
// console.log(arr2);

// -----------------------------------------------------------------//

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce((accumulator, currentValue) => {
//   console.log(accumulator, currentValue);
//   return accumulator + currentValue;
// }, 0);
// console.log(result); // 15

// -----------------------------------------------------------------//
// const obj = { key1: "value1" };
// const array = [...obj]; // TypeError: obj is not iterable

// const array = [1, 2, 3];
// const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }

// console.log(obj);

// -----------------------------------------------------------------//
// console.log("first");
// var p = new Promise(function () {
//   setTimeout(() => {});
//   console.log("hello");
// });
// console.log("end");
// -----------------------------------------------------------------//

// var symbol1 = Symbol();
// var obj = {
//   name: "yahia",
//   age: 25,
//   [symbol1]: "hello",
// };

// console.log(obj);
// -----------------------------------------------------------------//
// function evenNumbersIterator() {
//   var start = 0;
//   return {
//     next: function () {
//       start += 2;
//       if (start <= 10) {
//         return {
//           value: start,
//           done: false,
//         };
//       } else {
//         return {
//           value: undefined,
//           done: true,
//         };
//       }
//     },
//   };
// }

// var obj = evenNumbersIterator();
// console.log(obj.next()); // { value: 2, done: false }
// console.log(obj.next()); // { value: 4, done: false }
// console.log(obj.next()); // { value: 6, done: false }
// console.log(obj.next()); // { value: 8, done: false }
// console.log(obj.next()); // { value: 10, done: false }
// console.log(obj.next()); // { value: undefined, done: true }
// console.log(obj.next()); // { value: undefined, done: true }

// var arr = ["Mohamed", "Yahia", "Ahmed"];

// console.log(...arr);

// for (const i of arr) {
//   console.log(i);
// }

// arr[Symbol.iterator] = evenNumbersIterator;

// console.log(...arr);

// for (const i of arr) {
//   console.log(i);
// }

// var obj = {
//   name: "yahia",
//   age: 25,
// };

// // console.log(...obj);
// for (const i of obj) {
//   console.log(i);
// }

// -----------------------------------------------------------------//
// Make function using iterable function to make object iterable

// function objectIterable() {
//   var keys = Object.keys(obj); // ['name', 'age']
//   var count = -1;
//   return {
//     next: function () {
//       count++;
//       if (count < keys.length) {
//         return {
//           value: [keys[count], obj[keys[count]]],
//           done: false,
//         };
//       } else {
//         return {
//           value: undefined,
//           done: true,
//         };
//       }
//     },
//   };
// }

// var obj = {
//   name: "yahia",
//   age: 25,
// };

// obj[Symbol.iterator] = objectIterable;

// for (const i of obj) {
//   console.log(i);
// }

// -----------------------------------------------------------------//
// Make function using generator function to make object iterable

// function* objectIterable() {
//   var keys = Object.keys(obj); /s/ ['name', 'age']
//   for (let i = 0; i < keys.length; i++) {
//     yield [keys[i], obj[keys[i]]];
//   }
// }

// var obj = {
//   name: "yahia",
//   age: 25,
// };

// obj[Symbol.iterator] = objectIterable;

// for (const i of obj) {
//   console.log(i);
// }
// -----------------------------------------------------------------//
// const ahmed = {
//   name: "ahmed",
//   sayHi: function () {
//     console.log(this);
//   },
// };

// const moamen = {
//   name: "moamen",
// };

// moamen.sayHi = ahmed.sayHi;
// ahmed.sayHi();
// ahmed.sayHi();
// -----------------------------------------------------------------//
// if ({} === {}) {
//   alert("true");
// } else {
//   alert("false");
// }
// "use strict";

const obj = {
  name: "yahia",
  test: function () {
    console.log(this);
    function test2() {
      console.log(this);
    }
    test2();
  },
};

// function fun1() {
//   console.log(this);
//   function fun2() {
//     console.log(this);
//     function fun3() {
//       console.log(this);
//     }
//     fun3();
//   }
//   fun2();
// }

// fun1();

// const test2 = () => {
//   console.log(this);
// };

obj.test();
// test2();
