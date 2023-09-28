What is OOP?:
OOP is a concept and the first language apply it is Smalltalk
=> Object Oriented Programming
(OOP) means that we are going to write our code in a way where the data and functions of an object can be used by other objects

=> OOP is a programming paradigm that relies on the concept of classes and objects. It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes),
which are used to create individual instances of objects.

What is linear Programming?:
In linear programming all code in one file
or function has access to everything else inside it. This makes your programs hard to read because you have no idea what each part does without reading through every
line of code.
In addition, if there's any change made anywhere within this single block then they will affect everywhere else as well which could lead to bugs or errors being
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
The main idea from OOP:
1: Encapsulation (data hiding):
=> Encapsulation is the ability of objects to hide their internal workings from other objects. This is done by making a class that only exposes the methods and properties that are needed for other objects to use it.
via access modifier
2: Inheritance:
=> Inheritance is the ability of objects to inherit properties and methods from other objects. This is done by making a class that inherits from another class.
3: Polymorphism:
Polymorphism composed of two things:
1: Overloading:
=> Overloading is the ability of objects to have multiple methods with the same name but different parameters. This is done by making a class that has multiple methods with the same name but different parameters
by different types or counts
2: Overriding:
=> Overriding is the ability of objects to have methods with the same name and parameters as another object. This is done by making a class that inherits from another class and then overriding one of its methods.
if we say overriding we say inheritance two it related.

OOP depend on three ribs:
1: Encapsulation
2: Inheritance
3: Polymorphism
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
struct: data type with my own definition
class: data type with my own definition
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
what different between struct and class?:
The main differences between structs and classes in object-oriented programming (OOP) can vary depending on the programming language, but here are some common distinctions:

Default Behavior:
Struct: In many programming languages, structs are value types, meaning that when you assign a struct variable to another, a copy of the entire struct is made. Modifying one struct does not affect other instances.
Structs are typically stored on the stack.
Class: Classes are reference types, meaning that when you assign a class variable to another, you are assigning a reference to the same object. Modifying one instance can affect other references to the same object.
Classes are usually stored on the heap.

Default access modifier:
Class: will be private
Struct: will be public

Usage and Intended Purpose:
Struct: Structs are often used for representing lightweight data structures that hold simple groups of related data. They are typically used for small, self-contained pieces of data and are less commonly used
for encapsulating behavior or complex relationships. Structs are preferred when you need value semantics, performance efficiency, and if the data is immutable or doesn't require complex operations.

Class: Classes are designed to encapsulate both data and behavior. They are used for modeling complex objects with properties and methods, and they support features such as inheritance, polymorphism,
and encapsulation. Classes are suitable when you need reference semantics, more advanced features like inheritance, and when you want to create objects with complex behavior.
Inheritance:
Struct: In many languages, structs do not support inheritance or subclassing. They are standalone entities and cannot be used as a base for creating derived types.
Class: Classes can be used as base classes to create derived classes through inheritance. Inheritance allows derived classes to inherit and extend the properties and methods of the base class,
promoting code reuse and hierarchical relationships.

Performance Considerations:
Struct: Due to their value type nature and stack allocation, structs can be more memory-efficient and faster to access compared to classes.
They are often used for small data structures or in scenarios where performance is critical.
Class: Classes, being reference types and heap-allocated, may have a slightly higher memory overhead and indirection due to the reference mechanism. However, their benefits lie in their flexibility,
extensibility, and support for more complex features.

NOTE: It's worth noting that the specific behavior and features of structs and classes can vary between programming languages,
so it's essential to consult the documentation or specifications of the language you are using for more precise details.
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Function overloading:
Function overloading is a feature that allows us to have more than one function with the same name
but different parameters. This is useful when we want to perform the same operation on different types of data. or different counts.
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Abstraction:
Abstraction is the process of hiding the internal details and showing only the functionality to the user.
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
swap by value, swap by address, swap by reference
pass by value, pass by address, pass by reference
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Rules:
=> Any thing written inside class/struct is a member variable/function
=> any member in class/struct is called by object/instance name
=> public: member can be accessed inside/outside class/struct
=> private: member can be accessed only inside scope of class/struct

Example:
class Employee
{
..public:
....int id;
....int age;
....string name;
....float salary;
....void print()
....{
........cout << id << " " << name << " " << salary << endl;
....}
};

int main
{
..Employee emp1;
..emp1.id = 1; // Violation of OOP because data should be hidden (private)
..emp1.name = "Ahmed";
..emp1.salary = 1000;
..emp1.print();
}
caller: => emp1 is an object of class Employee caller is instance who is call the function inside the class/struct
To hidden data and open gates to write and read the data
=> we use access modifier we set the property and method is private
and make setters and getters function public
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
=> protected: member can be accessed only inside scope of class/struct and it's derived class
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Example:
class Complex
{
..private:
....int real;
....int img;
..public:
....void setReal(/_Complex_ this*/ int \_real) {real = \_real}
....void setImg(int \_img) {img = \_img}
....int getReal(/*Employee \*this \*/) {return real}
....int getImg() {return img}
....void printComplex()
....{
........cout << real << " + " << img << "i" << endl;
....}
.... Complex Add(/\*_/ Complex right)
{
.. // caller c1 // right c2
.. Complex retVal;
.. // retVal.real = left.real + right.real;
.. retVal.real = /_ caller _/ real + right.real;
.. // retVal.img = left.img + right.img;
.. retVal.img = /_ caller \*/ img + right.img;
.. return retVal;
.. // return value
..}
};

// standalone function
Complex Sub(Complex left, Complex right)
{
.. Complex retVal;
.. retVal.setReal(left.getReal() - right.getReal()); // we used setter and getter because i cannot access private member outside class
.. retVal.setImg(left.getImg() - right.getImg());
.. return retVal;
}

int main
{
..Complex c1, c2, c3;
.. c1.setReal(1);
.. c1.setImg(2); // Compiler Complex::setId(&c1, 2)(address, value)
.. c2.setReal(3);
.. c2.setImg(4);

.. c1.printComplex();
.. c2.printComplex();

.. c1 = c1.Add(c1, c2); // passing values
}

NOTE: always caller passing as a first parameter

What is prefer member method or standalone function?:
=> is a main rule if i can make it member i make it member if i can't i make it standalone function
NOTE: Any member function has hidden input parameter called className \*this

void setId(int \_id)
{
.. (\*this).id = \_id;
.. this->id = \_id;
..id = \_id;
}

NOTE: standalone function has not \*this i call it by function name (not there caller)
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
NOTE: If want save the memory we pass the parameter by reference because reference don't take space from memory
NOTE: But there issue if i pass by reference i can change the value via this reference to prevent this we set (const) before the parameter

Complex Add(const Complex& right)
{
.. Complex retVal;
.. retVal.real = /_ caller _/ real + right.real;
.. retVal.img = /\_ caller \*/ img + right.img;
.. // issue
.. right.img = -1234 // compile error but if don't put const will work and this is issue
.. return retVal;
..}
};
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
class Complex
{
..private:
....int real;
....int img;
..public:
....void setReal(/_Complex_ this*/ int \_real) {real = \_real}
....void setImg(int \_img) {img = \_img}
....int getReal(/*Employee \*this \*/)
.... {return real}
....int getImg()
.... {return img}
....void printComplex()
....{
........cout << real << " + " << img << "i" << endl;
....}
.... Complex Add(/\*_/ Complex right)
{
.. // caller c1 // right c2
.. Complex retVal;
.. // retVal.real = left.real + right.real;
.. retVal.real = /_ caller _/ real + right.real;
.. // retVal.img = left.img + right.img;
.. retVal.img = /_ caller \*/ img + right.img;
.. return retVal;
.. // return value
..}
};

Complex Sub(const Complex& left, const Complex& right)
{
.. Complex retVal;
.. retVal.setReal(left.getReal() - right.getReal()); // compile error to fix this error we make getter is constant
.. retVal.setImg(left.getImg() - right.getImg()); // compile error
// ISSUE
.. right.setReal(-1234)
.. return retVal;
}

int main
{
..Complex c1, c2, c3;
.. c1.setReal(1);
.. c1.setImg(2);
.. c2.setReal(3);
.. c2.setImg(4);

.. c1.printComplex();
.. c2.printComplex();

.. c1 = c1.Add(c1, c2); // passing values
}

NOTE: we put const in method member after declaration and before the body

int getReal() const
.. {return real}
int getImg() const
.. {return img}

NOTE: That's how we guarantee this function will not changer the parameter
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Function overloading: functions in the same scope have the same name but different input parameters number or different data type ignore return type
Default argument: must be from right to left in params
if there is default argument in middle must all of right of it be default also

How initiate in member function:
initiate object
void Initiate()
{
.. this-> real=img=0;
}

void Initiate(int \_real, int \_img)
{
.. this-> real=\_real;
.. img=\_img
}

initiate it in number
void Initiate(int num)
{
.. this-> real= img = num;
}

// Ambiguity error if i use overloading with default parameter like this

void Initiate()
{
.. this-> real=img=0;
}

void Initiate(int real=0, int img=0 )
{
.. this-> real=\_real;
.. img=\_img
}

c.Initiate() // Compile error Ambiguity

