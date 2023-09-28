//! Introduction to Node.js and NPM
//! What is Node.js? Why use ir?
//  Node.js => Is a javascript runtime built on google's open source V8 javascript engine
// Node.js make us write javascript code outside browser it's like a container, like an environment in which a program written in JavaScript
// can be executed, but outside of any browser whatsoever.

//! Who does execute the code if not the browser?
// that's where the V8 engine developed by google comes into play because that is exactly where javascript code will be parsed and run in NodeJs

// So now the definition of NodeJs being a javaScrip runtime on the V8 JavaScript engine makes a lot more sense and again this is just a very high level overview.

//! Why NodeJs fast and scalable:
//! Node.Js PROS
// 1) Single threaded based on an event driven, non-blocking I/O model which makes NodeJS very lightweight and efficient.
// 2) Prefect for building fast and scalable data-intensive apps.
// 3) Companies like Netflix, Uber, Paypal, ebay have started using node in production
// 4) JavaScript across the entire stack: faster and more efficient development
// 5) NPM: hug library of open-source packages available for everyone for free.
// 6) Very Active: developer community

//! Use Node.JS
// 1) building an API with a database behind it and preferably a non-relational NoSQL database like MongoDB
// 2) that we can build like data streaming applications such as YouTube or Netflix
// 3) real-time chat apps,
// 4) or even server-side web applications where the entire content is simply generated right on the server

//! Don't use Node.JS:
// some super heavy server-side processing like having image manipulations, video conversion, file compression or anything like that, all right.
// And you will learn why that is once we dive deeper into how Node actually works. So, in this case, we're better off
// using something like Ruby on Rails, PHP, or Python. Because NodeJS just wasn't developed

//-----------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Running javascript outside the browser:
