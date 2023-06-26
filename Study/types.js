//! typing in javascript
//? javascript is dynamic, variables are not directly associated with any particular type, any variable can be assigned or re-assigned to values of all types

//? also weakly typed, it allows implicit type conversion when an operation involves mismatched types, instead of throwing type errors.

let a = 123;
a = 'vroom';
a = true;

console.log(true + 'foo'); // (truefoo) coercion here changed the boolean to also string to do the operation

//! Primitives (with typeof)
//? 1- number    (number)      => Object wrapper (Number)
//? 2- string    (string)      => Object wrapper (String)
//? 3- boolean   (boolean)     => Object wrapper (Number)
//? 4- undefined (undefined)   => Object wrapper (None)
//? 5- null      (object)      => Object wrapper (None)
//? 6- symbol    (symbol)      => Object wrapper (Symbol)
//? 7- bigint    (bigint) => BigInt(9007199254740991)  => Object wrapper (BigInt)

//! non-primitives
//? 1- object    (object)
//? 2- array     (object)

//! why array gives typeof object and how to distinguish an array
//? This because in javascript all derived data type is always a type object. Included functions and array.
//? as typeof operator is not reliable with non-primitive types, we can distinquish an array using a method like Array.isArray() or instanceof operator

console.log(Array.isArray([1, 2, 3])); // true
console.log([1, 2, 3] instanceof Array); // true
console.log(Object.prototype.toString.call([1, 2, 3])); // [object Array]

//? just more to it => arrays are a just special kind of object in JavaScript, and only existing "type"s in ECMAScript are string, number, boolean, undefined, null, bigint, symbol, and object

//! why null typeof is object
//? its for for legacy reasons, this is regarded as a mistake, as it stands since the beginning of JavaScript, many code bases are built, while taking advantage of the quirk, and many code out there will have to be changed if this was fixed

//! undefined vs null
//? 1- undefined: simply no value, variable that has not been assigned a value is of type undefined, also if there is no return value with a method or a function return then we also gets undefined

//? 2- null: is written with a literal: null, indicates that a variable points to no object

//? Conceptually, undefined indicates the absence of a value, while null indicates the absence of an object (which could also make up an excuse for typeof null === "object").

//! some instanceof
//? 1- function () {} instanceof Object     => true
//? 2- [1, 2, 3] instanceof Object          => true
//? 3- {} instanceof Object                 => true
//? 4- function () {} instanceof Function   => true
//? 5- [1,2,3] () {} instanceof Array       => true
//? 6- {} instanceof Function or Array      => false
//? 7- primitiveType instanceof Object      => false
//? 8- 123 instanceof Number                => false
//? 9- Number(123) instanceof Number        => false
//? 10- new Number(123) instanceof Number   => true (because instanceof checks whether an object has a given constructor in its prototype chain.)
//? 11- new Number(123) instanceof Object   => true

//! number as primitive value vs object of type Number
//? 1- const myNumber = 123; // 123 primitive value of type number, not an object of type Number
//? 2- const myNumber = new Number(123); // Number {123} instance of the Number constructor

//? note => JavaScript automatically wraps primitive number in a temporary Number object to access the methods or properties, and then discards the wrapper object.

//! number vs bigint
//? 1- Number has a limited precision when it comes to big numbers it represent it like 9.234567890123457e+307
//? 2- to defien bigint simply use BigInt(number) or append (n) at the end of the number ex: 123n

//? note => BigInt is used if you need to represent numbers that are large to be represented accurately by Number ex: cryptography or scientific computing.

//! symbols
//? unique and immutable primitive value, used to create unique property keys that are guaranteed not to clash with keys from other code

//! NOTES

//? 1- typeof is an operator not a function, so we can use it simply without parentheses typeof "vroom"

//? 2- For symbols and BigInts, JavaScript has intentionally disallowed certain implicit type conversions.
Symbol('foo') + 'foo'; // Cannot convert a Symbol value to a string

//? 3- Object wrapper types, which provide useful methods for working with the primitive values, javascript automatically wraps the value into the corresponding wrapper object and accesses the property on the object instead (important this allow us to access the types methods and properties called boxing or wrapping)
const str = 'Hello World'; // javascript will wrap the string with String Object wrapper
console.log(str.length); // so that now we can use the length property

//? 4- typeof operator on a primitive value, it will return a string that corresponds to the primitive type, not the wrapper object type ex: typeof "vroom" gives "string" not String

//? 5- null == undefined => gives true (language specification), as javascript treats them as equal because both values have the same "no value", maybe this happens due to the type coercion (opinion)

//? 6- 1 + null, gives 1 as null is treated as (0), while 1+ undefined gives NaN

//? 7- when number tries to store a number value it can't hold, it will give infinity, or instead use BigInt

//? 8- number and BigInt cannot be mixed within same expression 123 + 123n gives an error, or just use explicit conversions

//? 9- typeof NaN gives number considered as (special kind of number) only value in JavaScript that is not equal to itself => NaN == NaN (false)

//? 10- typeof function(){} gives function, but typeof new Date() gives object, it defines different behaviour for typeof when it interacts with objects implementing [[Call]]

//? 11- Functions are, in fact, objects with the additional capability of being callable.

//? 12- All data types, except Null, Undefined, and Symbol, have their respective coercion process, even objects
