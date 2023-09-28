#================================================================================================================================#
#-------------------------------------------------------- Day 1 -----------------------------------------------------------------#
#================================================================================================================================#

# ==> Lecture One

[Directives - Methods - Event Handling - Form Handling - Modifiers - Computed Properties - Watchers - Components]

# What is VueJs?

VueJs is a progressive framework for building user interfaces. Unlike other monolithic frameworks,
Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only,
and is easy to pick up and integrate with other libraries or existing projects.
Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling
and supporting libraries.
#==============================================================================================================================#

# Why VueJs?

- Vue is approachable => Familiarity with HTML, CSS and JS is enough to start building apps with Vue.
- Vue is Versatile => Vue is capable of powering advanced Single-Page Applications
  when used in combination with modern tooling and supporting libraries.
- Vue is Performance => Vue is fast. Vue was designed from the ground up with performance in mind.
  and measure just 20Kb minified and gzipped at runtime.
- Vue is Easy to Learn => Vue is designed to be incrementally adoptable. The core library is focused on the view layer only,
  and is easy to pick up and integrate with other libraries or existing projects.

#==============================================================================================================================#

# Vuejs and virtual DOM

Vuejs uses virtual DOM to update the real DOM. Virtual DOM is a copy of the real DOM.
When the data changes, Vuejs compares the real DOM with the virtual DOM and figures out what has changed.
Then it updates the real DOM with the changes it figured out.

- using algorithm to compare the virtual DOM with the real DOM and figure out what has changed. called diffing algorithm.
- Vuejs updates the real DOM with the changes it figured out.

#==============================================================================================================================#

# Rendering mechanism

Vuejs uses HTML-based template syntax to bind the Vue instance to the DOM.
template is compiled into Virtual DOM Render Function code => track dependencies => component reactive state => trigger re-render
template is compiled into Virtual DOM Render Function code => return Virtual DOM
=> mount / patch (conciliation process / shadow comparable using diffing algorithm ) => Actual DOM update

#==============================================================================================================================#

# Installation

CDN => <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
NPM => npm install vue
CLI => npm install -g @vue/cli => vue create my-project => cd my-project => npm run serve
Vite => npm create vite@latest my-vue-app => cd my-vue-app => npm install => npm run serve
#==============================================================================================================================#

# What is node_modules folder?

node_modules folder is a folder that contains all the dependencies of your project.
#==============================================================================================================================#

# What is the difference between package.json and package-lock.json?

package.json is used by npm to look up the dependencies of the project and their corresponding versions.
package-lock.json is used by npm to lock down the versions of the dependencies to be installed when npm install is run.
package-lock.json is automatically generated for any operations where npm modifies either the node_modules tree,
or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees,
regardless of intermediate dependency updates.
#==============================================================================================================================#

# Vue CLI Plugins

- Babel => Transpile modern JavaScript to older versions (for compatibility)
- TypeScript => Add support for TypeScript
- PWA => Turn your app into a Progressive Web App (PWA)
- Router => Add a router to your app
- Vuex => Add Vuex to your app
- CSS Pre-processors => Add support for CSS pre-processors like Sass, Less or Stylus
- Linter / Formatter => Add support for linters like ESLint or Prettier
- Unit Testing => Add support for unit testing via Jest
- E2E Testing => Add support for E2E testing via Cypress
- Babel, TypeScript, PWA, Router, Vuex, CSS Pre-processors, Linter / Formatter, Unit Testing, E2E Testing
  #==============================================================================================================================#

# Vue is single file component

- All Logic in one file => HTML, CSS, JS
  #==============================================================================================================================#

# Directives in VueJs

- Special token in the markup that tells the library to do something to a DOM element.
- like attribute but it's not attribute with the v- prefix.

# New syntax in Vue 3

- v-bind => : => Dynamically bind one or more attributes, or a component prop to an expression.

# Example

- v-bind => Dynamically bind one or more attributes, or a component prop to an expression.
  ==> <a v-bind:id="headid"> ... </a>
  ==> <a v-bind:class="headclass"> ... </a>
  ==> <a v-bind:style="headstyle"> ... </a>
  ==> <h :style="flag ? oldStyle : newStyle"> ... </h>
  ==> <a :href="headhref"> ... </a>
- v-if => Conditionally render DOM element.
- v-else if => Conditionally render DOM element.
- v-else => Conditionally render DOM element.
- v-for => Render DOM element or template block multiple times based on a data source.
- v-on => Listen to DOM events and run some JavaScript when they're triggered.
  ==> <a v-on:click="doSomething()"> ... </a>
  ==> <a @:click="flag =! flag"> ... </a>
