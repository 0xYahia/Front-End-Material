//! What is OOP?:
// OOP is a concept and the first language apply it is Smalltalk
// => Object Oriented Programming
// (OOP) means that we are going to write our code in a way where the data and functions of an object can be used by other objects

// => OOP is a programming paradigm that relies on the concept of classes and objects. It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes),
// which are used to create individual instances of objects.

// !What is linear Programming?:
// In linear programming all code in one file
// or function has access to everything else inside it. This makes your programs hard to read because you have no idea what each part does without reading through every
// line of code.
// In addition, if there's any change made anywhere within this single block then they will affect everywhere else as well which could lead to bugs or errors being
// #---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
//! The main idea from OOP:
//! 1: Encapsulation (data hiding):
// => Encapsulation is the ability of objects to hide their internal workings from other objects. This is done by making a class that only exposes the methods and properties that are needed for other objects to use it.
// via access modifier
//! 2: Inheritance:
// => Inheritance is the ability of objects to inherit properties and methods from other objects. This is done by making a class that inherits from another class.
//! 3: Polymorphism:
//! Polymorphism composed of two things:
//! 1: Overloading:
// => Overloading is the ability of objects to have multiple methods with the same name but different parameters. This is done by making a class that has multiple methods with the same name but different parameters
// by different types or counts
//! 2: Overriding:
// => Overriding is the ability of objects to have methods with the same name and parameters as another object. This is done by making a class that inherits from another class and then overriding one of its methods.
// if we say overriding we say inheritance two it related.

//! OOP depend on three ribs:
// 1: Encapsulation
// 2: Inheritance
// 3: Polymorphism
// #---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
// struct: data type with my own definition
// class: data type with my own definition
// #---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
//! what different between struct and class?:
// The main differences between structs and classes in object-oriented programming (OOP) can vary depending on the programming language, but here are some common distinctions:

// !Default Behavior:
// Struct: In many programming languages, structs are value types, meaning that when you assign a struct variable to another, a copy of the entire struct is made. Modifying one struct does not affect other instances.
// Structs are typically stored on the stack.
// Class: Classes are reference types, meaning that when you assign a class variable to another, you are assigning a reference to the same object. Modifying one instance can affect other references to the same object.
// Classes are usually stored on the heap.

// Default access modifier:
// Class: will be private
// Struct: will be public

//! Usage and Intended Purpose:
// Struct: Structs are often used for representing lightweight data structures that hold simple groups of related data. They are typically used for small, self-contained pieces of data and are less commonly used
// for encapsulating behavior or complex relationships. Structs are preferred when you need value semantics, performance efficiency, and if the data is immutable or doesn't require complex operations.

// Class: Classes are designed to encapsulate both data and behavior. They are used for modeling complex objects with properties and methods, and they support features such as inheritance, polymorphism,
// and encapsulation. Classes are suitable when you need reference semantics, more advanced features like inheritance, and when you want to create objects with complex behavior.
// Inheritance:
// Struct: In many languages, structs do not support inheritance or subclassing. They are standalone entities and cannot be used as a base for creating derived types.
// Class: Classes can be used as base classes to create derived classes through inheritance. Inheritance allows derived classes to inherit and extend the properties and methods of the base class,
// promoting code reuse and hierarchical relationships.

//! Performance Considerations:
// Struct: Due to their value type nature and stack allocation, structs can be more memory-efficient and faster to access compared to classes.
// They are often used for small data structures or in scenarios where performance is critical.
// Class: Classes, being reference types and heap-allocated, may have a slightly higher memory overhead and indirection due to the reference mechanism. However, their benefits lie in their flexibility,
// extensibility, and support for more complex features.

//! NOTE: It's worth noting that the specific behavior and features of structs and classes can vary between programming languages,
// so it's essential to consult the documentation or specifications of the language you are using for more precise details.
#-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
//! Function overloading:
// Function overloading is a feature that allows us to have more than one function with the same name
// but different parameters.This is useful when we want to perform the same operation on different types of data or different counts.
// #---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
//! Abstraction:
// Abstraction is the process of hiding the internal details and showing only the functionality to the user.
// #---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
// swap by value swap by address, swap by reference
// pass by value, pass by address, pass by reference
#-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #

//! Rules:
// => Any thing written inside class / struct is a member variable / function = > any member in class / struct is called by object / instance name = > public : member can be accessed inside / outside class / struct = > private : member can be accessed only inside scope of class / struc > Example :

// include<iostream>
// std namespace name;

class Employee
{
public:
  int id;
  int age;
  string name;
  float salary;
  void print()
  {
    cout << id << " " << name << " " << salary << endl;
  }
};

int main
{
  Employee emp1;
  emp1.id = 1; // Violation of OOP because data should be hidden (private)
  emp1.name = "Ahmed";
  emp1.salary = 1000;
  emp1.print();
}
// caller: => emp1 is an object of class Employee caller is instance who is call the function inside the class / struct
// To hidden data and open gates to write and read the data = > we use access modifier we set the property and method is private and make setters and getters function public
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
// => protected : member can be accessed only inside scope of class / struct and it's derived class
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
Example : class Complex
{
private:
  int real;
  int img;

public:
  void setReal(/*Complex* this*/ int _real) { real = _real }
  void setImg(int \_img) { img = \_img }
  int getReal(/*Employee *this */) { return real }
  int getImg() { return img }
  void printComplex()
  {
    cout << real << " + " << img << "i" << endl;
  }
  Complex Add(/**/ Complex right)
  {
    // caller c1 // right c2
    Complex retVal;
    // retVal.real = left.real + right.real;
    retVal.real = /* caller */ real + right.real;
    // retVal.img = left.img + right.img;
    retVal.img = /* caller */ img + right.img;
    return retVal;
    // return value
  }
};

// standalone function
Complex Sub(Complex left, Complex right)
{
  Complex retVal;
  retVal.setReal(left.getReal() - right.getReal()); // we used setter and getter because i cannot access private member outside class
  retVal.setImg(left.getImg() - right.getImg());
  return retVal;
}

int main
{
  Complex c1, c2, c3;
  c1.setReal(1);
  c1.setImg(2); // Compiler Complex::setId(&c1, 2)(address, value)
  c2.setReal(3);
  c2.setImg(4);

  c1.printComplex();
  c2.printComplex();

  c1 = c1.Add(c1, c2); // passing values
}

//! NOTE: always caller passing as a first parameter

// What is prefer member method or standalone function?
// => is a main rule if i can make it member i make it member if i can't i make it standalone function NOTE : Any member function has hidden input parameter called className *this

void setId(int _id)
{
  (*this).id = _id;
  this->id = _id;
  id = _id;
}

//! NOTE : standalone function has not *this i call it by function name(not there caller)
#-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
//! NOTE: If want save the memory we pass the parameter by reference because reference don't take space from memory
//! NOTE: But there issue if i pass by reference i can change the value via this reference to prevent this we set (const) before the parameter

Complex Add(const Complex &right)
{
  Complex retVal;
  retVal.real = / _ caller _ / real + right.real;
  retVal.img = /\_ caller \* / img + right.img;
  // issue
  right.img = -1234; // compile error but if don't put const will work and this is issue
  return retVal;
};
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
class Complex
{
private:
  int real;
  int img;

public:
  void setReal(/* Complex *this */ int _real) { real = _real }
  void setImg(int _img) { img = \_img }
  int getReal(/*Employee *this */)
  {
    return real
  }
  int getImg()
  {
    return img
  }
  void printComplex()
  {
    cout << real << " + " << img << "i" << endl;
  }
  Complex Add(/**/ Complex right)
  {
    // caller c1 // right c2
    Complex retVal;
    // retVal.real = left.real + right.real;
    retVal.real = /* caller */ real + right.real;
    // retVal.img = left.img + right.img;
    retVal.img = /* caller */ img + right.img;
    return retVal;
    // return value
  }
};

Complex Sub(const Complex &left, const Complex &right)
{
  Complex retVal;
  retVal.setReal(left.getReal() - right.getReal()); // compile error to fix this error we make getter is constant
  retVal.setImg(left.getImg() - right.getImg());    // compile error
                                                    // ISSUE
  right.setReal(-1234) return retVal;
}

int main
{
  Complex c1, c2, c3;
  c1.setReal(1);
  c1.setImg(2);
  c2.setReal(3);
  c2.setImg(4);

  c1.printComplex();
  c2.printComplex();

  c1 = c1.Add(c1, c2); // passing values
}

//! NOTE : we put const in method member after declaration and before the body

int getReal() const
{
  return real
}
int getImg() const { return img }

//! NOTE: That's how we guarantee this function will not changer the parameter
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
// Function overloading : functions in the same scope have the same name but different input parameters number
// or different data type ignore return type
// Default argument : must be from right to left in params
// if there is default argument in middle must all of right of it be default also
//  How initiate in member function : initiate object
void Initiate()
{
  this->real = img = 0;
}

void Initiate(int _real, int _img)
{
  this->real = _real;
  img = _img
}

initiate it in number void Initiate(int num)
{
  this->real = img = num;
}

// Ambiguity error if i use overloading with default parameter like this

void Initiate()
{
  this->real = img = 0;
}

void Initiate(int real = 0, int img = 0)
{
  this->real = _real;
  img = _img
}

c.Initiate(); // Compile error Ambiguity

