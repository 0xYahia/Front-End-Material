# Client Side JavaScript

JavaScript: used to make web pages interactive. It can update and change both HTML and CSS. It can also calculate, manipulate and validate data.
interpreter: a program that translates source code into machine code line by line.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
#=> What different between interpreter and compiler?
interpreter: a program that translates source code into machine code line by line.
compiler: a program that translates source code into machine code all at once.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Document: = HTML page combine between
JavaScript: is case sensitive object based programming language. instance of object contain properties and methods.
JS when written inline in the element in html
#----------------------------------------------------------------------------------------------------------------------------------------------------#
in js we two data types:
1- primitive data types: string, number, boolean, null, undefined, symbol, bigint.
2- complex data types: object, function, array.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
How can i use null and undefined?
null: is a value that represent nothing. if you want check if i have value or not you can use null.
undefined: is a value that represent the value is not assigned.
#----------------------------------------------------------------------------------------------------------------------------------------------------#

# Coercion

conversion between data types:
1- implicit conversion: is a conversion that happen automatically by the browser.
Example: 5 + "5" = 55 (or) 5 == "5" = true (or) 3 < 2 < 1 = true
2- explicit conversion: is a conversion that happen by the developer.
Example: Number("5") + 5 = 10
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Number(null) = 0 because null is a value that represent nothing.
isNaN("") = false ???
parseInt("5fff") = 5 because it will take the first number in the string.
Number: it's return the value in new variable.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
document.write("Hello World"): => write in the html page.
console.log(+a + +b): => it's unary operator. it's convert the string to number.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
prompt("Enter your name"): => it's take input from the user.
confirm("Are you sure?"): => it's take confirmation from the user. and return true or false.
alert("Hello World"): => it's show message to the user.
of all of them is blocking the code. until the user interact with it.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
built in objects: are objects that already exist in the browser.
Example: Math, Date, String, Number, Boolean, Array, RegExp, Function, Object, Error, Symbol, BigInt.
primitive data types: doesn't have properties and methods. but we can use them as objects.
Wrapper objects: are objects that wrap the primitive data types. and give them properties and methods. by using dot notation.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Object object: is the parent of all objects in js. it's contain properties and methods that all objects inherit from it.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Math object: is a built in object. it's contain properties and methods for mathematical constants and functions.
Example: Math.PI, Math.round(), Math.pow(), Math.sqrt(), Math.abs(), Math.ceil(), Math.floor(), Math.min(), Math.max(), Math.random().
#----------------------------------------------------------------------------------------------------------------------------------------------------#
NOTE: If i identify array and i left index empty. it will be undefined.
array: is a complex data type. it's contain list of items. it's zero based index. it's mutable.
Example: var arr = [1, 2, 3, 4, 5];
arr.join(""): => it's convert the array to string.
arr.join(","): => it's convert the array to string and add comma between the items.
arr.concat([6, 7, 8]): => it's add the new array to the old array.
arr.push(6): => it's add the new item to the end of the array.
arr.pop(): => it's remove the last item from the array.
arr.shift(): => it's remove the first item from the array.
arr.unshift(0): => it's add the new item to the first of the array.
arr.slice(1, 3): => it's return the items from index 1 to index 3.
arr.splice(1, 3): => it's remove the items from index 1 to index 3.
arr.reverse(): => it's reverse the array.
arr.sort(): => it's sort the array.
arr.indexOf(3): => it's return the index of the item.
arr.lastIndexOf(3): => it's return the last index of the item.
arr.includes(3): => it's return true or false if the item is exist or not.
arr.find(): => it's return the first item that match the condition.
arr.findIndex(): => it's return the index of the first item that match the condition.
arr.filter(): => it's return the items that match the condition. it's take function as parameter. and return new array.
arr.map(): => it's return the items that match the condition. it's take function as parameter. and return new array.
arr.reduce(): => it's return the items that match the condition. it's take function as parameter. and return new array.
arr.forEach(): => it's return the items that match the condition. it's take function as parameter. and return new array.
arr.every(): => it's return true or false if all items match the condition.
arr.some(): => it's return true or false if some items match the condition.
arr.fill(): => it's fill the array with the value.
arr.copyWithin(): => it's copy the items from index to index.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
VIP:
Shallow copy: it's change the first level of reference.
Deep copy: it's change all levels of reference.

var arr1 = arr2: => it's copy the array by reference. if i change in arr1 it will change in arr2. it's called shallow copy.
var arr1 = [...arr2]: => it's copy the array by value. if i change in arr1 it will not change in arr2. it's called deep copy.
OR:
var arr1 = [1, 2, 3];
var arr2 = [];
for (var i = 0; i < arr1.length; i++) {
arr2.push(arr1[i]);
}
OR: arr2.push(arr1[0]), arr2.push(arr1[1]), arr2.push(arr1[2]);

this is Deep copy. because i change the reference of the array. so if i change the value of the first array. it will not affect the second array.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
NOTE: any function in js will be return undefined if i don't return any thing.
if i want restrict the function to take only number. i can use typeof.
Example: if(typeof num !== "number") throw new Error("not a number");
if i wnat restrict on the value, i can use isNaN.
Example: if(isNaN(num)) throw new Error("not a number");
#----------------------------------------------------------------------------------------------------------------------------------------------------#

# Arguments

Arguments: to count number of arguments that passed to the function. but it doesn't have any methods.
Argumernts: will die in the end of the function.
Arguments: have some properties like: length, callee, caller.
callee: is a property that refer to the function itself.
caller: is a property that refer to the function that called the function.
Arguments object: is a built in object. it's contain all arguments that passed to the function. it's array like object.
Example: function sum() { return arguments[0] + arguments[1]; }
#----------------------------------------------------------------------------------------------------------------------------------------------------#
split(): => it's convert string to array by using the separator.
Example: "Hello World".split(" "); => ["Hello", "World"]
split(): it doesn't change the original string.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
function expression: is a function that assigned to a variable.
Example: var sum = function() { return 1 + 1; }
function declaration: is a function that declared by using function keyword.
Example: function sum() { return 1 + 1; }
#----------------------------------------------------------------------------------------------------------------------------------------------------#
var is function scope. let and const are block scope.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
NOTE: if i want to use global variable inside the function. i can use window.variableName.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
function test(){
x =5;
console.log(x);
}
test = 5;
NOTE: we have problem here. because we have two variables with the same name. and the function will be override.

- we can solve this problem by using IIFE.
  IIFE: Immediately Invoked Function Expression. it's function that invoked immediately.
  Example: (function(){ x =5; console.log(x); })();
  #----------------------------------------------------------------------------------------------------------------------------------------------------#
  Hoisting: is a mechanism that move all declarations to the top of the scope. before executing the code.
  Hoisting: works only with function declaration and variable it come before it var keyword. not with function expression, let and const.
  #----------------------------------------------------------------------------------------------------------------------------------------------------#
  Lexical environment: is a mechanism that manage the scope of the variables. it's contain two things: environment record and reference to the outer environment.
  in js we have two types of scope: global scope and function scope.
- so we see that the function can access the global scope and any variable in global scope.\
- but the global scope can't access the function scope and can't access any variable in function scope.

Examples:
function b() {
=> console.log(myVar); // error
}
a();
b()
function a() {
=> myVar = 5
=> console.log(myVar); // 5
=> b()
}