- v-model => Create two-way data bindings on form input, textarea, and select elements.
- v-show => Conditionally render DOM element.
- v-text => Render the element's textContent if i write element it was write as a text.
- v-html => Render the element's innerHTML.
- v-once => Render the element or component once and cache it. (advanced)
- v-pre => Skip compilation for this element and all its children. (advanced)
- v-cloak => This directive will remain on the element until the associated Vue instance finishes compilation.
- v-slot => Used on components to define named slots that can be invoked from the component's template.
- v-is => Used to dynamically switch between multiple components.
  #==============================================================================================================================#

# Methods in VueJs

# => What is data() method in vuejs?

- data() method is a function that returns an object.
- The properties of this object will be available in the template.
- The properties of this object are called data properties.

# -------------------------------------------------------------------------------------------------------------------------------#

# condition in vuejs

==> <button @click="increase">inc</button>
==> <button @click="decrease">dec</button>
==> <h2>{{ num }}</h2>
==> <h3 v-show="num > 0"> show condition</h3>
==> <h3 v-if="num > 0">positive num</h3>
==> <h3 v-else-if="num < 0">negative num</h3>
==> <h3 v-else-if="num === 0">zero num</h3>
==> <h3 v-else>not a num</h3>

# -------------------------------------------------------------------------------------------------------------------------------#

# Render list of elements using v-for directive

## loop through an array of strings

==> <ul>
==> <li v-for="item in items" :key="item.id">{{ item.name }}</li>
==> </ul>

## loop through an object key value pairs

==> <ul>
==> <li v-for="(value, key) in object" :key="key">{{ key }}: {{ value }}</li>
==> </ul>

### note: v-for with an object will return an array of the object's values.

### key come before value

## loop through an array of objects values

==> <h2>{myInf.name} / {myInf.address}</h2>

## loop through an array of objects of arrays

# Example

actors:[
{
id:200,
name:'a7med 7elmy',
movies:['x-large','3sal eswed']
},
{
id:400,
name:'soad hosney',
movies:['amirt 7opy anna','sa8era 3la el7op']
},
],

==> <ul>
==> <li v-for="actor in actors" :key="actor.id">
==> {{ actor.name }}
==> <li v-for="movie in actor.movies" :key="movie">{{ movie }}</li>
==> </ul>

# -------------------------------------------------------------------------------------------------------------------------------#

# Methods in VueJs

=> Methods are functions that are defined inside the methods object.
=> Methods are used to handle events, perform calculations, and more.
=> Methods are called from the template.
=> Methods are called without parentheses.
=> Methods are called with parentheses.
=> Methods are called with arguments.
=> Methods are called with arguments from the template.
=> Methods are called with arguments from the template using $event.
=> Methods are called with arguments from the template using $event and other arguments.
=> I can't use arrow functions for methods because arrow functions don't have their own this context.

# -------------------------------------------------------------------------------------------------------------------------------#

# Computed Properties in VueJs

## What is computed properties in vuejs?

=> Computed properties are functions that are defined inside the computed object.
=> Computed properties are used to perform calculations.
=> Computed properties Must return a value from a computed property and cache the result based on their reactive dependencies.

## What is the difference between methods and computed properties?

=> The difference between methods and computed properties is that computed properties are cached
=> based on their reactive dependencies.
=> A computed property will only re-evaluate when some of its reactive dependencies have changed.
=> This means as long as the reactive dependencies of the computed property haven't changed,
=> multiple access to the computed property will immediately return the previously computed result
=> without having to run the function again.

# -------------------------------------------------------------------------------------------------------------------------------#

# Using condtion inside loop

=> Example
devices: [
{
id: 1,
title: "tv",
price: 2000,
},
{
id: 2,
title: "laptop",
price: 20000,
},
{
id: 3,
title: "radio",
price: 15000,
},
{
id: 4,
title: "phone",
price: 12000,
},
],

==> <ul>
==> <li v-for="device in devices" :key="device.id">
==> {{ device.title }} - {{ device.price }}
==> <h3 v-if="device.price > 10000">expensive</h3>
==> <h3 v-else>cheap</h3>
==> </li>
==> </ul>

## if i have long length and i want show only 2 items prefer use computed properties instead of methods

# -------------------------------------------------------------------------------------------------------------------------------#

# Watchers in VueJs

## What is watchers in vuejs?

=> Watchers are functions that are defined inside the watch object.
=> Watchers are used to perform asynchronous operations.
=> Watchers are called when the value of a data property changes.
=> Watchers are called when the value of a computed property changes and other computed properties change and other data properties change.

## What is the difference between watchers and computed properties?

