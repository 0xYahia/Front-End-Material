//! Day 1:
//! React is:
//  A JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.
// React can be used as a base in the development of single-page or mobile applications,
// as it is optimal for fetching rapidly changing data that needs to be recorded. However,
// fetching data is only the beginning of what happens on a web page,
// which is why complex React applications usually require the use of additional libraries for state management,
// routing, and interaction with an API Redux, React Router and axios are examples of such libraries.

//! React is declarative:
//  React makes it painless to create interactive UIs. Design simple views for each state in your application,
// and React will efficiently update and render just the right components when your data changes.
// Declarative views make your code more predictable, simpler to understand, and easier to debug.

//! React is component-based:
//  Build encapsulated components that manage their own state,
// then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates,

// Learn Once, Write Anywhere: We don’t make assumptions about the rest of your technology stack
// so you can develop new features in React without rewriting existing code.
// React can also render on the server using Node and power mobile apps using React Native.
// #------------------------------------------------------------------------------------------------------------------------------#
// JSX: JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript.
// JSX gets compiled to React.createElement() calls which return plain JavaScript objects called “React elements”.

// JSX is an XML/HTML-like syntax used by React that extends ECMAScript so that XML/HTML-like text can co-exist with JavaScript/React code.

// JSX Rules:

// 1: JSX must have only one parent element.
// 2: JSX must be closed.
// #------------------------------------------------------------------------------------------------------------------------------#
// Fragment: A common pattern in React is for a component to return multiple elements. without adding extra nodes to the DOM.
// <Fragments></Fragments>: let you group a list of children without adding extra nodes to the DOM. or <> </>
// #------------------------------------------------------------------------------------------------------------------------------#
// What is Virtual DOM in react?:
// The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”,
// representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.
// This process is called reconciliation.
// it's a copy of the real DOM in memory, and it's a representation of the UI.
// The virtual DOM is a node tree that lists elements, their attributes and content as objects and their properties.
// it's depend on algorithm to compare the virtual DOM with the real DOM and update the real DOM with the changes only.
// this algorithm is called (diffing algorithm)
// the bigO of this algorithm is O(n) which is linear time. it's very fast. and it's the reason why react is fast.
// #------------------------------------------------------------------------------------------------------------------------------#
// To write javascript in JSX: use {} to write javascript in JSX.
//! Example:
import { useEffect, useState } from "react";