// but this is headache every time i declear function so we use ctor to declaration the intial values
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
//! Constructor:
// = > Special function inside class / struct implicitly exist will be called automatically - we cannot call it - Once we create object from the class / struct operating system will generate ctor implicitly and it be empty

// How to write ctor explicitly:
// 1- the same name of class / struct
// 2- has no return type until void(void as a return type)
// 3- can be overloaded
// 4- must be public // private we cannot create object
// Once i create one ctor the operating system doesn't make any ctor
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
//! Destructor:
// => Special function inside class / struct will be called automatically
// cannot be called implicitly exist
// Once object destructed from memory once object reach end of its scope

//! How to write dest explicitly?:
// 1- the same name of class()
// 2- before it ~[tilde]
// 3- has no return type
// 4- has no params - parameterless -cannot be overloaded- just one of it
// 5- must be public(if we set it private we give compile error)

//! NOTE: last object created first object will destroyed

//! When to use destructor?:
// 1- dynamic allocation[heap]
// 2- connect to db import
// 3- read / write from file

//! Main usage of destructor:
// 1- release memory
// 2- close file
// 3- close connection
// 4- close socket
// 5- close database connection
// 6- close any resource
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
//  To organize my code i can put prototype of the function but the implementation under the main function but i put the class name after the function name like this

// in the class:
void setReal(int _real)

    // under the main:
    void Complex::setReal(int _real)
{
  real = _real;
}
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
//! Stack:
// => type of data structure
// => LIFO(Last In First Out)
// => push(add) pop(remove)

class Stack
{

private:
  int\*arr;
  int tos;
  int size;

public:
  // setters & getters NO
  int getTos() { return tos; }  // this return value
  int *getArr() { return arr; } // Dangerous because this will return address and i can make pointer and change the value and this is wrong

  Stack()
  {
    cout << "ctor<<endl;" tos = 0;
    size = 5;
    arr = new int[size];
  }

  Stack(int _size)
  {
    tos = 0;
    size = _size;
    arr = new int[size];
  }

  ~Stack()
  {
    for (int i = 0; i < size; i++)
    {
      arr[i] = -1234
    }
    delete[] arr;
  }

  // Push
  void Push(int value)
  {
    // if(this->tos != this.->size){
    if (!IsFull())
    {
      arr[tos++] = value
    }
    else
    {
      cout << "Stack is full" << endl;
    }
  }

  // Pop
  int Pop()
  {
    int retVal = -1111;
    // if(this->tos != 0)
    if (!IsEmpty())
    {
      return arr[--tos];
    }
    else
    {
      cout << "Stack is empty" << endl;
    }
    return retVal
  }

  // Check stack availability
  IsFull()
  {
    return this->tos == size;
  }

  IsEmpty()
  {
    return this->tos == 0;
  }
}

int main
{
  Stack s1;
  int *ptr = s1.getArr();
  ptr[3] == 22;
}
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
// Template => Generics :
// => You can write datatype once and can be applicable for any data type

//! Example:

template <class DT>

class Stack
{
private:
  DT *arr;
  int tos;
  int size;

public:
  // setters & getters NO
  in getTos() { return tos; }   // this return value
  int *getArr() { return arr; } // Dangerous because this will return address and i can make pointer and change the value and this is wrong

  Stack()
  {
    cout << "ctor<<endl;" tos = 0;
    size = 5;
    arr = new DT[size];
  }

  Stack(int \_size)
  {
    tos = 0;
    size = \_size;
    arr = new DT[size];
  }

  ~Stack()
  {
    for (int i = 0; i < size; i++)
    {
      arr[i] = -1234
    }
    delete[] arr;
  }

  // Push
  void Push(DT value)
  {
    // if(this->tos != this.->size){
    if (!IsFull())
    {
      arr[tos++] = value
    }
    else
    {
      cout << "Stack is full" << endl;
    }
  }

  // Pop
  DT Pop()
  {
    DT retVal = -1111;
    // if(this->tos != 0)
    if (!IsEmpty())
    {
      return arr[--tos];
    }
    else
    {
      cout << "Stack is empty" << endl;
    }
    return retVal
  }

  // Check stack availability
  IsFull()
  {
    return this->tos == size;
  }

  IsEmpty()
  {
    return this->tos == 0;
  }
}

int main
{
  Stack s1; // Compile error
  Stack<int> s1;
  Stack<char> s2;
  Stack<Complex> s3;
  // => Compiler will generate -in compile Time- copy of your class and replace DT -> int
  s1.Push(22)
      s2.Push('M')
          s2.Push(2, 3)
}

//! NOTE: If i declear the prototype function in class and implementation under the main function we and i want make it generic type
//!  we should: write template <class DT> before every function
#-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
// Standalone function cannot access private member of class
// Standalone function can access private member of class if it is friend to the class

// How can make friend function :

//! NOTE: Friend function we can consider it like member but it is not member[there is not *this] and
// i call it by the function name not the object name(BIG ISSUE TO CPP)
// Friend function make CPP not pure OOP

template <class DT>

class Stack
{
private:
  DT\*arr;
  int tos;
  int size;

public:
  // setters & getters NO
  in getTos() { return tos; }   // this return value
  int *getArr() { return arr; } // Dangerous because this will return address and i can make pointer and change the value and this is wrong

  Stack()
  {
    cout << "ctor<<endl;" tos = 0;
    size = 5;
    arr = new DT[size];
  }

  Stack(int \_size)
  {
    tos = 0;
    size = \_size;
    arr = new DT[size];
  }

  ~Stack()
  {
    for (int i = 0; i < size; i++)
    {
      arr[i] = -1234
    }
    delete[] arr;
  }

  // Push
  void Push(DT value)
  {
    // if(this->tos != this.->size){
    if (!IsFull())
    {
      arr[tos++] = value
    }
    else
    {
      cout << "Stack is full" << endl;
    }
  }

  // Pop
  DT Pop()
  {
    DT retVal = -1111;
    // if(this->tos != 0)
    if (!IsEmpty())
    {
      return arr[--tos];
    }
    else
    {
      cout << "Stack is empty" << endl;
    }
    return retVal
  }

  // Check stack availability
  IsFull()
  {
    return this->tos == size;
  }

  IsEmpty()
  {
    return this->tos == 0;
  }

  // Friend function
  friend void PrintStack(Stack param);
}

//! Example:

void
PrintStack(Stack param)
{
  for (int i = 0; i < param.tos; i++)
  {
    cout << param.arr[i] << endl;
  }
}

int main()
{
  Stack<int> s1;
  s1.Push(10);
  s1.Push(20);
  s1.Push(30);

  PrintStack(s1); // pass by VALUE
  PrintStack(s1); // pass by VALUE // will make issue
}
#-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
//! To create variable to count the count of object will created: we use static variable

// Static variable in class in cPP: member variable withe keyword static Static variable make operating system will create ONLY one copy of it in BSS regardless count of object created

// cout << s1.counter; // 3 will work bur does'nt make sense because it not specify for s1
// Static variable called class variable or shared variable
// cout << Stack::counter; // 3

// Stack::counter = 33 // To prevent change it we make static variable is private and make getter to get the value
// cout << s1.getCounter(); 33 will work bur does 'nt make sense
// because it not specify for s1 => So we make getCounter is statice function to make one function only and can' t object call it we call it by class name
// cout << Stack::getCounter(); // 3 This right way (best practice)

//! NOTE: With class variable must initialize it (we cannot initialize statice variable inside class we give compile error)
//! NOTE: Initialization for any class variable regardless access modifier
int Stack::counter = 0;
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
// => None statice function can access statice variable but to make it sense we make it statice function
// => Static function cannot access none static variable (because statice function don't have this)

// => None statice function can access statice variable directly
// => Static function can access none static variable indirectly

Example : static int getCounter()
{
  Stack temp;
  tep.tos = 22;
  return counter
}

//! NOTE: Compiler execute static variable or function it first time ONLY
//! static keep alive until close the application until object is destroyed (it is not related with object)
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
// there problem in line 434 Day 4 :

//! VIP NOTE: Once i make passing object by value operating system making thing called Bitwise Copy create object(without ctor) as copy and past
//! If i return object by value it doesn't return the object it make Bitwise Copy and return copy called Temporarily anonymous object
//! And in the end of ths scope all this objects will destroyed until objects was created without ctor so the number of destructor not equal number of constructor

// RVO = > return value optimization
//! Note : standalone function doesn't has this until i make it friendly function Always bitwise copy happen to object in stack not heap

template <class DT>

class Stack
{
private:
  DT *arr;
  int tos;
  int size;

public:
  // setters & getters NO
  in getTos() { return tos; }   // this return value
  int *getArr() { return arr; } // Dangerous because this will return address and i can make pointer and change the value and this is wrong

  Stack()
  {
    cout << "ctor<<endl;" tos = 0;
    size = 5;
    arr = new DT[size];
  }

  void printStack()
  {
    if (!param.isEmpty)
    {
      for (int i = 0; i < param.tos; i++)
      {
        cout << param.arr[i] << endl;
      }
    }
  }
}

int
main()
{
  Stack<int> s1;
  s1.Push(10);
  s1.Push(20);
  s1.Push(30);

  PrintStack(s1); // pass by VALUE
}