=> The difference between watchers and computed properties is that computed properties are cached based on their reactive dependencies.
=> A computed property will only re-evaluate when some of its reactive dependencies have changed.
=> This means as long as the reactive dependencies of the computed property haven't changed,
=> multiple access to the computed property will immediately return the previously computed result without having to run the function again.
=> Watchers are called when the value of a data property changes.
=> Watchers are called when the value of a computed property changes and other computed properties change and other data properties change.
=> Methods in watch is cached based on their reactive dependencies.
=> Methods in watch must take name in data or computed properties.
=> Methods in watch take two arguments new value and old value.

# -------------------------------------------------------------------------------------------------------------------------------#

# Two way data binding and handling form input in vuejs

## What is v-model directive in vuejs?

=> The v-model directive is used to create two-way data bindings on form input, textarea, and select elements.
=> It automatically picks the correct way to update the element based on the input type.
=> Although a bit magical, v-model is essentially syntax sugar for updating data on user input events,
=> plus special care for some edge cases.
=> v-model will ignore the initial value, checked or selected attributes found on any form elements.
=> It will always treat the Vue instance data as the source of truth.
=> You should declare the initial value on the JavaScript side, inside the data option of your component.

{{ JSON.stringify(formValues) }}

  <form action="" @submit.prevent="handleForm">
    name : <input type="text" v-model.trim.lazy="formValues.name" /> age :
    <input type="number" v-model.lazy.number="formValues.age" />
    <button>submit</button>
  </form>
# -------------------------------------------------------------------------------------------------------------------------------#
# Modifiers in vuejs
## What is modifiers in vuejs?
=> Modifiers are special postfixes denoted by a dot, which indicate that a directive should be bound in some special way.
=> For example, the .prevent modifier tells the v-on directive to call event.preventDefault() on the triggered event.
=> Modifiers can be chained.
=> For example, the .prevent and .stop modifiers can be used together to prevent both event propagation and the default action of the event.
=> Modifiers can be used on v-on and v-model directives.

- .prevent => call event.preventDefault() on the triggered event.
- .lazy => update model on change instead of on input.
- .trim => call String.trim() on the input.
- .number => cast input string to a number.
- .debounce => delay the input event for X milliseconds.
- .throttle => limit the input event to emit once every X milliseconds.
- .stop => call event.stopPropagation() on the triggered event.
- .capture => add an event listener in capture mode.
- .self => only trigger handler if event was dispatched from this element.
- .once => trigger handler at most once.
- .passive => attach a DOM event with { passive: true }.
- .native => listen for a native event on the root element of component.

# -------------------------------------------------------------------------------------------------------------------------------#

# How to send data from child component to parent component via props in vuejs

=> Props are custom attributes you can register on a component.
=> When a value is passed to a prop attribute, it becomes a property on that component instance.
=> Props are used to pass data from parent components to child components.
=> Props are one-way down, from parent to child.
=> Props are read-only in the child component, it's not allowed to change the value of a prop in the child component.
#--------------------------------------------------------------------------------------------------------------------------------#

## What is the difference between props and data in vuejs?

=> The difference between props and data is that props are used to pass data from parent components to child components.
=> Props are one-way down, from parent to child.
=> Props are read-only in the child component, it's not allowed to change the value of a prop in the child component.
=> Data is used to store data that a component can use.
=> Data is private for each component.
=> Data is reactive.
=> Data is mutable.

## to send dynamically data from parent to child component use props

=> <child-component :title="title" :price="price" :description="description" />

## title,price,description are properties in data object in parent component

#--------------------------------------------------------------------------------------------------------------------------------#

# How to send data from child component to parent component via $emit in vuejs

=> The $emit method is used to send data from child components to parent components.
=> The $emit method takes two arguments.
=> The first argument is the name of the event.
=> The second argument is the data that you want to send to the parent component.
=> The $emit method should be called inside the child component.
=> The event name should be in kebab-case.
#--------------------------------------------------------------------------------------------------------------------------------#

# Provide inject in vuejs

## What is provide and inject in vuejs?

=> The provide and inject bindings are primarily provided for advanced plugin / component library use cases.
=> It is an alternative to the global Vue.prototype object.
=> The provide and inject bindings allow you to effectively create a parallel universe of props.
=> The provide and inject bindings are not reactive.
=> The provide and inject bindings are not designed for a parent component to child component communication.
=> The provide and inject bindings are designed for a parent component to any nested child component communication.
#--------------------------------------------------------------------------------------------------------------------------------#

# To send data from parent to nested child component use provide and inject

=> we write key value pair in provide object in parent component.
=> we write key in inject array in nested child component and assign it to data property.
=> we can access data in nested child component using this.key.
#--------------------------------------------------------------------------------------------------------------------------------#