function Counter() {
  // 1) State
  const [count, setCount] = useState(0);

  // 2) Handlers
  const handleClick = () => {
    setCount(count++);
  };

  // 3) UI
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

/*export default*/ Counter;
// #------------------------------------------------------------------------------------------------------------------------------#
// State: State is a JavaScript object that stores a component's dynamic data and determines the component's behavior.
// and returns array with two elements: the current state value and a function that lets you update it.
// Example: const [count, setCount] = useState(0);
//! NOTE: When we change the state, the component re-renders itself and its children.
// #------------------------------------------------------------------------------------------------------------------------------#
// Keys: Keys help React identify which items have changed, are added, or are removed.
// Keys should be given to the elements inside the array to give the elements a stable identity.
// Keys used within arrays should be unique among their siblings.

// Don’t use indexes as keys if the order of items may change. This can negatively impact performance
// and may cause issues with component state. because the key is used to identify which items have changed, are added, or are removed.
// #------------------------------------------------------------------------------------------------------------------------------#
//! NOTE: in onClick event carry the function without () because it takes reference to the function.
// But if you put () it will call the function immediately.
//! NOTE: If my function takes parameters, I can use an arrow function to pass the parameters.
// #------------------------------------------------------------------------------------------------------------------------------#
// State: is internal data of the component
// and it's private to the component and can't be accessed outside of the component.
// Props: is external data of the component
// and it's public to the component and can be accessed outside of the component.
// #------------------------------------------------------------------------------------------------------------------------------#
//! NOTE: If have conflict between props and state, delete the state and use props only.
// I can do without state and use props only. because props is external data of the component
// #------------------------------------------------------------------------------------------------------------------------------#
// Left state up: is a technique for sharing state between React components.
// If two or more components need access to the same state, then that state needs to be lifted up
// to their closest common ancestor.
// #------------------------------------------------------------------------------------------------------------------------------#
//! NOTE: If i have array and i want edit for the element in the array, the first should i think i get index of the element
// and then i can edit for the element in the array.
// #------------------------------------------------------------------------------------------------------------------------------#
// There three steps to update the state:
// 1- Clone: clone the state.
// 2- Edit: edit the cloned state.
// 3- Set: set the cloned state.

//! Example:
const [counters, setCounter] = useState([
{ id: 1, count: 0 },
{ id: 2, count: 3 },
{ id: 3, count: 0 },
]);

const handleDelete = (id) => {
// 1) Clone
// const newCounters = [...counter];
const index = newCounters.findIndex((item) => item.id === id);
const newCounter = { ...newCounters[index] };
// 2) Edit
  newCounter.count++;
  newCounters[index] = newCounter;
// 3) Set
  setCounters(newCounters);

// OR use map
  const newCounters = counters.map((item) => item.id === id ? { ...item, count: item.count + 1 } : item);
setCounters(newCounters);
};
// #------------------------------------------------------------------------------------------------------------------------------#
//! NOTE: To make two child components communicate with each other, we need to lift the state up to their parent component.
// #------------------------------------------------------------------------------------------------------------------------------#
// React Router: is a collection of navigational components that compose declaratively with your application.
// BrowserRouter: is a component that wraps around your application and provides all the routing capabilities.
// Routes: is a component that is used to wrap your routes.
// Route: is a component that is used to define the matching pattern between the URL and the component to render.
// Route: takes two props: path and component.
// path: is a string that represents the matching pattern in the URL.
// component: is a component that will be rendered when the path matches the URL.
//! NOTE: If i want component to be rendered in all routes, i should put it outside of the all routes. inside the BrowserRouter.

// Link: is a component that is used to navigate between routes. without reloading the page.
// Link: takes one prop: to.
// to: is a string that represents the path to navigate to.

//! NOTE: To make nested routes, i should put the nested routes inside the parent route.
// And Route inside Routes may take index prop to make it as a default route.
// Outlet: is a component that is used to render the nested routes.

// Switch (Search): is a component that is used to render the first child Route or Redirect that matches the location.
// #------------------------------------------------------------------------------------------------------------------------------#
// useNavigate: is a hook that is used to navigate between routes.
// useNavigate: is a function it will return a navigate function.

// navigate function: takes one argument: to.
// to: is a string that represents the path to navigate to.

// Of the cases we use navigate function: when we want to navigate after some action. like: submit form.
// Or when we want to navigate from outside of the component.
// Or when user logged in or logged out.
// #------------------------------------------------------------------------------------------------------------------------------#
// Day 2:
// useLocation: is a hook that is used to access the location object. it will return location object.
// location object: is an object that represents the current URL. it has three properties: hash, key, pathname, search, state.
// Hash: is a string that represents the hash fragment of the URL.
// Key: is a string that represents a unique key for the current location.
// Pathname: is a string that represents the path of the URL.
// Search: is a string that represents the query string of the URL. it starts with ?.
// #------------------------------------------------------------------------------------------------------------------------------#
// useSearchParams: is a hook that is used to access the query string of the URL. it will return searchParams object.
// it's a collection of key/value pairs of the query string. it's like useState getter and setter.
// searchParams object: has three methods: get, getAll,

//! Example:
const [searchParams, setSearchParams] = useSearchParams();

console.log(searchParams.get('name'));   // it takes key and return value. (string)
console.log(searchParams.getAll('name'));//  it takes key and return value. (array of values)
// #------------------------------------------------------------------------------------------------------------------------------#
// Dynamic Routes: is a route that has a dynamic segment in the path.
// Dynamic segment: is a segment that starts with :.

// Example:
<Route path="/products/:id" element={<ProductDetails />} />
// To access the dynamic segment, we use useParams hook.
// useParams: is a hook that is used to access the dynamic segment of the URL. it will return params object.
// params object: is an object that represents the dynamic segment of the URL. it has properties that match the dynamic segments.

Example:
<Route path="/products/:productId" element={<ProductDetails />} />

import { useParams } from 'react-router-dom';

export /*default*/ function ProductDetails() {
const {productId} = useParams();
return <h1>Product Details - {productId}</h1>;
}

//! NOTE: Maybe i have more than one dynamic segment in the path.
//! Example:
<Route path="/products/:productId/:view" element={<ProductDetails />} />

import { useParams } from 'react-router-dom';

export /*default*/ function ProductDetails() {
const {productId, view} = useParams();
return <h1>Product Details - {productId} - {view}</h1>;
}
// #------------------------------------------------------------------------------------------------------------------------------#
// To make params optional, we use ? after the dynamic segment:
//! Example:
<Route path="/products/:productId/:view?" element={<ProductDetails />} />
// #------------------------------------------------------------------------------------------------------------------------------#
// To make route for 404 page we use route with path="_" and it should be the last route:
// Example:
{/* <Route path="_" element={<NotFound />} /> */}
// #------------------------------------------------------------------------------------------------------------------------------#
// To delete the last segment of the URL, we use useNavigate hook:
const navigate = useNavigate();
navigate(-1); // go back
navigate(-2); // go back two times
navigate(1); // go forward
navigate(2); // go forward two times
navigate('/'); // go to home page
navigate('/', { replace: true }); // replace the current entry in the history stack
// #------------------------------------------------------------------------------------------------------------------------------#
// &&: is a logical operator that is used to render the second operand if the first operand is truthy.
// and i'ts return the last value if all values are truthy.
// Example:
// {user && <h1>{user.name}</h1>}
// if there falsy value in the first operand, it will return the first operand.
// #------------------------------------------------------------------------------------------------------------------------------#
// ||: is a logical operator that is used to render the second operand if the first operand is falsy.
// and i'ts return the first value if all values are falsy.
// Example:
{user || <h1>Loading...</h1>}
// if there truthy value in the first operand, it will return the first operand.
// #------------------------------------------------------------------------------------------------------------------------------#
// Class Based Components: is a component that is created using class syntax.
import { Component } from 'react';

class ITI extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this); // bind the method to the instance
  } // to make this in the method refer to the instance
  state = {number: 0};

handleClick() {
  console.log(this)
}
// OR i can use arrow function
handleClick = () => {
  console.log(this)
}

render() {
  return (
    <div>
      <h1>ITI Component!</h1>
      <h2>Number: {this.state.number}</h2>
      <button onClick={this.handleClick}>+</button>
    </div>
  );
}
// #------------------------------------------------------------------------------------------------------------------------------#
// const ahmed = { // Typescript
// name: "ahmed",
// sayHi: function () {
// console.log(this);
//   },
// };

// const moamen = {
// name: "moamen",
// };

// moamen.sayHi = ahmed.sayHi;
// ahmed.sayHi(); // {name: "ahmed", sayHi: ƒ () name: "ahmed"}
// ahmed.sayHi(); // {name: "moamen", sayHi: ƒ () name: "ahmed"}
// #------------------------------------------------------------------------------------------------------------------------------#
// How to pass props to class based component:
/* <ITI name="ITI" /> */}

// render() {
  return (
    <div>
      <h1>ITI Component! - {this.props.name}</h1>
      <h2>Number: {this.state.number}</h2>
      <button onClick={this.handleClick}>+</button>
    </div>
  );
// }
// #------------------------------------------------------------------------------------------------------------------------------#
// Life cycle component: is a method that is called in a specific time in the component life cycle.
// Each component has three phases: Mounting, Updating, Unmounting.
// Mounting: is the phase when the component is created and inserted into the DOM.

// In mounting phase, we have three life cycle methods: constructor, render, componentDidMount.
// constructor: is a method that is called when the component is created.
// and this is a good place to initialize the state. and to bind the methods to the instance.

// render: is a method that is called when the component is created and updated.
// and this is a good place to render the component.

// componentDidMount: is a method that is called one time after the first render.
// and this is a good place to make side effect like timers, and to fetch data from backend services.

// Updating: is the phase when the component is updated.
// In updating phase, we have two life cycle methods: render, componentDidUpdate.

// render: is a method that is called when the component is created and updated.
// and this is a good place to render the component.

// componentDidUpdate: is a method that is called after the component is updated.
// and this is a good place to make side effect it depends on the updated state or props.
// componentDidUpdate: takes two parameters: prevProps, prevState.
// prevProps: is an object that represents the previous props.
// prevState: is an object that represents the previous state.

//! NOTE: I can use prevProps and prevState to check if the props or state is updated.

componentDidUpdate(prevProps, prevState);{
  if (prevState.number !== this.state.number) {
    console.log('number is updated')
  }
  if (prevProps.name !== this.props.name) {
    console.log('name is updated')
  }
}

// Unmounting: is the phase when the component is removed from the DOM.
// In unmounting phase, we have one life cycle method: componentWillUnmount.