//! A problem will appear when make bitwise copy for object carrie address
// The problem here when i make bitwise copy for object carrie variable [arr] store address become there two object in stack carrie two variable carrie the same address refer to the same object in heap

//! How can i fix this problem
// We fix this problem using Copy Constructor
//! Copy Constructor
// method called when we create object
// constructor method called automatically -we cannot call- in three cases:
// 1- pass object by value
// 2- return object by value
// 3- create object from object اصنع كائن بدلاله كائن اخر

//! How we write copy constructor

class Draft
{
public:
  // copy constructor
  // this => pointer to param [new object]
  // old => s1 that as passed
  Draft(Draft &old)
  {
    cout << "Copy constructor" << endl;
    this->tos = old.tos;
    this->size = old.size;
    arr = new int[size];
    for (int i = 0; i < tos; i++)
    {
      this->arr[i] = old.arr[i];
    }
  }

  void printStack(Stack param)
  {
    if (!param.isEmpty)
    {
      for (int i = 0; i < param.tos; i++)
      {
        cout << param.arr[i] << endl;
      }
    }
  }
}

int
main()
{
  Stack<int> s1;
  s1.Push(10);
  s1.Push(20);
  s1.Push(30);

  s1.printStack(s1);
  s1.printStack(s1);
}

// Thus the param and the old reference only will destroy in the end of the scope and the main object will (s1) be alive
// But from the beginning if i can pass by reference this is better

//! ازاي اقدر اعمل كائن بدلاله كائن اخر

// Copy constructor
Stack s4(s1);
Stack s5 = s1; // Compile see it as s5(s1) this not assign operator

// No Copy constructor
Stack s6;
s6 = s1;
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
// In Complex Example : We can make copy constructor to make number of ctor be equal number of destructor :

// cpy ctor => useless code
Complex(Complex &old)
{
  cout << "Copy constructor" << endl;
  this->real = old.real;
  img = old.img; // we can write as this also
}

class Draft()
{
public:
  Draft(Draft old)
  {
    cout << "Copy constructor" << endl;
    this->tos = old.tos;
    this->size = old.size;
    arr = new int[size];
    for (int i = 0; i < tos; i++)
    {
      this->arr[i] = old.arr[i];
    }
  }
}

//! If i create cpy ctor via pass object by value happen stack overflow
// => because cpy ctor called when i pass object by value in this case cpy ctor it call itself always
#-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
//! Operator c++ can be overloaded
// +
// operator overloading can be member and standalone function

//! Example

class Complex
{
private:
  int real;
  int img;

public:
  void setReal(/*Complex* this*/ int _real) { real = _real }
  void setImg(int \_img) { img = \_img }
  int getReal(/*Employee *this */) { return real }
  int getImg(){return img}

  Complex()
  {
    real = img = 0;
  }

  Complex(int _r, int _i)
  {
    real = _r;
    img = _i;
  }

  ~Complex()
  {
    cout << "Destructor" << endl;
  }
  void printComplex()
  {
    cout << real << " + " << img << "i" << endl;
  }
  Complex Add(/**/ Complex right)
  {
    // caller c1 // right c2
    Complex retVal;
    // retVal.real = left.real + right.real;
    retVal.real = /* caller */ real + right.real;
    // retVal.img = left.img + right.img;
    retVal.img = /* caller */ img + right.img;
    return retVal;
    // return value
  }

  //! Operator overloading
  // c3 = c1 + c2
  // Complex& operator+(/* *this */ const Complex& right){ //! i can't return object by reference because retVal will die (i can't return reference to object already die)
  Complex operator+(/* *this */ const Complex &right)
  {
    Complex tep(real + right.real, img + right.img);
    //! OR
    Complex retVal;
    retVal.real = real + right.real;
    retVal.img = img + right.img;
    return retVal;
  }

  // c1 += c2
  Complex &operator+=(/* *this */ const Complex &right)
  {
    //! here object still live so i can return reference to it
    this->real = real + right.real;
    img += right.img;
    return *this;
  }

  // ++c1
  Complex &operator++()
  {
    ++real;
    ++img;
    return *this;
  }

  // c1++
  Complex operator++(int /*dummy*/)
  {
    // Complex retVal(this->real, this->img); // 3+4i
    //! OR
    Complex retVal(*this); // 3+4i
    this->real++ img++ return retVal;
  }

  Complex operator+(int num)
  {
    Complex retVal;
    retVal.real = this->real + num;
    retVal.img = img;
    return retVal;
  }

  // c1 > c2
  int operator>(Complex right)
  {
    return (this->real > right.real) && (this->img > right.img);
  }

  // c1 == c2
  int operator==(Complex right)
  {
    return (this->real == right.real) && (this->img == right.img);
  }

  // c3 = c1 => useless
  Complex &operator=(const Complex &right)
  {
    this->real = right.real;
    img = right.img;
    return *this;
  }

  // int x = (int)c1;
  // int operator int(){
  //! i can write it without return type like this
  operator int()
  {
    return this->real;
  }
};

// 10 + c1
Complex operator+(int num, Complex right)
{
  Complex retVal;
  retVal.setReal(num + right.getReal())
      retVal.setImg(right.getImg()) return retVal;

  //! OR
  // return right + num //! here it call operator+ the last method
}

int main()
{
  Complex c1(3, 4), c2(5, 6), c3;

  c3 = c1 + c2; // c1.operator+(c2)
  c1 += c2      // c1.operator+=(c2)

      c3 = ++c1; // c1.operator++()
  // c3 = 4+5i
  // c1 = 4+5i

  c3 = c1++; // c1.operator++()
  // c3 = 3+4i
  // c1 = 4+5i

  c3 = c1 + 10; // c1.operator+(int num)
  c3 = 10 + c1; // 10.operator+(Complex) //! Must make it standalone function because caller not complex

  if (c1 > c2)
  {
  }
  else
  {
  }

  c3 = c1; // memberwise copy

  // Casting (cast value type of complex in type of integer )
  int x = c1;
}
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #

template <class DT>

class Stack
{
private:
  DT\*arr;
  int tos;
  int size;

public:
  int getTos() { return tos; }
  int *getArr() { return arr; }

  // Copy
  // this => pointer to param [new object]
  // old => s1 that is passed
  Stack(const Stack &old)
  {
    cout << "cpy ctor";
    this->tos = old.tos;
    this->size = old.size;
    this->arr = new DT[size];
    for (int i = 0; i < tos; i++)
    {
      this->arr[i] = old.arr[i];
    }
  }

  Stack(int _size)
  {
    tos = 0;
    size = _size;
    arr = new DT[size];
  }

  ~Stack()
  {
    for (int i = 0; i < size; i++)
    {
      arr[i] = -1234
    }
    delete[] arr;
  }

  // Push
  void Push(DT value)
  {
    // if(this->tos != this.->size){
    if (!IsFull())
    {
      arr[tos++] = value
    }
    else
    {
      cout << "Stack is full" << endl;
    }
  }

  // Pop
  DT Pop()
  {
    DT retVal = -1111;
    // if(this->tos != 0)
    if (!IsEmpty())
    {
      return arr[--tos];
    }
    else
    {
      cout << "Stack is empty" << endl;
    }
    return retVal
  }

  // Check stack availability
  IsFull()
  {
    return this->tos == size;
  }

  IsEmpty()
  {
    return this->tos == 0;
  }

  // s2 = s1
  Stack &operator=(const Stack &right)
  {
    // First check s1 != s2
    if (this != &right)
    {
      // REMEMBER
      delete[] arr;
      this->tos = right.tos;
      this->size = right.size;
      this->arr = new DT[size];
      for (int i = 0; i < tos; i++)
      {
        this->arr[i] = right.arr[i];
      }
    }
    return *this;
  }

  // Friend function
  friend void PrintStack(Stack param);
}

//! Example:

void
PrintStack(Stack param)
{
  for (int i = 0; i < param.tos; i++)
  {
    cout << param.arr[i] << endl;
  }
}

int main()
{
  Stack<int> s1(5); // Size = 5
  s1.Push(10);
  s1.Push(20);
  s1.Push(30);

  Stack<int> s2(10) // Size = 10
      s2.Push(100);
  s2.Push(200);
  s2.Push(300);
  s2.Push(400);
  s2.Push(500);
  s2.Push(600);

  s1 = s2; // call = operator

  Stack s3(c2);  // call cpy ctor
  Stack s4 = s3; // call cpy ctor

  Stack s5;
  s5 = s3; // = operator
}

//! Any class i create it inside it variable carrie address must make = operator and copy constructor because (ctr + c, ctr + v is dangerous)
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #

class Point2D()
{
private:
  int x;
  int y;

public:
  void seX(int _x) { x = _x; }
  void seY(int _y) { y = _y; }
  int getX() { return x; }
  int getY() { return y; }

  Point2D() { x = y = 0; }

  Point2D(int _x, int _y)
  {
    x = _x;
    y = _y;
  }

  Point2D(int _num) { x = y = _num; }

  ~Point2D()
  {
    cout << "Dtor" << endl;
  }

  Point2D(Point2D & old)
  {
    cout << "Cpy ctor" << endl;
    this->x = old.x;
    this->y = old.y;
  }

  void Print()
  {
    cout << "x = " << x << endl;
    cout << "y = " << y << endl;
  }
}