# To send data include in methods or computed in parent component use provide and inject

=> we write key value pair in provide object in parent component.
=> we write key in inject array in nested child component and assign it to methods property.
=> we can access data in nested child component using this.key.

# What difference between provide and inject and mixins in vuejs?

#================================================================================================================================#
#--------------------------------------------------- Reports Day 1 --------------------------------------------------------------#
#================================================================================================================================#

# => Immediate and deep watchers in vuejs

In Vue.js, you can use watchers to observe changes in your data and respond accordingly.
Watchers allow you to perform asynchronous or expensive operations in response to changes in your data.
There are two types of watchers in Vue.js: immediate and deep watchers.

## => Immediate Watchers

An immediate watcher is executed immediately after the watcher is created, before the first render.
This is useful when you want to perform an initial action based on the initial value of the watched property.
To create an immediate watcher in Vue.js, you can use the immediate option when defining your watcher.

watch: {
=> myProperty: {
=> => immediate: true,
=> => => handler(newValue, oldValue) {
=> =>// do something with the initial value of myProperty
=> =>}
=>}
}

## => Deep Watchers

A deep watcher is used to watch nested properties of an object. By default,
Vue.js only watches for changes at the top level of the object.
If you want to watch for changes in nested properties, you can use a deep watcher.
To create a deep watcher in Vue.js, you can use the deep option when defining your watcher.

- Component instance in vuejs
- Event modifiers (stop, self, capture, passive) in vuejs
  #--------------------------------------------------------------------------------------------------------------------------------#

# => Component Instance in Vue.js

In Vue.js, components are self-contained modules that can be reused throughout your application.
Each component has its own instance, which is responsible for managing its own state and handling its own lifecycle.

You can create a component instance in Vue.js by using the Vue.extend method.
This method takes a component definition as its argument and returns a constructor function that can be used to create instances of the component.

const MyComponent = Vue.extend({
=>// component definition
})

const myComponentInstance = new MyComponent({
=> // component instance options
})

Once you have a component instance, you can access its data, methods, and lifecycle hooks using the this keyword.
For example, to access a data property in your component, you can use this.myDataProperty.

const MyComponent = Vue.extend({
=> data() {
=> => return {
=> => => myDataProperty: 'Hello, World!'
=> => }
=> },
=> methods: {
=> => myMethod() {
=> => => console.log('Hello, World!')
=> => }
=> },
=> mounted() {
=> => console.log('Component mounted')
=> }
})

const myComponentInstance = new MyComponent()

console.log(myComponentInstance.myDataProperty) // 'Hello, World!'
myComponentInstance.myMethod() // logs 'Hello, World!'
// logs 'Component mounted
#--------------------------------------------------------------------------------------------------------------------------------#

# => Event Modifiers (stop, self, capture, passive) in Vue.js

Event Modifiers (stop, self, capture, passive) in Vue.js
In Vue.js, you can use event modifiers to modify the behavior of event handlers.
Event modifiers are special directives that can be added to event listeners to change how events propagate or how the default behavior of an event is handled.
There are four event modifiers in Vue.js: stop, self, capture, and passive.

stop => The stop modifier can be used to stop event propagation.
self => The self modifier can be used to only trigger the event handler if the event was triggered on the element itself.
capture => The capture modifier can be used to trigger the event handler during the capture phase instead of the bubbling phase.
passive => The passive modifier can be used to improve scrolling performance by telling the browser that the event handler will not call preventDefault.

# Example for stop event modifier

<template>
=> <div @click.stop="handleClick">
=> => <button>Click me</button>
=> </div>
</template>

#================================================================================================================================#
#-------------------------------------------------------- Day 2 -----------------------------------------------------------------#
#================================================================================================================================#
[Dynamic Components, Slots, LifeCycle Hooks, Routing, CRUD Operation]

# => Dynamic Components

# => <keep-alive> tag in vuejs (cache components)

The keep-alive tag is a built-in component that can be used to cache components.
we use keep-alive tag to save data in this component when you switch between components.
#-------------------------------------------------------------------------------------------------------------------------------#

# => Slots in vuejs

=> we used in parent component to render elements in child component.

# Default slot

<slot></slot> => default slot

# Example to use default slot in parent component

<childA  v-if="active === 'childA'">
=> <h1>hello from parent</h1>
</childA>

# Named slot

to use named slot in parent component we use slot attribute in child component.

<slot name="header"></slot> => named slot

# Example to use named slot in child component

