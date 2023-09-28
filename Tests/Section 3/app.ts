const button = document.querySelector("button")!;

function clickHandler(message: string) {
  // let yahia = "yahia";
  console.log("Clicked" + message);
}

button.addEventListener("click", clickHandler.bind(null, "You're welcome!"));

// function add3(n1: number, n2: number) {
//   if (n1 + n2 > 0) {
//     return n1 + n2;
//   }
//   return null;
// }