class Point3D()
{
private:
  int x;
  int y;
  int z;

public:
  void seX(int _x) { x = _x; }
  void seY(int _y) { y = _y; }
  void seZ(int _z) { z = _z; }
  int getX() { return x; }
  int getY() { return y; }
  int getZ() { return z; }

  Point3D() { x = y = z = 0; }

  Point3D(int _x, int _y, int _z)
  {
    x = _x;
    y = _y;
    z = _z;
  }

  Point3D(int _num) { x = y = z = _num; }

  ~Point3D()
  {
    cout << "Dtor" << endl;
  }

  Point3D(Point3D & old)
  {
    cout << "Cpy ctor" << endl;
    this->x = old.x;
    this->y = old.y;
    this->z = old.z;
  }

  // Casting // p3d caller 10 20 30
  operator Point2D()
  {
    Point2D retVal(this->x, this->y) return retVal
  }

  void Print()
  {
    cout << "x = " << x << endl;
    cout << "y = " << y << endl;
    cout << "z = " << z << endl;
  }
}

int main()
{
  Point2D p1(3, 4);
  p1.Print();   // (3,4)
  p1 = p2 = p3; // p1.operator=(p2.operator=(p3))

  Point3D pd3(10, 20, 30);
  p3d.Print(); // (10,20,30)

  Point2D temp = p3d;
  Point2D temp = (Point2D)p3d
                     temp.Print(); // (10,20)

  return 0;
}

//! I can assign value in reference but if i assign value in value will give me compile error
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
//! Object Oriented Relations علاقه اي  اوبجيكت بالتاني
// Relation between classes

// 1- Composition [Tightly Coupled]
// => class Contains All of another class

// 2- Aggregation [Loosely Coupled]
// => class may contains another class later

// 3- Association [Very Loosely Coupled]
// => peer to peer each class may not depend on another one

//! A- Association [Very loosely coupled]
// => 1- Peer-To-Peer
// => Example: teacher     with      subject

// => 2- Temporarily relation
// => 3- represent in code
// => Pointer of class inside another class

class Subject()
{
private:
  int id;
  char name;
}
class Teacher()
{
private:
  int id;
  int age;
  char name;
  Subject *sub; // pointer from another class
}

// => 4- 1-1 1-M M-M
// => 5- No Dependency (teacher no depend on subject and the subject no depend on teacher the tooth still alive)

//! B- Aggregation [loosely coupled]
// => 1- Whole vs. part   علاقه مؤقته
// => Example: Employee    with    Department (me and ui track when i apply and after accepted)
// => 2- temp. Relation
// => 3- Represent in code
// => Pointer of class inside another class

class Department()
{
private:
  int id;
  char name;
}

class Employee()
{
private:
  int id;
  int age;
  char name;
  Department *dept; // pointer from another class
}

// => 4- 1-1 1-M M-M
// => 5- No Dependency

//! C- Composition [Tightly coupled]
// => 1- Complete ownership
// => Example:  Room    with   Wall
// => 2- Permanent relationship
// => 3- Represent in code
// => object of class inside another class

class Wall()
{
private:
  int id;
  char name;
}

class Room()
{
private:
  int id;
  int age;
  char name;
  Wall w1; // object from another class
  Wall w2; // object from another class
}

int main()
{
  Room r1, r2, r3;
  return 0;
}

// => 4- 1-1 1-M
// => 5- Complete Dependency (if i delete room i will delete wall)
#include "graphics.h"

//! Example:
class Point()
{
  int x;
  int y;

public:
  void setX(int _x) { x = _x; }
  void setY(int _y) { y = _y; }
  int getX() { return x; }
  int getY() { return y; }
  Point() { x = y = 0; }
  Point(int _x, int _y)
  {
    x = _x;
    y = _y;
  }
  Point(int _num) { x = y = _num; } // constructor start, end
  ~Point() { cout << "Dtor" << endl; }
  Point(const Point &old)
  {
    cout << "Cpy ctor" << endl;
    this->x = old.x;
    this->y = old.y;
  }
}

class Line()
{
  Point start;
  Point end;
  int color;

public:
  void setStart(Point _start) { start = _start; }
  void setEnd(Point _end) { end = _end; }
  void setColor(int _color) { color = _color; }
  Point getStart() { return start; }
  Point getEnd() { return end; }
  int getColor() { return color; }
  Line() // not enter because it found here Point so it jump to Point constructor
  {
    // start.x=0 // xxxx inaccessible
    // Compiler start x0 y0  end  x0 y0
    // start.setX(0);  // useless
    // start.setY(0);  // useless
    // end.setX(0);    // useless
    // end.setY(0);    // useless
    color = 0;
  }

  Line(int x1, int y1, int x2, int y2, int _color)
  {
    // start x1 y2  end  x3 y4 color5
    start.setX(x1);
    start.setY(y1);
    end.setX(x2);
    end.setY(y2);
    color = _color;
  }

  Line(Point _start, Point _end, int _color)
  {
    start = _start; // memberwise copy
    end = _end;
    color = _color;
  }

  ~Line() {}
  Line(const Line &old)
  {
    cout << "Cpy ctor" << endl;
    this->start = old.start;
    this->end = old.end;
    this->color = old.color;
  }

  void Draw()
  {
    // inside graphics.h
    setcolor(color)
        line(start.getX(), start.getY(), end.getX(), end.getY())
  }
}

//! To enhancement this code we will use constructor chaining

//! Useful from constructor chaining
// 1- Increase performance
// 2- Reduce code written

class Rect()
{
  Point ul;
  Point lr;
  int color;

public:
  void setUl(Point _ul) { ul = _ul; }
  void setLr(Point _lr) { lr = _lr; }
  void setColor(int _color) { color = _color; }
  Point getUl() { return ul; }
  Point getLr() { return lr; }
  int getColor() { return color; }

  // Ctor chaining
  Rect()
  {
    color = 0;
  }

  Rect(int x1, int y1, int x2, int y2, int _color) : ul(ulx1, y1), lr(x2, y2)
  {
    // Compiler ul 1,2 lr 3,4
    // ul.setX(x1);  // useless
    // ul.setY(y1);  // useless
    // lr.setX(x2);  // useless
    // lr.setY(y2);  // useless
    color = _color;
  }

  -React() {}
  Rect(const Rect &old) : ul(old.ul), lr(old.lr)
  {
    cout << "Cpy ctor" << endl;
    // this->ul = old.ul;  // useless
    // this->lr = old.lr;  // useless
    this->color = old.color;
  }

  void Draw()
  {
    // inside graphics.h
    setcolor(color);
    rectangle(ul.getX(), ul.getY(), lr.getX(), lr.getY());
  }
}

class Circle()
{
  Point center;
  int radius;
  int color;

public:
  void setCenter(Point _center) { center = _center; }
  void setRadius(int _radius) { radius = _radius; }
  void setColor(int _color) { color = _color; }
  Point getCenter() { return center; }
  int getRadius() { return radius; }
  int getColor() { return color; }
  Circle()
  {
    color = 0;
  }
  Circle(int x1, int y1, int _radius, int _color) : center(x1, y1)
  {
    radius = _radius;
    color = _color;
  }

  ~Circle() {}
  Circle(const Circle &old) : center(old.center)
  {
    radius = old.radius;
    color = old.color;
  }
  void Draw()
  {
    setcolor(color);
    circle(center.getX(), center.getY(), radius);
  }
}

class Triangle()
{
  Point p1;
  Point p2;
  Point p3;
  int color;

public:
  void setP1(Point _p1) { p1 = _p1; }
  void setP2(Point _p2) { p2 = _p2; }
  void setP3(Point _p3) { p3 = _p3; }
  void setColor(int _color) { color = _color; }
  Point getP1() { return p1; }
  Point getP2() { return p2; }
  Point getP3() { return p3; }
  int getColor() { return color; }
  Triangle()
  {
    color = 0;
  }
  Triangle(int x1, int y1, int x2, int y2, int x3, int y3, int _color) : p1(x1, y1), p2(x2, y2), p3(x3, y3)
  {
    color = _color;
  }
  ~Triangle() {}
  Triangle(const Triangle &old) : p1(old.p1), p2(old.p2), p3(old.p3)
  {
    color = old.color;
  }
  void Draw()
  {
    setcolor(color);
    line(p1.getX(), p1.getY(), p2.getX(), p2.getY());
    line(p2.getX(), p2.getY(), p3.getX(), p3.getY());
    line(p3.getX(), p3.getY(), p1.getX(), p1.getY());
  }
}

int main()
{
  initgraph();
  Line l1; // Once i create object from Line
  // point def ctor start
  // point def ctor end
  // line def ctor
  // line dest
  // point dest end
  // point dest start

  Line l2(1, 2, 3, 4, 5);
  // point def ctor start
  // point def ctor end
  // line 5p ctor
  // line dest
  // point dest end
  // point dest start
  Rect r1(1, 2, 3, 4, 5);
  // point 2p ctor ul
  // point 2p ctor lr
  // rect 5p ctor
  // rect dest
  // point dest lr
  // point dest ul
}
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
//! Day 6
//! 1- Inheritance
//! 1- Inheritance
//! 2- Aggregation[association]

//! Inheritance:
// => Extending methods and fields from class to another class
// => new datatype => receiving methods and fields was created actually in another datatype

//! O in SOLID mean => Open for extension - Close for modification