but this is headache every time i declear function so we use ctor to declaration the intial values
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Constructor:
=> Special function inside class/struct implicitly exist will be called automatically -we cannot call it- Once we create object from the class/struct
operating system will generate ctor implicitly and it be empty

How to write ctor explicitly?:
1: the same name of class/struct
2: has no return type until void (void as a return type)
3: can be overloaded
4: must be public // private we cannot create object

Once i create one ctor the operating system doesn't make any ctor
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Destructor:
=> Special function inside class/struct will be called automatically
cannot be called implicitly exist
Once object destructed from memory once object reach end of its scope

How to write dest explicitly?:
1: the same name of class ()
2: before it ~ [tilde]
3: has no return type
4: has no params -parameterless- cannot be overloaded -just one of it-
5: must be public (if we set it private we give compile error)

NOTE: last object created first object will destroyed

When to use destructor?:
1: dynamic allocation [heap]
2: connect to db
3: read / write from file

Main usage of destructor:
1: release memory
2: close file
3: close connection
4: close socket
5: close database connection
6: close any resource
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
To organize my code i can put prototype of the function but the implementation under the main function but i put the class name after the function name like this

in the class:
void setReal(int \_real)

under the main:
void Complex::setReal(int \_real)
{
.. real = \_real;
}
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Stack:
=> type of data structure
=> LIFO (Last In First Out)
=> push (add) pop (remove)

