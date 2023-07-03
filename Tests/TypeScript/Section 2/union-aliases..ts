// function combine(input1: number | string, input2: number | string) {
//   let result;

//   if (typeof input1 === "number" && typeof input2 === "number")
//     result = input1 + input2;
//   else result = input1.toString() + " " + input2.toString();

//   return result;
// }

// const combinedAges = combine(30, 26);
// console.log(combinedAges);

// const combinedNames = combine("Mohamed", "Yahia");
// console.log(combinedNames);

// function combine(
//   input1: number | string,
//   input2: number | string,
//   // resultConversion: string,
//   resultConversion: "as-number" | "as-text" // union types with literal types
// ) {
//   let result;

//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     resultConversion === "as-number"
//   )
//     result = +input1 + +input2;
//   else result = input1.toString() + input2.toString();

//   // if (resultConversion === "as-number") return +result;
//   // else return result.toString();

//   return result;
// }

// const combinedAges = combine(30, 26, "as-number");
// console.log(combinedAges);

// const combinedStringAges = combine("30", "26", "as-number");
// console.log(combinedStringAges);

// const combinedNames = combine("Mohamed", "Yahia", "as-text");
// console.log(combinedNames);
