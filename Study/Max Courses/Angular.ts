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
//! 36: Understanding Directives
// What are directives?
// Directives are instructions in the DOM
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 38: Enhancing ngIf with an Else Condition
// We can use else condition with ngIf using ng-template
// <ng-template #templateRef>...</ng-template>
// <div *ngIf="condition; else templateRef">...</div>
// and we can add variable after ngIf to represent the index of iteration
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 39: Styling Elements Dynamically with ngStyle
// What are types of directives?
// 1- Component Directives: are directives that create their own view
// 2- Attribute Directives: are directives that change the behavior or look of an existing element, component, or another directive like ngStyle
// 3- Structural Directives: are directives that change the structure of the dom (view) like ngIf, ngFor, ngSwitch
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 40: Applying CSS Classes Dynamically with ngClass
// We can use ngClass to apply CSS classes dynamically
// <div [ngClass]="{ 'class-name': condition }">...</div>
// or
// <div [ngClass]="{ 'class-name': condition, 'class-name': condition }">...</div>
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! Section 3: Course Project - The Basics
//! 66: Binding to Custom Properties
// We can pass data from parent component to child component using custom properties
// <app-server-element [element]="serverElement"></app-server-element>
// and we can use @Input() decorator to make the property accessible from outside the component
// @Input() element: { type: string, name: string, content: string };
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 67: Assigning an Alias to Custom Properties
// We can assign an alias to custom properties using @Input('alias') decorator
// @Input('alias') element: { type: string, name: string, content: string };
// and we can use the alias in the parent component
// <app-server-element [alias]="serverElement"></app-server-element>
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 68: Binding to Custom Events
// We can pass data from child component to parent component using custom events
// <app-cockpit (serverCreated)="onServerAdded($event)" (blueprintCreated)="onBlueprintAdded($event)"></app-cockpit>
// and we can use @Output() decorator to make the event accessible from outside the component
// @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
// and we can emit the event from the child component
// this.serverCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent });
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 69: Assigning an Alias to Custom Events
// We can assign an alias to custom events using @Output('alias') decorator
// @Output('alias') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
// and we can use the alias in the parent component
// <app-cockpit (alias)="onServerAdded($event)" (blueprintCreated)="onBlueprintAdded($event)"></app-cockpit>
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 70: Custom Property and Event Binding Summary
// We can use custom properties and custom events to pass data between components
// @Input() element: { type: string, name: string, content: string };
// @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 71: Understanding View Encapsulation
// View Encapsulation is a way to define how the styles of a component should be scoped
// View Encapsulation is enabled by default
// shadow dom is a browser feature that allows us to scope our styles to a specific component
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 72: More on View Encapsulation
// We can disable View Encapsulation using encapsulation: ViewEncapsulation.None
// @Component({
//   selector: 'app-servers',
//   templateUrl: './servers.component.html',
//   styleUrls: ['./servers.component.css'],
//   encapsulation: ViewEncapsulation.None
// })
// and we can use ViewEncapsulation.Native to use shadow dom
// @Component({
//   selector: 'app-servers',
//   templateUrl: './servers.component.html',
//   styleUrls: ['./servers.component.css'],
//   encapsulation: ViewEncapsulation.ShadowDom
// })
// and the default value is ViewEncapsulation.Emulated to make angular emulate shadow dom enforcing style encapsulation
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 73: Using Local References in Templates
// We can use local references to get access to the value of an input field
// <input type="text" class="form-control" #serverNameInput>
// we can use the local reference in the template using {{ serverNameInput.value }}
// and we can pass the local reference to the ts code as an argument
// <button class="btn btn-primary" (click)="onAddServer(serverNameInput)">Add Server</button>
// and we can get the value of the local reference in the ts code
// onAddServer(serverNameInput: HTMLInputElement) {
//   this.serverCreated.emit({ serverName: serverNameInput.value, serverContent: this.newServerContent });
// }
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 74: @ViewChild() in Angular 8+
//! @ViewChild() in Angular 8+
// In Angular 8+, the @ViewChild() syntax which you'll see in the next lecture needs to be changed slightly:

//! Instead of:

// @ViewChild('serverContentInput') serverContentInput: ElementRef;

//! use

// @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
// The same change (add { static: true } as a second argument) needs to be applied to ALL usages of @ViewChild() (and also @ContentChild()
// which you'll learn about later) IF you plan on accessing the selected element inside of ngOnInit().

// If you DON'T access the selected element in ngOnInit (but anywhere else in your component), set static: false instead!

// If you're using Angular 9+, you only need to add { static: true } (if needed) but not { static: false }.

//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 75: Getting Access to the Template & DOM with @ViewChild
// We can use @ViewChild() to get access to the template & DOM
// @ViewChild('serverContentInput') serverContentInput: ElementRef;
//! ElementRef: is a generic type that allows us to get access to the element that the local reference is placed on
// and we can get the value of the local reference in the ts code
// onAddServer(nameInput: HTMLInputElement) {
//   this.serverCreated.emit({ serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value });
// }

// and also we can set the value of the local reference in the ts code
// this.serverContentInput.nativeElement.value = 'Something';
//! NOT => not recommended to use it to access the DOM angular offers a better way of accessing the DOM like string interpolation, property binding, event binding, ngModel, etc...
//! we can't use template reference @ViewChild() before AfterViewInit => if we use it before AfterViewInit will be undefined
//! but if we want use template reference @ViewChild in ngOnInit() we added {static: true} as a second parameter in @ViewChild()
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 76: Projecting Content into Components with ng-content
// We can use ng-content to project content into components
// <ng-content></ng-content>
// we use ng-content in the component template where we want to project the content
// we write the content between the opening and closing tag of the component selector
// and we can use ng-content with select attribute to project content into components based on the selector

//! Example:
//! In app.component.html
// <app-server-element *ngFor="let serverElement of serverElements" [element]="serverElement">
// <p>
//   <strong *ngIf="serverElement.type === 'server'" style="color: red">{{ serverElement.content }}</strong>
//   <em *ngIf="serverElement.type === 'blueprint'">{{ serverElement.content }}</em>
// </p>

//! In server-element.component.html
// <div class="panel panel-default">
//   <div class="panel-heading">{{ element.name }}</div>
//   <div class="panel-body">
//     <ng-content></ng-content>
//   </div>
// </div>
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 77: Understanding the Component Lifecycle
// Angular has a lifecycle for components
// 1- ngOnChanges: called after a bound input property changes (e.g. @Input() data) and before ngOnInit
// 2- ngOnInit: called once the component is initialized (after the constructor)
// 3- ngDoCheck: called during every change detection run (every time angular checks for changes in the component)
// 4- ngAfterContentInit: called after content (ng-content) has been projected into view (e.g. after ng-content)
// 5- ngAfterContentChecked: called every time the projected content has been checked (e.g. after ng-content)
// 6- ngAfterViewInit: called after the component's view (and child views) has been initialized (e.g. after the template)
// 7- ngAfterViewChecked: called every time the view (and child views) has been checked (e.g. after the template)
// 8- ngOnDestroy: called once the component is about to be destroyed (e.g. when navigating away or removing the component like *ngIf)W
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 79: Lifecycle Hooks and Template Access
// We can use lifecycle hooks to get access to the template & DOM after they are initialized and rendered on the screen (after the template)
// via but the element in afterViewInit() lifecycle hook if we but the element before afterViewInit() it will be undefined or empty
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//! 80: Getting Access to ng-content with @ContentChild
//! @ContentChild() to get access to ng-content and the element that the ng-content is placed on (the element that the content is projected into)
// if i but element in app component and i pbut <ng-content></ng-content> in server element component and i want to get access to the element in app component
// i will use @ContentChild() in server element component to get access to the element in app component
// @ContentChild('contentParagraph') paragraph: ElementRef;
// and i will use the element in ngAfterContentInit() lifecycle hook if i use it before ngAfterContentInit() it will be undefined or empty
//!-------------------------------------------------------------------------------------------------------------------------------------------------------------------//