///////////// SOLID /////////////
// O => Inheritance
// l => Inheritance
// D => Dependency Inversion

//! Example for explain:
// Type A
// x
// y
// Fun1()
// Fun2()

// Type B
// y
// z
// Fun2()
// Fun3()

// we say for inheritance relationship Is - A
// we say for relation in last lecture Has - A
// Type Base/Parent
// y
// Fun2()

// Type A is-A Type Base
// x
// Fun1()

// Type B is-A Type Base
// z
// Fun3()
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
//! Child inherits EVERYTHING from parent except...
// private: member can be accessed inside class/struct ONLY
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
#include <iostream>
using namespace std;

//! static variable: variable store in memory one time only we call it by class name so static variable doesn't inherit
class Parent
{
  static int counter;
  int x;
  int y;

public:
  void setX(int _x){x = _x};
  void setY(int _y){y = _y};
  int getX(){return x};
  int getY(){return y};

  Parent()
  {
    x = y = 0;
  }

  Parent(int _x, int _y)
  {
    x = _x;
    y = _y;
  }

  ~Parent() {}
  int SumXY() { return x + y; }
}

// public: type of inheritance
// child: inherit everything from parent
//! Is constructor is inherit (Search)?
class Child : public Parent
{
  //  x, y => private
  // setX, setY, getX, getY, SumXY => public
  int z; // open for extension and patent doesn't effect so closing for modification
public:
  void setZ(int _z){z = _z};
  int getZ(){return z};

  Child() : Parent()
  {
    // x0, y0, z=0
    z = 0;
    // x = y = 0; // Compile Error (inaccessible)
    //   this->setX(0);     // useless
    //   setY(0)            // useless
    // }
  }

  Child(int _x, int _y, int _z) : Parent(_x, _y)
  {
    // x = _x;   => inaccessible
    // y = _y;   => inaccessible
    // setX(_x);   => useless
    // setY(_y);   => useless
    z = _z;
  }

  ~Child() {}

  int SumXYZ()
  {
    // return x+y+z; Compile Error
    // return getX() + getY() + z;
    //! OR
    return SumXY() + z;
  }
}

int
main()
{
  Child c3(1, 2, 3);
  cout << c3.SumXY() << endl;  // 3
  cout << c3.SumXYZ() << endl; // 6
  // parent def ctor
  // child 3p ctor
  // child dest
  // parent dest
  Parent p1;
  p1.setX(10);
  p1.setY(20);
  cout << p1.SumXY() << endl; // 30

  Child c1; // 12B
  // parent def ctor
  // child def ctor
  // child dest
  // parent dest
  c1.setX(1);
  c1.setY(2);
  cout << c1.SumXY() << endl; // 3
  return 0;
}
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
//! Protected [smart private] come with [inheritance]:
// member accessed inside class and can be accessed inside chain of inheritance only
// and cannot access protected in main

class Parent
{
protected:
  static int counter;
  int x;
  int y;

public:
  void setX(int _x){x = _x};
  void setY(int _y){y = _y};
  int getX(){return x};
  int getY(){return y};

  Parent()
  {
    x = y = 0;
  }

  Parent(int _x, int _y)
  {
    x = _x;
    y = _y;
  }

  ~Parent() {}
  int Sum() { return x + y; }
}

// public: type of inheritance
// child: inherit everything from parent
//! Is constructor is inherit (Search)?
class Child : public Parent
{
  //  x, y => protected
  // setX, setY, getX, getY, Sum => public
protected:
  int z;

public:
  void setZ(int _z){z = _z};
  int getZ(){return z};

  Child() : Parent()
  {
    x = y = z = 0;
  }

  Child(int _x, int _y, int _z) : Parent(_x, _y)
  {
    x = _x;
    y = _y;
    z = _z;
  }

  ~Child() {}

  // Overriding
  int Sum()
  {
    return x + y + z;
    // return z + Sum(); // Stack overflow because it will go to own Sum()
    //! To tell go to the Sum() in Parent class we write
    return z + Parent::Sum()
  }
}

int
main()
{
  Parent p1(3, 4);
  p1.x = 22;        // inaccessible
  cout << p1.Sum(); // 7

  Child c1(3, 4, 7);
  cout << c1.Sum();         // 14
  cout << c1.Parent::Sum(); // 7
}

//! Overriding: come with [inheritance]
//  function has same name same input paramater [ignore return type] but implementation/body is different in sub/child class

//! Overriding: come with [inheritance] because if we have function has same name same input paramater in the same class will give me compiler error
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
class Geoshape
{
protected:
  float dim1, dim2;
  // void setDim1(float _dim1){dim1 = _dim1};
  // void setDim2(float _dim2){dim2 = _dim2};
  // float getDim1(){return dim1};
  // float getDim2(){return dim2};

public:
  void setDim1(float _dim1){dim1 = _dim1};
  void setDim2(float _dim2){dim2 = _dim2};
  float getDim1(){return dim1};
  float getDim2(){return dim2};

  Geoshape()
  {
    dim1 = dim2 = 0;
  }

  Geoshape(float _dim1, float _dim2)
  {
    dim1 = _dim1;
    dim2 = _dim2;
  }

  Geoshape(const Geoshape &old)
  {
    dim1 = old.dim1;
    dim2 = old.dim2;
  }
  ~Geoshape() {}
}

//! Rectangle
class Rect : public Geoshape
{
public:
  Rect() { dim1 = dim2 = 0; }
  Rect(float _dim1, float _dim2) : Geoshape(_dim1, _dim2)
  {
    // dim1 = _dim1;
    // dim2 = _dim2;
  }
  Rect(const Rect &old) : Geoshape(old) {}
  ~Rect() {}
  float CalcArea() { return dim1 * dim2; }
}

//! Square
class Square : public Geoshape
{
public:
  Square()() {}
  Square(float dim) : Geoshape(dim, dim)
  {
    // dim1 = dim2 = dim;
  }
  Square(const Square &old) : Geoshape(old) {}
  ~Square() {}
  float CalcArea() { return dim1 * dim1; }

  //! Function overriding
  void setDim1(float _dim1){dim1 = dim2 = _dim1};
  void setDim2(float _dim2){dim2 = dim1 = _dim2};
}

//! SquareV2
class SquareV2 : public Rect
{
public:
  ~SquareV2() {}
  SquareV2(float _dim) : Rect(_dim, _dim) {}

  //! i don't need to create function to CalcArea
}

//! Circle
class Circle : public Geoshape
{
public:
  Circle() {}
  Circle(float _radius) : Geoshape(_radius, _radius)
  {
    // dim1 = dim2 = _radius;
  }

  float CalcArea() { return 3.14 * dim1 * dim2; }
}

class Tri : public Geoshape
{
public:
  Tri() {}
  Tri(float base, float height) : Geoshape(_dim1, _dim2)
  {
    // dim1 = base;
    // dim2 = height;
  }
  float CalcArea() { return 0.5 * dim1 * dim2; }
};
int main()
{
  SquareV2 s1; // dim1 0, dim2 0
  // geo ctor
  // rect ctor
  // sqv2 ctor
  // sqv2 dest
  // rect dest
  // geo dest

  SquareV2 s2(5); // dim1 5, dim2 5
  s2.CalcArea();  // 25

  Rect r1(3, 4);
  cout << r1.CalcArea(); // 12
  r1.setDim1(5);
  r1.setDim1(6);
  cout << r1.CalcArea(); // 30

  Square s1(5);
  cout << s1.CalcArea();
  // Business failure (we can solve it using function overriding)
  s1.setDim1(3); // 3,3
  s1.setDim2(4); // 4,4
  cout << s1.CalcArea();
  // But still have problem if i use setter in parent (Geoshape)
  // Business failure
  s1.Geoshape::setDim1(3);
  s1.Geoshape::setDim2(4);
  //! We can solve it by two ways
  // 1- make setter and getter in parent protected so we can access it in inheritance but we cannot access it in main
  s1.Geoshape::setDim1(3); // Compile error
  s1.Geoshape::setDim2(4); // Compile error
  // 2- make type of inheritance is protected this mean any thing is public in parent it become protected in child

  SquareV2 s2(4);
  cout << s2.CalcArea();

  Circle c1(7);
  cout << c1.CalcArea();
  // Business failure
  c1.setDim1(5);
  c1.setDim2(6);
  cout << c1.CalcArea();

  Tri t1(4, 5);
  cout << t1.CalcArea();
}
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
//! Types of Inheritance:
// 1- Public
// every access modifier in parent will inheritance as they are in child
// 2- Protected
// public access modifier in parent will inheritance as protected  in child
// 3- Private
// public and protected access modifier in parent will inheritance as private in child
//! Tricks: In inheritance type private i can access public and protected in child in the same level becaus child inherit it as public or protected not private but if another child
//! inherit from this child can't access all of them becaus public and protected become private in the level of the first child

// Most Commonly used class: public class
// C#, java ONLY class: class public
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
class Point()
{
  int x, y;

public:
  void setX(int _x) { x = _x; }
  void setY(int _y) { y = _y; }
  int getX() { return x; }
  int getY() { return y; }
  Point() { x = y = 0; }
  Point(int _x, int _y)
  {
    x = _x;
    y = _y;
  }
  Point(int _num) { x = y = _num; } // constructor start, end
  ~Point() { cout << "Dtor" << endl; }
  Point(const Point &old)
  {
    cout << "Cpy ctor" << endl;
    this->x = old.x;
    this->y = old.y;
  }
}

int main()
{
  Point p1; // 8B // Stack

  Point parr[3]; // 3*9 // Stack
  // def ctor
  // def ctor
  // def ctor

  Point parr[3] = {Point(1, 2), Point(3, 4), Point(5)} // Anonymous object
  // 2p def ctor
  // 2p def ctor
  // 1p def ctor
  // dest
  // dest
  // dest

  Point(3, 4); // Anonymous object
  // will create it and destroy it in the same time - ctor dest

  Point *ptr;
  ptr = new Point;
  // creat only on object in heap
  // point def ctor

  delete ptr;

  ptr = new Point[3];
  // point def ctor
  // point def ctor
  // point def ctor

  delete[] ptr; // call dest 3 times

  //! With dynamic allocation we cannot create object cia parametrized ctor ONLY def ctor

  Point *ptr = new Point[3];

  //! pointer refer to array it act as array
  ptr[0].setX(2);
}
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
//! Aggregation / Association

class Shape
{
protected:
  int color;

public:
  void setColor(int _color) { color = _color; }
  int getColor() { return color; }
  Shape() { color = 0; }
  Shape(int _color) { color = _color; }
  ~Shape() { cout << "Shape Dtor" << endl; }
  Shape(const Shape &old)
  {
    cout << "Shape Cpy ctor" << endl;
    this->color = old.color;
  }
}

class Point()
{
  int x, y;

public:
  void setX(int _x) { x = _x; }
  void setY(int _y) { y = _y; }
  int getX() { return x; }
  int getY() { return y; }
  Point() { x = y = 0; }
  Point(int _x, int _y)
  {
    x = _x;
    y = _y;
  }
  Point(int _num) { x = y = _num; } // constructor start, end
  ~Point() { cout << "Dtor" << endl; }
  Point(const Point &old)
  {
    cout << "Cpy ctor" << endl;
    this->x = old.x;
    this->y = old.y;
  }
}

class Line() : public Shape
{
  Point start;
  Point end;
  // int color;

public:
  void setStart(Point _start) { start = _start; }
  void setEnd(Point _end) { end = _end; }
  // void setColor(int _color) { color = _color; }
  Point getStart() { return start; }
  Point getEnd() { return end; }
  // int getColor() { return color; }
  Line()
  {
    // start x0 y0 end x0 y0 color0
  }

  Line(int x1, int y1, int x2, int y2, int _color) : start(x1, y1), end(x2, y2), Shape(_color) {}

  Line(Point _start, Point _end, int _color)
  {
    start = _start; // memberwise copy
    end = _end;
    color = _color;
  }

  ~Line() {}
  Line(const Line &old)
  {
    cout << "Cpy ctor" << endl;
    this->start = old.start;
    this->end = old.end;
    this->color = old.color;
  }

  void Draw()
  {
    // inside graphics.h
    setcolor(color)
        line(start.getX(), start.getY(), end.getX(), end.getY())
  }
}

class Rect() : public Shape
{
  Point ul;
  Point lr;
  int color;

public:
  void setUl(Point _ul) { ul = _ul; }
  void setLr(Point _lr) { lr = _lr; }
  // void setColor(int _color) { color = _color; }
  Point getUl() { return ul; }
  Point getLr() { return lr; }
  // int getColor() { return color; }

  // Ctor chaining
  Rect() {}

  Rect(int x1, int y1, int x2, int y2, int _color) : ul(ulx1, y1), lr(x2, y2), Shape(_color){};

  -React() {}
  Rect(const Rect &old) : ul(old.ul), lr(old.lr)
  {
    cout << "Cpy ctor" << endl;
    // this->ul = old.ul;  // useless
    // this->lr = old.lr;  // useless
    this->color = old.color;
  }

  void Draw()
  {
    // inside graphics.h
    setcolor(color);
    rectangle(ul.getX(), ul.getY(), lr.getX(), lr.getY());
  }
}

class Triangle()
{
  Point p1;
  Point p2;
  Point p3;
  int color;

public:
  void setP1(Point _p1) { p1 = _p1; }
  void setP2(Point _p2) { p2 = _p2; }
  void setP3(Point _p3) { p3 = _p3; }
  void setColor(int _color) { color = _color; }
  Point getP1() { return p1; }
  Point getP2() { return p2; }
  Point getP3() { return p3; }
  int getColor() { return color; }
  Triangle()
  {
    color = 0;
  }
  Triangle(int x1, int y1, int x2, int y2, int x3, int y3, int _color) : p1(x1, y1), p2(x2, y2), p3(x3, y3)
  {
    color = _color;
  }
  ~Triangle() {}
  Triangle(const Triangle &old) : p1(old.p1), p2(old.p2), p3(old.p3)
  {
    color = old.color;
  }
  void Draw()
  {
    setcolor(color);
    line(p1.getX(), p1.getY(), p2.getX(), p2.getY());
    line(p2.getX(), p2.getY(), p3.getX(), p3.getY());
    line(p3.getX(), p3.getY(), p1.getX(), p1.getY());
  }
}

class Picture
{
private:
  Line *lptr;
  int lsize;
  Rect *rptr;
  int rsize;

public:
  void setLines(Line *_lptr, int _lsize)
  {
    lptr = _lptr;
    lsize = _lsize;
  }
  void setRects(Rect *_rptr, int _rsize)
  {
    rptr = _rptr;
    rsize = _rsize;
  }
  Picture()
  {
    lptr = NULL;
    lsize = 0;
    rptr = NULL;
    rsize = 0;
  }
  Picture(Line* _ptr, int _lsize, Rect* )rptr, in _rsize)
  {
    lptr = _lptr;
    lsize = _lsize;
    rptr = _rptr;
    rsize = _rsize;
  }
  void DoIt()
  {
    for (int i = 0; i < lsize; i++)
    {
      lptr[i].Draw();
    }
    for (int i = 0; i < rsize; i++)
    {
      rptr[i].Draw();
    }
  }
};

int main()
{
  initgraph();
  Picture p1; // lptr=null, rptr=null, lsize=0, rsize=0

  Line larr[3] = {Line(), Line(), Line()};
  Rext *rptr = new Rect[3];

  // Make Relationship
  p1.setLines(larr, 3);
  p1.setRects(rptr, 3);

  // p1 // lptr=0x10, lsize=3, rptr=0x50, rsize=3
  p1.DoIt();

  // Cancel relationship
  p1.setLines(Null, 0);
  p1.setRects(Null, 0);
  // p1 // lptr=null, lsize=0, rptr=null, rsize=0
}
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
//! Day 7:

#include <iostream>
using namespace std;

class Base
{
protected:
  int x, x;

public:
  void setX(int _x) { x = _x; }
  void setY(int _y) { y = _y; }
  int getX() { return x; }
  int getY() { return y; }
  Base(){x = y = 0} Base(int _x, int _y)
  {
    x = _x;
    y = _y;
  }
  ~Base() {}
  Base(const Base &old)
  {
    x = old.x;
    y = old.y;
  }

  void show()
  {
    cout << "I'm Base" << endl;
  }
};

//! Note => if i don't write the type of inheritance it will private by default
class Derived : public Base
{
protected:
  int z;

public:
  void setZ(int _z) { z = _z; }
  int getZ() { return z; }
  Derived() { x = y = z = 0; }
  Derived(int _x, int _y, int _z)
  {
    x = _x;
    y = _y;
    z = _z;
  }
  ~Derived() {}
  Derived(const Derived &old) : Base(old)
  {
    z = old.z;
  }
  void show()
  {
    cout << "I'm Derived" << endl;
  }
};

class Derived2 : public Derived
{
protected:
  int j;

public:
  void setJ(int _j) { j = _j; }
  int getJ() { return j; }
  Derived2() { j = 0; }
  Derived2(int _x, int _y, int _z, int _j) : Derived(_x, _y, _z)
  {
    j = _j;
  }
  Derived2(const Derived2 &old) : Derived(old)
  {
    j = old.j;
  }
  ~Derived2() {}
  void show()
  {
    cout << "I'm Derived2" << endl;
  }
};

int main()
{
  // #4
  Base *bPtr = new Derived(1, 2, 3); // True
                                     // الاب يحتوي جميع ابنائه
  // is A
  // car is a vehicle
  // truck is a vehicle
  //! Rule: We can create object from child and points it cia pointer of its base

  // bPtr->setZ(22);  // Error
  // bPtr->z=22;      // Error

  bPtr->show(); // I'm Base

  Derived *dPtr = new Derived2(1, 2, 3);
  dPtr->show(); // I'm Derived

  Base *b2Ptr = new Derived2(5, 6, 7, 8);
  b2Ptr->show(); // I'm Base

  // #3
  Derived2 d2; // Stack 16B // x,y,z,j,show,show,show
  d2.show();   // I'm Derived2
  Derived2 *d2Ptr = &d2;
  d2Ptr->show(); // I'm Derived2
  d2Ptr = new Derived2(3, 4, 5, 6);
  d2Ptr->show(); // I'm Derived2

  // #2
  Derived d1; // Stack 12B // x,y,z,show,show
  d1.show();  // I'm Derived
  Derived *dPtr = &d1;
  dPtr->show(); // I'm Derived
  dPtr = new Derived(3, 4, 5);
  dPtr->show(); // I'm Derived

  // #1
  Base p1;   // Stack 8B
  p1.show(); // I'm Base
  Base *bPtr = new Base(3, 4);
  (*bPtr).show(); // I'm Base
  bPtr->show();   // I'm Base
}

