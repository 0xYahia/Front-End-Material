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

let user1: Greetable;

user1 = new Person("Yahia");

user1.great("Hi There - I am");

console.log(user1);
