//! NOTES

//? 1- Browser based event loop differs from the eventloop in node instead it uses Libuv (library written in C) to implement the eventloop

//? 2- remember q js runtime like v8 have heap and stack

//? 3- some of functionality that we use doesn't exists in v8, like setTimeout its (webAPIs) which is extra thigns that the browser provides (DOM, AJAX, setTimeout)

//? 4- javascript only has one thread, which means we have one call stack and can do one thing at a time

//? 5- callstack: is datastructure records where in the program we are

//? 6- the message, we get when we throwing an error represent the stack trace, (state of stack when the error happened)

//? 7- first solution to solve blocking code (which also could hang us from doing basic stuff like clicking on our html element and so on) is using asynchronous callbacks

//? 8- eventloop job is to look at the stack and task queue, if stack is empty it takes first thing on the queue and push it into the stack

//? 9- callbacks can be both (sync or async)

//? 10- blocking the stack, meaning you also blocking your ui interactions

//? 11- callstack is used to push execution context inside it, so at start it always have global execution context pushed, and when a function in invoked, its execution context gets pushed into the call stack

//? 12- Macro task queue: executes async functions like DOM, Ajax, timeout, I/O operations and has lower priority

//? 13- Micro task queue: executes async functions which uses promises, process.nextTick and has higher preceedence (runs before macro tasks)

//? 14- eventloop is an endless loop and which wait for tasks, task are getting executed when the stack is only empty

//! Secnarios

// ------------------------------(1)-------------------------------

console.log('start'); // this will run immediately

//? this will wait 3 seconds to run (actually at least 3 seconds not 3 seconds you can have something that blocks the execution for more than 3 seconds)

//? 1- first browser will start the timer, and pop out the setTimeout from the stack,
//? 2- once the webapi is done with timer, it will push the callback we give to setTimeout to the task queue
//? 3- once call stack is clear, eventloop, will move the callback from task queue to the stack and runs

setTimeout(() => {
  console.log('start');
}, 3000);
console.log('end'); // this will run secondly after start

// ------------------------------(2)-------------------------------
console.log('start');

//? NOTE: when is no delay is given to setTimeout, its 0 by default
setTimeout(() => {
  console.log('abc');
});

//? here we have a promise which is a way to execute async code
//? promise will be executed before timeout, because promises are treated as micro task, while timeout is macro
const promise = new Promise((resolve, reject) => {
  resolve('promise');
}).then(data => {
  console.log(data);
});

console.log('endstart');

//why promises executes even before timers

//! Resources

//? 1- http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

//? 2- https://www.jsv9000.app/