class Stack
{

..private:
....int\* arr;
....int tos;
.... int size;
..public:
// setters & getters NO
.... in getTos(){return tos;} // this return value
.... int \*getArr(){return arr;} // Dangerous because this will return address and i can make pointer and change the value and this is wrong

.. Stack()
{

.... cout<<"ctor<<endl;"
.... tos = 0;
.... size=5;
.... arr = new int[size];
..}

.. Stack(int \_size)
{
.... tos = 0;
.... size = \_size;
.... arr = new int[size];
..}

.. ~Stack(){
...for(int i=0; i<size; i++)
...{
......arr[i] = -1234
...}
....... delete [] arr;
}

// Push
.. void Push(int value)
{
.... // if(this->tos != this.->size){
.... if(!IsFull()){
.. arr[tos++]=value
..} else
{
.... cout<<"Stack is full"<<endl;
..}
}

// Pop
int Pop()
{
.. int retVal = -1111;
.. //if(this->tos != 0)
.. if(!IsEmpty()){

..{
.... return arr[--tos];
..} else
..{
.... cout<<"Stack is empty"<<endl;
..}
return retVal
..}

// Check stack availability
.. IsFull(){
.... return this->tos == size;
..}

.. IsEmpty(){
.... return this->tos == 0;
..}

}

int main
{
.. Stack s1;
.. int \*ptr=s1.getArr()
.. ptr[3] == 22;
}
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Template => Generics :
=> You can write datatype once and can be applicable for any data type

Example:

template <class DT>

class Stack
{
..private:
....DT\* arr;
....int tos;
.... int size;
..public:
// setters & getters NO
.... in getTos(){return tos;} // this return value
.... int \*getArr(){return arr;} // Dangerous because this will return address and i can make pointer and change the value and this is wrong

.. Stack()
{
.... cout<<"ctor<<endl;"
.... tos = 0;
.... size=5;
.... arr = new DT[size];
..}

.. Stack(int \_size)
{
.... tos = 0;
.... size = \_size;
.... arr = new DT[size];
..}

.. ~Stack(){
...for(int i=0; i<size; i++)
...{
......arr[i] = -1234
...}
....... delete [] arr;
}

// Push
.. void Push(DT value)
{
.... // if(this->tos != this.->size){
.... if(!IsFull()){
.. arr[tos++]=value
..} else
{
.... cout<<"Stack is full"<<endl;
..}
}

// Pop
DT Pop()
{
.. DT retVal = -1111;
.. //if(this->tos != 0)
.. if(!IsEmpty()){

..{
.... return arr[--tos];
..} else
..{
.... cout<<"Stack is empty"<<endl;
..}
return retVal
..}

// Check stack availability
.. IsFull(){
.... return this->tos == size;
..}

.. IsEmpty(){
.... return this->tos == 0;
..}

}

int main
{
.. Stack s1; // Compile error
.. Stack<int> s1;
.. Stack<char> s2;
.. Stack<Complex> s3;
=> Compiler will generate -in compile Time- copy of your class and replace DT -> int
.. s1.Push(22)
.. s2.Push('M')
.. s2.Push(2, 3)
}

NOTE: If i declear the prototype function in class and implementation under the main function we and i want make it generic type
we should: write template <class DT> before every function
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Standalone function cannot access private member of class
Standalone function can access private member of class if it is friend to the class

How can make friend function:

NOTE: Friend function we can consider it like member but it is not member [there is not *this] and i call it by the function name not the object name (BIG ISSUE TO CPP)
Friend function make CPP not pure OOP

template <class DT>

class Stack
{
..private:
....DT\* arr;
....int tos;
.... int size;
..public:
// setters & getters NO
.... in getTos(){return tos;} // this return value
.... int \*getArr(){return arr;} // Dangerous because this will return address and i can make pointer and change the value and this is wrong

.. Stack()
{
.... cout<<"ctor<<endl;"
.... tos = 0;
.... size=5;
.... arr = new DT[size];
..}

.. Stack(int \_size)
{
.... tos = 0;
.... size = \_size;
.... arr = new DT[size];
..}

.. ~Stack(){
...for(int i=0; i<size; i++)
...{
......arr[i] = -1234
...}
....... delete [] arr;
}

// Push
.. void Push(DT value)
{
.... // if(this->tos != this.->size){
.... if(!IsFull()){
.. arr[tos++]=value
..} else
{
.... cout<<"Stack is full"<<endl;
..}
}

// Pop
DT Pop()
{
.. DT retVal = -1111;
.. //if(this->tos != 0)
.. if(!IsEmpty()){

..{
.... return arr[--tos];
..} else
..{
.... cout<<"Stack is empty"<<endl;
..}
return retVal
..}

// Check stack availability
.. IsFull(){
.... return this->tos == size;
..}

.. IsEmpty(){
.... return this->tos == 0;
..}

// Friend function
.. friend void PrintStack(Stack param);
}
Example:
void PrintStack(Stack param){
.. for(int i=0; i< param.tos; i++){
.... cout<<param.arr[i]<<endl;
..}
}

int main()
{
.. Stack<int> s1;
.. s1.Push(10);
.. s1.Push(20);
.. s1.Push(30);

.. PrintStack(s1); // pass by VALUE
.. PrintStack(s1); // pass by VALUE // will make issue
}
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
To create variable to count the count of object will created: we use static variable

Static variable in class in cPP: member variable withe keyword static
Static variable make operating system will create ONLY one copy of it in BSS regardless count of object created

cout<<s1.counter; // 3 will work bur does'nt make sense because it not specify for s1
Static variable called class variable or shared variable
cout<<Stack::counter; // 3

Stack::counter=33 // To prevent change it we make static variable is private and make getter to get the value
cout<<s1.getCounter(); 33 will work bur does'nt make sense because it not specify for s1
=> So we make getCounter is statice function to make one function only and can't object call it we call it by class name
cout<<Stack::getCounter(); // 3 This right way (best practice)

NOTE: With class variable must initialize it (we cannot initialize statice variable inside class we give compile error)
NOTE: Initialization for any class variable regardless access modifier
int Stack::counter=0;
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
=> None statice function can access statice variable but to make it sense we make it statice function
=> Static function cannot access none static variable (because statice function don't have this)

=> None statice function can access statice variable directly
=> Static function can access none static variable indirectly

Example:
static int getCounter()
{
.. Stack temp;
.. tep.tos=22;
.. return counter
}

NOTE: Compiler execute static variable or function it first time ONLY
static keep alive until close the application until object is destroyed (it is not related with object)
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
there problem in line 434
Day 4:

# VIP NOTE:

Once i make passing object by value operating system making thing called # Bitwise Copy create object (without ctor) as copy and past
If i return object by value it doesn't return the object it make Bitwise Copy and return copy called Temporarily anonymous object

And in the end of ths scope all this objects will destroyed until objects was created without ctor so the number of destructor not equal number of constructor

RVO => return value optimization
Note: standalone function doesn't has this until i make it friendly function
Always bitwise copy happen to object in stack not heap

template <class DT>

class Stack
{
..private:
....DT\* arr;
....int tos;
.... int size;
..public:
// setters & getters NO
.... in getTos(){return tos;} // this return value
.... int \*getArr(){return arr;} // Dangerous because this will return address and i can make pointer and change the value and this is wrong

.. Stack()
{
.... cout<<"ctor<<endl;"
.... tos = 0;
.... size=5;
.... arr = new DT[size];
..}

.. void printStack()
{
.. if(!param.isEmpty)
.. {
.. .. for(int i=0; i< param.tos; i++)
.. .. {
.. .. .. cout<<param.arr[i]<<endl;
.. .. }
..}
}
}

int main()
{
.. Stack<int> s1;
.. s1.Push(10);
.. s1.Push(20);
.. s1.Push(30);

.. PrintStack(s1); // pass by VALUE
.. PrintStack(s1); // pass by VALUE // will make issue
}