// componentWillUnmount: is a method that is called before the component is removed from the DOM.
// and this is a good place to clean up the side effect (any subscription) like timers.

// Example:
// Class Based Components: is a component that is created using class syntax.
import { Component } from 'react';

class ITI extends Component {
constructor() {
  super();
console.log('iti => constructor')
setInterval(() => {
    console.log('iti => setInterval') // this will be called every second until the component is removed from the DOM
  }, 1000);
}

state = {number: 0};

handleClick = () => {
  this.setState({number: this.state.number + 1});
}

componentDidMount() {
  console.log('iti => componentDidMount')
}

componentDidUpdate() {
  console.log('iti => componentDidUpdate')
}

componentWillUnmount() {
  console.log('iti => componentWillUnmount')
}

render() {
  console.log('iti => render')
  return (
  <div>
    <h1>ITI Component!</h1>
    <h2>Number: {this.state.number}</h2>
    <button onClick={this.handleClick}>+</button>
  </div>
  );
}

// When the component is created:
// iti => constructor
// iti => render
// iti => componentDidMount

// When the component is updated:
// iti => render
// iti => componentDidUpdate

// When the component is removed:
// iti => componentWillUnmount

//! NOTE: To fix the memory leak, we need to clear the interval in componentWillUnmount.
componentWillUnmount() {
  console.log('iti => componentWillUnmount')
  clearInterval(this.interval);
}

// OR: I can save setInterval in a variable and clear it in componentWillUnmount.
// #------------------------------------------------------------------------------------------------------------------------------#
//! NOTE: There difference setter useState and setState in class based component.
// setState in useState: it's replace the old state with the new state.
// this.setState in class component: it's merge the old state with the new state.
// #------------------------------------------------------------------------------------------------------------------------------#
// Rules of Hooks:
// 1- Hooks don't fire except for function components.
// 2- Hooks must be called at the top level of the function component. Don't call Hooks inside loops, conditions.
// 3- You can't write in internal function inside function component.

// It’s not supported to call Hooks (functions starting with use) in any other cases, for example:

// 🔴 Do not call Hooks inside conditions or loops.
// 🔴 Do not call Hooks after a conditional return statement.
// 🔴 Do not call Hooks in event handlers.
// 🔴 Do not call Hooks in class components.
// 🔴 Do not call Hooks inside functions passed to useMemo, useReducer, or useEffect.
// #------------------------------------------------------------------------------------------------------------------------------#
// UseEffect: is a hook that is used to handle any side effect in function component.
// useEffect: takes two parameters: callback, and array of dependencies.
// callback: is a function that is called after the component is created and updated.
// array of dependencies: is an array that contains the values that useEffect depends on.
// if the array is empty, useEffect will be called one time after the first render. (it's like componentDidMount)
// if the array is not empty, useEffect will be called after the first render
// and after each update if one of the values in the array is updated. (it's like componentDidUpdate)
// if the array is not passed, useEffect will be called after the first render and after each render.

// Example:
useEffect(()=>{
  console.log('useEffect')
  // this function will be called before the component is removed from the DOM so it's like componentWillUnmount
  // or before the effect function is called again so it's like componentDidUpdate
  // and it's called clean up function
  return () => console.log('useEffect => cleanup');
},[])

// There render in the first time: because the array is empty.
// clean up function: this function used to clean up the side effect like timers.
// #------------------------------------------------------------------------------------------------------------------------------#
// HTTP version 1.0 OR HTTP version 1.1:
// Loader (Radial progress) from flowbite 16:00
// #------------------------------------------------------------------------------------------------------------------------------#
// How to make pagination in react: (https://www.youtube.com/watch?v=IYCa1F-OWmk)
// {()=>{}} // purpose syntax

const noOfPages = Math.ceil(itemsToRender.length / pageSize);

const pages = Array(noOfPages).fill().map((_, i) => i + 1);

const start = currentPage * pageSize - pageSize;
const end = start + pageSize;

itemsToRender= itemsToRender.slice(start, end);
// #------------------------------------------------------------------------------------------------------------------------------#
// Day 3:
// First video is about Add to cart:
// The second video is about Login and validate the form:

//! NOTE: We use onChange to handle the change in input. onChange takes a function that takes an event as a parameter.
// and inside the function, we use event.target.value to get the value of the input.

//! NOTE: don't forget use react dev tools to see the state and props of the component.

//! NOTE: We use onSubmit to handle the submit in form. onSubmit takes a function that takes an event as a parameter.
// and inside the function, we use event.preventDefault() to prevent the default behavior of the form.

// NavLink: is a component used in nab bar to navigate between pages. and it's like Link but it has active class.

Example:
<NavLink to="/products" className={({isActive}) => isActive ? 'font-bold' : ''}>Products</NavLink>
// #------------------------------------------------------------------------------------------------------------------------------#
// yup: is a library used to validate the form.
import {object, string} from 'yup';

const [errors, setErrors] = useState(null);

const formSchema = object({
  email: string().required().email(),
  password: string().required().min(8).max(16),
})

const handleSubmit = async (e) => {
  try {
    const result = await formSchema.validate({email, password},{abortEarly: false});
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// There two types of errors:
// 1- Errors onSubmit: when the user submit the form. (it's called submit validation)
// 2- Errors onChange: when the user change the input. (it's called real time validation)

//! NOTE: note prefer to use delete operator to delete a property from object. because there performance issue.

// Formik: is a library used to handle the form in react.
// react-hook-form: is a library used to handle the form in react.
// #------------------------------------------------------------------------------------------------------------------------------#
// useRef: is a hook that is used to get a reference to a DOM element. Whatever happened render, the reference will be the same.
// useRef: takes one parameter: the initial value of the reference.
//! NOTE: like autoFocus in input.

import {useRef} from 'react';

const emailRef = useRef();

<input type="email" ref={emailRef} />
console.log(emailRef); // {current: input}
console.log(emailRef.current); // input
console.log(emailRef.current.focus); // focus function

// in catch: emailRef.current.focus();
// #------------------------------------------------------------------------------------------------------------------------------#
//! NOTE: If i have logic before render, this logic will be called before the first render and after each update.
// and this is not good for performance. so we need to use useMemo to save the result of the logic and use it in render.
// There concept called memoization: is a technique used to save the result of the logic and use it later.

// ReEvaluate: is a function that is used to reevaluate the logic and save the new result.
// This is way to use useMemo:

// In react we have tow libraries react and react-dom:
// react: is a library used to create react elements. and do logic. and understand any update in the state. and props.
// react-dom: is a library used to render react elements to the DOM. to show the react elements to the user.
// re render: is a function that is used to re render the react elements to the DOM. to show the react elements to the user. (UI)
// re evaluate: is a function that is used to re evaluate the logic. (JS) (Logic)

// To solve this problem we use React.memo: is a function that is used to memoize the react element.
// React.memo: is a function that is used to save the result of the render and use it later.
// React.memo: takes two parameters: the component, and a function that takes two parameters: prevProps, nextProps.

// React.memo: it take copy from prevProps and nextProps and compare them. if they are the same, it will not re render.
// if they are not the same, it will re render.

//! NOTE: if props is an object, it will not compare the properties of the object. it will compare the reference of the object.
// so if i have object in props, i need to use useMemo to save the object and use it later.

// useMemo: is a hook that is used to save the result of the heavy logic and use it later.
// useMemo: used with objects and arrays and functions im case there return.
import {useMemo} from 'react';
// useMmo: takes two parameters: the function, and array of dependencies. like useEffect.
// useMemo: make memoization for the result of return of the function.

//! NOTE: if i have logic useMemo will not it don't save the result of the logic. it save the result of the return of the function.
// so if i have logic before return, i need to use useCallback to save the result of the logic and use it later.

// useCallback: is a hook that is used to save the result of the logic and use it later.
// useCallback: takes two parameters: the function, and array of dependencies.
// useCallback: make memoization for the result of the function.

//! NOTE: if i need re render depend any thing i put it in the array of dependencies.

//! NOTE: if i pass the same property to the same object, it will override the old one. and it will re render.
// so we can use if statement to check if the property is exist or not. if it's exist, we will not add it.

// #------------------------------------------------------------------------------------------------------------------------------#
// Filter in backend: is a function that is used to filter the data in backend.

useEffect(() => {
  async function getMenu(){
    try{
      const {data} = await axios.get('currentCategory' === 0 ? 'http://localhost:300/menu' :
      `http://localhost:300/menu?category=${currentCategory}`)')
      setItems(data);
      // Calculate noOfPages
      setNoOfPages(Math.ceil(data.length / pageSize));
    }catch(error){
      console.log(error);
    }
  }
  getMenu();
}, [currentCategory]);
// #------------------------------------------------------------------------------------------------------------------------------#
// Custome Hook: is a function that is used to share logic between components. and return values i will use in components.
// When i use custome hook?
// 1- when i have logic that i want to share between components.
// 2- when i have logic that i want to reuse in the same component.
// #------------------------------------------------------------------------------------------------------------------------------#
// Props trap: is a problem that happens when i pass a function to a child component and this child will pass this function to another child.
// and this child will pass this function to another child. and this child will pass this function to another child. and so on.

// To solve this problem, we used useContext.
// useContext: is a hook that is used to pass data between components without passing props manually.
// useContext: takes one parameter: the context object.

// 1- createContext:
const ThemeContext = createContext({theme: 'light', toggleTheme: () => {}});

const {theme2} = useContext("light");

// 2- wrap the component with Provider component. and pass the value to it.
<ThemeContext.Provider value={{theme2, setTheme}}>
  My components
</ThemeContext.Provider>

// Provider: is a component that is used to wrap the components and pass the value to it.

// In another component:
import ThemeContext from './ThemeContext';

const {theme, setTheme} = useContext(ThemeContext);
// #------------------------------------------------------------------------------------------------------------------------------#
// Crate Context:

import {createContext, useState} from 'react';

const ThemeContext2 = createContext({});

export function ThemeProvider({children}) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext2;

// In this case, i create a context and i export it. and i create a provider and i export it.
// So i can use it in App component.
// #------------------------------------------------------------------------------------------------------------------------------#
// Day 4:
// Customer
// Form Receiver
// Data room
// Redux: is a library used to manage the state in react. (A Predictable State Container for JS Apps)
// Action Creator: is a functions that is used to create an action. it's return an action.

// Action: is an object that is used to tell the reducer what happened. it's contain two properties: type, payload.
// Type: is a string that is used to tell the reducer what happened. (required)
// Payload: is a data that is used to tell the reducer what happened. (optional) (money in our case)

// Reducer: is a function that is used to update the state. it's take tow parameters: state, action.
// State: is a data that is used to save the data. (required)
// Action: is an object that is used to tell the reducer what happened. (required)
// Reducer: it take copy from the state and update it and return the new state. and it's only update the state.

// In our case reducer will be interested with create policy and delete policy.
//! NOTE: i the start life of my application i mut give the state a default value. so i will use ES2015 default value.
function reducer(state = [], action) {}

// Dispatch: is a function that is used to send the action to the reducer. (required)
// Store: is a place that is used to save the state. (required)

// combineReducers: is a function that is used to combine tow or more reducers. to save the state in one place (rootReducer).
// createStore: is a function that is used to create a store. (required)

// I use combineReducers to combine more than one reducer. and i save the result in rootReducer.
// the i use createStore to create a store and pass the rootReducer to it.

// create store have more than one method:
// 1- getState: is a function that is used to get the state from the store.
// 2- dispatch: is a function that is used to send the action to the reducer.
// 3- subscribe: is a function that is used to subscribe to the store. (it's take a function as a parameter)
// this function will be called every time i dispatch an action.
// 4- replaceReducer: is a function that is used to replace the reducer.

// #------------------------------------------------------------------------------------------------------------------------------#
// Steps to use redux:
// 1- install redux and react-redux: npm install redux react-redux
// 2- create folder called actions and create file called index.js
// 3- create action creator. (function that is used to create an action) return an action. and export it.
// 4- create folder called reducers and create files if i have more than one reducer. and export it.
// 5- create file called index.js in reducers folder. and combine the reducers. and export it. (rootReducer)
// 6- create file called store.js in src folder. and create store using createStore and pass the rootReducer to it. and export it.
// 7- wrap the App component with Provider component and pass the store to it. and import Provider from react-redux.
// 8- then i wrap the component that i want to use the state in it with connect function. and i pass tow parameters to it.
// and it takes to called (mapStateToProps)(component) as a parameter.
// the first called tow parameters: mapStateToProps, mapDispatchToProps.
// mapStateToProps: is a function that is used to get the state from the store and return an object that contain the state that i want to use in the component.
// mapDispatchToProps: is a function that is used to get the dispatch function and return an object that contain the function that i want to use in the component.
// 11- in the component i use the state that i get from mapStateToProps. and i use the function that i get from mapDispatchToProps.

//! NOTE: the second parameter in connect function is optional. if i don't pass it,
// i will get the dispatch function as a prop in the component. and i can give it object take action creators as a value.
// and it will return a copy from the action creators and it ready with dispatch function.
// #------------------------------------------------------------------------------------------------------------------------------#
// There some problems that i will face when i use redux:

// - I will have a lot of props and i don't know what is the purpose come from.
// - if i have key come from props it's the same key i use it in connect will override it. (this big problem)

// #------------------------------------------------------------------------------------------------------------------------------#
// There second way to use the state in the component. i can use useSelector hook.
// useSelector: is a hook that is used to get the state from the store. it's take a function as a parameter.
// Example: const products = useSelector((state) => state.products);

// and use useDispatch hook to get the dispatch function:
// useDispatch: is a hook that is used to get the dispatch function from the store.
// Example: const dispatch = useDispatch();

// In this way i don't need to use connect function.
// #------------------------------------------------------------------------------------------------------------------------------#
// ERROR: actions must be plain objects. Instead, the actual type was: 'Promise'. You may need to add middleware
// to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions.
// This error is common

//! NOTE: This error happen when i dispatch an async action. (action that return a promise), i can't dispatch a promise. (async action)

// To solve this problem i will use redux-thunk.
// redux-thunk: is a middleware that is used to handle async code in redux.

// How to use redux-thunk:
// in store.js:
// I will import applyMiddleware from redux.
// Then i will import thunk from redux-thunk.
// Then i will pass it to applyMiddleware function.
// Then i will pass it to createStore function.

import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './reducers';
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk));

// In actions:
// I will return a function instead of return an action.
// And i will pass dispatch function to it.
// And i will dispatch the action inside the function.

export function fetchProducts() {
  return async function (dispatch) {
    const data = await fetchMenu();
    dispatch({type: 'FETCH_PRODUCTS', payload: { products: data}});
  };
}
// #------------------------------------------------------------------------------------------------------------------------------#
// Redux: is a library used to manage the state in react. (A Predictable State Container for JS Apps)
// Props Drilling: is a problem that happen when i have a lot of components and i want to pass a props to the last component.
// Global State (Store): is a state that is used in more than one component. and if i update it in one component it will update in all components.

// Conclusions:
// Local state: is scoped and we have drilling props (pass props & callback function) between components to share data.
// Global state: allow to access state from anywhere without do more drilling props.

// Store: is a place that is used to save the state i want share it between components.

// How can i send the state to the store?:
// By using reducer function. (reducer is a function that is used to update the state)

// - init state
// - update state (immutable)
// - logic to handle state
// - send state to store

// Conclusions:
// Only reducer can create and update the state.
// The store is the place that contain all states.
// (Dispatch function) send a trigger to force reducer do update the state.
// Subscribe with the store to listen to updates
// Without subscribe there i no re-render happen and component will not see updates.

// How can i read the state from the store?:
// By using useSelector hook. (useSelector is a hook that is used to get the state from the store)
// #------------------------------------------------------------------------------------------------------------------------------#
// Conclusions:
// Action: is something like a contract between the component and the reducer.
// Dispatch function: is a function that take action and sends it to the reducer tro make updates
// #------------------------------------------------------------------------------------------------------------------------------#
// Reducer: is a function that is used to update the state. (reducer is a function that take tow parameters: state, action)
// Reducer function must be a pure function. (pure function is a function that take tow parameters and return a value)
// Reducer function must be a synchronous function. (synchronous function is a function that return a value immediately)
// Reducer inti the state and send it to the store.
// State is object
// Don't mutate the state. (immutable)
// Always return a new state or the same state.
// Can have many reducers.

// Conclusions:
// Can have many reducers.
// Reducer return a new state or the same state.
// Returned state will take place in the store.
// #------------------------------------------------------------------------------------------------------------------------------#
// How & When reducer function will fire?:
// When i dispatch an action. (dispatch function is a function that is used to send the action to the reducer)
// When i dispatch an action the reducer function will fire.

// What if i have many reducers, how i will navigate to related reducers?:
// to answer we need to:
// understand where is the reducer take place?
// need to look up again to the final design pattern!

// Important:
// Store contains reducer and states
// When dispatch action fire it goes to store first, then store send it to the reducer.
// The store is the key, it takes action and lookup for related reducer and send it to it.

// Store & Dispatching steps:
// Store take incoming dispatch, fetch throw all reducers adn assign action as a param foreach reducer.
// The reducer will vfe executed one by one - the reducer will receive action as param, and by using if condition with
// "action.type" reducer will check do i gave this type? uf yes stop looping and execute the logic inside the if condition.
// Of course, there is an optimization level.
// #------------------------------------------------------------------------------------------------------------------------------#
// What about state as param? why?
// When dispatch is sent to store and while store does fetch throw reducers, store actually path two params to reducer:
// Action: we already know why.
// State: to make sure this reducer will have the latest version from the state.
// #------------------------------------------------------------------------------------------------------------------------------#
// subscribe: is a function that is used to listen to updates from the store.
// #------------------------------------------------------------------------------------------------------------------------------#
// Redux Toolkit: is a package that is used to make redux easier.
// CreateSlice: is a function that is used to create a reducer. and it take an object as a parameter.
// This object contain tow properties: name, initialState, reducers.
// name: is a string that is used to give the reducer a name.
// initialState: is an object that is used to give the reducer an initial state.
// reducers: is an object that is used to give the reducer a logic to handle the state.

// configureStore: is a function that is used to create a store. and it take an object as a parameter.
// This object contain tow properties: reducer, middleware.
// reducer: is a reducer that is used to give the store a reducer. i give it selectProductsSlice.reducer.
// middleware: is a middleware that is used to give the store a middleware. i give it getDefaultMiddleware.
// #------------------------------------------------------------------------------------------------------------------------------#
// ExtraReducer: Is a object i put in it the action i want to listen to it. but this action is not related to this Slice.
// and this action take state and action as a parameter.
//! NOTE: But it take state own the slice which is inside her
//! NOTE: And action mean the action it listen to it.

// Example:

import {createSlice} from '@reduxjs/toolkit';
import {logOut} from '../authSlice';

const initialState = { value: 0 };

const counterHandler = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
  },
  extraReducers: {
    [logOut]: (state, action) => {
      state.value = 0;
// or   state.value = action.payload;
    },
  },
});