function a() {
=> var myVar = 2;
=> console.log(myVar); // 2
=> function b() {
=> console.log(myVar); // 2
=> }
#----------------------------------------------------------------------------------------------------------------------------------------------------#

# DOM

DOM: document object model. it's a tree of nodes. it's a representation of the html document. it's allow us to manipulate the html document.
DOM: have three types of nodes: element nodes, text nodes and comment nodes.
DOM: have three types of elements: html element, head element and body element.
console.log(document): => it's return the html document.
console.log(document.documentElement): => it's return the html element.
console.log(document.children): => it's return HTMLCollection of head and body elements.
console.log(document.body): => it's return the body element.
console.log(childNodes): => it's return NodeList of all nodes inside the body element. contain spaces, text nodes and comment nodes.
#----------------------------------------------------------------------------------------------------------------------------------------------------#

# Selecting elements

Selecting by tag name: document.getElementsByTagName("p"): => it's return HTMLCollection of all p tags.
Selecting by class name: document.getElementsByClassName("class-name"): => it's return HTMLCollection of all elements that have this class name.
Selecting by id: document.getElementById("id-name"): => it's return the element that have this id.
Selecting by query selector: document.querySelector("p"): => it's return the first p tag.
Selecting by query selector: document.querySelectorAll("p"): => it's return NodeList of all p tags.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
NOTE: if i want mainpulate the element i should put script tag in the end of the body element.
if i put script tag in the head element. it will not work. because the script will be executed before the html document is loaded.
#----------------------------------------------------------------------------------------------------------------------------------------------------#

# Set and get attributes

h1.setAttribute("class", "Yahia"): => it's set the class attribute to Yahia.
if h1 element have class attribute. it will be override.
if h1 element doesn't have class attribute. it will be created.

Why setAttribute remove the old attribute and create new one?:
because we can't put two attributes with the same name in the same element. (Except for class attribute).
h1.getAttribute("class"): => it's return the class attribute.
h1.removeAttribute("class"): => it's remove the class attribute.
h1.hasAttribute("class"): => it's return true or false if the element have this attribute or not.
#----------------------------------------------------------------------------------------------------------------------------------------------------#

# ClassList

ClassList: is a property that contain all classes of the element. it's return DOMTokenList.
h1.classList.add("Yahia"): => it's add the class to the element. if the element have another class it will not be override. it's add the class to the classes.
h1.classList.remove("Yahia"): => it's remove the class from the element.
h1.classList.toggle("Yahia"): => it's add the class if it's not exist. and remove the class if it's exist.
h1.classList.contains("Yahia"): => it's return true or false if the element have this class or not.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
h1.style.backgroundColor = "red": => it's change the background color of the element. (inline style).
typeof Array: => it's return object.
null in js is value. undefined in js is value. ?????
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Falsy values: false, 0, "", null, undefined, NaN.
And operator: &&. if the first value is falsy it will return the first value. if the first value is truthy it will return the second value.
Or operator: ||. if the first value is truthy it will return the first value. if the first value is falsy it will return the second value.
NOTE: And operator have priority over Or operator.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Built in object: contain properties and methods.
Built in objects: are objects that built in the browser. like: Math, Date, String, Number, Boolean, Array, Object, Function, RegExp, Error, Symbol.
To use built in object: we should use new keyword.
Example: var str = new String("Yahia");
NOTE: but i can use property and method of the built in object without using new keyword. via dot notation.
this i due to wrapper object. this work with string, number and boolean.
Example: var str = "Yahia";
str.length; => 5
str.toUpperCase(); => "YAHIA"
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Self invoked function: is a function that invoked immediately.
Example: (function(){ console.log("Hello World"); })();

- we use self invoked function make variables private. and we can't access it from outside the function. even var.
- we use self invoked function to prevent overriding the variables who is carry the function.
  var x = (function(){ return 5; })();
  in this example x carry the return value of the function.

#----------------------------------------------------------------------------------------------------------------------------------------------------#
There is three types of environments in js: lexical environment, global environment and function environment.
lexical environment: mean the environment that the code is written in. and what i can access from the code.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
call stack: is a mechanism that track the execution of the code. it's track the function that is currently running.
callback function: is a function that passed to another function as a parameter. and this function will be invoked inside the function.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
forEach: is a method that take a callback function as a parameter. and this function will be invoked for each element in the array.
Example: forEach(function(element, index, array){ console.log(element); });
OR: function test(element, index, array){ console.log(element); }
forEach(test);
here i pass the function test as a parameter to forEach method. and forEach will invoke this function for each element in the array.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
closure: is inner function that have access to the outer function variables. even after the outer function is returned.
NOTE: the variables of the outer function will not be removed from the memory. because the inner function have access to it.
Don't use closure to store big data. because it will not be removed from the memory.
Example:
function outer() {
var x = 5;
function inner() {
console.log(x);
}
#----------------------------------------------------------------------------------------------------------------------------------------------------#
The difference between closure and lexical scope:
lexical scope: is a concept that function have access to the variables of the outer function. based in physical location.
closure: is a concept a function already accessed variables in the outer function. even after the outer function is returned.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Create Element:
1- create element using createElement method.
2- append the element to the parent element using appendChild method or insertBefore method or insertAdjacentElement method.
Example:
var h1 = document.createElement("h1");
h1.textContent = "Yahia"; => here i set the text of the h1 element or override it.
NOTE: if i want remove the text of the h1 element.
h1.textContent += "Yahia"; =>a here i append the text to the h1 element.
document.body.append(h1); => here i append the h1 element to the body element.

Another way to create element in the DOM:
1- get element from the DOM: document.getElementById("id-name");
2- use innerHTML property to create the element.
Example:
var div = document.getElementById("id-name");
div.innerHTML = "<h1>Yahia</h1>"; => here i create the h1 element and append it to the div element.
NOTE: innerHTML property will override the element. if i want append the element i should use += operator.

Another way to create element in the DOM:
insertBefore method: is the same appendChild(), but accepts an extra parameter, specifying before which element to insert the new node.
it must called through the parent where the element will be added.
insertBefore(newNode, existingChild)
Example:
div.insertBefore(h1, div.children[0]); => here i insert the h1 element before the first child of the div element.
At the end of the body:
document.body.appendChild(document.createTextNode("Yahia")); => here i create text node and append it to the end of the body element.

Add it as the first child of the body:
document.body.insertBefore(document.createTextNode("Yahia"), document.body.firstChild); => here i create text node and append it to the first child of the body element.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
removeChild(): Specify node to be removed, send it to removeChild() method.
Example:
var removed = document.body.removeChild(div); => here i remove the div element from the DOM. and i store it in the removed variable.
the method return the removed node if i want to use it later.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
replaceChild(newNode, oldNode): Removes a node and puts another one in its place.
First specify node to remove and node to add, then send theme to function
Example:
var replaced = document.body.replaceChild(h1, div); => here i replace the div element with the h1 element.
and i store the div element in the replaced variable.
it return a reference to the node that is now out of the tree.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
What is the difference between innerHTML and textContent?:
innerHTML: is a property that return the html content of the element. and i can set the html content of the element.
textContent: is a property that return the text content of the element. and i can set the text content of the element.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Clone Node: is a method that clone the element. and return the clone element.
Example:
document.body.append(div.cloneNode()); => here i clone the div element and append it to the body element.
doument.body.append(div.cloneNode(true)); => here i clone the div element and i clone the children of the div element. and append it to the body element.
div.remove(); => here i remove the div element from the DOM. but doesn't remove the clone element.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Event: is an action that happen in the browser. like: click, mouseover, mouseout, keydown, keyup, keypress, load, resize, scroll, submit, change, focus, blur.
Event Handler: is a function that will be invoked when the event happen.

There is three ways to add event handler to the element:
1- inline event handler: is a function that will be invoked when the event happen. and this function is written in the html code.
Example: <button onclick="test()">Click Me</button>
2- event as property => element.event = function(): is a function that will be invoked when the event happen. and this function is written in the js code.
Example: button.onclick = function(){ console.log("Hello World"); }
3- EventListenter => element.addEventListener("event", function): is a function that will be invoked when the event happen. and this function is written in the js code.

Example: button.addEventListener("click", function(){ console.log("Hello World"); });
in addEventListener each event have object that contain information about the event.
NOTE: i can add more than one event handler to the element. and all of them will be invoked when the event happen.
NOTE: i can remove event handler from the element using removeEventListener method.
Example: button.removeEventListener("click", function(){ console.log("Hello World"); });
this keyword in the event handler: refer to the element that the event happen on it.
target keyword in the event handler: refer to the element that i click on it.
preventDefault method: is a method that prevent the default behavior of the element.

Example:
window.addEventListener("contextmenu", function(e){ e.preventDefault(); });
this example will prevent the default behavior of the right click.
NOTE: i can use preventDefault method with any event.
stopPropagation method: is a method that stop the event from bubbling up.

Example:
div.addEventListener("click", function(e){ e.stopPropagation(); });
this example will stop the event from bubbling up.
NOTE: i can use stopPropagation method with any event.

Mouse Events: click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave.
Keyboard Events: keydown, keyup, keypress.
Form Events: submit, change, focus, blur.
Loading / Window Events: load, unload, beforeunload, abort, error, resize, scroll, contextmenu.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Bubbling Phase: is a mechanism that when the event happen on the element. the event will bubble up to the parent element.
Example:

<div>
<button>Click Me</button>
</div>
when i click on the button the event will bubble up to the div element. and the event will happen on the div element.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Capturing Phase: is a mechanism that when the event happen on the parent element. the event will happen on the child element.
when i click on the div element the event will happen on the button element.
Example:
var divs = document.getElementsByTagName("div");
divs[0].addEventListener(
=> "click",
=> function () {
=> => alert("iam red");
=> },
=> false
);

divs[1].addEventListener(
=> "click",
=> function () {
=> => alert("iam green");
=> },
=> false
);

divs[2].addEventListener(
=> "click",
=> function () {
=> => alert("iam yellow");
=> },
=> false
);

The third parameter in addEventListener method is a boolean value.
if the value is false: this mean this is bubbling phase.
if the value is true: this mean this is capturing phase.
var divs = document.getElementsByTagName("div");
divs[0].addEventListener(
=> "click",
=> function () {
=> => alert("iam red");
=> },
=> true
);

divs[1].addEventListener(
=> "click",
=> function () {
=> => alert("iam green");
=> },
=> true
);

divs[2].addEventListener(
=> "click",
=> function () {
=> => alert("iam yellow");
=> },
=> true
);
so to make the event happen on the target element only.
I have to solution:
1- use stopPropagation method. but this solution is not good. because it build element in dom but i can't see it.
2- use condition to check if the target element is the element that i want.

Example for solution 1:
var divs = document.getElementsByTagName("div");
divs[0].addEventListener(
=> "click",
=> function (e) {
=> => e.stopPropagation();
=> => alert("iam red");
=> =}
=> false
);

divs[1].addEventListener(
=> "click",
=> function (e) {
=> => e.stopPropagation();
=> => alert("iam red");
=> =}
=> false
);

divs[2].addEventListener(
=> "click",
=> function (e) {
=> => e.stopPropagation();
=> => alert("iam red");
=> =}
=> false
);

Example for solution 2:
var divs = document.getElementsByTagName("div");
divs[0].addEventListener(
=> "click",
=> function (e) {
=> => if (this === e.target) {
=> => => alert("iam red");
=> => }
=> },
=> false
);

divs[1].addEventListener(
=> "click",
=> function (e) {
=> => if (this === e.target) {
=> => => alert("iam green");
=> => }
=> },
=> false
);

divs[2].addEventListener(
=> "click",
=> function (e) {
=> => if (this === e.target) {
=> => => alert("iam yellow");
=> => }
=> },
=> false
);

NOTE: target keyword in the event handler: refer to the element that i click on it.
this in addEventListener method: refer to the element that the event happen on it.
if i want get object with this keyword in html i pass event as second parameter in the function.
Example:

<div onclick="test(this, event)" id="mydiv">Click Me</div>
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Event Delegation: is a mechanism that when the event happen on the parent element. the event will happen on the child element.
Example:

<div>
<button>Click Me</button>
</div>
when i click on the div element the event will happen on the button element.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
inputs validation: is a mechanism that validate the inputs. and prevent the user from entering invalid data.
Example:
<input type="text" pattern="[a-z]{3,5}" title="Enter 3 to 5 characters">
this example will validate the input. and prevent the user from entering invalid data.
NOTE: i can use pattern attribute with any input type.
var input = document.getElementById("id-name");
input.value: is a property that return the value that the user enter it.
input.checkValidity(): is a method that return true if the input is valid. and return false if the input is invalid.
input.validity: is a property that return object that contain information about the input validation.

var btn = document.getElementsByTagName("input")[1];
btn.addEventListener("click", validation);
function validation() {
=> var input = document.querySelector("input");
=> var span = document.getElementsByTagName("span");
=> if ((input.value = "")) {
=> => span.textContent = "this filed required";
=> => span.style.display = "inline";
=> }
}
var btn = document.getElementsByTagName("input")[1];
btn.addEventListener("click", validation);
function validation() {
=> var input = document.querySelector("input");
=> if ((input.value = "")) {
=> => span.textContent = "this filed required";
=> => span.style.display = "inline";
=> } else if (isFinite(input.value)) {
=> => span.textContent = "please enter characters";
=> => input.value = " ";
=> => span.style.display = "inline";
=> } else {
=> => alert("hello" + input.value);
=> => span.style.display = "none";
=> => input.value = "";
=> }
}
Common Mistake: we should not take the value from the input and save it in variable outside the event handler.
because before the user enter the value the variable will be empty.
like this: var v = document.querySelector('input').value;
So the best way: take the value inside the event handler.

#----------------------------------------------------------------------------------------------------------------------------------------------------#
Timing Events: is a mechanism that allow me to execute code at specific time.
(setTimeout, setInterval, clearInterval, clearTimeout)
setTimeout: is a method that take two parameters.
1- function: is a function that will be invoked after the time end.
2- time: is a time that the function will be invoked after it.
Example:
setTimeout(function(){ console.log("Hello World"); }, 3000);
this example will invoke the function after 3 seconds.

setInterval: is a method that take two parameters.
1- function: is a function that will be invoked after the time end.
2- time: is a time that the function will be invoked after it.
Example:
setInterval(function(){ console.log("Hello World"); }, 3000);
this example will invoke the function every 3 seconds.

clearInterval: is a method that take one parameter.
1- id: is a id that return from setInterval method.
Example:
var id = setInterval(function(){ console.log("Hello World"); }, 3000);
clearInterval(id);
NOTE: if i pass negative time to setTimeout or setInterval method. as add 0 to the time.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Js synchronous and synchronous: is a mechanism that allow me to execute code in order or not.
synchronous: is a mechanism that execute code in order.
synchronous: is a mechanism that execute code not in order.
Example:
console.log("Hello World"); this code will execute first. because it is synchronous.
setTimeout(function(){ console.log("Hello World"); }, 3000); this code will execute second. because it is synchronous.
synchronous code will execute after stack is empty.
NOTE: synchronous code go to web api in message queue. and wait until the time end.
when the time end. the synchronous code will go to callback queue.
when the stack is empty. the synchronous code will go to stack.

NOTE: the event also go to web api in message queue. and wait until the event happen.
when the event happen. the event will go to callback queue.
when the stack is empty. the event will go to stack.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
BOM: A collection of objects access the browser and the computer screen.
Accessible through the global objects window.
There's a window object for every popup, or browser tab.
BOM objects: (navigator, location, history, screen)
#----------------------------------------------------------------------------------------------------------------------------------------------------#
window object: is a global object that contain all the global variables and functions.
window.open(url, name, target, featurelsit): is a method that open new window.
it's return a reference to the window object of the newly created browser instance.
1- url: is a url that the new window will open it.
2- name: is a name that the new window will have it.
3- target: is a target that the new window will open it.
4- featurelsit: is a featurelsit that the new window will have it.
featurelsit: resizeable, scrollbars, status, toolbar, menubar, location, width, height, left, top.
Example:
var win = window.open("https://www.google.com", "\_blank", "width=500,height=500");

win.close(): is a method that close the window.
window.close(): is a method that close the current window.
window.closed: is a property that return true if the window is closed. and return false if the window is not closed.
window.moveTo(x, y): is a method that move the window to specific position.
window.moveBy(x, y): is a method that move the window by specific position.
window.resizeTo(width, height): is a method that resize the window to specific size.
window.resizeBy(width, height): is a method that resize the window by specific size.
window.focus(): is a method that focus on the window. and bring it to the front.
window.blur(): is a method that blur the window.
window.print(): is a method that print the window.
window.stop(): is a method that stop the window.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
navigator object: is a object that contain information about the browser.
and it's capabilities. it is used to identify the browser and provide different version of the code.

One of the most important properties of the navigator object is the userAgent property.
navigator.userAgent: is a property that return the user agent string for the current browser.
if user agent string contain "Chrome". the browser is chrome.
if user agent string contain "Firefox". the browser is firefox.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
History object: is a object that contain the urls that the user visit it withing a browser window.
it allows limited access to the previously visited pages in the session history of the current tab.
history.length: is a property that return the number of urls in the history list.
history.forward(): navigate forward through the user's session history. (same as clicking the forward button in the browser)
history.back(): navigate backward through the user's session history. (same as clicking the back button in the browser)
history.go(number): is a method that navigate to specific page in the history list.
if the number is positive. it will navigate forward.
if the number is negative. it will navigate backward.
if the number is zero. it will refresh the current page.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Location object: is a object that contain information about URL of the currently loaded page.
For the following URL: "https://search.phpied.com:8080/search?p=javascript#results"
location.href: Returns or sets the complete URL of the current web page, including the protocol, domain, port, path, query parameters, and fragment identifier. It is a string representing the entire URL.
(https://search.phpied.com:8080/search?p=javascript#results)
location.hash: Returns or sets the fragment identifier portion of the URL, including the "#" symbol. It represents a specific section within the web page. (#results)
location.protocol: is a property that return the protocol of the URL. (https:)
location.host: is a property that return the host name and port number of the URL. (search.phpied.com:8080)
location.hostname: is a property that return the host name of the URL. (search.phpied.com)
location.port: is a property that return the port number of the URL. (8080)
location.pathname: is a property that return the path name of the URL. (/search)
location.search: is a property that return the query string of the URL. (?p=javascript)
location.replace(url): is a method that replace the current page with the new page. (it's not saved in the history list)
like: login page.
location.href = url: is a property that load the new document.
location.reload(): is a method that reload the current page.
location.assign(url): is a method that load the new document.
NOTE: it's very important in location access query string. this is the data that we send it to the server.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
encodeURIComponent(string): is a method that encode the string to be used in query string. every special character will be encoded.
decodeURIComponent(string): is a method that decode the string to be used in query string. every special character will be decoded.
Example:
var url = "https://search.phpied.com:8080/search?p=javascript#results";
var encodedUrl = encodeURIComponent(url);
output: https%3A%2F%2Fsearch.phpied.com%3A8080%2Fsearch%3Fp%3Djavascript%23results
var decodedUrl = decodeURIComponent(encodedUrl);
output: https://search.phpied.com:8080/search?p=javascript#results
encodeURI(string): is a method that encode the string to be used in URL. every special character will not be encoded.
decodeURI(string): is a method that decode the string to be used in URL. every special character will not be decoded.
Example:
var url = "https://search.phpied.com:8080/ search ?p=javascript#results";
var encodedUrl = encodeURI(url);
output: https://search.phpied.com:8080/%20search%20?p=javascript#results
var decodedUrl = decodeURI(encodedUrl);
output: https://search.phpied.com:8080/ search ?p=javascript#results
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Objects:
JavaScript objects fall into four categories:
1- Custom objects: are objects that you define in your code.
2- Built-in objects: objects that are provided with JavaScript to make programming easier.
3- Browser object model (BOM) objects (Host):
it's a collection of objects that are accessible through the global window object.
the browser objects deal with the characteristics and properties of the web browser.
4- Document object model (DOM) objects:
Objects provide th foundatiuon for creating dynamic web pages.
the DOM provides the ability for javascript to access, manipulate, and extend the content of a web page dynamically.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
1- Anonymous objects: is an object that has no name.
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
this type is object Object. like string Object, number Object, boolean Object.
Waht i useful if know this is object or not?:
I will work with object by reference.
There two ways to access the object properties:
1- dot notation: objectName.propertyName
2- subscript notation: objectName["propertyName"]
Example:
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
var firstName = person.firstName; => John
var lastName = person.lastName; => Doe
var age = person["age"]; => 50
var eyeColor = person["eyeColor"]; => blue
When to use subscript notation?:
if i don't know the property name. i can use subscript notation. and if i don't know what the user will choose.
Example:
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
var x = "age";
var age = person[x]; => 50
if i use dot notation. it will not work. because there is no property called x.
and if i write person.x it think that x is a property.

Common Mistakes:
1- you can set / get the property of an object that doesn't exist.
a- set key not exist:
person.email = "yahia@gmail.com"; => email is not exist.
console.log(person) => {firstName: "John", lastName: "Doe", age: 50, email: "yahia@gmail.com" eyeColor: "blue"}
b- get key not exist:
console.log(person.hamada) => undefined
This is not error. but it's not good. because i don't know if the property is exist or not.
and this behavior in array too. and every thing is an object.

var y = {
=> name: "ahmed",
=> age: 25,
=> print: function () {
=> => console.log("hello");
=> },
};
var c = {};
c = y; => this is shallow copy. because i copy the reference.
c = {...y}; => this is deep copy. because i copy the value.
c.age = 265;
c.name = "hamada";

Another way to create object:
var obj = new Object();
var obj = {};
All this ways called anonymous object.
#----------------------------------------------------------------------------------------------------------------------------------------------------#

# Advanced JavaScript:

Day 1:
Objects: all previous lectures => anonymous no class.
Meanign of the anonymous: it doesn't have th seal, it's type is still anonymous.
Example:
function employee(n, a, e) {
=> return {
=> => name: n,
=> => age: a,
=> => email: e,
=> };
}
var emp = employee("yahia", 25, "yahia@gmail.com");
still it doesn't have the seal. it's type is still anonymous.
I can't make condition on the type is employee. because it's still object.
How can i make it have the seal?:
1- I can use the constructor function.
constructor function: is a function that create an object but it's written in a way that looks like a class. (syntax sugar)
Example:
function Employee(n, a) {
=> this.name = n;
=> this.age = a;
}
var emp1 = new Employee('menna', 25);
console.log(emp1);
output: Employee {name: "menna", age: 25}
This keyword: is a refere to the caller.
without new keyword: this keyword refere to the window object.
Example:
function Employee(n, a) {
=> this.name = n;
=> this.age = a;
}
var emp1 = Employee('menna', 25);
console.log(emp1); => undefined because this keyword refere to the window object.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
var emp1 = new Employee('menna', 28);
emp1.print() // menna, 25
var emp2 = new Employee('yahia', 26);
emp2.print() // menna, 25

NOTE: in this case i create two function. and every object has it's own function. and this is not good as performance.
because i will have a lot of functions.
So, i can use prototype. it's a way to add a function to the class. and every object will have the same function. (Bag of functions)
Example:
function Employee(n, a) {
=> this.name = n;
=> this.age = a;
}
Employee.prototype.print = function () {
=> console.log(this.name, this.age);
};
var emp1 = new Employee('menna', 25);
emp1.print() // menna, 25
var emp2 = new Employee('yahia', 26);
emp2.print() // yahia, 26
#----------------------------------------------------------------------------------------------------------------------------------------------------#
in js instance can change the prototype. and this is not good.
Example:
function Employee(n, a) {
=> this.name = n;
=> this.age = a;
}
Employee.prototype.print = function () {
=> console.log(this.name, this.age);
};
var emp1 = new Employee('menna', 25);
emp1.print() // menna, 25
var emp2 = new Employee('yahia', 26);
emp2.print() // yahia, 26
emp1.**proto**.print = function () {
=> console.log("hello");
};
emp1.print() // hello
emp2.print() // hello
#----------------------------------------------------------------------------------------------------------------------------------------------------#
How can i prevent the instance from changing the prototype?:
1- I can use the Object.freeze() method.
Object.freeze() method: is a method that prevent the instance from changing the prototype.
Example:
function Employee(n, a) {
=> this.name = n;
=> this.age = a;
}
Employee.prototype.print = function () {
=> console.log(this.name, this.age);
};
var emp1 = new Employee('menna', 25);
emp1.print() // menna, 25
var emp2 = new Employee('yahia', 26);
emp2.print() // yahia, 26
Object.freeze(emp1);
emp1.**proto**.print = function () {
=> console.log("hello");
};
emp1.print() // menna, 25
emp2.print() // hello
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Call & Apply and Bind: any function in js has this methods. to borrow the function from another object. or to change the this keyword.
call(newCaller, arg1, arg2, arg3, ...): is a method that call the function and change the this keyword to the newCaller.
Example:
var person = {
=> name: "yahia",
=> age: 25,
=> print: function () {
=> => console.log(this.name, this.age);
=> },
};
var person2 = {
=> name: "menna",
=> age: 28,
};
person.print(); // yahia, 25
person.print.call(person2); // menna, 28
person.print.apply(person2); // menna, 28
person.print.bind(person2); // menna, 28

var person = {
=> name: "yahia",
=> age: 25,
=> print: function () {
=> => console.log(this.name, this.age);
=> => console.log(x, y)
=> },
};
var person2 = {
=> name: "menna",
=> age: 28,
};
#----------------------------------------------------------------------------------------------------------------------------------------------------#
apply(newCaller, [arg1, arg2, arg3, ...]): is a method that call the function and change the this keyword to the newCaller.
the difference between call and apply is the arguments. in call the arguments are separated by comma. but in apply the arguments are in array.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
bind(newCaller, arg1, arg2, arg3, ...): is a method that call the function and change the this keyword to the newCaller.
bind has return type reference. so, i can call the function later.
Example:
var func = person.print.bind(person2);
func(); // menna, 10, 30
func(); // menna, 10, 30

var func = person.print.bind(person2);
func(10, 30); // menna, 10, 30
func(20, 1000); // menna, 10, 30
func() // menna, undefined, undefined
NOTE: if you want borrow method make sure that method suitable for the new object.
Example:
function test() {
=> arguments.forEach((el) => console.log(el));
));
test(1, 2, 3, 4, 5); // error because arguments is not an array.

To fix this error:
make sure to get forEach method from array prototype.
Example:
function test() {
=> [].forEach.call(arguments, function (el) {
// OR: Array.prototype.forEach.call(arguments, function (el) {
=> => console.log(el);
=> });
}
test(1, 2, 3, 4, 5); // 1, 2, 3, 4, 5
#----------------------------------------------------------------------------------------------------------------------------------------------------#
var obj = {
=> name: "yahia",
=> age: 25,
=> print: function () {
=> setTimeout(function () {
=> => console.log(this.name, this.age);
=> }, 1000);
=> },
};
obj.print(); // "", undefined because this keyword refere to the window object.
and window have name but it's empty. and doesn't have age.

To fix this error: we use this pattern.
var obj = {
=> name: "yahia",
=> age: 25,
=> print: function () {
=> => var self = this;
=> setTimeout(function () {
=> => => console.log(self.name, self.age);
=> => }, 1000);
=> },
};
obj.print(); // yahia, 25

if i write object instead of this keyword. it will work. but with object only.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
var obj = {
=> name: "yahia",
=> age: 25,
=> print: function () {
=> => setTimeout.call(this, function () {
=> => => console.log(this.name, this.age);
=> => }, 1000);
=> },
};
obj.print(); // Uncaugth TypeError: Illegal invocation at obje.print
NOTE: we can't use call or apply or bind with setTimeout or setInterval. because they are depend on the time
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Looping over object--edit to properties--delete properties:
var obj = {
=> name: "yahia",
=> age: 25,
};
for (var x in obj) {
=> console.log(x);
}
here x is refer to the key because this is object. but if this is array x will refer to the index.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
delete obj.name;: // delete the property name from the object.
I want put role to prevent any one can delete the property.
Restrictions on properties:
Object property descriptor:
Object.defineProperty(obj, propName,{});
Object.defineProperties(obj, {propName: {}, propName: {}});

Data descriptor:

- value: undefined
- writable: false
- configurable: false
- enumerable: false

Example:
var obj = {};
Object.defineProperty(obj, "name", {
=> value:,
=> writable: false, // false means i can't change the value of the property. it will be read only.
=> configurable:, // false means i can't delete the property. but if i delete it will doesn't get error. but it will not delete it.
=> enumerable:, // false means i can't loop over the property.
=> });
});
The property i want add it if it's not exist, it will add it. but if it's exist it will override it.

NOTE: If i don't write writable, configurable, enumerable. it will be false by default.
NOTE: in data descriptor i can't put logic. either true or false. if i want put logic i will use Accessors descriptor.

Accessors descriptor:

- get: function () {}
- set: function () {}
- configurable: false
- enumerable: false

Example:
var obj = {
=> get: function(){}
=> set: function(){}
=> configurable: true,
=> enumerable: false,
}

NOTE: structure of the object will change if i use Accessors descriptor.

get: function () {
=> return obj.name;
},
this is stack overflow. because i call the get method inside the get method. (recursion)

to fix this error:
var objName = "Yahia";
Object.defineProperty(obj, "name", {
=> get: function () {
=> => return objName;
=> },
=> set: function () {},
=> configurable: true,
=> enumerable: false,
});
console.log(obj.name); // Yahia

To use set method:
Object.defineProperty(obj, "name", {
=> get: function () {
=> => return objName;
=> },
=> set: function (val) {
=> => objName = val;
=> },
=> configurable: true,
=> enumerable: false,
});
#----------------------------------------------------------------------------------------------------------------------------------------------------#
var objName = "Yahia";
Object.defineProperty(obj, "name", {
=> get: function () {
=> => return objName;
=> },
=> set: function (val) {
=> => if(isNaN(val)) {
=> => => objName = val;
=> => } else {
=> => => throw new Error("name must be string");
=> => }
=> },
=> configurable: true,
=> enumerable: false,
});
console.log(obj.name); // Yahia

To solve problem with variable in the global scope: we use IIFE.
(function () {
var objName = "Yahia";
Object.defineProperty(obj, "name", {
=> get: function () {
=> => return objName;
=> },
=> set: function (val) {
=> => if(isNaN(val)) {
=> => => objName = val;
=> => } else {
=> => => throw new Error("name must be string");
=> => }
=> },
=> configurable: true,
=> enumerable: false,
});
})();
console.log(obj.name); // Yahia
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Define multiple properties:
Object.defineProperties(obj, {
=> name: {
=> => value: "yahia",
=> => writable: false,
=> => configurable: true,
=> => enumerable: false,
=> },
=> age: {
=> => value: 25,
=> => writable: false,
=> => configurable: true,
=> => enumerable: false,
=> },
});

defineProperty: take object, property name, and object of properties.
defineProperties: take object and object of properties name and object of properties.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Day 2: OOP
Class == Constructor function (factory function)

Parent user -- fucntion constructor:
function User(name, age) {
=> this.name = name;
=> this.age = age;
}
User.prototype.displayInfo = function () {
=> console.log(this.name, this.age);
};

Child employee:
function Employee(name, age, salary) {
=> this.name = name;
=> this.age = age;
=> this.salary = salary;
}
Employee.prototype.displayInfo = function () {
=> console.log(this.name, this.age, this.salary);
};

Here inheritance take two steps:
1- take member in the user.
2- take methods from prototype.

Parent user -- fucntion constructor:
function User(name, age) {
=> this.name = name;
=> this.age = age;
}
User.prototype.displayInfo = function () {
=> console.log(this.name, this.age);
};

Child employee:
function Employee(name, age, salary) {
=> User(this, name, age); // but caller is window. so i will use call or apply.
=> this.salary = salary;
}

to fix this error we will use call:
function Employee(name, age, salary) {
=> User.call(this, name, age); // this refer to the employee.
=> this.salary = salary;
}

this is the first step. now i will take the methods from prototype:

Employee.prototype = User.prototype;
NOTE: this is big error, both to same location in the memory.
// this will take the methods from prototype. but if i change the prototype of the employee it will change the prototype of the user.
so i will use object.create.

I must inherit first then add the methods that i want to add it. Otherwise it will give me error.

The best way to inherit is using object.create:

parent user -- fucntion constructor:
function User(name, age) {
=> this.name = name;
=> this.age = age;
}
User.prototype.displayInfo = function () {
=> console.log(this.name, this.age);
};

Child employee:
function Employee(name, age, salary) {
=> User.call(this, name, age); // this refer to the employee.
=> this.salary = salary;
}
Employee.prototype = Object.create(User.prototype);
// this will take the methods from prototype. but if i change the prototype of the employee it will change the prototype of the user.
Employee.prototype.calcSalary = function () {
=> return this.salary + 100
};

Another child:
function Student(name, age, grade) {
=> User.call(this, name, age); // this refer to the employee.
=> this.grade = grade;
}
Student.prototype = Object.create(User.prototype);
Student.prototype.calcGrade = function () {
=> return this.grade + 100
};

Test:
var emp = new Employee("yahia", 25, 1000);
emp.displayInfo(); // yahia 25
emp.calcSalary(); // 1100

var std = new Student("youse", 23, 100);
std.displayInfo(); // youse 23
std.calcGrade(); // 200
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Overriding -- prototype chain: function have the same name.

NOTE: in ordinary it look about methods in my prototype. if it didn't find it. it will look in the prototype of the parent.
if it didn't find it. it will look in the prototype of the parent of the parent. and so on. until Object.prototype.

Employee.prototype.displayInfo = function () {
=> console.log('i am employee');
};

in this case i have two methods called displayInfo(): it will look in the prototype of the employee. if it didn't find it.
it will look in the prototype of the user.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Override constructor:
before override: emp.constructor; // User(name, age){this.name = name; this.age = age;}
Employee.prototype.constructor = Employee; // this will override the constructor of the user.
after override: emp.constructor; // Employee(name, age, salary){User.call(this, name, age); this.salary = salary;}
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Abstract class: class that i can't create object from it. it is just for inheritance.
function User(name, age) {
=> if(this.constructor == User) throw new Error("can't create object from abstract class");
=> this.name = name;
=> this.age = age;
}
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Static method:
NOTE: function is object. so i can add property to it.
Employee.staticMethod = function () {
=> console.log("i am static method");
};
Employee.staticMethod(); // i am static method
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Static class:
function StaticClass(name, age) {
=> if(this.constructor == StaticClass) throw new Error("can't create object from static class");
}

If i want prevent inheritance from static class:
I throw error in the constructor of the static class.
OR prevent extensions:
StaticClass.prototype = Object.preventExtensions(StaticClass.prototype);
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Private members:
function myClass(n, a) {
=> var name = n;
=> var age = a;
=> this.getName = function () {
=> => return name;
=> };
=> this.setName = function (val) {
=> => name = val;
=> };
=> this.getAge = function () {
=> => return age;
=> };
=> this.setAge = function (val) {
=> => age = val;
=> };
}

var obj = new myClass("yahia", 25);
obj.getName(); // yahia
obj.setName("yousef");
obj.getName(); // yousef

Here i can't access to the name and age. but i can access to the methods that i created it.
as i make closure the variable will be in the memory. so i can access to it.

NOTE: If i make prototype to put functions that i want to share it. i will access it by get and set methods.

myClass.prototype.displayInfo = function () {
=> console.log(this.getName(), this.getAge());
};
obj.displayInfo(); // yousef 25
#----------------------------------------------------------------------------------------------------------------------------------------------------#
XML: stands for Extensible Markup Language.

the difference between XML and HTML:
XML and HTML were designed with different goals:

- HTML: was designed to display data with focus on how data looks.
- XML: was designed to carry data with focus on what data is.
- XML: tags are not predefined like HTML tags are.

NOTE: XML make size of the file bigger than JSON. because it has tags.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
JSON:

- JSON: stands for JavaScript Object Notation.
- JSON: is a text format for storing and transporting data.
- JSON: is "self-describing" and easy to understand.
- JSON: is language independent.

'{"name":"yahia", "age":25, "salary":1000}'

NOTE: JSON look like object in js. but keys must be in double quotes.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Ajax -- Asynchronous JavaScript And XML:
Before JSON, XML was the most popular format for data interchange.
and request to the server was done by XMLHTTPRequest object.
and normal behavior in XMLHTTPRequest object is to send and receive XML data. and with each request the whole page is reloaded.
but now JSON is the most popular format for data interchange.
and request to the server is done by Ajax.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Day 3:
Ajax Request: to send request to the server without reloading the page. (get or send data from server).
Ajax Response: to get response from the server without reloading the page. (get or send data from server).
NOTE: If want send data to another page. i will use location.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Syntax: js vanilla, jquery, framework...etc.
Method:
JSON.parse(): to convert a javascript object notation (JSON) string to javascript object.
JSON.stringify(): to convert a javascript object to javascript object notation (JSON) string.

xhrUsers: xml http request users, prefix convention for naming variables related to ajax.
var xhrUsers = new XMLHttpRequest();
this request is talking with any ting text based. like xml, json.

example to read from hello.txt:
var xhrUsers = new XMLHttpRequest();
xhrUsers.open("GET", "hello.txt");
xhrUsers.send(); // we send it empty because we don't send any data to the server.
if i want to send data to the server i will send it in the send() method.

console.log(xhrUsers.responseText); // this will print empty string. because it is asynchronous.
console.log() run before the response come from the server.

to solve this problem i will make my code synchronous. via put false in the open() method. as a third parameter.
xhrUsers.open("GET", "hello.txt", false); // false: synchronous, true: asynchronous.

NOTE: if i want to send data to the server. i will use POST method. and i will send the data in the send() method.

common error: has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
this error happen when i try to send request to another domain. and the server didn't allow it.
to solve this error i will use proxy server. like live server.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
XMLHttpRequest.readyState -- event handler:
readyState: will be change 5 times. and each time it tell us what is the state of the request.
0: UNSENT: Client has been created. open() not called yet. (uninitialized)
1: OPENED: open() has been called.
2: HEADERS_RECEIVED: send() has been called, and headers and status are available.
3: LOADING: Downloading; responseText holds partial data.
4: DONE: The operation is complete.

NOITE 4: doesn't mean that the request is success. it means that the request is complete. and it can be success or fail.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
xhrUsers.addEventListener("readystatechange", function () {
=> if(xhrUsers.readyState == 4 ) {
=> => console.log(xhrUsers.response);
=>}
});
NOTE: this code mybe a problem

xhrUsers.addEventListener("readystatechange", function () {
=> if(xhrUsers.readyState == 4 && xhrUsers.status == 200) {
=> => console.log(xhrUsers.response);
=>}
});
we ue status to check if the request is success or fail.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Example to read from json url:
var xhrUsers = new XMLHttpRequest();
xhrUsers.open("get", "https://jsonplaceholder.typicode.com/users");
xhrUsers.send();

xhrUsers.addEventListener("readystatechange", function () {
=> if (xhrUsers.readyState === 4 && xhrUsers.status === 200) {
=> => console.log(xhrUsers.response);
=> }
});

NOTE: here i don't need to live server because i am not access anoter file. i am access url.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Parsing JSON:

var xhrUsers = new XMLHttpRequest();
xhrUsers.open("get", "https://jsonplaceholder.typicode.com/users");
xhrUsers.send();

xhrUsers.addEventListener("readystatechange", function () {
=> if (xhrUsers.readyState === 4 && xhrUsers.status === 200) {
=> => var jsUsersObj = JSON.parse(xhrUsers.response);
=> => console.log(jsUsersObj);
=> }
});
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Example to read from json url:
var div = document.getElementById("users");

var xhrUsers = new XMLHttpRequest();
xhrUsers.open("get", "https://jsonplaceholder.typicode.com/users");
xhrUsers.send();

var div = document.getElementById("users");

xhrUsers.addEventListener("readystatechange", function () {
=> if (xhrUsers.readyState === 4 && xhrUsers.status === 200) {
=> => var jsUserObj = JSON.parse(xhrUsers.response);
=> => jsUserObj.forEach((element) => {
=> => => div.innerHTML += `<p>${element.name}</p>`;
=> => });
=> }
});

#----------------------------------------------------------------------------------------------------------------------------------------------------#
LocalStorage: is a property in the window object. can make me access the sotrage object.
Storage object: is a object that i can store data in it. and it will be stored in the browser.
NOTE: localStorage is a object in the window object. so i can access it by window.localStorage or localStorage.

set data in the localStorage (setItem()):
window.localStorage.setItem("name", "yahia"); // setItem(key, value)
window.localStorage.name = "yahia"; // this is the same as the above line.
window.localStorage["name"] = "yahia"; // this is the same as the above line.
NOTE: if i set the same key. the value will be updated.

get data from the localStorage (getItem()):
window.localStorage.getItem("name"); // getItem(key)
window.localStorage.name; // this is the same as the above line.
window.localStorage["name"]; // this is the same as the above line.

remove one item from the localStorage (removeItem()):
window.localStorage.removeItem("name"); // removeItem(key)

remove all items from the localStorage (clear()):
window.localStorage.clear(); // clear()

get key by index (key()):
window.localStorage.key(0); // key(index)

NOTE:
1- if i use private mode. the localStorage not will store any data.
2- localStorage with http different from https.
3- localStorage doesn't have expiry date.

NOTE: localStorage is a object. so i can use for in loop to loop on it.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
SessionStorage: is a property in the window object. can make me access the sotrage object.
Storage object: is a object that i can store data in it. and it will be stored in the browser.
NOTE: SessionStorage is a object in the window object. so i can access it by window.SessionStorage or SessionStorage.

set data in the SessionStorage (setItem()):
window.SessionStorage.setItem("name", "yahia"); // setItem(key, value)
window.SessionStorage.name = "yahia"; // this is the same as the above line.
window.SessionStorage["name"] = "yahia"; // this is the same as the above line.
NOTE: if i set the same key. the value will be updated.

get data from the SessionStorage (getItem()):
window.SessionStorage.getItem("name"); // getItem(key)
window.SessionStorage.name; // this is the same as the above line.
window.SessionStorage["name"]; // this is the same as the above line.

remove one item from the SessionStorage (removeItem()):
window.SessionStorage.removeItem("name"); // removeItem(key)

remove all items from the SessionStorage (clear()):
window.SessionStorage.clear(); // clear()

get key by index (key()):
window.SessionStorage.key(0); // key(index)

NOTE:
1- new tab will have new SessionStorage.
2- New tab with the same url = new SessionStorage.
3- Duplicate tab will have the same SessionStorage.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Cookies: cookies are small files which are stored on a user's computer.
they are designed to hold a modest amount of data specific to a particular client and website,
and can be accessed either by the web server or the client computer.
this allows the server to deliver a page tailored to a particular user,
or the page itself can contain some script which is aware of the data in the cookie
and so is able to carry information from one visit to the website (or related site) to the next.

NOTE: cookies have expiry date. and when the expiry date come. the cookie will be deleted.
who can put expiry date for the cookie?: the server make this by set the expiry date in the response header.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
NOTE: we don't have any function to read cookies. we have only document.cookie. and it return all cookies in one string.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
How to use key value pair in cookies:
get cookie: document.cookie
set cookie: document.cookie = "name=yahia"
NOTE: if i don't put expiry date. default expiry date season will be the end of the session.
NOTE: i can see the cookies in the application tab in the inspect.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Example and put expiry date for the cookie:
HTML:
<button onclick="setCookie()">Save</button>
JS:
function setCookie() {
=> document.cookie = "name=yahia; expires=Thu, 18 Dec 2023 12:00:00 UTC";
}

To delete cookie: i will put expiry date in the past.

HTML:
<button onclick="deleteCookies()">Deleta</button>
JS:
function deleteCookies() {
=> document.cookie = "name=yahia; expires=Thu, 18 Dec 2019 12:00:00 UTC";
}
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Mainpulate cookies: cookies is not ordered. so i can't use index to get the value of the cookie.
so i will search for the key and get the value.

function getCookie(key) {return value;}
function setCookie(key, value, expiryDate) {}
function deleteCookie(key) {setCookie(key, "", "date in the past");}
function updateCookie(key, value, expiryDate) {setCookie(key, value, expiryDate);}
function hasCookie(key) {return true or false;}
#----------------------------------------------------------------------------------------------------------------------------------------------------#
What the difference between cookies and localStorage and sessionStorage?:
1- cookies have expiry date. but localStorage and sessionStorage don't have expiry date.
2- cookies have size 4KB but for each domain localStorage and sessionStorage have size 5MB for each domain.
3- cookies have domain and path. but localStorage and sessionStorage don't have domain and path.
4- cookies can be accessed by the server and the client. but localStorage and sessionStorage can be accessed by the client only.

#----------------------------------------------------------------------------------------------------------------------------------------------------#
ES6 Day 1:
ES6: ECMAScript 6. is a new version of javascript. and it has new features.
What is the new features in ES6?:

- let and const.
- arrow function.
- default parameters and values.
- rest parameters.
- rest parameters.
- creating objects.
- spread operator.
- destructuring assignment.
- template literals.
- for of loop.
- classes.
- modules.
- promises.
- generators.
- iterators.
- symbols.
- maps.
- sets.
- async and await.
  {new data types, new methods for strings and arrays, new methods for objects, new methods for numbers, new methods for math,
  new methods for dates, new methods for regular expressions, new methods for global objects, new methods for typed arrays,
  new methods for reflection, new methods for proxy, new methods for internationalization, new methods for web assembly,
  new methods for web workers, new methods for web storage, new methods for web sockets, new methods for web audio,
  new methods for web speech, new methods for web animation, new methods for web crypto, new methods for web notifications,
  new methods for web performance, new methods for web touch, new methods for web usb, new methods for web vr, new methods for webgl,
  new methods for webgl2, new methods for webxr, new methods for webassembly, new methods for webauthn, new methods for webbluetooth,
  new methods for webgpu, new methods for webhid, new methods for webnfc, new methods for webrtc, new methods for webrtc stats,
  new methods for webrtc identity, new methods for webrtc next version, new methods for webrtc extensions, new methods for webrtc simulcast,
  new methods for webrtc screen capture, new methods for webrtc insertable streams, new methods for webrtc insertable streams,
  new methods for webrtc insertable strea}
  ...etc

Summary:
constant: const. it's value can't be changed.

Constant with object and array:

- you can intialize a constant with an object and later modify the object content.
  Example:
  const person = {name: "yahia"};
  person.name = "ahmed"; // i can change the value of the object.
- but you can't reassign the constant with another object.
  Example:
  const person = {name: "yahia"};
  person = {name: "ahmed"}; // i can't reassign the constant with another object. (syntax error)

The same thing with array:

- you can intialize a constant with an array and later modify the array content.
  Example:
  const person = ["yahia"];
  person[0] = "ahmed"; // i can change the value of the array.
- but you can't reassign the constant with another array.
  Example:
  const person = ["yahia"]; // i can't reassign the constant with another array. (syntax error)

#----------------------------------------------------------------------------------------------------------------------------------------------------#
forEach: loop on array. it doesn't return anything. map same as foreach but it return new array.
Example:
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => console.log(number));
#----------------------------------------------------------------------------------------------------------------------------------------------------#
How engine understand from ES6..etc?:
by using babel. babel is a javascript compiler. it takes the new javascript and convert it to old javascript.
there some browsers has the babel implicitly. and there some browsers don't have the babel implicitly.
and all of frameworks has the babel implicitly. like react, angular, vue, ...etc.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
What is the difference between var and let and const?:
var:

- sotred in the global scope.
- function scope.
- can be hoisted.
- can be redeclared.

let:

- stored in the block scope.
- block scope.
- can't be hoisted.
- can be redeclared.

const:

- stored in the block scope.
- block scope.
- can't be hoisted.
- can't be redeclared.
- must be initialized.

#----------------------------------------------------------------------------------------------------------------------------------------------------#
NOTE: If i want make my code separate of the global scope. what i will do?
Before ES6: i will use IIFE (Immediately Invoked Function Expression).
After ES6: i will use curly braces { }.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Arrow functions: be aware of the this keyword in arrow functions it take the value from the parent scope.
we can use arrow functions unless we want to use the this keyword.
Syntax:

Before:
var getSpeed = function(){
=> return 10;
}
console.log(getSpeed()); // 10

After:
var getSpeed = () => 10;
console.log(getSpeed()); // 10

Before:
var getSpeed = fuction(level){
=> return level \* 10;
}
console.log(getSpeed(2)); // 20

After:
var getSpeed = level => level \* 10;
console.log(getSpeed(2)); // 20

Before:
var getSpeed = function(level, bonus){
=> console.log(level)
=> return level + bouns;
}
console.log(getSpeed(2, 10)); // 12 // 2

After:
var getSpeed = (level, bonus) => {
=> console.log(level)
=> return level + bouns;
}
console.log(getSpeed(2, 10)); // 12 // 2

NOTE:
1- if the function has only one parameter, you can omit the parentheses.
4- if the function has only one statement, you can omit the curly braces and the return keyword.
3- arrow function don't have their own this, they use the this of the surrounding code.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Arorw functions and this:

var maxFinder = {
=> max: 0,
=> find: function (numbers) {
=> => // let's iterate
=> => numbers.forEach(function (element) {
=> => => // if the element is greater,set it as the max
=> => => if (element > this.max) {
=> => => => this.max = element;
=> => => }
=> => });
=> },
};
maxFinder.find([2, 3, 4]);
// log the result
console.log(maxFinder.max);

NOTE: this will not work because the this inside the forEach is not the same as the this inside the find function.

=> const maxFinder = {
=> => max: 0,
=> => find: function (numbers) {
=> => => numbers.forEach((element) => {
=> => => => if (element > this.max) {
=> => => => => // console.log(this.max);
=> => => => => this.max = element;
=> => => => }
=> => => });
=> => },
=> };
=> maxFinder.find([2, 3, 4]);
=> // log the result
=> console.log(maxFinder.max);

NOTE: this will work because the arrow function doesn't have its own this, it uses the this of the surrounding code.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
New String Methods:
String.startsWith(searchString, position) => return true or false.
String.endsWith(searchString, position) => return true or false.
String.includes(searchString, position) => return true or false.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Reset operator: passing extra parameters to a function:

function test(a, b, ...theArgs){ // this is availabel syntax}
what difference between reset operator and arguments?
arguments: is an array-like object that contains all the arguments passed to a function. but it doesn't have all the array methods.
reset operator: is a real array. and has all the array methods. like forEach, map, filter, ...etc.s

ES5: Using arguments

function addBooks(){
=> for(var i = 0, i < arguments.length; i++){
=> => myBooks.push(arguments[i]);
=> }
}

addBooks("book1", "book2", "book3");

ES6: Using reset operator

function addBooks(...books){
=> for(let book of books){
=> => myBooks.push(book);
=> }
}

addBooks("book1", "book2", "book3");
NOTE:

- the reset operator must be the last parameter.
- if i don't pass any parameters, the reset operator will be an empty array.
- if i pass one parameter, the reset operator will be an array with one element.

#----------------------------------------------------------------------------------------------------------------------------------------------------#
Reset operator can also work with destructuring data:

let racers = ['Cat', 'Dog', 'Turtle', 'Rabbit'];

const [winner, ...losers] = racers;

NOTE: winner will have the first element in the array, and losers will be an array of the other elements.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Spread operator: used to spread an array into multiple arguments:
looks awfully similar to the reset operator, but the spread operator is the opposite.

const prices = [10, 20, 30];
const maxPrice = Math.max(...prices);
const minPrice = Math.min(...prices);

var arr = [1,2,3];
var arr2 = [4,5,6];

var arr3 = arr.concat(arr2);
NOTE: Here i have problem here because concat takes only one argument. i can't add value between arr and arr2.

but if i use the spread operator, i can do that:
var arr3 = [...arr, 'Yahia',...arr2];

NOTE: it takes an array and spread it in multiple arguments.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Destructuring assignment: is a special syntax that allows us to "unpack" arrays or objects into a bunch of variables.
Assiging vairables from objects or an array:

ES5:
const httpOptions = { timeout:2000, isCash:true}
const httpTimeout = httpOptions.timeout;
const httpCash = httpOptions.isCash;

ES6:
const httpOptions = { timeout:2000, isCash:true}
const {timeout:httpTimeout, isCash:httpCash} = httpOptions;

const salaries = [1000, 2000, 3000];
const [low, medium, high] = salaries;
// now we have 3 variables low = 1000, medium = 2000, high = 3000. and each one has a value from the array.
const [low, , high] = salaries;
// now we have 2 variables low = 1000, high = 3000. and each one has a value from the array.
const [low, ...rest] = salaries;
// now we have 2 variables low = 1000, rest = [2000, 3000]. and each one has a value from the array.
const [low, medium] = salaries;
// now we have 2 variables low = 1000, medium = 2000. and each one has a value from the array.
const [low, medium, high, extra] = salaries;
// now we have 4 variables low = 1000, medium = 2000, high = 3000, extra = undefined. and each one has a value from the array.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Reset operator can also work with destructuring data:
[a, b, ...rest] = [10, 20, 30, 40, 50]; // a = 10, b = 20, rest = [30, 40, 50]
[a, b, ...rest] = [10, 20]; // a = 10, b = 20, rest = []
[a, b, ...rest] = [10]; // a = 10, b = undefined, rest = []
[a, b, ...rest] = []; // a = undefined, b = undefined, rest = []
NOTE: rest operator must be the last parameter.

NOTE: the order is important. because it's based on the index of the array.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Destruct object:
var obj = {
name: 'Yahia',
age: 30,
}

var n = obj.name;
var a = obj.age;
var {age, name} = obj;

- If i want to change the name of the variable:
  var {age:myAge, name:myName} = obj;

Example:
var btn = document.querySelector('button');
btn.addEventListener('click', function(e){
=> console.log(e)
})

- If i want destructuring the event object:
  var btn = document.querySelector('button');
  btn.addEventListener('click', function({target}){
  => console.log(target)
  })

this is better than: btn.addEventListener('click', function(e) as performance.
and i can give it alias: btn.addEventListener('click', function({target:t}){
=> console.log(t)
})
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Array Api functions:
Filter: used to filter an array based on a condition. and return a new array.

Example:
var arr = [1995, 2000, 2010, 19]
var result = arr.filter(function(el => el > 1996));
console.log(result); // [2000, 2010]
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Find: used to find an item in an array based on a condition. and return the first item that matches the condition.

Example:
var arr = [1995, 2000, 2010, 19]
var result = arr.find(function(el => el > 1996));
console.log(result); // 2000
NOTE: if i have more than one item that matches the condition, it will return the first one.
and if there is no item that matches the condition, it will return undefined.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
FindIndex: used to find an item in an array based on a condition. and return the index of the first item that matches the condition.

Example:
var arr = [1995, 2000, 2010, 19]
var result = arr.findIndex(function(el => el > 1996));
console.log(result); // 1
NOTE: if i have more than one item that matches the condition, it will return the index of the first one.
and if there is no item that matches the condition, it will return -1.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Map: used to map an array to another array. and return a new array. if i want to make a specific operation on each item in the array.
If i don't want return a new array, i can use forEach. but if i want return a new array, i can use map. this is the difference between them.

Example:
var arr = [1995, 2000, 2010, 19]
var result = arr.map(function(el => el \* 2));
console.log(result); // [3990, 4000, 4020, 38]
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Reduce: reduce the array to one value. it takes two parameters. first parameter is a function. second parameter is the initial value.
Example:
const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce((accumulator , currentValue) => accumulator + currentValue, 0);
console.log(result); // 15
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Every: used to check if all items in the array matches a condition. and return true or false.

Example:
var arr = [1995, 2000, 2010, 19]
var result = arr.every(function(el => el > 1996));
console.log(result); // false
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Some: used to check if some items in the array matches a condition. and return true or false.

Example:
var arr = [1995, 2000, 2010, 19]
var result = arr.some(function(el => el > 1996));
console.log(result); // true

#----------------------------------------------------------------------------------------------------------------------------------------------------#
Creating objects:
ES5:
function createCar(){
const name = "BMW";
const color = "red";
return {
name: name,
color: color
}
}

can this be simplified?:

ES6:
function createCar(){
const name = "BMW";
const color = "red";
return {
name,
color
}
}

Simplified shortcut: when the object property you want create has the same name of the variable you want to assign to it.
used as the value of the property.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
What if the variable you want to assign has the same name as the property you want to assign to it?:
const httpOptions = { timeout:2000, isCash:true}
const {timeout, isCash} = httpOptions;
#----------------------------------------------------------------------------------------------------------------------------------------------------#
One interesting use of this can be for multiple return values of functions:
function randomeStrudent(){
=> const student = {name: "yahia"};
=> const track = "UI";
=> // ...
=> return {student, track};
}

const {track, student} = randomeStrudent();

If you don't care about the track, you can write:
function randomeStrudent(){
=> const student = {name: "yahia"};
=> const track = "UI";
=> // ...
=> return {student, track};
}

const {student} = randomeStrudent();
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Default parametere:
ES5:
function getBook(price, pages){
=> price = price || 10;
=> pages = pages || 100;
=> // ...
}

getBook(); // price = 10, pages = 100
getBook(20); // price = 20, pages = 100
getBook(20, 200); // price = 20, pages = 200

Was it obvious that getBook has an optional parameters with default values, without reading its body?:

ES6:
function getBook(price = 10, pages = 100){
=> // ...
}

More clear now?:
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Default parametere as a funtion:

function getBook(price = defaultPrice(), pages = 100){
=> // ...
}

function getBook(price = defaultPrice(), pages = price \* 10){
=> // ...
}

NOTE: this will work because defaultPrice is defined before pages.

function getBook(price = pages /10, pages = 100){
=> // ...
}

NOTE: this will not work because pages is not defined yet.

#----------------------------------------------------------------------------------------------------------------------------------------------------#
Template literals:
Composing string has always been painful in javascript, as we usually have to use the + operator to concatenate strings:

ES5:
const fullName = 'Mr' + firstName + " " + lastName;

ES6:
const fullName = `Mr ${firstName} ${lastName}`;

- Templating syntax is much cleaner.
- Multi-line support.

NOTE: the backtick is used instead of the single or double quotes, and the variables are wrapped in ${}.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
static Array.from(): used to convert an array-like object (iterable) to an array.
Array.from(): takes three parameters. first parameter is the array-like object. second parameter is a map function. third parameter is the this value.
What i usefull from this?:

- convert a string to an array. Example: Array.from('yahia') // ['y', 'a', 'h', 'i', 'a']
- convert a nodeList to an array. Example: Array.from(document.querySelectorAll('p')) // [p, p, p, p]
- convert an array-like object to an array. Example: Array.from(arguments) // [1, 2, 3, 4, 5]

It make me able to use array methods on array-like objects.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
NOTE: any object has constructor property. if was anonymous object,
but if was created from a constructor function, it will be the name of the function.(The seal)

Classes and modules:

old syntax:
function Employee(name, age){
=> this.name = name;
=> this.age = age;
}

Employee.prototype.print = function(){
=> console.log(this.name, this.age);
}

var emp = new Employee('yahia', 30);

new syntax:
class Employee{
constructor(name, age){ // constructor must be one. and doesn't be overrided.
=> this.name = name;
=> this.age = age;
}
=> print(){
=> => console.log(this.name, this.age);
=> }
}

var emp = new Employee('yahia', 30);
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Inheritance: in inheritance must be one parent. but can be many children.

Example:
Base class:
class Animal {
=> speed() {
=> => return 10;
=> }
}

Derived class:

class Rabbit extends Animal {
}

const rabbit = new Rabbit();
console.log(rabbit.speed()); // 10

NOTE: the derived class inherits from the base class.

Another example:
Base class:
class Animal {
=> speed() {
=> => return 10;
=> }
}

Derived class:
class Rabbit extends Animal {
=> speed() {
=> => return super.speed() + 10; // call the base class method.
=> }
}

const rabbit = new Rabbit();
console.log(rabbit.speed()); // 20
#----------------------------------------------------------------------------------------------------------------------------------------------------#

Example:
class User{
constructor(name, age){
=> this.name = name;
=> this.age = age;
}
=> print(){
=> => console.log(this.name, this.age);
=> }
}

class Employee User{
=> constructor(name, age, salary){
=> => this.name = name;
=> => this.age = age;
=> => this.salary = salary;
}
calculateSalary(){
=> => return this.salary;
}

NOTE: I can put function calculateSalary() in User class. but it will be in every object of User class. and this is not good.

So we should use inheritance to make it in Employee class only.

class Employee extends User{
=> constructor(name, age, salary){
=> => super(name, age); // super is used to call the constructor of the parent class.
=> => this.salary = salary;
=> }
calculateSalary(){
=> => return this.salary;
}

NOTE: if i don't use super, it give me an error. because i don't make chain between the parent and the child.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
How to override a method in the parent class?:

Continue the previous example:
class Employee extends User{
=> constructor(name, age, salary){
=> => super(name, age); // super is used to call the constructor of the parent class.
=> => this.salary = salary;
=> }
calculateSalary(){
=> => return this.salary + 2000
}
print(){
=> => console.log('this is overridden method');
=> }
}

NOTE: In this case, class Employee has two methods called print(). one of them is in User class. and the other is in Employee class.
so when i call print() method, it will call the method in Employee class. because it is the nearest method to the object.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Make it static:
static method: it is a method that can be called without creating an object of the class. and it is called on the class itself.
In js we don't put static keyword before class name.
use keyword static before the properties and methods.

Example:
static hobbies = 'football'
static test(){
=> console.log('this is static method');
}

var emp = new Employee('yahia', 30, 2000);

emp.hobbies; // error
Employee.hobbies; // football
emp.test(); // error
Employee.test(); // this is static method

Static method like a global method. it is not related to the object.
like:
Math.random() // 0.5
Math.PI // 3.14
Math.floor(2.5) // 2
Math.ceil(2.5) // 3
Math.round(2.5) // 3
Math.pow(2, 3) // 8
Math.sqrt(4) // 2
Math.abs(-4) // 4
Math.min(1, 2, 3, 4, 5) // 1
Math.max(1, 2, 3, 4, 5) // 5
Math.trunc(2.5) // 2
Math.sign(-2.5) // -1
Math.sin(30) // 0.5
Math.cos(30) // 0.5
Math.tan(30) // 0.5
Math.log(30) // 3.4
Math.log10(30) // 1.4
Math.log2(30) // 4.9
Math.exp(30) // 1.1

Array.isArray([1, 2, 3]) // true
Array.from('yahia') // ['y', 'a', 'h', 'i', 'a']
Array.of(1, 2, 3) // [1, 2, 3]
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Abstract class: it is a class that can't be instantiated. it is used to be a parent class only.
In js we don't put abstract keyword before class name. but we to this by logic.

Example:
class User{
constructor(name, age){
=> if(this.constructor.name === 'User'){
=> => throw new Error('can't instantiate abstract class');
=> }
=> this.name = name;
=> this.age = age;
}
=> print(){
=> => console.log(this.name, this.age);
=> }
}

#----------------------------------------------------------------------------------------------------------------------------------------------------#
Modules and modularties: it is a standard way to organize function in namespaces and to dynamically code in js.

First step: change the type of the script tag from text/javascript to module.

<script type="module" src="app.js"></script>

NOTE: script take default type="text/javascript" if we don't specify it.

impoert: will run all the code in the imported file.
export: will export the code to be used in other files. like IIFE. and return what we want to export.

NOTE: this is sequence in all frameworks. like angular, react, vue, nodejs, every js file is a module.
to call a function in another file, we have to export it first. and then import it in the file we want to use it.
but in html, there one module only.

In game_server.js:
export function loadGame(level, lifes)
=> // ...
}

export function newGame(){
=> // ...
}

Here we are importing the two functions, and we gave to specify the filename containing theses functions:
In app.js:
import { loadGame, newGame } from './game_server.js';
#----------------------------------------------------------------------------------------------------------------------------------------------------#
You can import only one method if you need, you can even give it alias name:

import { loadGame as load } from './game_server.js';

Later you can ues the function with the alias name:
load(2, 10);
#----------------------------------------------------------------------------------------------------------------------------------------------------#
If you need to import all methods from a module, use a wildcard:

import \* as gameService from './game_server.js';

iIn thie case, alias in not optional, you have to specify it.

gameService.load(race, pony1)
gameService.newGame()
NOTE: you can also import default exports. (only one default export per module)
#----------------------------------------------------------------------------------------------------------------------------------------------------#
If your module exposes only one function or value or calss, you don't have to use named exports, you can use default exports.

In book.js:
export default class Book {}

In app.js:
import Book from './book.js';

NOTE: from always relative path. to my main.js file. and don't forget to add .js extension.
but with typescript, we don't need to add extension.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
NOTE: You will see the most class used and make it default export. and the rest of classes are named exports.
import hamada from './classes.js';
#----------------------------------------------------------------------------------------------------------------------------------------------------#
NOTE: Even your variable declaration by var you can't access it from another file. because it is not global variable.
module is like IIFE. it close the scope of the variables.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
NOTE: as long as you use type="module" in the script tag, you can't use defer or async. because it is not supported.
and the console.log() will not work. because it is not supported.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
toStrin() method: it is a method that convert any data type to string.
this method is called in priority by numeric conversion and primitive conversion,
but string conversion calls toString() in priority, and toString() is very likely to return a string valu
(even forthe Objest.prototype.toString() base implementation), so valurOf() is usually not called in thie case.

toString() : it was called automatically by document.write() and alert() to work with string.
and so with the reset methods. that print for user in the document. but console.log() is not calling toString() method.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
valueOf() method: if you want call two objects, you have to use valueOf() method.

var r1 = new Rectangle();
var r2 = new Rectangle();

console.log(r1 + r2); // [object Object][object Object]
console.log(r1 - r2); // NaN

NOTE: if you want do any arithmetic operation, it will call valueOf() method automatically. so you have to override it.

Rectangle.prototype.valueOf = () => 3;
console.log(r1 + r2); // 3 + 3 = 6
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Day 2:
Promise: it is an object that may produce a single value some time in the future. either a resolved value, or a reason that it's not resolved.
a promise may be in one of three possible states: fulfilled, rejected, or pending.
promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

NOTE: promise is a constructor function, so we have to use new keyword to create a promise object.

After Promise: If i want to get id of the user, form the server i use setTimeout() function.

setTimeout(() => {
=> => var ids = [2, 300, 60];
=> => console.log(ids);
=> => setTimeout(() => {
=> => => => var user = {
=> => userId: ids[1];
=> => name: 'yahia',
=> => }
=> => => console.log(user);
=> => },500);
=> }, 2000);

then if i want get address i use internal setTiemout() function. and so on.

setTimeout(() => {
=> => var ids = [2, 300, 60];
=> => console.log(ids);
=> => setTimeout(() => {
=> => => => var user = {
=> => => => userId: ids[1];
=> => => => name: 'yahia',
=> => => }
=> => => console.log(user);
=> => => setTimeout(() => {
=> => => => var address = {
=> => => => city: 'cairo',
=> => => => user: user.name,
=> => => }
=> => => => console.log(address);
}, 1000);
=> => },500);
=> }, 2000);

Then come promise to solve this problem. and make the code more readable.

Example:
console.log("first");
var p = new Promise(function () {
=>console.log("hello");
});
console.log("end");

the output will be: first, hello, end.

console.log("first");
var p = new Promise(function () {
=> setTimeout(() => {
=> console.log("hello");
=> });
});
console.log("end");

the output will be: first, end, hello.

NOTE: this mean the promise will be syncronous. and asynchrounous depend on the code inside the promise.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Jonas: Section 16: Asynchronous JavaScript: Promises, Async/Await and AJAX
Asynchronous JavaScript, AJAX and APIs:
Syncronous code: mean that hte code is executed line by line. in the exact order of execution. that we define in our code.
like this example:
const p = document.querySelector('p');
p.textContent = 'I am a paragraph';
alert('Text set!');
p.style.color = 'red';

So as the first line of code is reached in the execution, it is simply executed in the execution of thread.
execution of thread it's just to make a point of synchronous versus asynchronous code,
All you need to know is that the execution of thread is part of the execution context,
which does actually execute the code in the computer's processor.
But anyway, then the next line of code is executed and then the next one, all in sequence.

NOTE: Now this can create problems when one line of code takes a long time to run. like alert() function.
in the last example, the alert() function will stop the execution of the code until the user clicks OK.
alert() function is a blocking function. it will block the execution of the code until the user clicks OK.

Example:
const p = document.querySelector('p');
setTimeout(() => {
=> p.textContent = 'I am a paragraph';
}, 5000);
p.style.color = 'red';

in this example the setTimeout() function will not block the execution of the code.
it will wait in the background for 5 seconds, and then it will execute the callback function. it's asynchronous.

Asynchronous code: code is executed after a task that runs in the "background" finishes. in this case that is the timer.
async code is non-blocking. it will not block the execution of the code.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Another example:
const img = document.querySelector('.dog');
img.src = 'dog.jpg';
img.addEventListener('load', function () {
=>img.classList.add('fadeIn');
});
p.style.width = '300px';

this example is about loading an image. So the first two lines run in a synchronous way,
one after the other.
Now in the second line, we set the source attribute of the imagethat we selected in the first line.
And this operation is actually asynchronous.
So setting the source attribute of any image is essentially loading an image in the background.
while the rest of the code can keep running.
Imagine that it's a huge image, we wouldn't want our entire code to wait for the image to load.

There's just one more important thing that I need to mention which is the fact that event listeners alone do not make code asynchronous,
just like callback functions alone, do also not make code asynchronous. For example,
an event listener listening for a click on a button is not doing any work in the background.
It's simply waiting for a click to happen, but it's not doing anything.
And so there is no asynchronous behavior involved at all.
Now what makes this code example asynchronous is simply the fact that the image is loading asynchronously
in the background, but not the fact that we are listening for the load events to happen.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
What Are AJAX and CALLS?:
AJAX: Asynchronous JavaScript and XML: Allows us to communicate with remote web servers in an asynchronous way.
With AJAX calls, we can request data from web servers dynamically.
So without reloading the page so that we can use that data in our application dynamically.

So with Ajax, we can do an HTTP request to the server, which has this data.
And the server will then set back a response containing that data that we requested.
And this back and forth between Client and server all happens asynchronously in the background,
just the way we learned before. And there can even be different types of requests,
like get requests to receive data or post requests to send data to a server.
But there is a whole lecture about this a bit later to really show you how it all works in detail.
Now, when we're asking a server to send us some data, this server usually contains a web API.
And this API is the one that has the data that we're asking for. So an API is something pretty important,
and so let's now see what an API and web APIs actually are.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
What Is an API?:
API: Application Programming Interface: Piece of software that can be used by another piece of software,
in order to allow applications to talk to each other. and exchange information.

There are be manty types of APIs in web development.
For example, the DOM API, which allows JavaScript to talk to the browser.
Or the Geolocation API, which allows JavaScript to retrieve the user's location.
Also we can always implement our own API in our own applications. a small and simple API. in a class.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
let's talk about the important type of API that we are actually interested in when we use Ajax.
And that are APIs that I like to call Online APIs.

Online APIs: Application running on a server, that receives requests for data, and sends data back as a response.
then retrieves this data from a database, and then sends it back to the client.
many people also call these web APIs, because they are usually used when building web applications.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
How the web works Request and Response:
Request-response model: Client sends a request to the server, and the server sends a response back to the client.
or also the client server architecture.
HTTP: Hypertext Transfer Protocol: Protocol that defines how messages are formatted and transmitted over the web.
HTTPS: Secure version of HTTP. Data sent in an encrypted way, so that eavesdroppers cannot see it.
TCP/IP: Transmission Control Protocol/Internet Protocol: Protocol that defines how data should travel across the web.
IP address: A number that identifies each device on the internet. (like a phone number)
Domain name: Name of a web address. (like a name)
DNS: Domain Name System: The largest database that maps domain names to IP addresses.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Callback Hell: is when we have a lot of nested callbacks. in order to execute asynchronous code tasks in sequence.
and in face, this happens for all asynchronous tasks that we want to execute in sequence.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Promises and the Fetch API:
Promise: an object that is used as a placeholder for the future result of an asynchronous operation.
Promise: is a container for an asynchronously delivered value.
Promise: is a container for a future value.

What is the big advantage of promises?:
there are two main advantages of promises:
1- we no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results.
2- instead of nesting callbacks, we can chain promises for a sequence of asynchronous operations, one after the other.
so we can escape callback hell.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
The promise life cycle:
1- Pending: before any value resulting from the asynchronous task is available. now during this pending state,
the asynchronous task is still doing its work in the background.
2- Settled: after the asynchronous task finishes. now this is when the promise actually returns the result.
and there are two types of settled promises:
2.1- Fulfilled: if the asynchronous task is successful, and we have a value available.
2.2- Rejected: if there is an error during the asynchronous task, and we have an error value available.

NOTE: a promise is only settled once. and so from there the state will remain unchanged forever.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Consuming Promises:

Using fetch:
const getCountryData = function (country) {
=> // Country 1
=> fetch(`https://restcountries.com/v3.1/name/${country}`)
=> => .then(response => response.json())
=> => .then(data => {
=> => => renderCountry(data[0]);

=> => => const [neighbor] = data[0].borders;

=> => => if (!neighbor) return;

=> => => // Country 2
=> => => return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
=> => })
=> => .then(response => response.json())
=> => .then(data => renderCountry(data[0], 'neighbour'));
};

getCountryData('egypt');
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Handling Rejected Promises:
fullfilled: when the fetch promise is fullfilled, we get a response object.
rejected: the only way in which the fetch promise can be rejected is when the user loses his internet connection.
404: when the fetch promise is fullfilled, but the resource that we requested does not exist.
then: is a method that we can call on any promise, and it takes two callback functions as arguments.
the first callback function is called when the promise is fullfilled.
the second callback function is called when the promise is rejected.
catch: is a method that we can call on any promise, and it takes one callback function as an argument.
this callback function is called only when the promise is rejected.
NOTE: catch is just a syntactic sugar for then(undefined, callback).
finally: is a method that we can call on any promise, and it takes one callback function as an argument.
this callback function is always called no matter if the promise is fullfilled or rejected.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Throwing Errors Manually: (Handling 404 Errors)
respone.ok: is a property that exists on all response objects.
it returns true if the response status code is between 200 and 299.
it returns false if the response status code is not between 200 and 299.
NOTE: I can use response.ok to check if the response status code is between 200 and 299. to handle 404 errors.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Asynchronous Behind the Scenes: The Event Loop:
Runtime in the browser: is a container that includes all the pieces necessary to execute JavaScript code.
Js engine: Heart of the runtime. It reads and executes JavaScript code.
Call stack: Place where the code is actually executed.
Heap: Where objects are stored in the memory, including variables and function declarations.
Task queue: Place where all the asynchronous tasks are put, after their callback functions have returned.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
JavaScript: has only one thread of execution, which means that it can only do one thing at a time.
There is absolutely no multitasking happening in JavaScript itself.

Next we have the web APIs environment, these are some APIs provided to the engine by the browser.
but which are not part of the JavaScript language itself. So that's things like the DOM fetch API, the timer functions, geolocation API, and so on.
Web APIs: Provide functionalities to the Js runtime, that are not directly related to the JavaScript language.

Next step is the callback queue, which is a data structure that contains all the ready to be executed callback functions.
Callback queue: Data structure that contains all the callback functions that are ready to be executed. (callback functions that are ready to be executed)

Finally: whenever the call stack is empty, the event loop takes the first callback from the queue
and pushes it into the call stack, so that it can be executed.

Event loop: Functionality that checks the callback queue, and if it is not empty,
it pushes the first callback into the call stack. if the call stack is empty.
NOTE: So the event loop is the essential piece that makes asynchronous behavior possible in JavaScript.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
NOTE: Now addEventListener did not put the callback directly in the callback queue. It simply registered the callback,
which then kept waiting in the web APIs environment until the load event was fired off.
Only then the environment put the call back into queue.
Then while in the queue the callback kept waiting for the event loop to pick it up and put it on the call stack.

NOTE: So, let's say that the data has now finally arrived. And so the fetch is done. Now,
callbacks related to promises like this one that we registered with the promises then method.
Do actually not go into the callback queue. So, again this callback did we still have here,
which is coming from a promise will not be moved into the callback queue. Instead,
callbacks of promises have a special queue for themselves, which is the so called microtasks queue.

It's so called microtasks queue, because it's a queue for all the microtasks that need to be executed.
from the callback queue, the event loop will check if there are any callbacks in the microtasks queue. And if there are,
it will run all of them before it will run any more callbacks from the regular callback queue.

Microtasks queue: Queue for all the microtasks that are produced by promises. (callbacks of promises have a special queue for themselves)
Like callbacks queue, but for callbackes related to promises. has priority over the callback queue.

When the event loop is running, it will first check the microtasks queue, and only when that is empty, it will then run the regular callback queue.
NOTE: microtasks queue has priority over the callback queue. and it blocks the callback queue from running.

Example:
console.log('start');
setTimeout(() => {
=> console.log('0 second timer');
}, 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
=> for (let i = 0; i < 1000000000; i++) {}
=> console.log(res);
});
console.log('end');

output: start, end, Resolved promise 1, Resolved promise 2, 0 second timer.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Building a Simple Promise:
Promise: Are esseintially just a special kind of object in javascript that we can easily create using the promise constructor.
Promise: take one argument, which is a callback function called the executor function.
when promise is called, the executor function is immediately executed automatically.
the executor function takes two arguments, which are also callback functions.
the first callback function is called resolve, and the second callback function is called reject.
resolve: is the function to call when we want to mark a promise as fulfilled.
reject: is the function to call when we want to mark a promise as rejected.

Basically promisifying: means to convert callback based asynchronous behavior into promises based.
promisify: a very simple callback based asynchronous behavior function.

And then all we have to do is to consume that promise like this. And so this is a really nice and helpful pattern.
Now, in practice, most of the time all we actually do is to consume promises.
And we usually only built promises to basically wrap old callback based functions into promises.

Example:

const lotteryPromise = new Promise(function (resolve, reject) {
=> console.log('Lottery draw is happening');
=> setTimeout(() => {
=> => if (Math.random() >= 0.5) {
=> => => resolve('You win');
=> => } else {
=> => => reject(new Error('You lost your money'));
=> => }
=> }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

output: Lottery draw is happening, You lost your money or You win.

Another Example:
const lotteryPromise = new Promise(function (resolve, reject) {
console.log('Lottery draw is happening');
setTimeout(() => {
if (Math.random() >= 0.5) {
resolve('You win');
} else {
reject(new Error('You lost your money'));
}
}, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (second) {
=> return new Promise(function (resolve) {
=> => setTimeout(resolve, second \* 1000);
=> });
};

wait(1)
=> .then(() => {
=> => console.log('1 second passed');
=> => return wait(1);
=> })
=> .then(() => {
=> => console.log('2 second passed');
=> => return wait(1);
=> })
=> .then(() => {
=> => console.log('3 second passed');
=> => return wait(1);
=> })
=> .then(() => {
=> => console.log('4 second passed');
=> => return wait(1);
=> });

Promise.resolve('abc').then(res => console.log(res));
Promise.reject(new Error('Problem!')).catch(err => console.error(err));

output: ottery draw is happening, abc, Problem!, 1 second passed, You lost your money or You win, 2 second passed, 3 second passed, 4 second passed.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Promisifying the Geolocation API:
getCurrentPosition: is a function that takes two callback functions as arguments.
The first callback function is called success, and the second callback function is called error.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Consuming Promises with Async/Await:
Async/Await: is a modern way of consuming promises, and it's actually just syntactic sugar over the then method.
Async/Await: is a special syntax to work with promises in a more comfortable fashion.
async function: is a function that will keep running in the background while performing the code that is inside of it. (non-blocking)
await: is a special operator to wait for a promise to be fulfilled, and we can only use the await keyword inside of an async function.
NOTE: async functions always automatically return a promise, and that promise will then be fulfilled with whatever value we return from the function.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Error Handling With try...catch:
Try...catch: is a special statement to handle errors in synchronous code.
Try: is a block of code to try to execute.
Catch: is a block of code to handle the error if the try block of code fails.
Finally: is a block of code to execute regardless of the result of the try block of code.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Returning Values from Async Functions: (async/await)

Example:

const getPosition = function () {
=> return new Promise(function (resolve, reject) {
=> => navigator.geolocation.getCurrentPosition(resolve, reject);
=> });
};

const whereAmI = async function (country) {
=> try {
=> => //Geolocation
=> => const pos = await getPosition();
=> => const { latitude: lat, longitude: lng } = pos.coords;

=> => // Reverse geocoding
=> => const resGeo = await fetch(
=> => => `https://geocode.xyz/${lat},${lng}?geoit=json&auth=78894398081361964723x10400`
=> => );
=> => if (!resGeo) throw new Error('Problem getting location data');

=> => const dataGeo = await resGeo.json();
=> => const capitalCity = dataGeo.timezone.split('/')[1];

=> => // Country data
=> => const res = await fetch(
=> => => `https://restcountries.com/v3.1/capital/${capitalCity}`
=> => );
=> => if (!res) throw new Error('Problem getting country');
=> => const data = await res.json();

=> => renderCountry(data[0]);

=> => return `You are in ${dataGeo.city}`;
=> } catch (err) {
=> => console.error(err);
=> => renderError(`${err.message}`);
=> }
};

console.log('1: Will get location');
const city = whereAmI();
console.log(city);
console.log('3: Finished getting location');

output: 1: Will get location, Promise{<pending>}, 3: Finished getting location

The reason for that is that at this point of the code, JavaScript has simply no way of knowing yet there's a string here
that we want because the function is still running, but it is also not blocking the code out here.
And so therefore again, at this point, JavaScript has no way of knowing what will be returned from this function.
And so therefore all that this function does return is a promise. Now the value that we return from an async function,

console.log('1: Will get location');
whereAmI().then(city => console.log(city));
console.log('3: Finished getting location');

output: 1: Will get location, 3: Finished getting location, You are in United States of America
#----------------------------------------------------------------------------------------------------------------------------------------------------#
VIP NOTE: If i have async function and it returns a promise, and i don't use then and catch method to consume that promise
I can use async/await in IIFF function to consume that promise. and i can use try/catch to handle errors.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Running Promises in Parallel:
To run promises in parallel, we have to use Promise.all method.
Promise.all: is a method that takes an array of promises, and then it will return a new promise.
And this promise will then be fulfilled when all of the input promises are fulfilled.
And then it will also have an array of all the results of the input promises.

NOTE: And if any of the input promises rejects, then the promise returned by Promise.all will immediately reject as well.

NOTE: In which you need to do multiple asynchronous operations at the same time, and operations that don't depend on one another,
then you should always, always run them in parallel, just like we did here using promise.all.

Promise.all is called the promise combinator, because it allows us to combine multiple promises together.

NOTE: And we can use then method to consume the promise returned by Promise.all.

#----------------------------------------------------------------------------------------------------------------------------------------------------#
Other Promise Combiators: race, allSettled and any:
Promise.race: is a method that takes an array of promises, and then it will return a new promise. And this promise will then be fulfilled immediately
when the first one of the input promises is fulfilled. And then it will also have the result of the first fulfilled promise.

NOTE: We can use Promise.race to implement a timeout functionality. So if we have a promise that takes too long to fulfill, then we can simply reject it
after a certain amount of time.

Example:
// Promise.race
(async function () {
=> const res = await Promise.race([
=> => getJSON(`https://restcountries.com/v3.1/name/mexico`),
=> => getJSON(`https://restcountries.com/v3.1/name/italy`),
=> => getJSON(`https://restcountries.com/v3.1/name/egypt`),
=> ]);
=> console.log(res[0]);
})();

const timeout = function (sec) {
=> return new Promise(function (\_, reject) {
=> => setTimeout(() => {
=> => => reject(new Error('Request took too long!'));
=> => }, sec \* 1000);
=> });
};

Promise.race([
=> getJSON(`https://restcountries.com/v3.1/name/tanzani`),
=> timeout(0.5),
])
=> .then(res => console.log(res[0]))
=> .catch(err => console.error(err));
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Promise.allSettled: So it takes in an array of promises again, and it will simply return an array of all the settled promises. And so again,
no matter if the promises got rejected or not. So it's similar to Promise.all in regard that it also returns an array of all the results,
but the difference is that Promise.all will short circuit as soon as one promise rejects, but Promise.allSettled, simply never short circuits.
So it will simply return all the results of all the promises. So Promise.allSettled. And so now here I will create actually the most basic example ever.

Example:

// Promise.allSettled
Promise.allSettled([
Promise.resolve('success'),
Promise.reject('ERROR'),
Promise.resolve('Another success'),
]).then(res => console.log(res));

output: (3) [{…}, {…}, {…}]

// Promise.all
Promise.all([
Promise.resolve('success'),
Promise.reject('ERROR'),
Promise.resolve('Another success'),
])
.then(res => console.log(res))
.catch(err => console.error(err));

Output: ERROR

#----------------------------------------------------------------------------------------------------------------------------------------------------#
Promise.any: is a method that takes an array of promises, and then it will return a new promise. And this promise will be fulfilled immediately
when one of the input promises is fulfilled. And then it will also have the result of the first fulfilled promise.

NOTE: So as always Promise.any takes in an array of multiple promises and this one will then return the first fulfilled promise
and it will simply ignore rejected promises. So basically Promise.any is very similar to Promise.race with the difference that rejected promises
are ignored. And so therefore the results of Promise.any is always gonna be a fulfilled promise

Example:
Promise.any([
Promise.resolve('success'),
Promise.reject('ERROR'),
Promise.resolve('Another success'),
])
.then(res => console.log(res))
.catch(err => console.error(err));

output: success

Another Example:
Promise.any([
Promise.resolve('Another success'),
Promise.resolve('success'),
Promise.reject('ERROR'),
])
.then(res => console.log(res))
.catch(err => console.error(err));

output: Another success
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Proxy: The Proxy object allows you to create an object that can be used in place of the original object,
but which may redefine fundamental Object operations like getting, setting, and defining properties.
Proxy objects are commonly used to log property accesses, validate, format, or sanitize inputs, and so on.

Proxy like mirror,for objects

NOTE: Proxy is a special object that is used to intercept operations performed on the target object.
Proxy is a constructor function, and so therefore we can create a new proxy object by using the new operator.
Proxy takes two arguments, the target object and the handler object.
targe: is the object that the proxy is going to proxyfy.
handler: is the object that is going to contain the actual proxy behavior.

NOTE: Once i write get method in handler object, it will be called whenever we try to read a property from the target object.
and the proxy will forgot any properties that are not in the target object.
because once we write get method in handler object, it will be called whenever we try to read a property from the target object.
and if get method is empty, it will return undefined.

get trap: is a method that will be called whenever we try to read a property from the target object.
get trap: takes three arguments, the target object, the property that we are trying to read, and the proxy itself.
via the proxy argument, we can access the target object, and then we can read the property from it.
to check if the property exists in the target object, we can use the in operator. or we can use hasOwnProperty method.
We have tow senarios:
1: If the property exists in the target object, we can simply return it. otherwise we can return undefined.
via the proxy argument, we can access the target object, and then we can read the property from it.
return target[prop] || undefined;

2: if we try to read a property that doesn't exist in the target object, we will throw an error.

Example:
const obj = {
=> name: 'Yahia',
=> age: 26,
};

handler = {
=> get: function (target, prop, proxy) {
=> => if(!(prop in target)) { // if(!target.hasOwnProperty(prop)) {
=> => => throw new Error(`${prop} doesn't exist in target object`);
=> => }
=> => return target[prop] || undefined;
=> },

=> set: function (target, prop, value, proxy) {
=> => if(!target.hasOwnProperty(prop)) {
=> => => throw new Error(`${prop} doesn't exist in target object`);
=> => }
=> => if(prop === 'age' && typeof value !== 'number') {
=> => => throw new Error(`Age must be a number`);
=> => }
=> => target[prop] = value;
=> },
};

const proxyObj = new Proxy(obj, handler);

console.log(proxyObj.name); // Yahia
console.log(proxyObj.age); // 26
console.log(proxyObj.job); // Error: job doesn't exist in target object

proxyObj.age = 27; // 27
proxyObj.age = '27'; // Error: Age must be a number

NOTE: I can use the handler object with more than one proxy object.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
What is Symbol.iterator: The Symbol.iterator well-known symbol specifies the default iterator for an object.
Used by for...of.

What is Symbol: A symbol is a unique and immutable data type that is often used to identify object properties.
To create a symbol, you write Symbol() with an optional string as its description.

let sym1 = Symbol(mySymbol);
mySymbol is the description of the symbol and it's optional. if you don't pass it

NOTE: If i store a symbol in a variable, i can use that variable to access the symbol. by using the square brackets notation.
Because symbols are primitive values, they can be used as property keys in objects.
this refers to the fact that symbols are unique.
NOTE: But if i define a symbol directly on an object, i can't access it using the square brackets notation.

Example:

var symbol1 = Symbol('symbol1');
var obj = {
=> name: "yahia",
=> age: 25,
=> [symbol1]: "hello",
};

console.log(obj); // {name: "yahia", age: 25, Symbol(symbol1): "hello"}

Another Example:

var obj = {
=> name: "yahia",
=> age: 25,
=> [Symbol('hidden')]: "hello",
};

console.log(obj); // {name: "yahia", age: 25, Symbol(hidden): "hello"}
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Ther is known symbols in JavaScript:
1: Symbol.iterator: The Symbol.iterator well-known symbol specifies the default iterator for an object.

2: Symbol.hasInstance: The Symbol.hasInstance well-known symbol specifies the default method for determining if an object is an instance of another object.

3: Symbol.isConcatSpreadable: The Symbol.isConcatSpreadable well-known symbol specifies whether an object should be flattened to its array elements when using the Array.prototype.concat() method.

4: Symbol.match: The Symbol.match well-known symbol specifies the method that matches regular expressions against a string. This function is called by the String.prototype.match() method.

5: Symbol.replace: The Symbol.replace well-known symbol specifies the method that replaces matched substrings of a string. This function is called by the String.prototype.replace() method.

6: Symbol.search: The Symbol.search well-known symbol specifies the method that returns the index within a string that matches the regular expression. This function is called by the String.prototype.search() method.

7: Symbol.species: The Symbol.species well-known symbol specifies a function-valued property that the constructor function uses to create derived objects.

8: Symbol.split: The Symbol.split well-known symbol specifies the method that splits a string at the indices that match a regular expression. This function is called by the String.prototype.split() method.

9: Symbol.toPrimitive: The Symbol.toPrimitive well-known symbol specifies a function valued property that is called to convert an object to a corresponding primitive value.

10: Symbol.toStringTag: The Symbol.toStringTag well-known symbol specifies the string value that is used as the key for a property that stores the default description string of an object. This description is generally used by JavaScript methods to create a default string description of an object.

11: Symbol.unscopables: The Symbol.unscopables well-known symbol specifies an object whose own property names are property names that are excluded from the 'with' environment bindings of the associated objects.

12: Symbol.asyncIterator: The Symbol.asyncIterator well-known symbol specifies the default AsyncIterator for an object. If this property is not already defined, language runtime calls [Symbol.iterator] property instead.

13: Symbol.matchAll: The Symbol.matchAll well-known symbol specifies the method that returns all matches of the regular expression against a string. This function is called by the String.prototype.matchAll() method.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Iterators and Generators: Iterators and Generators bring the concept of iteration directly into the core language
and provide a mechanism for customizing the behavior of for...of loops.

Iterators: in JavaScript an iterator is an object which defines a sequence
and potentially a return value upon its termination.

Spescifically, an iterator is any object which implements the Iterator protocol by having a next() method
that returns an object with two properties
#----------------------------------------------------------------------------------------------------------------------------------------------------#
How to make an object iterable: To make an object iterable, we have to add a special method to it.
And this method is called Symbol.iterator.
Symbol.iterator: return an object called iterator.
And this iterator object has to have a next method.

next method: And this next method has to return an object with two properties.
the first property is value: The next value in the iteration sequence.
the second property is done: This is a boolean value that indicates whether the iterator is done or not.
If done is true, then the iterator has reached the end of its sequence.
If done is false, then the iterator is able to produce another value in its sequence.

Example: for implementation of iterator function
even numbers iterator: from 2 to 10

function evenNumbersIterator() {
=> var start = 0;
=> return {
=> => next: function () {
=> => => start += 2;
=> => => if (start <= 10) {
=> => => => return {
=> => => => => value: start,
=> => => => => done: false,
=> => => => };
=> => => } else {
=> => => => return {
=> => => => => value: undefined,
=> => => => => done: true,
=> => => => };
=> => => }
=> => },
=> };
}

var obj = evenNumbersIterator();
console.log(obj.next()); // { value: 2, done: false }
console.log(obj.next()); // { value: 4, done: false }
console.log(obj.next()); // { value: 6, done: false }
console.log(obj.next()); // { value: 8, done: false }
console.log(obj.next()); // { value: 10, done: false }
console.log(obj.next()); // { value: undefined, done: true }
console.log(obj.next()); // { value: undefined, done: true }

NOTE: Once created, an iterator object can be iterated explicitly by repeatedly calling next().
Iterating over an iterator is said to consume the iterator, because it is generally only possible to do once.
After a terminating value has been yielded additional calls to next() should continue to return {done: true}.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
To add the Symbol.iterator method of an object, which is what makes that object iterable.
Or change the Symbol.iterator method of an Array, which is what makes that Array iterable.

var arr = ["Mohamed", "Yahia", "Ahmed"];

console.log(...arr); // Mohamed Yahia Ahmed

for (const i of arr) {
=> console.log(i); // Mohamed Yahia Ahmed
}

arr[Symbol.iterator] = evenNumbersIterator;

console.log(...arr); // 2 4 6 8 10

for (const i of arr) {
=> console.log(i); // 2 4 6 8 10
}

var obj = {
=> name: "yahia",
=> age: 25,
};

console.log(...obj); // TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function
for (const i of obj) {
=> console.log(i); // TypeError: obj is not iterable
}

obj[Symbol.iterator] = evenNumbersIterator;
console.log(...obj); // 2 4 6 8 10

for (const i of obj) {
=> console.log(i); // 2 4 6 8 10
}
#----------------------------------------------------------------------------------------------------------------------------------------------------#
// Make function to make object iterable

function objectIterable() {
=> var keys = Object.keys(obj); // ['name', 'age']
=> var count = -1;
=> return {
=> => next: function () {
=> => => count++;
=> => => if (count < keys.length) {
=> => => => return {
=> => => => => value: [keys[count], obj[keys[count]]],
=> => => => => done: false,
=> => => => };
=> => => } else {
=> => => => return {
=> => => => => value: undefined,
=> => => => => done: true,
=> => => => };
=> => => }
=> => },
=> };
}

var obj = {
=> name: "yahia",
=> age: 25,
};

obj[Symbol.iterator] = objectIterable;

for (const i of obj) {
=> console.log(i); // ['name', 'yahia'] ['age', 25]
}
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Generators: provide a powerful alternative: they allow you to define an iterative algorithm by writing
a single function whose execution is not continuous. Generator functions are written using the function\* syntax.

When called, generator functions do not initially execute their code. Instead, they return a special type of iterator,
called a Generator. When a value is consumed by calling the generator's next method,
the Generator function executes until it encounters the yield keyword.

The function can be called as many times as desired, and returns a new Generator each time.
Each Generator may only be iterated once.

Generators methods: is a syntax for defining iterators. Generators are functions which can be exited and later re-entered.
it's a syntax sugar for iterators.

yield: The yield keyword is used to pause and resume a generator function (function\* or legacy generator function).

Example:

function\* generator() {
=> console.log("Hello");
=> yield 1;
=> console.log("I'm");
}
var gen = generator();
console.log(gen.next()); // Hello { value: 1, done: false }
console.log(gen.next()); // I'm { value: undefined, done: true }
console.log(gen.next()); // { value: undefined, done: true }

Another Example:

function\* generator() {
=> for (let i = 2; i < 12; i+=2) {
=> => yield i;
=> }
}

var gen = generator();
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 4, done: false }
console.log(gen.next()); // { value: 6, done: false }
console.log(gen.next()); // { value: 8, done: false }
console.log(gen.next()); // { value: 10, done: false }
console.log(gen.next()); // { value: undefined, done: true }

NOTE: It is instead of using iterator function to make object iterable we can use generator function.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Generator function to make object iterable:

function\* objectIterable() {
=> var keys = Object.keys(obj); // ['name', 'age']
=> for (let i = 0; i < keys.length; i++) {
=> => yield [keys[i], obj[keys[i]]];
=> }
}

var obj = {
=> name: "yahia",
=> age: 25,
};

obj[Symbol.iterator] = objectIterable;

for (const i of obj) {
=> console.log(i); // ['name', 'yahia'] ['age', 25]
}
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Web Workers: is a simple me ans for web content to run scripts in background threads.
The worker thread can perform tasks without interfering with the user interface
In addition, they can perform I/O using XMLHttpRequest (although the responseXML and channel attributes are always null)
or fetch (with no such restrictions). Once created
A worker can send messages to the JavaScript code that created it by posting messages to an event handler specified
by that code (and vice versa).

Web Workers Api:
A worker is an object created using a constructor (e.g. Worker()) that runs a named JavaScript file — this file contains
the code that will run in the worker thread; workers run in another global context that is different from the current window.
Thus, using the window shortcut to get the current global scope (instead of self) within a Worker will return an error.

The main difference between the main thread and a worker thread is that the worker thred:
=> that web workers can't access the DOM tree.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
How to pass data from main script to worker script:
Using postMessage() method to send data from main script to worker script.
postMessage() method: post message api essentially just raises an event from one script to another script. can catch or listen to that event
Then we can send data from main script to worker script.
and listen to that event in worker script using onmessage event handler.
Like: self.onmessage = function (e) { console.log(e.data); }
Worker object: is a global object in worker script. and it's like window object in main script.
self: it's like this main script.but it refers to the worker object.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
How to pass information from worker script to main script:
By the same way we pass data from main script to worker script.
Using postMessage() method to send data from worker script to main script.
then we receive that data in main script using onmessage event handler.

What is use case for web workers:
=> When we have a long running task in main script that will block the main thread.
=> When we have a lot of data to process in main script that will block the main thread.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Example for web workers:

index.html:

<body>
=> <button id="sumButton">Calculate Sum</button>
=> <button id="bgButton">Change Background</button>
=> <script src="./script.js"></script>
</body>

index.js:
const worker = new Worker("worker.js");

const sumButton = document.getElementById("sumButton");
const bgButton = document.getElementById("bgButton");

sumButton.addEventListener("click", (event) => {
=> worker.postMessage("hello worker"); // send data from main script to worker script
=> // alert(`The final sum is: ${sum}`);
});

worker.onmessage = function (message) { // listen to message from worker script
=> console.log(message.data); // 49999999995000000000
=> alert(`The final sum is: ${message.data}`); // The final sum is: 49999999995000000000
};

bgButton.addEventListener("click", (event) => {
=> if (document.body.style.background !== "green")
=> => document.body.style.background = "green";
=> else document.body.style.background = "blue";
});

worker.js:

self.onmessage = function (message) { // listen to message from main script
console.log(message.data); // hello worker
=> let sum = 0;
=> for (let i = 0; i < 10000000000; i++) sum += i; // long running task
=> postMessage(sum); // send data from worker script to main script
};
#----------------------------------------------------------------------------------------------------------------------------------------------------#
What is Effect from new keyword:
=> Creates a brand new object.
=> Links to an object prototype.
=> Binds 'this' to refer to new object scope.
=> Implicitly returns 'this'.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Tips:
var obj = {
=> name: "yahia",
=> age: 25,
}

obj**proto** = Object.prototype;
obj**proto**.\_\_proto\*\* = null;
#----------------------------------------------------------------------------------------------------------------------------------------------------#
const ahmed = {
name: "ahmed",
sayHi: function () {
console.log(this);
},
};

name: "moamen",
};

moamen.sayHi = ahmed.sayHi;
ahmed.sayHi(); // {name: "ahmed", sayHi: ƒ () name: "ahmed"}
ahmed.sayHi(); // {name: "moamen", sayHi: ƒ () name: "ahmed"}
#----------------------------------------------------------------------------------------------------------------------------------------------------#
How JavaScript Works Behind the Scenes:
An Hierechical overview of JavaScript:

JavaScript Definition: JavaScript is a high-level, object-oriented, multi-paradigm programming language.
OR:
JavaScript: JavaScript is a high-level, prototype-based object-oriented, multi-paradigm,
interpreted or just-in-time compiled, dynamic, single-threaded, garbage-collected programming language
with first-class functions and a non-blocking event loop concurrency model.

High-level: Developer does not have to worry, everything happens automatically. (Memory management, garbage collection, etc.) like JavaScript language.
Low-level: Developer has to manage resources manually. (Memory management, garbage collection, etc.) like C language.

Garbage collection: is a algorithm inside JavaScript engine that automatically removes old, unused object from memory.
So javascript has a cleaning guy who cleans our memory from time to time

Interpreted or just-in-time compiled: JavaScript is an interpreted language, but it's also a compiled language.
JavaScript engine compiles JavaScript code to machine code (binary code) and then executes it.
But it does that at runtime, just before the code is executed (just-in-time compiled).

Multi-paradigm: JavaScript supports more than one programming paradigm.
Paradigm: An approach and mindset of structuring code, which will direct your coding style and technique.

There three popular programming paradigms:
(1) Procedural programming: A programming paradigm that uses procedures (functions) to build programs.
(2) Object-oriented programming (OOP): A programming paradigm based on the concept of objects.
(3) Functional programming (FP): A programming paradigm that builds programs by composing pure functions, avoiding shared state, mutable data, and side-effects.

Also we can classify programming languages into two categories:
(1) Declarative programming languages: Tell the computer what you want to do and the computer will figure out how to do it.
(2) Imperative programming languages: Tell the computer how to do something.

JavaScript does all of these things: it's realy felxible and versatile so we can dod really whatever we want with it.

Protoype-based object-oriented: JavaScript is prototype-based object-oriented programming language.
everythings in JavaScript is an object except primitive values (number, string, boolean, null, undefined, symbol, bigint).

JavaScript is a language with first-class functions: Which means that functions are simply treated as variables.
so we can pass functions to other functions, and return functions from functions.

JavaScript is a dynamic programming language: Which means that we don't have to manually define the data type of the data we want to store in a variable.
When the javaScript engine executes our code, it automatically figures out the data type of the data we want to store in a variable.

None-blocking event loop concurrency model: JavaScript is a single-threaded language that can be non-blocking concurrency model.
concurrency model: is how the JavaScript engine handles multiple tasks happening at the same time.

Why do we need concurrency model:
=> JavaScript is a single-threaded language, which means that it has only one call stack and one memory heap.

So What about a long running task in JavaScript: (like fetching data from database, reading data from file, etc.)
=> Sounds like it would block the single thread. however, we want non-blocking behavior.

How do we achieve non-blocking behavior in JavaScript:
=> By using an event loop: takes long running tasks, executes them in the "background", and puts them back in the main thread once they are finished.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
The JavaScript Engine and Runtime:
JavaScript Engine: is a program that executes JavaScript code.
V-8 Engine: is a JavaScript engine that powers Google Chrome and Chromium-based browsers. but also powers Node.js.

NOTE: Any javascript engine has two main components:
(1) Call Stack: Where our code is actually executed, using something called execution context.
(2) Memory Heap: Is an unstructured memory pool which stores all the objects our application needs.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
What are difference between compilation and interpretation:
Compilation: Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer.

Source code => Compiler => Machine code => Computer Processor => Output

Interpretation: Interpreter runs through the source code and executes it line by line.
No code is generated in this process.

Source code => Interpreter => Computer Processor => Output

NOTE: Modern javascript engine now use a mix between compilation and interpretation. (just-in-time compilation)

Just-in-time comilation (JIT): Entire code is converted into machine code at once then executed immediately, but the compilation happens right before execution.
So we sill have hte two steps of regular ahead of time compilation, but there is no portable file to execute and the execution happens immediately.
after compilation, and this is perfect for javascript as it's a lot faster than just executing code line by line.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
The first step of compilation Parsing :
Parsing: parse the coede which essentially means to read the code. during the parsing process, the code is parsed into
a data structure called abstract syntax tree (AST).
This works by first splitting up each line of code into pieces that are meaningful to the language like the const or function keywords,
and then saving all these pieces into the tree in a structured way. This step also checks if there are any syntax errors
and the resulting tree will later be used to generate the machine code.

The next step is cmpilation: Which is where the AST is converted into machine code. this machine code is then executed right away.
because javascript is just-in-time compiled, the compilation happens right before execution.

modern javascript engines actually have some pretty clever optimization strategies.

What they do is to create a very umoptimized version of machine code in the beginning?:
just so that it can start executing as fast as possible, then in the background, this code is being optimized and recompiled during the already
running program execution and this can be don most of the times and after each optimization the unoptimized code is simply swept
for the new more optimized code. without ever stopping the execution of the program.
And this process is what makes modern engines such as the V-Eight so fast
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Runtime in the browser:
Js engine + Web APIs + Callback Queue + Event Loop = JavaScript Runtime
Web APIs: are functionalities provided to the engine by the browser, like DOM, AJAX, Timeout, etc. (not part of the JavaScript language itself)
Callback Queue: is a data structure that holds all the callback functions that are ready to be executed.
Event Loop: is a functionality that checks the callback queue and the execution stack, and pushes the first callback function
in the queue to the execution stack.

NOTE: The runtime in node.js is a little bit different, because it doesn't have a web APIs, instead it has C++ bindings. and so called thread pool.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Execution Context and The Call Stack:
So the code is now ready to be executed, What happens then?:
=> Creation of global execution context (for the top-level code) and top-level code is any code that is not inside any function.
So again, in the beginning only the code that is outside of functions will be executed. And this makes sense, right?
Functions should only be executed when they are called.

So, javaScript code always runs inside an execution context, which is like a container that stores variables and in which a piece of our code is evaluated and executed.

NOTE: There is only ever one global execution context in any JavaScript application, and it's the default execution context.

For each and every function call, and you execution context will be creaed containing all the information that is necessary to run
exactly that function. and the same goes for method calls, because methods are just functions attached to objects.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
What it's execution context made of?:
(1) Variable environment: all our variables and function declarations are stored, and there is also a special arguments object
so basically all the variables that are somehow declared inside a function, will end up in its varable environment.
However, a function can also access variables outside of the function. And we have already seen that in action throughout this course,
especially in the projects of the previous section. And this works because of something called the scope chain.
(2) Scope chain: is that the scope chain basically consists of references to variables that are located outside of the current function.
and to keep track of the scope chain, it is stored in each execution context
(3) This keyword: is also stored in the execution context.

NOTE: arrow functions don't have the arguments object, and they also don't get their own this keyword.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Scope and The Scope Chain:
Scoping: How our program's variables are organized and accessed. "Where do variables live?" or "Where can we access a certain variable, and where not?"
Lexical scoping: Scoping is controlled by placement of functions and blocks in the code. So lexical scoping means that the scoping is controlled by the placement of functions and blocks in the code.
For example a function that is written inside another function will get access to the scope of the parent function.

Scope: Space or envrionment in which a certain variable is declared (variable environment in case of functions). There is global scope,
function scope, and block scope.

Scope of a variable: Region of our code where a certain variable can be accessed.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
There three types of scope:
(1) Global scope: Variables declared outside of any function or block. Are accessible everywhere because they are on the top of the scope chain.
(2) Function scope: Variables declared inside a function are only accessible inside that function.
(3) Block scope: Variables declared with let and const are only accessible inside a block. (block is a piece of code wrapped in curly braces)
Fucntions are also block scoped, but only in strict mode. (ES6)
#----------------------------------------------------------------------------------------------------------------------------------------------------#
The scope chain:
Example:

const myName = 'Jonas';

function first() {
=> const age = 30;

=> if (age >= 30) {
=> => const decade = 3;
=> => var millenial = true;
=> }

=> function second() {
=> => const job = 'teacher';
=> => console.log(`${myName} is a ${age}-year old ${job}`);
=> }

=> second();
}

first();

Global scope: myName = 'Jonas'
first() scope: age = 30, myName = 'Jonas', millenial = true
second() scope: job = 'teacher', age = 30, myName = 'Jonas', millenial = true
if block scope: decade = 3, age = 30, myName = 'Jonas', millenial = true

NOTE: Scope has access to variables of all its outer scopes. So the scope chain is basically the order in which functions are written in the code.
Variable lookup: When we want to use a certain variable, the JavaScript engine will first look for that variable in the current scope.
if it cannot find it, then it will look in the scope above, and so on. until it reaches the global scope. And if the variable is not found there,
then we get an error.

Sibling scopes: Scopes that are on the same level of the scope chain. For example, the function scope of second() and if block scope are sibling scopes.
cannot access each other's variables. So the scope chain is not linear, but it's more like a tree.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Variable Environment: Hoisting and The TDZ:
Hoisting: Makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope".
Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object.

function declarations: are hoisted, so we can use the function before we declare it in the code.
intial value of function declarations: is the actual function.
scoped of function declarations: to the block in which they are declared. (in strict mode only)
NOTE: So if you are using sloppy modm which you shouldn't, then functions are functioned scoped.

var variables: are hoisted, so we can use the variable before we declare it in the code. but we get undefined.
intial value of var variables: is undefined.
scoped of var variables: function scope.

let and const variables: are not hoisted, so we cannot use the variable before we declare it in the code. technically, they are hoisted,
but in a different way. and we get a reference error.

intial value of let and const variables: is unitialized. (TDZ)
Instead, we say that these varables are placed in a so-called temporal dead zone (TDZ). which makes it so that we can't access the variables
between the beginning of the scope and to place where the variables are declared.

scoped of let and const variables: block scope.

function expressions and arrow functions: It depends if they were declared using var, let, or const.

If they were declared using var, then they are hoisted, and we can use them before we declare them in the code. but we get undefined.
If they were declared using let or const, then they are not hoisted, and we cannot use them before we declare them because of the Temporal Dead Zone.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Temporal Dead Zone (TDZ): The regio of the scope between the beginning of the scope and the place where the variable is declared.
So we cannot access the variables between the beginning of the scope and to place where the variables are declared.
OR: The ergion of the scope in which the variable is defined, but can't be used in any way.

NOTE: in fact in the Temporal Dead Zone where it is still initialized, but the engine knows that it will eventually be initialized because
it already read the code before and set the job variable in the variable environment to uninitialized. Then when the execution
reaches the line where the variable is declared, it is removed from the Temporal Dead Zone abd it's then safe to use it.

NOTE: the variable is only safe to use after the TDZ, so the Temporal Dead Zone.

Wht TDZ exists?: To prevent errors. Because if we could use variables before they are declared, then we could have some really weird bugs
in our code. So the TDZ is a good thing, and it's a good thing that we cannot use variables before we declare them.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
The this Keyword:
How the this keyword works:
this keyword/variable: Special variable that is created for every execution context (every function). Takes the value of (points to)
"the owner of the function in which the this keyword is used".
NOTE: this is not static, it depends on how the function is called, and its value is only assigned when the function is actually called.

NOTE: As normal functions So not as a method and so not attached to any object in this case, the this keyword will simply be undefined.
however, that is only valid for strict mode. In sloppy mode, the this keyword will simply point to the global object.
So this is yet anoter very good reason to always use strict mode.

Arrow functions: So arrow functions do not get their own this keyword. Instead, they simply use the this keyword of the surrounding function
So of the parent function and in technical terms, we say that lexical this keyword, because it simply gets picked up from the outer lexical scope.
of the arrow function

Event listener: the this keyword will always point to the DOM element that the handler function is attached.

NOTE: So this will never point to the function in which wer are using it. It will always point to the owner of the function that we are
NOTE: Also, the this keyword will never point to the vriable environment.

Finally: there are actually other ways in which we can call a function, for examplek, using the new keywoed or the call, apply, and bind methods. (will know it later)
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Regular Functions vs. Arrow Functions:
If you will using this keyword you should never ever use an arrow function as a method. Because this will refer to the window object.
or parent scope.

MOTE: object in not a scope. So the this keyword is not scoped to the object. It's simply a variable that is created for every execution context.

Example:

var firstName = 'Matilda';

const jonas = {
=> firstName: 'Jonas',
=> year: 1991,
=> calcAge: function () {
=> => console.log(2037 - this.year);
},

=> greet: () => {
=> => console.log(`Hey ${this.firstName}`); // Hey Matilda
=> },

=> greet: function (){ // this is the right way
=> => console.log(`Hey ${this.firstName}`); // Hey Jonas
};

jonas.greet(); // Hey Matilda

In this example, the greet method is an arrow function. And so it will share the this keyword with its parent scope, which is the global scope.
but if we use regular function it will work. because the this keyword will point to the object itself. (who call it)

const jonas = {
=> firstName: 'Jonas',
=> year: 1991,
=> calcAge: function () {
=> => console.log(2037 - this.year);

const isMillenial = function () {
=> console.log(this); // undefined
=> console.log(this.year >= 1981 && this.year <= 1996); // Error cannot read property 'year' of undefined
}=>;
},

# => greet: () => {

# => => console.log(`Hey ${this.firstName}`); // Hey Matilda

# => },

=> greet: function (){ // this is the right way
=> => console.log(`Hey ${this.firstName}`); // Hey Jonas
};

This error because regular function create its own this keyword.
To solve this problem we can use the arrow function inside the regular function. or use self variable.

const jonas = {
=> firstName: 'Jonas',
=> year: 1991,
=> calcAge: function () {
=> => console.log(2037 - this.year);

const self = this; // self or that
const isMillenial = function () {
=> console.log(self); // jonas object
=> console.log(self.year >= 1981 && self.year <= 1996); // truw
}=>;
},

# => greet: () => {

# => => console.log(`Hey ${this.firstName}`); // Hey Matilda

# => },

=> greet: function (){ // this is the right way
=> => console.log(`Hey ${this.firstName}`); // Hey Jonas
};

NOTE: Arrow function inherit the this keyword from the parent scope.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Arguments Keyword:
arguments keyword: is a variable that is created for every function. It contains an array-like structure with all the arguments that were passed
argument keyword is only available in regular functions, So in function expressions like this, but also in function declarations,
but not in an arrow function.

Summary:
In Strict mode: the this keyword will be undefined in a regular function that is not a method.
if function is a method: the this keyword will point to the object that is calling the method.
arrow function: the this keyword will always be inherited from the parent scope, so from the surrounding function.

In sloppy mode: the this keyword will always point to the global object, so to the window object in the browser.
arrow function: the this keyword will always be inherited from the parent scope, so from the surrounding function.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
Primitives vs. Objects (Primitive vs. Reference Types):
In premative types: we can only store the value itself. So the value is stored in call stack.
In reference types: we can store the reference to the place in memory where the object is stored. So the value is stored in heap.

<img src="../referance.png vs. Reference Types.png" alt="Primitive vs. Reference Types" width="500" height="300">

There more big topic about how JavaScript work behind the scenes.
1: Prototype Inheritance => Object Oriented Programming (OOP) with javascript.
2: Event loop => Asynchronous JavaScript: Promises, Async/Await and AJAX.
3: How the DOM really works => Advanced DOM and Events.
#----------------------------------------------------------------------------------------------------------------------------------------------------#
importNode():
The document.importNode() method is a built-in method in the Document Object Model (DOM) interface of JavaScript.
It allows you to import and clone a node from one document to another.

When you have a node in one document and want to use it in another document, you cannot directly move the node itself.
Instead, you can use document.importNode() to create a copy of the node that can be appended to or inserted into the target document.

The document.importNode() method takes two arguments: the node you want to import and a boolean value indicating whether to import the node's child nodes as well.
The syntax is as follows:
var importedNode = document.importNode(node, deep);

node: The node you want to import from one document to another.
deep (optional): A boolean value indicating whether to import the node's child nodes as well. If true, the entire subtree of the node will be cloned and imported.
If false, only the node itself will be cloned (default value is false).

Here's an example usage of document.importNode():

// Source document
var sourceDocument = document;
var sourceElement = sourceDocument.getElementById("myElement");

// Target document
var targetDocument = anotherDocument;
var importedElement = targetDocument.importNode(sourceElement, true);

// Append the imported element to the target document
targetDocument.body.appendChild(importedElement);

In the example, sourceElement is a node from the source document that you want to import into the targetDocument. By using document.importNode(),
you create a copy of the sourceElement in the targetDocument. The importedElement can then be appended or inserted into the targetDocument as needed.

Note that document.importNode() is particularly useful when you need to work with nodes across different documents
or when you want to avoid direct mutation of the original node. It allows you to safely and effectively reuse
or clone nodes between documents while maintaining their structure and properties.