<childB v-if="active === 'childB'">
=> => <template #header> new syntax
=> => => => <h1>header slot</h1>
=> => </template>
=> => <template v-slot:default>
=> => => => <h1>main slot</h1>
=> => </template>
=> => <template v-slot:footer>
=> => => => <h1>footer slot</h1>
=> => </template>
</childB>
#--------------------------------------------------------------------------------------------------------------------------------#
# we can use slot to pass data from child component to parent component. (instead of using emit)
=> what case we need send data from child to show it in parent
- when i have method in parent component and i need to use it to make some action in child data without using emit.
  and without repeat this method in child component (DRY), i use data in parent using slotProps.

# Example to use slot to pass data from child to parent

=> in child component
<template>

=> <div v-for="i in inf" :key="i.fname">
=> => <slot :fname="i.fname" :lname="i.lname"></slot>
=> </div>
</template>

<script>
=> data() {
=> => return {
=> => => inf: [
=> => => => { fname: "ahmed", lname: "ali" },
=> => => => { fname: "mohamed", lname: "ali" },
=> => => => { fname: "ali", lname: "ali" },
=> => => ],
=> => };
=> },
</script>

=> in parent component
<childC v-if="active === 'childC'">
=> => <template #default="slotProps">
=> => => => <h2>{{ slotProps.fname }} {{ slotProps.lname }}</h2>
=> => </template>
</childC>
#--------------------------------------------------------------------------------------------------------------------------------#

# => LifeCycle Hooks / methods (created, mounted, updated, destroyed)

- beforeCreate => this better place to make some action on data before create it.
- created => this better place to make ajax request (call api) to get data from server.
- beforeMount => this better place to make some action on data before render it in dom.
- mounted => this better place to make some action on data after render it in dom.
- beforeUpdate => this better place to make some action on data before update it in dom.
- updated => this better place to make some action on data after update it in dom.
- beforeUnmount => this better place to make some action on data before remove it from dom.
- unmounted => this better place to make some action on data after remove it from dom.

## Note i have two life methods special in keep-alive tag

- activated => this better place to make some action on data after render it in dom.
- deactivated => this better place to make some action on data before remove it from dom.

#--------------------------------------------------------------------------------------------------------------------------------#

# ErrorCaptured()

- this method used to handle error in all component in project.

#--------------------------------------------------------------------------------------------------------------------------------#

# renderTracked() and renderTriggered()

- we use this methods for debugging.

#--------------------------------------------------------------------------------------------------------------------------------#

# Routing in vuejs

- route in vuejs put hash in url to cache component.
- so usually we use vue-router to make route in vuejs.
- we don't need call component in app component, we navigate to component using router-link tag.
- then we call createWebHistory() in main.js to make history in url.
- and we call createRouter() in main.js to make router.
- then we called my components in main.js file.
- then we create routes array in main.js file.
- then we create variable called router and we call createRouter() in it.
- and give it object contain history and routes
- then we chain use(router) after createApp(app) and before mount("#app")
- then we must put <router-view></router-view> tag in app component to navigate between routes.
- then we use router-link tag to navigate between routes. like this
  => <router-link to="/home">Home</router-link>

#--------------------------------------------------------------------------------------------------------------------------------#

# Note to hide element or component in some route

=> meta: {hideNavbar: true} => this mean hide navbars in this route.
<navBar v-if="!$route.meta.hideNavbar"></navBar>
#--------------------------------------------------------------------------------------------------------------------------------#
To run json server => json -server db.json -w -p 1000
#--------------------------------------------------------------------------------------------------------------------------------#

# To cache params or query in url via router.query.id

data() {
=> return {
=> => id: this.$route.query.id,
=> };
},
#--------------------------------------------------------------------------------------------------------------------------------#

# Programmatic Routing or Imperative Routing (navigate between routes in methods)

=> we use this to navigate between routes in methods.
=> this.$router.push('/') => this mean navigate to home route.
=> this.$router.replace('/') => this mean navigate to home route and remove current route from history.
#--------------------------------------------------------------------------------------------------------------------------------#

# If i want delete user by id using axios

deleteUser(id) {
=> this.$axios.delete(`http://localhost:3000/users/${id}`).then((res) => {
=> => console.log(res.data);
=> => this.getAllUsers(); // to refresh data after delete
=> }).catch((err) => {
=> => console.log(err);
=> });
},
},

#--------------------------------------------------------------------------------------------------------------------------------#
// 1:42:39 task 2
website at least 4 pages contain error page with crud operations with good style

#--------------------------------------------------------------------------------------------------------------------------------#
#--------------------------------------------------------------------------------------------------------------------------------#
#================================================================================================================================#
#--------------------------------------------------- Reports Day 2 --------------------------------------------------------------#
#================================================================================================================================#

# => Mixins

