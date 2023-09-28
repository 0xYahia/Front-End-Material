//! NOTES

//? 1- Fundamentals principles to remember when using OOP

//? a) Abstraction: hiding complexity of an object implementation and exposing things that really matter to the user

//? b) Encapsulation: grouping data, and behavior together in a single unit, and making clear division between its public interface and its private internal state

//? c) Inheritance: ability to inherit properties and methods from a parent object

//? d) Polymorphism: single method in different forms

//? 2- javascript uses prototype-based or prototypal inheritance (delegation), object inherits from prototype object

//? 3- every object in js has a prototype, which is a reference to another object from which the object inherits properties and methods.

//? 4- when a property or method is accessed on an object javascript looks for it on object itself, if not found then object prototype, it keeps searching till it find it, or the end of (prototype chain) ends

//? 5- object is a collection of related data and/or functionality.

//? 6- instance: is object created from a class

//? 7- constructor is just a function called using the new keyword. When you call a constructor, it will:

//? a) create a new object

//? b) bind this to the new object,so you can refer to this in your constructor code

//? c) runs the code in constructor, links the new object to the prototype

//? d) return the new object

//? 8- functions in javascript, has property (prototype) including constructor functions

//? 9- every object has a prototype, even when we create simple objects it will get (Object.prototype)

//? 10- arrow functions cannot be constructor function (because of the this keyword)

//? 11- Object.create() can be used to keep linking prototypes of objects, on even more than one level

//? 12- Constructors and classes, by convention, start with a capital letter and are named for the type of object they create

//! Playground

// ------------------------------(1)-------------------------------

const B = function (p1, p2) {
  this.p1 = p1;
  this.p2 = p2;

  //? NOTE: this is considered a bad practice, because it will create the method on every instance we create
  this.method = function () {
    console.log("123");
  };
};

const instanceB = new B("parameter1", "parameter2"); // note number (6), tells how this work

//? it will get object, with properties and methods, but we want to define the function on protoype not objects
console.log(instanceB); // {p1:'parameter1',p2:'parameter2',method:function}

// ------------------------------(2)-------------------------------
//? Object.create method

//? prototype that we will link to the object we create using Object.create method
const objectCreatePrototype = {
  sound: "vroom",
  method() {
    console.log("im a method");
  },
};

const objCreate = Object.create(objectCreatePrototype);

//? it creates an new empty object, but with a prototype that make object inherits the properties and methods above (we pass the prototype as an argument)
console.log(objCreate);

objCreate.prop = "123"; // setting a new property

objCreate.method(); // calling method from the prototype

// ------------------------------(3)-------------------------------
//? defining methods for constructor functions properly

const C = function (prop) {
  this.prop = prop;
};

const instanceC = new C("prop");

// instanceC.method(); gives error

//? adding a method on function constructor C on its prototype, to be able to use it on its instances, also we cannot use the method on any object before adding it to he prototype
C.prototype.method = function () {
  console.log("C constructor method");
};

console.log(C.prototype); // will see the added method
instanceC.method();

//? the method is added to the prototype of objects we create from C
console.log(instanceC.__proto__);

//? C.prototype represent the prototype which will be associated to objects created from it, but not its prototype
console.log(instanceC.__proto__ === C.prototype); //true

//? this gives different prototype which is the C function prototype not its created objects
console.log(C.__proto__);

// ------------------------------(4)-------------------------------

//? to test if an object is an instance of specific class

console.log(instanceB instanceof B); // true

console.log(instanceB instanceof A); // false

// ------------------------------(5)-------------------------------
//? using methods of Object.prototype (which is prototype object for all objects created using the object literal syntax or the Object() constructor.)

//? will look first for these method in object itself, then object prototype, and it will keep moving till it go to Object.prototype or find the method

console.log(instanceC.toString()); // [object Object]
console.log(instanceC.hasOwnProperty("prop")); // true
console.log(instanceC.hasOwnProperty("prop2")); // false

//? using this prototype chaining, we can get Object.prototype and see methods on it
console.log(instanceC.__proto__.__proto__);

// ------------------------------(6)-------------------------------

//? NOTE: we can also add properties on the prototype not only methods
C.prototype.sound = "vroom";