// Other syntax:

const counterHandler2 = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action)  => {
      state.value += action.payload;
    },
    decrement: (state, action)  => {
      state.value -= action.payload;
    },
  },
  extraReducers: (builder) =>  {
    builder.addCase(logOut, (state, action) =>  {
      state.value = 0;
// or   state.value = action.payload;
    });
  },
});

export const {increment, decrement} = counterHandler.actions;
/*export default */ counterHandler2.reducer;
// #------------------------------------------------------------------------------------------------------------------------------#
// Interceptor: is a function that is used to intercept the request and response.
// #------------------------------------------------------------------------------------------------------------------------------#
// Add product to database:
axios.post('https://react-http-6a9a0.firebaseio.com/products.json', product)
axios.post('https://react-http-6a9a0.firebaseio.com/products.json', {...product, newKey: 'new value'})
// #------------------------------------------------------------------------------------------------------------------------------#
// Tostify: is a package that is used to show a message to the user.
// How to use it?:
// Go to the documentation :)
// #------------------------------------------------------------------------------------------------------------------------------#
//! Axios:
// Axios => is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase).
// On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.

//! NOTE:
// Fetch => if happen error it don't go to catch it still in then and if i want display error message i put if condition (!res.ok) or (res.status === 400)
// Axios => if happen any error it go to catch directly

//! Axios Features:
// Make XMLHttpRequests from the browser
// Make http requests from node.js
// Supports the Promise API
// Intercept request and response
// Transform request and response data
// Cancel requests
// Timeouts
// Query parameters serialization with support for nested entries
// Automatic request body serialization to:
    // JSON (application/json)
    // Multipart / FormData (multipart/form-data)
    // URL encoded form (application/x-www-form-urlencoded)
// Posting HTML forms as JSON
// Automatic JSON data handling in response
// Progress capturing for browsers and node.js with extra info (speed rate, remaining time)
// Setting bandwidth limits for node.js
// Compatible with spec-compliant FormData and Blob (including node.js)
// Client side support for protecting against XSRF

//! Example:
import axios from 'axios';

function getUsers(){
  const {data} = axios.get('url')
  .then((res) => {
    console.log(res);
  })
}

//! OR:
async function getUsers() {
  const {data} = await axios.get('url');
  console.log(data);
}

//! OR
async function getUsers() {
  const {data} = await axios({method: "GET",url:'URL', Headers})
  console.log(data);
}