Mixins are a way to share reusable functionality between Vue.js components. A mixin is an object that contains component options,
such as data, methods, computed, and lifecycle hooks. When a mixin is added to a component, its options are merged with the component's options.

Here's an example of a mixin that defines a created lifecycle hook:
const myMixin = {
=> created() {
=> => console.log('Mixin created')
=> }
}

To use the mixin in a component, you can use the mixins option:
const myComponent = {
=> mixins: [myMixin],
=> created() {
=> => console.log('Component created')
=> }
}

In this example, the created hook from the mixin will be called before the created hook from the component.

Mixins can be a powerful tool for code reuse, but they can also make your code harder to understand and maintain.
Be sure to use mixins sparingly and only when they make sense for your specific use case.

#--------------------------------------------------------------------------------------------------------------------------------#

# => CreateWebHashHistory() vs CreateWebHistory()

In Vue.js, the createWebHashHistory and createWebHistory functions are used to create history objects for client-side routing.
A history object is responsible for keeping track of the current location and navigation history in your Vue.js application.

The main difference between createWebHashHistory and createWebHistory is how they handle the URL.

createWebHashHistory uses the URL hash to store the routing information. This means that the URL
will look something like http://example.com/#/home instead of http://example.com/home.
This approach is commonly used for client-side routing because it allows you to update the URL without triggering a page reload.

Here's an example of how to create a hash history object in Vue.js:
import { createWebHashHistory } from 'vue-router'

const routerHistory = createWebHashHistory()

On the other hand, createWebHistory uses the HTML5 History API to store the routing information. This allows you to use traditional URLs,
like http://example.com/home, but it requires that your web server is configured to serve the correct content for each URL.

Here's an example of how to create a history object in Vue.js:
import { createWebHistory } from 'vue-router'

const routerHistory = createWebHistory()
#--------------------------------------------------------------------------------------------------------------------------------#

# => Teleport Component

The teleport component in Vue.js allows you to render content at a different location in the DOM from where it is defined in your component template.
This can be useful for rendering modals, dialogs, or tooltips that need to be positioned relative to a specific element on the page.

To use the teleport component in Vue.js, you first need to define a target element where you want the content to be rendered. This can be any valid CSS selector or a DOM element.

Here's an example of how to define a target element for a teleport component:

<div id="app">
=> <button @click="showModal = true">Show Modal</button>

=> <teleport to="#modal">
=> => <div v-if="showModal" class="modal">
=> => => <h2>Modal Title</h2>
=> => => <p>Modal content goes here</p>
=> => </div>
=> </teleport>

=> <div id="modal"></div>

</div>

In this example, when the "Show Modal" button is clicked, the showModal data property is set to

#================================================================================================================================#
#-------------------------------------------------------- Day 3 -----------------------------------------------------------------#
#================================================================================================================================#
[Composition API, Reactivity, Composable component , Custom Directive]

# => Composition API

=> allows us to encapsulate one piece of functionality so that you can use it in different components throughout your application.

- in Composition API we can use multiple data, methods, computed, watch, lifecycle hooks in one function.
- this function called setup() function, but we can't use setup() function in options API.
- this function is not synchronous function, so the data in setup() function is not reactive.
- so we use ref() function to make data reactive.
  #--------------------------------------------------------------------------------------------------------------------------------#

# => Ref() function

- ref() function is used to make data reactive.
- ref() function have setter and getter.
- ref() function make data reactive by wrapping it in a reactive object.
- ref() function return object contain value property and \_isRef property.
- to change data using ref() function we use .value property.
- using ref() when i identify primitive data type like string, number, boolean, but when i identify object i use reactive() function.
  #--------------------------------------------------------------------------------------------------------------------------------#

# => Reactive() function

- reactive() function is used to make object reactive.
- reactive() function have setter and getter.
- reactive() function make object reactive by wrapping it in a proxy object.
- we using reactive() function when i have group of primitive data type like object.
  #--------------------------------------------------------------------------------------------------------------------------------#

# => Reactivity in Depth

=> One on vue's most distinctive features is the unobtrusive reactivity system. Component state consists of reactive javascript objects,
When you modify them, the view updates. This system allows vue to be light weight and performant.
#--------------------------------------------------------------------------------------------------------------------------------#

# => Implementation ref() function Under the Hood

function ref(value) {
=> const refObj = {
=> => get value() {
=> => => track(refObj, 'value', 'get');
=> => => return value;
=> => },
=> => set value(newValue) {
=> => => value = newValue;
=> => => trigger(refObj, 'value');
=> => },
=> }
=> return refObj;
}
#--------------------------------------------------------------------------------------------------------------------------------#

# => Implementation reactive() function Under the Hood