console.log(instanceC.sound); // vroom
console.log(instanceC.hasOwnProperty("sound")); //false, its on object prototype, not object itself

// ------------------------------(7)-------------------------------

const str = "string";
const arr = [1, 2, 3];

//? this string method can be used because of prototypal inheritance
str.toUpperCase();

//? when checking these variables prototype, we will see all methods that we can use on string or array
console.log(str.__proto__);
console.log(arr.__proto__);

console.log(str.__proto__ === String.prototype);

// ------------------------------(8)-------------------------------
//? we can add new methods to existing types prototype (Not Recommended)

console.log(String.prototype);

String.prototype.myMethod = function () {
  console.log(`**${this}**`);
};

//? calling this will actually work, and add new method on string prototype
str.myMethod(); // **string**

// ------------------------------(9)-------------------------------

//? getters/setters

const obj = {
  name: "abc",
  age: 23,

  //? prefixing a method with get/set makes it getter or setter, we use them simply as a property not methods
  get prop() {
    return this.name + "d";
  },

  //? setters must have exactly one parameter
  //? NOTE:setter has different name (prop) unlike the property (name), so when we say obj.name= (doesn't trigger setter)
  set prop(value) {
    this.name = value;
  },
};

//? we just call it similar to properties
//? NOTE: we have a new property on our objects which is (prop), also both getter/setter is added to prototype

console.log(obj.prop); //abcd
obj.prop = "vroom";
console.log(obj.prop); // vroomd

// ------------------------------(10)-------------------------------

//? static method

const D = function (val) {
  this.value = val;
};

const instanceD = new D("val");

D.staticMethod = function () {
  console.log("im a static method");
};

//? only callable on the class itself, so this one will print result
D.staticMethod();

instanceD.staticMethod(); // typeError because this is not a method on the instance

// ------------------------------(11)-------------------------------

//? inheritance between constructors or classes

const Animal = function (name) {
  this.name = name;
};

Animal.prototype.animalMethod = () => {
  console.log("animal method");
};

const Dog = function (name, color) {
  Animal.call(this, name);
  this.color = color;
};

//? this will work fine, and use animal constructor function to set name property, but won't link prototype, and get the benefits of prototype chain to be able to use Animal constructor function methods
const dog = new Dog("klb", "orange");

Dog.prototype.oldDogMethod = () => {
  console.log("i will be erased");
};

//? remember Object.create returns empty object {}, which in this case will be Dog prototype, and chain Animal prototype on Dog, NOTE: this will make constructor of Dog will be Animal

console.dir(Dog.prototype.constructor); // prints Dog constructor

//? NOTE: methods defined on Dog prototype before using this, will be erased as its now assigned to {}
Dog.prototype = Object.create(Animal.prototype);

const dog2 = new Dog("klb tany", "yellow");

Dog.prototype.newDogMethod = () => {
  console.log("im still here");
};

console.dir(Dog.prototype.constructor); // prints Animal constructor

//? NOTE: this won't do it, because this will assign objects prototype directly to animal not chaining it
Dog.prototype = Animal.prototype;

const dog3 = new Dog("klb talt", "yellow");

//? it will be having old prototype, when created, it has only oldDogMethod in its prototype
console.log(dog);

//? will have proper prototyping, with methods of Animal and Dog (correct prototypal chaining)
console.log(dog2);

//? this will have Animal prototype directly, without chaining
console.log(dog3);

//? NOTE: look note (4) can help understanding how js find properties and methods

console.dir(Dog.prototype.constructor); // Animal constructor

//? assigning back the dog constructor to its function
Dog.prototype.constructor = Dog;

console.dir(Dog.prototype.constructor); // Dog constructor

console.log(dog instanceof Dog); // false
console.log(dog instanceof Animal); // false

//? you might think how dog is not instance of Dog, actually it was

//? at this time it was instance of Dog
// const dog = new Dog('name', 'red');

//? when we changed the prototype of Dog, now the dog instance we created, won't be instance of Dog anymore
// Dog.prototype = Object.create(Animal.prototype);

//? all below gives true
console.log(dog2 instanceof Animal);
console.log(dog2 instanceof Dog);

console.log(dog3 instanceof Animal);
console.log(dog3 instanceof Dog);

console.log(dog3 instanceof Object);