//! #4 Early / static Binding:
// When pointer from parent points object from its child when call overriden method Compiler will EARLY retrieve copy of pointer not copy of object
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
// Logic: I want the method in child (object) not in parent (pointer)
//! Is there a solution make pointer of Base will retrieve copy of overriden method that belong to object not pointer?
// !Yes, Late / Dynamic Binding:
// When pointer from parent points object from child when call overriden method compiler will later retrieve copy of object not copy of pointer

//! We do that via 4 steps:
// 1- Function in base class will be public and virtual
// 2- class will inherits base must Inherit public
// 3- overriden function in child class must be public
// 4- pointer from parent pointer object from child

#include <iostream>
using namespace std;

class Base
{
protected:
  int x, x;

public:
  void setX(int _x) { x = _x; }
  void setY(int _y) { y = _y; }
  int getX() { return x; }
  int getY() { return y; }
  Base(){x = y = 0} Base(int _x, int _y)
  {
    x = _x;
    y = _y;
  }
  ~Base() {}
  Base(const Base &old)
  {
    x = old.x;
    y = old.y;
  }

  virtual void show()
  {
    cout << "I'm Base" << endl;
  }
};

//! Note => if i don't write the type of inheritance it will private by default
class Derived : public Base
{
protected:
  int z;

public:
  void setZ(int _z) { z = _z; }
  int getZ() { return z; }
  Derived() { x = y = z = 0; }
  Derived(int _x, int _y, int _z)
  {
    x = _x;
    y = _y;
    z = _z;
  }
  ~Derived() {}
  Derived(const Derived &old) : Base(old)
  {
    z = old.z;
  }
  /*virtual*/ void show()
  {
    cout << "I'm Derived" << endl;
  }
};

class Derived2 : public Derived
{
protected:
  int j;

public:
  void setJ(int _j) { j = _j; }
  int getJ() { return j; }
  Derived2() { j = 0; }
  Derived2(int _x, int _y, int _z, int _j) : Derived(_x, _y, _z)
  {
    j = _j;
  }
  Derived2(const Derived2 &old) : Derived(old)
  {
    j = old.j;
  }
  ~Derived2() {}
  /*virtual*/ void show()
  {
    cout << "I'm Derived2" << endl;
  }
};

int main()
{
  Base *bPtr = new Derived2(2, 3, 4);
  bPtr->show(); // I'm Derived

  Derived *dPtr = new Derived2(2, 3, 4);
  dPtr->show(); // I'm Derived2

  Base *bPtr = new Derived(3, 4);
  bPtr->show(); // I'm Derived
}

//! NOTE => virtual function will inherits i don't need write virtual in every class i write it in patent class ONLY and it was inherits to all childs
//! and if write virtual from first child it was inherits to another child but still pointer from parent retrieve copy of pointer not copy of object
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
class Geoshape
{
protected:
  float dim1, dim2;

public:
  void setDim1(float _dim1){dim1 = _dim1};
  void setDim2(float _dim2){dim2 = _dim2};
  float getDim1(){return dim1};
  float getDim2(){return dim2};

  Geoshape()
  {
    dim1 = dim2 = 0;
  }

  Geoshape(float _dim1, float _dim2)
  {
    dim1 = _dim1;
    dim2 = _dim2;
  }

  Geoshape(const Geoshape &old)
  {
    dim1 = old.dim1;
    dim2 = old.dim2;
  }
  ~Geoshape() {}

  virtual float CalcArea() { return -1; }
}

//! Rectangle
class Rect : public Geoshape
{
public:
  Rect() { dim1 = dim2 = 0; }
  Rect(float _dim1, float _dim2) : Geoshape(_dim1, _dim2) {}
  Rect(const Rect &old) : Geoshape(old) {}
  ~Rect() {}
  float CalcArea() { return dim1 * dim2; }
}

//! Square
class Square : public Geoshape
{
public:
  Square()() {}
  Square(float dim) : Geoshape(dim, dim)
  {
    // dim1 = dim2 = dim;
  }
  Square(const Square &old) : Geoshape(old) {}
  ~Square() {}
  float CalcArea() { return dim1 * dim1; }

  //! Function overriding
  void setDim1(float _dim1){dim1 = dim2 = _dim1};
  void setDim2(float _dim2){dim2 = dim1 = _dim2};
}

//! SquareV2
class SquareV2 : public Rect
{
public:
  ~SquareV2() {}
  SquareV2(float _dim) : Rect(_dim, _dim) {}

  //! i don't need to create function to CalcArea
}

//! Circle
class Circle : public Geoshape
{
public:
  Circle() {}
  Circle(float _radius) : Geoshape(_radius, _radius)
  {
    // dim1 = dim2 = _radius;
  }

  float CalcArea() { return 3.14 * dim1 * dim2; }
}

class Tri : public Geoshape
{
public:
  Tri() {}
  Tri(float base, float height) : Geoshape(_dim1, _dim2)
  {
    // dim1 = base;
    // dim2 = height;
  }
  float CalcArea() { return 0.5 * dim1 * dim2; }
};

float SumOfAreas(Rect *rptr, int rSize, Square *sptr, int sSize, Tri *tptr, int tSize)
{
  float sum = 0;
  for (int i = 0; i < rSize; i++)
  {
    sum += rptr[i].CalcArea();
  }
  for (int i = 0; i < sSize; i++)
  {
    sum += sptr[i].CalcArea();
  }
  for (int i = 0; i < tSize; i++)
  {
    sum += tptr[i].CalcArea();
  }
  return sum;
}

// Calculate Sum of Areas
// Business failure for Open Closed Principle
//! Code to be applicable all the time
float SumOfAreasV02(Geoshape *gparam[], int size)
{
  float sum = 0;
  for (int i = 0; i < size; i++)
  {
    sum += gparam[i]->CalcArea();
  }
  return sum;
}

in main()
{
  Rect r1(3, 4);
  Geoshape *gptr = &r1;
  cout << gptr->CalcArea() << endl; // 12

  Geoshape *gPtr = new Rect[3];
  gPtr[0].CalcArea(); // zero

  Rect rarr[3] = {React(3, 4), React(1, 2), React(2, 2)} Geoshape * gptr[3] = {rarr, &rarr[1], rarr[2]};

  cout << gptr[0]->CalcArea();   // 12
  cout << (*gptr[0]).CalcArea(); // 2
  cout << gptr[2]->CalcArea();   // 4

  Rect r1(3, 4);
  Square s1(10);
  Tri t1(3, 4);
  Geoshape *gPtr[3] = {&r1, &s1, &t1}; // T

  gPtr[0]->CalcArea(); // 12
  gPtr[1]->CalcArea(); // 100
  gPtr[2]->CalcArea(); // 6

  React rarr[3] = {Rect(3, 4), Rect(2, 2), Rect(10, 1)};
  Square s1(10);

  cout << SumOfAreas(rarr, 3, &s1, 1); // 12+4+10+100

  Geoshape obj;
  obj.CalcArea(); // -1
  // This is error business logic

  //! NOTE => If i want add any shape we should go add it to parameter of function we need fix this problem
  //! We should prevent make object from the parent (Geoshape) becaus it as blueprint to childs

  // #1 SumOfAreasV02
  React rarr[3] = {Rect(3, 4), Rect(2, 2), Rect(10, 1)};
  Square s1(10);
  Tri tarr[2] = {Tri(3, 4), Tri(5, 6)};
  Circle *cptr = new Circle(10);

  Geoshape *gptr[7] = {rarr, &rarr[2], &rarr[3], &s1, tarr, &tarr[1], cptr};
  //! Now i can add any shape as we like without edit function (function become close ) like this:
  Geoshape *gptr[3] = {rarr, &rarr[1], &rarr[2]};

  Geoshape *gptr[4] = {rarr, &rarr[1], &rarr[2], &tarr[1]};

  cout << SumOfAreasV02(gptr, 7); // 12+10+4+10+100+15.5+314
}
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
//! Restrict Create object from Geoshape:

class Geoshape
{
protected:
  float dim1, dim2;

public:
  void setDim1(float _dim1){dim1 = _dim1};
  void setDim2(float _dim2){dim2 = _dim2};
  float getDim1(){return dim1};
  float getDim2(){return dim2};

  //! (constructors) useful in composition or inheritance
  Geoshape()
  {
    dim1 = dim2 = 0;
  }

  Geoshape(float _dim1, float _dim2)
  {
    dim1 = _dim1;
    dim2 = _dim2;
  }

  Geoshape(const Geoshape &old)
  {
    dim1 = old.dim1;
    dim2 = old.dim2;
  }
  ~Geoshape() {}

  //! Pure virtual function
  virtual float CalcArea() = 0;
}

//! Rectangle
class Rect : public Geoshape
{
public:
  Rect() { dim1 = dim2 = 0; }
  Rect(float _dim1, float _dim2) : Geoshape(_dim1, _dim2) {}
  Rect(const Rect &old) : Geoshape(old) {}
  ~Rect() {}
  float calcArea() override // Safety factor // Compile error if the function name in child has different name of the function in parent
  {
    return dim1 * dim2;
  }
}