function reactive(obj) {
=> return new Proxy(obj, {
=> get(target, key) {
=> => track(target, key);
=> => return target[key];
=> },
=> set(target, key, newValue) {
=> => target[key] = newValue;
=> => trigger(target, key);
=> },
=> });
}
#--------------------------------------------------------------------------------------------------------------------------------#

# Notes

- if make destructuring or spread for reactive object, the destructuring is not reactive. i lost reference for reactive object.
- to make destructuring or spread for reactive object reactive, i use toRefs() function and i wrap it in reactive() function.
- like this => const { ... } = reactive(toRefs(obj)); or ...toRefs(obj)

# => So we use toRefs() function to save reference for reactive object.

#--------------------------------------------------------------------------------------------------------------------------------#

# => Using methods and in setup() function

- we write methods in setup() function.
- and we write methods body in return object. to use it in template.
- we can use methods in template like this => @click="methodName"

#--------------------------------------------------------------------------------------------------------------------------------#
#=> using watch in setup() function

- if i have one property i use watch() function.
- watch() function take two parameters, first parameter is the property i want to watch, second parameter is the callback function.
- callback function take two parameters, first parameter is the new value, second parameter is the old value.
- but if i have group of properties i using array of properties. in the first parameter.
- and to make action in this parameters in callback function i use index to get the property i want.

#--------------------------------------------------------------------------------------------------------------------------------#

# => using computed in setup() function

- to using computed in setup() function i use computed() function.
- computed() function take two parameters, first parameter is the callback function, second parameter is the object contain getter and setter.
- in save computed function in variable and return it in return object.
- then i use this variable in template. like this => const fullName = computed(() => `${firstName.value} ${lastName.value}`); and in template i use it like this => {{ fullName }}.
- if i want to change data in computed function i use setter in second parameter.
- like this => const fullName = computed({
  => => get: () => `${firstName.value} ${lastName.value}`,
  => => set: (newValue) => {
  => => => const [newFirstName, newLastName] = newValue.split(' ');
  => => => firstName.value = newFirstName;
  => => => lastName.value = newLastName;
  => => },
  => });

#--------------------------------------------------------------------------------------------------------------------------------#

# => How to pass props in between components using Composition API

- to pass props in between components i use setup() function in parent component.
- and using ref or reactive function to make data reactive. then i send it to child component.
- in child component i use props to receive data from parent component.
- then i use setup() function and pass props in it.
- then i make computed function in setup() function and return data in it.
- then i use this computed function in template.

# in parent component

<template>
=> <div>
=> => <child-component :firstName="firstName" :lastName="lastName" />
=> </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
=> name: 'ParentComponent',
=> components: {
=> => ChildComponent,
=> },
=> setup() {
=> => const firstName = ref('Mohamed');
=> => const lastName = ref('Yahia');
=> => return {
=> => => firstName,
=> => => lastName,
=> => };
=> },
};
</script>

# in child component

export default {
=> name: 'ChildComponent',
=> props: ['firstName', 'lastName'],
=> setup(props) {
=> => const fullName = computed(() => `${props.firstName} ${props.lastName}`);
=> => return {
=> => => fullName,
=> => };
=> },
};

#--------------------------------------------------------------------------------------------------------------------------------#

# => How to send event in between components using Composition API

- to send event in between components i use setup() function in child component.
- and pass context in setup() function as a second parameter.
- in context i have emit() function to send event, and i have attrs to receive attributes from parent component.
  and i have slots to receive slots from parent component.
- i make function in setup() to send data for example function sendData() and i use emit() function in it.
- in sendData() function i use context.emit() function to send data.
- context.emit(eventName, data) function take two parameters, first parameter is the event name, second parameter is the data i want to send don't forget fullName.value.
- then i use event in child component like this => @eventName="functionName".
- then i go to parent component and make function to receive data from child component.
  for example function receiveData() and i use it in child component like this => @eventName="receiveData".
- in receiveData() function i use alert() function to show data.
  #-------------------------#

# in parent component

setup() {
=> function receiveData(data) {
=> => alert(`data from parent ${data}`);
=> }
=> return {
=> => receiveData,
=> };
},

#--------------------------------------------------------------------------------------------------------------------------------#

# => How to use provide and inject in Composition API

# => To send static data using provide and inject

- i use provide() function in parent component to send data.
- provide() function take two parameters, first parameter is the key, second parameter is the data.
- then i use inject() function in child component to receive data.
- inject() function take one parameter, the key. and save it in variable and return it in return object.
- then i use this variable in template. to show data.

#-------------------------#

# in parent component

setup() {
=> provide('staticData', 'Mohamed Yahia');
},
#-------------------------#

