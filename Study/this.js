// !NOTES

//? 1- the value of this is determined by how a function is called (runtime binding)
//? 2- bind() method can set the value of a function's this regardless of how it's called
//? 3- arrow functions don't provide their own this binding
//? 4- this keyword refers to current object or context in which the code being executed, so it never refer to a function itself
//? 5- when function is called without an explicit context, this will refer to the global object in browser (window object), in node it will refer to the global object not the window object
//? 6- globalThis can be used to access global object in platform-independent way, whether we are in browser or node
//? 7- remember call, apply does exactly same thing except, when passing argument to the function call takes parameters directly seperated by comma, while apply takes an array of parameters

//! scenarios

// ------------------------------(1)-------------------------------
console.log(this); // in browser this gives global object (window), in node it refers to module.exports or exports (better not to mention it if not asked about it)
// ------------------------------(2)-------------------------------
function f() {
  console.log(this);
}

const f2 = () => {
  console.log(this);
};
f(); // always global
f2(); // this one is the same as case (1) only global in browser

// ------------------------------(3)-------------------------------
const obj = {
  a() {
    console.log(this);
  },
  b: function () {
    console.log(this);
  },
  c: () => {
    console.log(this);
  },
};
//? remember same result applied for both calling the methods using dot notation or bracket
obj.a(); // a and b (this) will log the object itself because the function is a method of the object
obj.b();
obj.c(); // there is no this binding to object as we are using arrow function, so the context of execution will be globalThis

// ------------------------------(4)-------------------------------
const f1 = function () {
  const f2 = () => {
    console.log(this);
  };
  function f3() {
    console.log(this);
  }
  f2();
  f3();
};

//? adding the method directly within the object, or extending the object, also gives same result
const obj2 = {
  a: f1,
};
obj2.b = f1;

//? result in both, first function (f2) will refer to object, as arrow have no binding so we take the binding of the function (f1) itself which refer to the object, for (f3) there is no context specified so its global
obj2.a();
obj2.b();
// ------------------------------(5)-------------------------------
//? for events when using arrow function it will refer to window, thats why its recommended to use normal functions with events (this is applicable for the two following methods)

btn.addEventListener('click', () => {
  console.log(this);
});
btn.onclick = () => {
  console.log(this);
};

// ------------------------------(6)-------------------------------
const obj3 = {
  f() {
    const f2 = () => {
      console.log(this);
    };
    f2();
  },
};

//? function 2 has no this, so it uses the outer lexical scope this which is (f), and its a method called by the object, so this will refer to (obj3)
obj.f();

// ------------------------------(7)-------------------------------
const nestedObj = {
  person: {
    name: 'john',
    getObj() {
      console.log(this);
    },
  },
  car: {
    color: 'red',
    getObj: () => {
      console.log(this);
    },
  },
};

//? 1- this is normal method so value of this is set to the object that the method is called on (person)
nestedObj.person.getObj();

//? 2- this gives same as scenario (1), as its arrow function will inherit this value from surrounding lexical scope which is the global
nestedObj.car.getObj();

// ------------------------------(8)-------------------------------
const Person = function (name, age) {
  this.name = name;
  this.age = age;
};
//? in constructor function this binding will refer to the object we create, thats how it gets the properties value we pass in the parameters
const p = new Person('John', 28);

const Person2 = (name, age) => {
  this.name = name;
  this.age = age;
};
//? this will give type error, because this cannot refer to the objects we create, so we cannot istantiate an object, so Person2 is not a constructor
const p2 = new Person('Doe', 28);

// ------------------------------(9)-------------------------------
// simple example for call, bind and apply

function f(p, p2) {
  console.log(p, p2);
  console.log(this);
}

const obj2 = {
  name: 'john',
};

//? call and apply will bind this to obj2, but different is just in passing the parameters
f.call(obj2, 'parameter', 'second parameter');
f.apply(obj2, ['parameter', 'second parameter']);

//? bind will return a new function which will make this binded to the object we pass to it

//? this will refer to obj2 here, but if we removed it, the bindedFunction will then refer to global
const bindedFunction = f.bind(obj2);
bindedFunction('parameter', 'second parameter');
