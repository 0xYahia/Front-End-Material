const person1: {
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

person1.role.push("Yahia");
console.log(person1);
// person1.role.pop();
console.log(person1);
