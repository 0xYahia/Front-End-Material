//! NOTES

//? 1- classes are not hoisted and always runs in strict mode

//? 2- setters/getters can be used to add more logic than we can do with constructor, lets say returning something to the user if no valid value is provided

//? 3- static methods: are methods which are only associated with class itself, not objects, we can only call it on the class ex: class.staticMethod()

//? 4- when a property or method is accessed on an object javascript looks for it on object itself, if not found then object prototype, it keeps searching till it find it, or the end of (prototype chain) ends

//! Playground

// ------------------------------(1)-------------------------------
//? a) Class keyword (ES6) (its just syntax sugar, but in reality works just as constructor function)

class A {
  //? NOTE: this is how we defined a private field prefix it with (#), and it cannot be initialized within the constructor
  #privateField = 'private';

  // static staticProperty=1; // declaring a static property
  constructor(pub) {
    this.publicField = pub;

    // this.#privateField = abc // we can redefine private field
  }

  //? adding methods directly within class, adds it to prototype of objects created by class
  editPrivate(newPrivate) {
    this.#privateField = newPrivate;
  }
  getPrivate() {
    console.log(this.#privateField);
  }

  #privateMethod() {
    console.log('im a private method');
  }
}

const instanceA = new A('public');

console.log(instanceA); // { publicField: 'public' } private property won't show up

instanceA.getPrivate(); // private
instanceA.editPrivate('edited');
instanceA.getPrivate(); // edited

//? we can add methods to class with prototype also
A.prototype.method = () => {
  console.log('hello');
};

// ------------------------------(2)-------------------------------

//? getters/setters within class

class B {
  constructor(prop2) {
    this.prop2 = prop2;
  }

  get prop2() {
    return this.prop2 + ' getter';
  }

  //? setters must have exactly one parameter
  //? NOTE: setter and prop2 has exactly matching names (this will trigger the setter on the property even when using the constructor to set its value )

  set prop2(value) {
    //? we are setting this.prop2, which is the same property the constructor will try to set
    if (typeof value === 'string') this.prop2 = value;
    console.log('this is not a valid value');
  }
}

const instanceB = new B(); // triggers the setter and printout (this is not a valid value)
// const instanceB = new B('123') this will overwhelm the stack

//? if we gave setter same name as the getter, it would work only when we use this.prop= value (not during constructor )

instanceB.prop2 = 123; // this will do nothing, and wont add anything on our instance

//? this will cause stack overflow, because setter, and constructor have a conflict both are trying to set prop2 property, will keep calling the setters till it overwhelm the stack
instanceB.prop2 = '123';

// ------------------------------(3)-------------------------------

//? setting getter/setter properly

class C {
  constructor(prop) {
    this.prop = prop;
  }

  //? NOTE: getter/setter have same name as property

  get prop() {
    return this._prop;
  }

  set prop(value) {
    //? looking closely at property name we giving value to is (_prop) not prop, so no conflict between constructor and setter will happen
    if (typeof value === 'string') this._prop = value;
    else {
      console.log('this is not a valid value');
    }
  }
}

const instanceC = new C('123'); //? this will set _prop with the valid value we gave
// const instanceC = new C(123); //? this won't set any property on the object

console.log(instanceC);

// ------------------------------(4)-------------------------------

//? static method

class D {
  constructor(val) {
    this.value = val;
  }

  static staticMethod() {
    console.log('im a static method');
  }
}

const instanceD = new D('val');

//? only callable on the class itself, so this one will print result
D.staticMethod();

instanceD.staticMethod(); // typeError

// ------------------------------(5)-------------------------------

class Animal {
  constructor(name) {
    this.name = name;
  }
  animalMethod() {
    console.log('this is animal method');
  }
  method() {
    console.log('im a method from animal');
  }
}

//? inheritance with classes is added using (extends) keyword, Child extends Parent
class Dog extends Animal {
  constructor(name, color) {
    //? to pass argument to constructor of parent, we use super (we always call super first, to be able to access the this keyword)

    //? NOTE: if Dog class doesn't add any properties like (color), and we didn't implement any constructor by default Dog will use constructor of the parent, so only add constructor and super if u will add more things
    super(name);
    this.color = color;
  }

  //? overriding a method which exists in the parent, with new implementation in the child
  method() {
    console.log('im a overriding a method from animal');
  }
}

const dog = new Dog('klb', 'white');

console.log(dog);

dog.animalMethod(); // this is animal method

dog.method(); // im a overriding a method from animal

// ------------------------------(6)-------------------------------

//? class instances, method chaining

class Animal {
  constructor(name) {
    this.name = name;
  }
  animalMethod() {
    console.log('this is animal method');

    //? we return the object again to chain more methods on the instance
    return this;
  }
  method() {
    console.log('im a method from animal');
  }
}

const animal = new Animal('cat');

//? will work fine, as animalMethod returns the instance then we can chain another method
animal.animalMethod().method();

//? this won't work because method doesn't return the instance
animal.method().animalMethod(); // error

//? thinking about this, this what allow us to chain methods with strings or arrays,... for example

const string = '      str';

console.log(string.toUpperCase().trimStart());