//! Square
class Square : public Geoshape
{
public:
  Square()() {}
  Square(float dim) : Geoshape(dim, dim)
  {
    // dim1 = dim2 = dim;
  }
  Square(const Square &old) : Geoshape(old) {}
  ~Square() {}
  float CalcArea() { return dim1 * dim1; }

  //! Function overriding
  void setDim1(float _dim1){dim1 = dim2 = _dim1};
  void setDim2(float _dim2){dim2 = dim1 = _dim2};
}

//! SquareV2
class SquareV2 : public Rect
{
public:
  ~SquareV2() {}
  SquareV2(float _dim) : Rect(_dim, _dim) {}

  //! i don't need to create function to CalcArea
}

//! Circle
class Circle : public Geoshape
{
public:
  Circle() {}
  Circle(float _radius) : Geoshape(_radius, _radius)
  {
    // dim1 = dim2 = _radius;
  }

  float CalcArea() { return 3.14 * dim1 * dim2; }
}

class Tri : public Geoshape
{
public:
  Tri() {}
  Tri(float base, float height) : Geoshape(_dim1, _dim2)
  {
    // dim1 = base;
    // dim2 = height;
  }
  float CalcArea() { return 0.5 * dim1 * dim2; }
};

int main()
{
  Geoshape obj(3, 4); // Compile Error

  Geoshape *gptr; // True
  gptr = new Rect(3, 4);

  // Search
  delete gptr; // Geoshape (pointer) dest => non make sense
  // How to call dest for object not pointer???
  //! Via Virtual destructor (Search)
}

//! Abstract class:
// class we cannot cerate object from it

//! How to make class abstract?
// abstract class is a class contains at least on pure virtual function

//! What is Pure virtual function => abstract function
// virtual function header ONLY =0;
// concrete class: normal class Stack, Complex, Rect

//! NOTE => We write override keyword to make compile give error if the function name in child different of function name in parent
//! override work with virtual function or virtual pure function ONLY
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #
//! Concrete class: normal class Stack, Complex, Rect

// pure virtual function must be overriden
// virtual function can [not must] be overriden

class TypeA
{
protected:
  int x;

public:
  void setX(int _x) { x = _x; }
  int getX() { return x; }
  TypeA() { x = 0; }
  TypeA(int _x){x = _x};
  virtual void Show() {} // virtual function can [not must] be overriden

  virtual void funcOne() = 0; // or abstract function
  virtual void funcTwo() = 0;
}

class TypeB : public TypeA
{
protected:
  int y;

public:
  void setY(int _y){y = _y};
  int getY(){return y};
  TypeB(){y = 0};
  TypeB(int _x, int _y) : TypeA(_x){y = _y};
  void funOne() override
  {
    cout << "override function one inside TypeB";
  }
};

class TypeC : public TypeB
{
protected:
  int z;

public:
  void setZ(int _z){z = _z};
  int getZ(){return z};
  TypeC(){z = 0};

  TypeC(int _x, int _y, int _z) : TypeB(_x, _y){z = _z};
  void funTwo() override
  {
    cout << "override function two inside TypeC";
  }

}

int
main()
{
  TypeA obj; // Compile Error => Abstract class
  TypeB obj; // Compile Error => Abstract class
  //! because function two if i don't override to it it will inherits as it (virtual pure function) so TypeB become abstract class
  TypeC obj; // True
}

//! NOTE: if i have virtual pure function in parent class and i don't override it in child class => it will inherits as it (virtual pure function) so child class become abstract class
//! Virtual pure function will inherits implicitly until i don't override copy from it
// #-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - #

class Shape
{

private:
  Shape **sptr; // Shape* sptr[???]
  int sSize;

public:
  void setShapes(Shape **_sptr, int _sSize)
  {
    sptr = _sptr;
    sSize = _sSize;
  }

  Picture()
  {
    sptr = Null;
    sSize = 0;
  }

  Picture(Shape **_sptr, int _sSize)
  {
    sptr = _sptr;
    sSize = _sSize;
  }

  void DoIt()
  {
    for (int i = 0; i < sSize; i++)
    {
      sptr[i]->Draw();
    }
  }
};

class Point()
{
  int x, y;

public:
  void setX(int _x) { x = _x; }
  void setY(int _y) { y = _y; }
  int getX() { return x; }
  int getY() { return y; }
  Point() { x = y = 0; }
  Point(int _x, int _y)
  {
    x = _x;
    y = _y;
  }
  Point(int _num) { x = y = _num; } // constructor start, end
  ~Point() { cout << "Dtor" << endl; }
  Point(const Point &old)
  {
    cout << "Cpy ctor" << endl;
    this->x = old.x;
    this->y = old.y;
  }
}

class Line() : public Shape
{
  Point start;
  Point end;
  // int color;

public:
  void setStart(Point _start) { start = _start; }
  void setEnd(Point _end) { end = _end; }
  // void setColor(int _color) { color = _color; }
  Point getStart() { return start; }
  Point getEnd() { return end; }
  // int getColor() { return color; }
  Line()
  {
    // start x0 y0 end x0 y0 color0
  }

  Line(int x1, int y1, int x2, int y2, int _color) : start(x1, y1), end(x2, y2), Shape(_color) {}

  Line(Point _start, Point _end, int _color)
  {
    start = _start; // memberwise copy
    end = _end;
    color = _color;
  }

  ~Line() {}
  Line(const Line &old)
  {
    cout << "Cpy ctor" << endl;
    this->start = old.start;
    this->end = old.end;
    this->color = old.color;
  }

  void Draw()
  {
    // inside graphics.h
    setcolor(color)
        line(start.getX(), start.getY(), end.getX(), end.getY())
  }
}

class Rect() : public Shape
{
  Point ul;
  Point lr;
  int color;

public:
  void setUl(Point _ul) { ul = _ul; }
  void setLr(Point _lr) { lr = _lr; }
  // void setColor(int _color) { color = _color; }
  Point getUl() { return ul; }
  Point getLr() { return lr; }
  // int getColor() { return color; }

  // Ctor chaining
  Rect() {}

  Rect(int x1, int y1, int x2, int y2, int _color) : ul(ulx1, y1), lr(x2, y2), Shape(_color){};

  -React() {}
  Rect(const Rect &old) : ul(old.ul), lr(old.lr)
  {
    cout << "Cpy ctor" << endl;
    // this->ul = old.ul;  // useless
    // this->lr = old.lr;  // useless
    this->color = old.color;
  }

  void Draw()
  {
    // inside graphics.h
    setcolor(color);
    rectangle(ul.getX(), ul.getY(), lr.getX(), lr.getY());
  }
}

class Triangle()
{
  Point p1;
  Point p2;
  Point p3;
  int color;

public:
  void setP1(Point _p1) { p1 = _p1; }
  void setP2(Point _p2) { p2 = _p2; }
  void setP3(Point _p3) { p3 = _p3; }
  void setColor(int _color) { color = _color; }
  Point getP1() { return p1; }
  Point getP2() { return p2; }
  Point getP3() { return p3; }
  int getColor() { return color; }
  Triangle()
  {
    color = 0;
  }
  Triangle(int x1, int y1, int x2, int y2, int x3, int y3, int _color) : p1(x1, y1), p2(x2, y2), p3(x3, y3)
  {
    color = _color;
  }
  ~Triangle() {}
  Triangle(const Triangle &old) : p1(old.p1), p2(old.p2), p3(old.p3)
  {
    color = old.color;
  }
  void Draw()
  {
    setcolor(color);
    line(p1.getX(), p1.getY(), p2.getX(), p2.getY());
    line(p2.getX(), p2.getY(), p3.getX(), p3.getY());
    line(p3.getX(), p3.getY(), p1.getX(), p1.getY());
  }
}

class Picture
{
private:
  Line *lptr;
  int lsize;
  Rect *rptr;
  int rsize;

public:
  void setLines(Line *_lptr, int _lsize)
  {
    lptr = _lptr;
    lsize = _lsize;
  }
  void setRects(Rect *_rptr, int _rsize)
  {
    rptr = _rptr;
    rsize = _rsize;
  }
  Picture()
  {
    lptr = NULL;
    lsize = 0;
    rptr = NULL;
    rsize = 0;
  }
  Picture(Line* _ptr, int _lsize, Rect* )rptr, in _rsize)
  {
    lptr = _lptr;
    lsize = _lsize;
    rptr = _rptr;
    rsize = _rsize;
  }
  void DoIt()
  {
    for (int i = 0; i < lsize; i++)
    {
      lptr[i].Draw();
    }
    for (int i = 0; i < rsize; i++)
    {
      rptr[i].Draw();
    }
  }
};

int main()
{
  Line larr[2] = {Line(2, 2, 2, 2, 2, ), Line(3, 3, 3, 3, 3)};
  Circle carr[2] = {Circle(), Circle()};
  Tri t(2, 3, 4, 5, 6, 7, 8);
  Rect r(2, 3, 4, 5, 6);

  Shape* sptr[6]={larr[,&larr[1],&carr,&carr[1],&t,&r};

  Picture p1;

  p1.setShapes(sptr, 6)

      p1.DoIt();

  p1.setShapes(Null, 0)
}