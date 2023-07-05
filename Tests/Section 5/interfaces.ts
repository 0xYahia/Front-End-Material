// interface Greetable {
//   name: string;

//   great(phrase: string): void;
// }

// class Person implements Greetable {
//   name: string;
//   age = 26;
//   constructor(n: string) {
//     this.name = n;
//   }

//   great(phrase: string): void {
//     console.log(` ${phrase} ${this.name}`);
//   }
// }

// let user1: Greetable;

// user1 = new Person("Yahia");

// user1.great("Hi There - I am");

// console.log(user1);

////////////////////////// 2 //////////////////////////

// interface Named {
//   readonly name?: string;
//   outputName?: string;
// }
// interface Greetable extends Named {
//   great(phrase: string): void;
// }

// class Person1 implements Greetable {
//   name: string;
//   age = 26;
//   outputName = ".....";
//   constructor(n?: string) {
//     //! if name is not empty because it is optional
//     if (n) {
//       this.name = n;
//     }
//   }

//   great(phrase: string): void {
//     if (this.name) {
//       console.log(` ${phrase} ${this.name}`);
//     } else {
//       console.log("Hi");
//     }
//   }
// }

// let user2: Greetable;

// user2 = new Person1();

// user2.great("Hi There - I am");
// console.log(user2);