# in child component

setup() {
=> const staticData = inject('staticData');
=> return {
=> => staticData,
=> };
},
#--------------------------------------------------------------------------------------------------------------------------------#

# To send dynamic data using provide and inject

- I make reactive() function in parent component to make data reactive. and save it in variable. to pass it to provide() function.
- then i use provide() function in parent component to variable. that contain reactive() function.
- but i send data in provide() function like this => provide('dynamicData', dynamicData); because it's reactive.
- in child component i use inject() function to receive data. and save it in variable and return it in return object.
- then i use this variable in template. to show data.

# Note

- we see data in browser as object
- to show by keys we spread dynamicData in return object like this => return { ...dynamicData }
- and we use it in template like this => {{ firstName }} {{ lastName }}
- but we use toRefs() function to save reference for reactive object. if want manipulate data in child component.

#-------------------------#

# in parent component

setup() {
=> const dynamicData = reactive({
=> => firstName: 'Mohamed',
=> => lastName: 'Yahia',
=> });
=> provide('dynamicData', dynamicData);
},
#-------------------------#

# in child component

setup() {
=> const dynamicData = inject('dynamicData');
=> return {
=> => ...toRefs(dynamicData),
=> };
},

<template>
=> <div>
=> => {{ firstName }} {{ lastName }}
=> </div>
</template>
#--------------------------------------------------------------------------------------------------------------------------------#

# => how to use lifecycle hooks in Composition API

- to use lifecycle hooks in Composition API i use onMounted() function.
- onMounted() function take one parameter, the callback function.
- in callback function i use alert() function to show message.
- then i use onMounted() function in setup() function.

#--------------------------------------------------------------------------------------------------------------------------------#

# => Composable functions in Composition API

=> Composable functions in Composition API is like mixins in Options API.

- to make our hooks we make new js file and make function in it.
- then we export this function.

# For example in js file

import { ref, onMounted ,onUnMounted } from 'vue';

export default function useMouse() {
=> const x = ref(0);
=> const y = ref(0);
=> function update(event) {
=> => x.value = event.pageX;
=> => y.value = event.pageY;
=> }
=> onMounted(() => {
=> => window.addEventListener('mousemove', update);
=> });
=> onUnMounted(() => {
=> => window.removeEventListener('mousemove', update);
=> });
=> return {x, y};
}

# -------------------------

# in composable Component

- i use new syntax to import function from js file. (vbase-3-setup)
- in script setup i import function from js file. like this => import useMouse from './useMouse.js';
- then i destructuring function to use x and y. like this => const { x, y } = useMouse();
- to use this file i need export default and to export default i need to use script and write name component in it.
- then i use x and y in template.

<template>
=> <div>
=> => <h1>Mouse Position</h1>
=> => <p>X: {{ x }}</p>
=> => <p>Y: {{ y }}</p>
=> </div>
</template>

<script>
export default {
=> name: 'ComposableComponent',
};
</script>

<script setup>
import useMouse from './useMouse.js';
const { x, y } = useMouse();
</script>

#--------------------------------------------------------------------------------------------------------------------------------#

# => How to make our own custome directive in Composition API

=> To make our own custome directive to be shared globally in all components.

- To make our own custome directive i use directive() function.
- directive() function take two parameters, first parameter is the name of directive, second parameter is object.
- in object i write mounted() function to make our directive work.
- mounted() function take three parameters, first parameter is the element, second parameter is the binding, third parameter is the vnode.
- to make our directive global i use app.directive() function. in main.js file.

# For example

const app = createApp(App);
app.directive('theme', {
=> mounted(el, binding) {
=> => if(binding.value === 'primary') {
=> => => el.style.color = 'blue';
=> => } else if(binding.value === 'secondary') {
=> => => el.style.color = 'gray';
=> => } else if(binding.value === 'warning') {
=> => => el.style.color = 'yellow';
=> => } else {
=> => => el.style.color = 'red';
=> => }
=> }
});

app.mount('#app');

# in template

<textarea v-theme="'primary'">Text is blue</textarea>

#--------------------------------------------------------------------------------------------------------------------------------#

# How use SASS in Vue.js

SASS with Vue.js => npm i -d sass-loader node-sass

# Note language of SASS is SCSS and variables in SASS start with $ sign. and not use semicolon.

# To use typescript in Vue.js => npm i -d typescript @vue/cli-plugin-typescript

#--------------------------------------------------------------------------------------------------------------------------------#

# Vutify #VueX #VueRouter #VueCLI #VuePress #NuxtJS #Gridso #SSRApp #Transtions

// 1:23:31

#--------------------------------------------------------------------------------------------------------------------------------#
