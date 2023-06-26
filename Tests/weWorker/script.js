const worker = new Worker("worker.js");

const sumButton = document.getElementById("sumButton");
const bgButton = document.getElementById("bgButton");

sumButton.addEventListener("click", (event) => {
  worker.postMessage("hello worker");
  // alert(`The final sum is: ${sum}`);
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
