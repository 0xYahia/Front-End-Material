const worker = new Worker("worker.js");

const sumButton = document.getElementById("sumButton");
const bgButton = document.getElementById("bgButton");

sumButton.addEventListener("click", (event) => {
  // let sum = 0;
  // for (let i = 0; i < 10000000000; i++) sum += i;
  worker.postMessage("hello worker");
  alert(`The final sum is: ${sum}`);
});

worker.onmessage = function (message) {
  console.log(message.data);
  alert(`The final sum is: ${message.data}`);
};

bgButton.addEventListener("click", (event) => {
  if (document.body.style.background !== "green")
    document.body.style.background = "green";
  else document.body.style.background = "blue";
});
