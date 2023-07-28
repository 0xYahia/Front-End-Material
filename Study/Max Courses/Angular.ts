//! Section 1 Getting Started
//! 5: CLI Deep Dive & Troubleshooting
//! After angular build the project, the output file vai be in dist folder
// html has app-root and bunch of script files:
// inline.bundle.js / main.bundle.js / polyfills.bundle.js / vendor.bundle.js / styles.bundle.js / polyfills.bundle.js
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------////! 7: Editing the First App
// NgModel is a directive that allows us to build two-way binding
// FormsModule is a module that contains NgModel directive we need to import it in app.module.ts to use ngModel
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------////! Section 2 The Basics
// Keep in mind: Angular in the end is a JS framework, changing your DOM ['HTML'] at runtime!
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------////! 18: Understanding The Role of AppModule and Component Declaration
// AppModule is the root module of our application, it's the module that bootstraps our application
// AppModule is the module that we need to import all other modules in it like FormsModule, BrowserModule, HttpModule, etc...
//! Declaration:
// is where we declare all components, directives, pipes that we want to use in our application
//! Imports:
// is where we import other modules that we need in our application like FormsModule, BrowserModule, HttpModule, etc...
//! Providers:
// is where we register all services that we want to use in our application
//! Bootstrap:
// is where we tell Angular which component to use as the starting component of our application
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------////! 23: Fully Understanding the Role of AppModule and Component Declaration
//! Selector:
// tells Angular which HTML element is linked with which Component via element name or attribute name or class name (id is not allowed)
//! Template or templateUrl:
// is where all HTML structure for that Component is defined
//! Styles or styleUrls:
// is where all CSS styles for that Component is defined
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------////! 25: What is Databinding?
// Databinding is communication between your business logic and your template (HTML)
//! We get different way of communication:
// 1- Output Data from our Typescript code in HTML code:
// We can String Interpolation {{ data }}
// or Property Binding [property]="data"

// 2- React to (User) Events in HTML code (e.g. Button Click):
// We can Event Binding (event)="expression"

// 3- Combination of both:
// We can Two-Way-Binding [(ngModel)]="data"
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 26: String Interpolation
// String Interpolation is a way to output data from our Typescript code in HTML code using {{ data }} and  every thing inside {{ }} will be executed as a string
// and we can use any valid Typescript expression inside {{ }} like {{ data + data }} or {{ data ? data : data }} or method {{ method() }}
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 27: Property Binding
// Property Binding is a way to output data from our Typescript code in HTML code using [property]="data" and every thing inside [ ] will be executed as a Typescript code
// and we can use any valid Typescript expression inside [ ] like [property]="data + data" or [property]="data ? data : data" or method [property]="method()"
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 28: Property Binding vs String Interpolation
// What is the difference between Property Binding and String Interpolation? and when to use each one?
// String Interpolation is used to output data from our Typescript code in HTML code
// if you want to output something in your template (HTML) or print some text to it, use String Interpolation
// Property Binding is used to set an element property from our Typescript code in HTML code
// if you want to change some property, based of an html element or a directive or a component, use Property Binding
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 29: Event Binding
// Event Binding is a way to react to (User) Events in HTML code (e.g. Button Click) using (event)="expression" and every thing inside ( ) will be executed as a Typescript code
// and we can use any valid Typescript expression inside ( ) like (event)="data + data" or (event)="data ? data : data" or method (event)="method()"
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 31: Passing and Using Data with Event Binding
// We can pass data to the event handler method using $event object
// (event)="method($event)"
// and we can use $event object in our method to get the data that we passed to it event.target.value
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 33: Two-Way-Binding
// Two-Way-Binding it's a combination of [property]="data" and (event)="data = $event"
// ngModel is a directive that allows us to build two-way binding
// FormsModule is a module that contains NgModel directive we need to import it in app.module.ts to use ngModel
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 34: Combining all Forms of Databinding
