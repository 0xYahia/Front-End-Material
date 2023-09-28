Day 1:
What is Angular?:
=> Angular is a JavaScript framework which allows us to create Single Page Applications (SPA). It is an open source framework which is used
to create front end of web applications.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
What is a single page application?:
=> A single page application is a web application which loads a single HTML page and all the necessary assets (such as JavaScript and CSS)
Prefect example of SPA is Gmail and netflix.
single page application: application we have only html file and only the content of that html file changes, the web page or the html
file itself never changes.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Advantages of SPA:
1: Fast: SPA makes a wb application faster and gives a better user a reactive experience.
2: Using javascript to change the content of hte webpage dynamically is much faster than having to reach out to the server for every page change
and for every new piece of data we want to display.
3: if we do need some data from the server, we can load it in the background without making the webpage unresponsive
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Why use angular?:
1: angular gives our application a clean and loosely coupled structure that is easy to understand & maintain.
2: it brings a lot of utility code which can be re-used in lot of applications. Especially, when dealing with user navigation & browser history.
3: Applications built with angular are more testable, and hence more stable.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
centralized data binding: angular provides a centralized data binding mechanism. This means that we can bind the data of our model to the
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
NOTE: When application run main.ts file is executed first. then it will look for app.module.ts (BootstrapModule) (appModule) file and then it will look for
app.component.ts file. then it will look for html and css files.

#-------------------------------------------------------------------------------------------------------------------------------------------------------#
export class StoreData {
=> name: string;
=> age: number;
=> constructor(name: string, age: number) {
=> => this.name = name;
=> => this.age = age;
=> }
}

OR: I can use access modifier in the constructor parameter itself.

export class StoreData {
=> constructor(public name: string, public age: number) {
=> }
}
here i am using public access modifier in the constructor parameter itself. to make the code more concise.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
MVC: Model View Controller (MVC) is a software design pattern for developing web applications. A Model View Controller pattern
is made up of the following three parts:
Any mvc framework is made up of three parts:
1: Model: The model is responsible for managing application data. It responds to the request from the view and to the instructions from the controller
to update itself.
2: View: The view is responsible for displaying all or a portion of the data to the user. It gets its data from the model. (html file)
3: Controller: Controllers act as an interface between Model and View components to process all the business logic and incoming requests, manipulate
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
@Component: @Component is a decorator which is used to mark a class as an angular component and extend the functionality of the class.
@Component decorator has the following properties:
1: selector: selector is a css selector which is used to select the html element in the template where the component will be rendered.
2: templateUrl: templateUrl is the url of the template file for an angular component.
OR template: template is an inline template for an angular component. if i have one or two tags of html code then we can use template property.
3: styleUrls: styleUrls is an array of urls of the css files that will be applied to the template of the component.
OR styles: styles if i have one or two lines of css code then we can use styles property.

# 4: providers: providers is an array of dependency injection providers for services that the component requires.

# 5: directives: directives is an array of directives that the component requires.

# 6: pipes: pipes is an array of pipes that can be used in the template.

# 7: animations: animations is an array of animations that can be used in the template.

# 8: encapsulation: encapsulation is a view encapsulation strategy that defines how the css styles defined in the component can be applied to the

#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Angular CLI: Angular CLI is a command line interface to scaffold and build angular apps using nodejs style modules. Angular CLI is a command line
To add bootstrap to our angular project we need to run the following command:
npm install bootstrap --save
then we need to add the following line in the styles array of the angular.json file:
"node_modules/bootstrap/dist/css/bootstrap.min.css"
then we need to add the following line in the scripts array of the angular.json file:
"node_modules/bootstrap/dist/js/bootstrap.min.js"

OR: we can add the following line in the index.html file:

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
and we can add the following line in the index.html file:
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Binding: Binding is a process of connecting your application view with your application model. There are four types of binding in angular:
1: Interpolation: {{}}: Interpolation is a one way data binding technique which is used to output the data from the class to the html template.
I can call any method or property of the class in interpolation.
2: Property Binding: []: Property binding is a one way data binding technique which is used to set the property of the html element.
like <img [src]="imagePath"> here i am setting the src property of the img tag. imagePath is a property of the class.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
What is string directives?:
=> Directives are instructions in the DOM (Document Object Model). Angular has built in directives like ngIf,
ngFor, ngSwitch etc. and we write *ngIf, *ngFor, *ngSwitch etc. in the html file. so these are called string directives.

Example:

<ul>
=> <li *ngFor="let item of storeInfo">{{item}}</li>
</ul>

Here *ngFor is a string directive.
NOTE: we write *ngFor in the element where we want to repeat the element.

ngIf: ngIf is a structural directive which is used to add or remove an element from the DOM based on the condition.

Example:
in ts file:
=> isImageShown: boolean = true;

toggleImage(): void {
=> this.isImageShown = !this.isImageShown;
}

in html file:
=> <img \*ngIf="isImageShown" [src]="imagePath" width="100" height="100">
<button (click)="toggleImage()">Toggle Image</button>

event binding: event binding is a one way data binding technique which is used to bind the DOM event to the class method.
click event: click event is a DOM event which is fired when the user clicks on an element.
NOTE: event binding is binding from the view to the controller.
interpolation and Property binding are binding from the controller to the view.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Day 2:
Model: Model is a class which is used to store the data of the application. Model is also called as business object
or business entity. model uses the class properties to store the data coming from a database or from a web service.

ViewModel: ViewModel is a custome model to show the data in the view. ViewModel is also called as presentation model.
and show data is not exist in the model like category name is not exist in the model in the mode we find category id.
so we can create a custome model to show the data in the view.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Safe navigation operator: Safe navigation operator is used to avoid the error when the data is not available in the model.
Safe navigation operator is used with interpolation and property binding. (?.)
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Template Variable: Template variable is a reference to a DOM element or directive in a template.
Template variable is used to access the DOM element or directive in the template. (like #name)
Example:
<input type="text" #customeInput>
<button type="button" class="btn btn-secondary" (click)="buy(prod.price, +itemsCount.value)" >Buy</button>
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Two way data binding: Two way data binding is a technique which is used to bind the data from the class to the view and
from the view to the class. Two way data binding is used with ngModel directive.

NOTE: two way data binding is used with Input Select(Form).
To add component in angular we need to add it in the app.module.ts file in the declarations array.
To add model in angular we need add it in the app.module.ts file in the imports array.

Syntax:
<input type="text" [(ngModel)]="propertyName">
[()] => is called banana operator.
[(ngModel)] => always refer to the value of the input element.

Example:

<label for="prodCat" class="form-label">Category:</label>

 <!-- // one way binding -->
 <!-- <select #cat class="form-select " name="cat" id="prodCat" (change)="getSelectedCat()"> -->
 <!-- // two way binding -->

<select
=> class="form-select"
=> name="cat"
=> id="prodCat"
=> [(ngModel)]="selectedCatID"

> => <option \*ngFor="let cat of catList" [value]="cat.id">{{ cat.name }}</option> > </select>

</div>
<div class="test-secondary">[To be Removed] For test: {{ selectedCatID }}</div>
<button class="btn btn-primary" (click)="changeSelectedCat()">Change</button>
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
class binding:
1: the first way: standard class attribute setting
<div class="bad curly special">Bad curly special</div>

NOTE: You can replace that with a binding to a string of the desired class names; this is an all-or-nothing.
replacement binding.

The second way: reset/override all class names with a binding

<div [class]="'badCurly'">Bad curly</div>

NOTE: Finally, you can bind to a specific class name. Angular adds the class when the template expression
evaluates to truthy. it removes the class when the expression is falsy.

The third way: toggle the "special" class on/off with a property

<div [class.special]="isSpecial">The class binding is special</div>

Binding to `class.special` trumps the class attribute

<div class="special" [class.special]="!isSpecial">This one is not so special</div>
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Style binding: like class binding we can also bind the style of the element.
Example:
[style.background-color]="prod.quantity == 0 ? 'yellow' : 'lightgray'"
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
To pass object of event in the method we need to use $event object.

in template:
<input (keyup)="onKeyUp($event)">

<p>{{values}}</p>

in class:
export class KeyUpComponent{
=> values = '';
=> onkey(event: any){ // without type info
=> this.values += event.target.value + ' | ';
=> }
}
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Directive: Directive is a class which is used to add additional behavior to the DOM element.
There are three types of directives in angular:

1: Component: Component is a directive which is used to add additional behavior to the DOM element.
example: <app-product></app-product> (selector)

2: Structural Directive: Structural directive is a directive which is used to add or remove an element from the DOM.
always start with *.
Example: *ngIf, *ngFor, *ngSwitch etc.

3: Attribute Directive: Attribute directive is a directive which is used to change the behavior of the DOM element.
Example: ngClass, ngStyle ngModel etc.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
*ngFor: *ngFor is a structural directive which is used to repeat an element in the DOM.

ngFor has variables like index, first, last, odd, even etc.
i can use it like this:

<div \*ngFor="let item of storeInfo; let i = index; let f = first; let l = last; let o = odd; let e = even">
{{i}} {{f}} {{l}} {{o}} {{e}} {{item}}
</div>

OR i can use it like this:

<div \*ngFor="let item of storeInfo; index as i; first as f; last as l; odd as o; even as e">
{{i}} {{f}} {{l}} {{o}} {{e}} {{item}}
</div>

NOTE: We use this variables to change the style of the element. or check the condition.

NOTE: To enhance the performance of the application we need to use trackBy function with ngFor

VIP NOTE: trackBy function is used to track the changes in the array. instead of removing all the elements and adding them again
it will only remove the element which is changed and add the new element.

trackBy function: takes two parameters index and item of type from the element it i looping through.
and return the unique value of the element (like id).

A custom TrackByFunction is useful to provide good user experience in cases when items in an iterable rendered using
NgForOf have a natural identifier (for example, custom ID or a primary key), and this iterable could be updated with
new object instances that still represent the same underlying entity (for example, when data is re-fetched from
the server, and the iterable is recreated and re-rendered, but most of the data is still the same).
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
What difference between ngIf and hidden property?
ngIf: ngIf is a structural directive which is used to add or remove an element from the DOM.
hidden: hidden is a property which is used to hide the element from the DOM.

hidden faster than ngIf because it only hide the element from the DOM.

How can i know use ngIf or hidden?:
If i has element It changes a lot in runtime and i need process be fast we use hidden.
If i has element not change a lot in runtime and we use ngIf. instead of add element but not show it.
this is better for performance.

NOTE: We can put two structural directive on the same element.

NOTE: To solve the problem of ngIf and hidden we can use ng-container.
ng-container is a directive which is used to wrap the element. ng-container is not added to the DOM.

ng-template: ng-template is a directive which is used to wrap the element. ng-template we added to the DOM if condition is true.
and will not added to the DOM if condition is false.
we put template variable on the ng-template and we can use it in the condition. to check if the template is added to the DOM or not.

ng-container: ng-container is a directive which is used to wrap the element. ng-container is not added to the DOM.

To know more about ng-template, ng-container and ng-content visit this link:
https://www.freecodecamp.org/news/everything-you-need-to-know-about-ng-template-ng-content-ng-container-and-ngtemplateoutlet-4b7b51223691/

What difference between ngTemplate and ng-container?:
ngTemplate: Not added to the DOM. whether i add structural directive to show it or not. like ngIf.
ng-container: Not added to the DOM. i use it to use more than one structural directive on the same element.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Attribute directive: Attribute directive is a directive which is used to change the behavior of the DOM element.
Like ngClass, ngStyle, ngModel etc.

ngClass: ngClass is a directive which is used to add or remove the class from the DOM element.
ngStyle: ngStyle is a directive which is used to add or remove the style from the DOM element.

What difference between ngClass and class binding?:
ngClass: ngClass is a directive which is used to add or remove the class from the DOM element. and i can add more than one class.
it takes an object to add more than one class.
class binding: class binding is a binding which is used to add or remove the class from the DOM element. and i can add only one class.
and it is added or not based on the condition.

What difference between ngStyle and style binding?:
ngStyle: ngStyle is a directive which is used to add or remove the style from the DOM element. and i can add more than one style.
it takes an object to add more than one style. and i can use ternary operator to add or remove the style based on the condition.
style binding: style binding is a binding which is used to add or remove the style from the DOM element. and i can add only one style.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Custome Directive: Custome directive is a directive which is created by the user.
There are two types of custome directive:
Custome Attribute Directive: Custome attribute directive is a directive which is created by the user. to change the behavior of the DOM element.

How can i create custome attribute directive?:
1: Create a directive using angular cli. ng g directive directiveName OR ng g d directiveName --skipTests=true
2: Import the directive in the app.module.ts file.
3: Add the directive in the declarations array in the app.module.ts file.
4: Use the directive in the template.

How can i use custome attribute directive?:
1: We put the directive name in the element i want to change the behavior of it.
2: Now i has reference to the element in the directive class. and i can change the behavior of the element.
3: i go to the class of the directive and i pass the element in the constructor. as a parameter. from ElementRef type.
Then i write elemRef.nativeElement.style.backgroundColor = 'red'; to change the background color of the element.
nativeElement: nativeElement is a property which is used to get the element from the DOM. like getElementById.
then we write our logic in the class of the directive.

If i create methods to apply the logic. it will not work. because it don't know what is the element i want to change the behavior of it.
So we use Method decorator. to pass the element to the method. and we use @HostListener('mouseenter') mouseover(eventData: Event) { }
to listen to the event. and we use @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'; to bind the style to the element.

To pass parameters to the directive we use @Input() propertyName: string = 'default value'; in the directive class.
then we pass the value to the directive in the template. like this: propertyName="value".

Example:

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
=> selector: '[LightBox]',
})
export class LightBoxDirective {
=> @Input() heighLightColor: string = 'yellow';
=> constructor(private elemRef: ElementRef) {
=> => this.elemRef.nativeElement.style.border = '2px solid darkblue';
=> }

=> @HostListener('mouseover') onMouseOver() {
=> => this.elemRef.nativeElement.style.border = `2px solid ${this.heighLightColor}`;
=> }

=> @HostListener('mouseout') onMouseOut() {
=> => this.elemRef.nativeElement.style.border = '2px solid darkblue';
=> }
}

To enhance this code i can use alias name for the property. like this: @Input('LightBox') heighLightColor: string = 'darkblue';
then i can use it like this: LightBox="value".

=> @Input('LightBox') heighLightColor: string = 'yellow';
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
We can use more than input in the directive. like this:

In Template:

<td>
=> <img [src]="prod.imgURL" alt="" LightBox="red" defaultColor="gray" />
</td>

In Ts:
@Directive({
=> selector: '[LightBox]',
})
export class LightBoxDirective {
=> @Input('LightBox') heighLightColor: string = 'yellow';
=> @Input() defaultColor: string = 'darkblue'; // can take another alias name.
=> constructor(private elemRef: ElementRef) {
=> => this.elemRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
=> }

=> @HostListener('mouseover') onMouseOver() {
=> => this.elemRef.nativeElement.style.border = `2px solid ${this.heighLightColor}`;
=> }

=> @HostListener('mouseout') onMouseOut() {
=> => this.elemRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
=> }
}

NOTE: In this example the default color doesn't work is still red. until i hover over the image. then it will change to yellow.
then when i move the mouse out of the image it will change to gray. because the default color is gray.
the reason is the constructor is called first. then the input is called. so the default color is red. then the input is called and
the color is changed to gray. we will know this in lifecycle component.

NOTE: We can make custome directive to be structural directive. like ngIf, ngFor etc.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Pipes: Pipes is a feature which is used to format the data. like uppercase, lowercase, currency, date etc.

Syntax:

{{ data | pipeName : parameter1 : parameter2 : parameter3 }}

Example:
{{ value_expression | currency [ : currencyCode [ : display [ : digitsInfo [ : locale ] ] ] ] }}

<td>{{ prod.price | currency : "EUR" : "symbol" }}</td>

currency: currency is a pipe which is used to format the data to currency. it takes three parameters.
1: currency code. like EUR, USD etc.
2: display: it takes two values. symbol or code.
3: digitsInfo: it takes two values. 1-5 or 1.2-2 etc.

Another example:
<br />fullDate Order's Date: {{ orderDate | date : "fullDate" }}

date: date is a pipe which is used to format the data to date. it takes three parameters.
1: date format. like fullDate, shortDate etc.
2: timezone: it takes the timezone. like GMT, UTC etc.
3: locale: it takes the locale. like en-US, en-GB etc.

# Look in Documentation for more pipes.

What difference between directive and pipe?:
directive: directive is a feature which is used to change the behavior of the DOM element.
pipe: pipe is a feature which is used to format the data.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
We can create our own pipe. like this:
ng g pipe pipeName OR ng g p pipeName --skipTests=true
Custome pipe: is a class which is created by the user. to format the data. above it decorator @Pipe({ name: 'pipeName' })
then we implement PipeTransform interface. and we implement the class transform.
transform is a method which is used to format the data. it takes two parameters.
1: value: the value i want to format.
2: args: the arguments i want to pass to the pipe. like currency code, date format etc.
then we return the value after we format it.

Example:

In Template:
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
=> name: 'USDtoEGP',
})
export class USDtoEGPPipe implements PipeTransform {
=> transform(value: number, rate: number = 15): number {
=> => return value \* rate;
=> }
}

In Ts:

<td>{{ prod.price | currency : "EUR" : "symbol" }}</td>
<td>{{ prod.price | USDtoEGP  | currency : "EGP" : "code" }}</td> // take default value of rate.
<td>{{ prod.price | USDtoEGP : 30 | currency : "EGP" : "code" }}</td> // pass value to rate.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Day 3:
Components Lifecycle OR Lifecycle Hooks: Components Lifecycle is a feature which is used to know the lifecycle of the component.
like when the component is created, when it is rendered, when it is destroyed etc.
In lifecycle we have three phases:
1: Creation: when the component is created. we have three hooks in this phase.
1.1: constructor: is a method which is used to initialize the component. it is called first.

1.2: ngOnChanges: is a method which is called with each change of the perimeters (inputs) of the component only. any another change not on
ngOnChanges it is called after the constructor.
So the color is not changed to gray. because the constructor is called first.
then the ngOnChanges is called. so we should use the ngOnChanges

1.3: ngOnInit: is a method which is used to initialize the component. it is called after the constructor and ngOnChanges. so we should use it
to initialize the component. like get data from the server etc.

1.4: ngDoCheck: is a method which is used to check the component. when the component is changed. in the collection of the component has structural
directive like ngIf, ngFor etc. it is called after the ngOnInit. so we should use it to check the component. like add, remove, update etc.

2: Update: when the component is updated. we have two hooks in this phase.
2.1: ngAfterContentInit:s
2.2: ngAfterContentChecked:
2.3: ngAfterViewInit: is a method which is called after the view is loaded. so if we want to do something after the view is loaded. we should use it.
before ngAfterViewInit the view is not loaded. so we can't do anything with html elements before ngAfterViewInit.
2.4: ngAfterViewChecked:

3: Destruction: when the component is destroyed. we have one hook in this phase.
3.1: ngOnDestroy: is a method which is used to destroy the component. like unsubscribe from the observable etc.

To know more about lifecycle hooks. look in documentation.
https://angular.io/guide/lifecycle-hooks
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
What difference between Constructor and ngOnInit?:
The best practice is to use the constructor to do two things:
1: Variables initialization.
2: Dependency injection.

Any thing i want to do after the component is initialized. i should use ngOnInit. because ngOnInit is called after the ngOnChanges.
if make any change in the component like change the value of the input. ngOnChanges is called. then ngOnInit is called.
but the constructor is called first. so i can't show the change in the constructor. i should use ngOnInit.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
So the solve of the problem we face it we use NgOnChanges instead of constructor. because ngOnChanges when the input is changed.
ngOnChanges() {
=> this.elemRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
}
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
To filter products by category:
in template:
<select class="form-select" name="cat" id="prodCat" [(ngModel)]="selectedCatID" (change)="filterProdByCatID()">
=> <option \*ngFor="let cat of catList" [value]="cat.id">{{ cat.name }}</option>
</select>

<ng-container
=> \*ngFor="
=> => let prod of productListCat;
=> => let i = index;
=> => even as e;
=> => let o = odd;
=> => trackBy: trackByProdID
=> ">

in ts:
initialize variables:
productListCat: IProduct[] = [];

in constructor:
this.productListCat = [...this.productList]; // to show all products in the beginning.

to filter products by category:
filterProdByCatID() {
=> this.productListCat = this.productList.filter(
=> => (prod) => prod.categoryID == this.selectedCatID
=> );
}
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Components Interaction: is a feature which is used to make the components interact with each other.
There are two types of components interaction:
Interaction between nested components: is a feature which is used to make the parent component interact with the child component.
like pass data from the parent component to the child component. and pass data from the child component to the parent component.
in this type we have two ways to pass data:
1: Pass data from the parent component to the child component: using @Input decorator.
2: Pass data from the child component to the parent component: using @Output decorator.

Interaction between sibling components: is a feature which is used to make the sibling components interact with each other.
To pass date in this type we use: a service to pass data between the sibling components.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
@Input decorator: is a decorator which is used to pass data from the parent component to the child component.
in the child component:
1: import Input from @angular/core.
2: create a variable with the type of the data i want to pass to the child component. then we add @Input() decorator before the variable.
In template of parent component:
1: we add the selector of the child component. then we add the variable name with the value we want to pass to the child component.

Example:
in ts of child component:
@Input() sentCatID: number = 0;

in template of parent component:
<app-product-list [sentCatID]="selectedCatID"></app-product-list>
sentCatID: is the variable name in the child component.
selectedCatID: is the variable name in the parent component.

@Input it know any change happen in parent component. because we put it in OnChanges.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
@Output decorator: is a decorator which is used to pass data from the child component to the parent component.
But Output decorator it's note related to the lifecycle hooks. it's related to the EventEmitter.
So we make our event in the child component. then we pass it to the parent component.

in the child component:
1: import Output and EventEmitter from @angular/core.
2: create a variable with the type of EventEmitter. generic type is the data type i want to pass to the parent component.
3: I initialize the variable in the constructor. (instance of EventEmitter).
4: I execute the event i made it in the function i want to pass the data to the parent component.
NOTE: Until now the variable is show in child component only not in parent component.
To pass the variable to the parent component: we use @Output decorator. before the variable.

Then in the parent component:
We add the event name in the child component selector. and put the function i want to execute when the event is executed.
Then we initialize the function in the parent component. and assigned the value of the event to the variable i want to pass it to the parent component.

Example:
in ts of child component:
@Output() totalPriceChanged: EventEmitter<number>;
constructor() {
=> this.totalPriceChanged = new EventEmitter<number>();
}

buy(prodPrice: number, count: number) { // this function i want execute the event if it fired.
=> this.orderTotalPrice += count \* prodPrice;
=> // Execute my event
=> this.totalPriceChanged.emit(this.orderTotalPrice);
}

in template of parent component:
We add the event name in the child component selector to subscribe on it. and put the function i want to execute when the event is executed.
<app-product-list [sentCatID]="selectedCatID" (totalPriceChanged)="onTotalPriceChanged($event)"> </app-product-list>

in ts of parent component:
We initialize the function in the parent component. and assigned the value of the event to the variable i want to pass it to the parent component.
onTotalPriceChanged(totalPrice: number) {
=> this.orderTotalPrice = totalPrice;
}
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
@ViewChild decorator: is a decorator which is used to get the reference of the child component in the parent component.
We can use it in the same component and in nested components.
ElementRef: is a class which is used to get the reference of the html element.
Steps to use @ViewChild decorator:
1: we put template reference variable in the element we want to get it's reference.
2: we create a variable with the type of the ElementRef. then we add @ViewChild() decorator before the variable.
We have more than way to give the variable of type ElementRef the initial value:
2.1: @ViewChild('templateVariableName') clientNameInputElem: ElementRef = new ElementRef(); // we initialize the variable in the constructor. (worst way).
2.2: @ViewChild('templateVariableName') clientNameInputElem: ElementRef = {} as ElementRef; // we put the property of ElementRef in the empty object.
2.3: @ViewChild('templateVariableName') clientNameInputElem: ElementRef | undefined = undefined;
here i use union type. because i don't know if the variable will have value or not.
2.4: @ViewChild('templateVariableName') clientNameInputElem: ElementRef | null = null;
here i use union type. because i don't know if the variable will have value or not.
2.5: @ViewChild('templateVariableName') clientNameInputElem?: ElementRef; // we use optional chaining. but we should use it with if condition.
to check if the variable has value or not.
2.6: @ViewChild('templateVariableName') clientNameInputElem!: ElementRef; // we use non-null assertion operator. (best way).
we don't need to check if the variable has value or not. because we use non-null assertion operator. and it says to the compiler
that the variable will ever be null or undefined. so we don't need to check if the variable has value or not.

3: we use this variable in ngAfterViewInit() lifecycle hook. because we use it after the view is initialized.

#-------------------------------------------------------------------------------------------------------------------------------------------------------#
What the difference between @Output and @ViewChild?:
@Output: is a decorator which is used to pass data from the child component to the parent component.
If action happen in the child component. and i want to pass the data to the parent component. we use @Output decorator.
because we subscribe on the event in ngOnChanges in the child component. each data change in the child component. ngOnChanges will be executed.
and the function i initialize in the parent component will be executed.

@ViewChild: is a decorator which is used to get the reference of the child component in the parent component.
If action happen in the parent component. we used @ViewChild decorator to get the reference of the child component in the parent component.
because i don't need to subscribe on any event. i just need to get the reference of the child component in the parent component.
and the action will be executed in the parent component.

NOTE: We don't must use the variable of type ElementRef come from @ViewChild decorator. in ngAfterViewInit() lifecycle hook.

VIP NOTE: In parent component i can make variable with the type of the child component. then i can access any property or method (public)
initialized in the child component. in parent component.

Example:
In ts of parent component:
@ViewChild('clientNameInput') clientNameInputElem!: ElementRef;
@ViewChild(ProductListComponent) prodListComObj!: ProductListComponent;

ngAfterViewInit() {
=> this.clientNameInputElem.nativeElement.value = 'You Name';
=> this.clientNameInputElem.nativeElement.style.border = '2px solid red';
=> console.log(this.prodListComObj.productList);
}

completeOrder() {
=> // For Test
=> this.prodListComObj.productList[0].quantity -= 1;
}

in template of parent component:

<app-product-list // This is ProductListComponent selector
=> [sentCatID]="selectedCatID"
=> (totalPriceChanged)="onTotalPriceChanged($event)"

> </app-product-list>

<div>
=> <h3>Enter Your Name:</h3>
=> <input #clientNameInput type="text" class="form-control" />
</div>

<button class="btn btn-success" (click)="completeOrder()">Place Holder</button>
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Day 4:
Services dependency injection: is a design pattern which is used to make the code more reusable and maintainable.
the main goal of the dependency injection is to remove hard coded dependency between the classes.
to reduce coupling or dependency between the classes. (decoupling).

Instead of in the component make object from the service and use it in the component this is dependency. or coupling between the component and the service.
because each create component need inside it object from this service. this mean the service is become on of the main files in the component. and this is wrong.

In OOP we have 4 types of relationships between the classes:
1: Association: is a relationship between two classes which is based on the concept of "uses" or "can use".
Example: the class A uses the class B. or the class A can use the class B.
2: Aggregation: is a relationship between two classes which is based on the concept of "has a".
Example: the class A has a class B.
3: Composition: is a relationship between two classes which is based on the concept of "has a".
Example: the class A has a class B. and the class B can't exist without the class A.
4: Inheritance: is a relationship between two classes which is based on the concept of "is a".
Example: the class A is a class B.

If i defined object from class inside another class. it must this relationship be type of three relationships:
1: Association: is a relationship between two classes which is based on the concept of "uses" or "can use".
2: Aggregation: is a relationship between two classes which is based on the concept of "has a".
3: Composition: is a relationship between two classes which is based on the concept of "has a".

If we make it, must be the service part of the component.

In our case the class not depend on the service class to work. i may change the business logic and send it to another services.
and i may change the business logic and this service will changed, so we can't use the three relationships.

But may class component need to use the service class. so we use injection dependency.
any class need to use the service class. we inject the service class in the constructor of the class

Instead of creating an instance of the class in the constructor. we inject the class in the constructor.
this to make the code more reusable and maintainable. and to reduce coupling or dependency between the classes. (decoupling).

and if i want inherit from the class. i can't do it if i create an instance of the class in the constructor. but if i inject the class in the constructor.
i can inherit from the class.

We should't put our business logic in the controller. we should put it in the service. and we should inject the service in the controller.
We put in the controller any thing happen in the view. if click on button. make some calculation. we put it in the controller.

There are three methods of dependency injection:
1: Constructor injection: is a method of dependency injection which is used to inject the service in the constructor of the class.
2: method injection: is a method of dependency injection which is used to inject the service in the method of the class.
3: property injection: is a method of dependency injection which is used to inject the service in the property of the class.

The most used constructor injection and we use it in angular.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
In angular we have two types of services:
1: built-in services: is a service which is provided by angular. and we can use it in our application.
Example: HttpClient service.
2: custom services: is a service which is created by us. and we can use it in our application.

Example: we create service called "staticeProduct.service.ts" and we use it in our application.

In service class:

@Injectable({
=> providedIn: 'root', //
})
export class StaticProductsService {
=> private productList: IProduct[];

=> constructor() {
=> => this.productList = [
=> => => {
=> => => => id: 1,
=> => => => name: 'Lenovo laptop',
=> => => => price: 100000000,
=> => => => quantity: 1,
=> => => => imgURL: 'https://fakeimg.pl/200x100',
=> => => => categoryID: 1,
=> => => },
=> => => {
=> => => => id: 2,
=> => => => name: 'Apple Mack',
=> => => => price: 207780,
=> => => => quantity: 0,
=> => => => imgURL: 'https://fakeimg.pl/200x100',
=> => => => categoryID: 1,
=> => => },
=> => => {
=> => => => id: 3,
=> => => => name: 'Lenovo tablet',
=> => => => price: 3000,
=> => => => quantity: 10,
=> => => => imgURL: 'https://fakeimg.pl/200x100',
=> => => => categoryID: 2,
=> => => },
=> => => {
=> => => => id: 4,
=> => => => name: 'Samsung tablet',
=> => => => price: 40.5,
=> => => => quantity: 3,
=> => => => imgURL: 'https://fakeimg.pl/200x100',
=> => => => categoryID: 2,
=> => => },
=> => => {
=> => => => id: 5,
=> => => => name: 'Samsung Note 10',
=> => => => price: 50000,
=> => => => quantity: 0,
=> => => => imgURL: 'https://fakeimg.pl/200x100',
=> => => => categoryID: 3,
=> => => },
=> => => {
=> => => => id: 6,
=> => => => name: 'Samsung S22 Ultra',
=> => => => price: 600,
=> => => => quantity: 2,
=> => => => imgURL: 'https://fakeimg.pl/200x100',
=> => => => categoryID: 3,
=> => => },
=> => ];
=> }

=> getAllProducts(): IProduct[] {
=> => return this.productList;
=> }

=> getProductByCatID(cID: number): IProduct[] {
=> => if (cID == 0) return this.productList;
=> => return this.productList.filter((prod) => prod.categoryID == cID);
=> }

=> getProductByID(pID: number): IProduct | null {
=> => const product = this.productList.find((prod) => prod.id == pID);
=> => return product ? product : null;
=> }
}

In component class:

@Component({
export class ProductListComponent implements OnChanges {
=> orderDate: Date;
=> @Input() sentCatID: number = 0;
=> @Output() totalPriceChanged: EventEmitter<number>;
=> // @Output() totalPriceChanged: EventEmitter<CartModel>;
=> catList: ICategory[];
=> // productList: IProduct[];
=> productListCat: IProduct[] = [];
=> orderTotalPrice: number = 0;
=> constructor(private staticProdService: StaticProductsService) { // Constructor injection
=> => this.totalPriceChanged = new EventEmitter();
=> => this.catList = [
=> => => { id: 1, name: 'Laptops' },
=> => => { id: 2, name: 'Tablets' },
=> => => { id: 3, name: 'Mobiles' },
=> => ];
=> => this.orderDate = new Date();
=> }
=> ngOnChanges() {
=> => this.productListCat = this.staticProdService.getProductByCatID( // here we use the service method
=> => => this.sentCatID
=> => );
=> }
=> buy(prodPrice: number, count: number) {
=> => this.orderTotalPrice += count \* prodPrice;
=> => this.totalPriceChanged.emit(this.orderTotalPrice);
=> }

=> changeSelectedCat() {
=> => this.sentCatID = 1;
=> }
=> trackByProdID(index: number, prod: IProduct) {
=> => return prod.id;
=> }
}
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
NOTE: in service we found @Injectable({ providedIn: 'root', })
this means that this service is a singleton service. and we can use it in any component in our application.

if i use this service in the product component it looks if there is an instance of the service. if not it will create an instance of the service.
and if i want use it in the cart component it will use the same instance of the service. and it will not create a new instance of the service.
this is the meaning of singleton service.

NOTE: this mean all component in our application will use the same instance of the service. and it has the same reference.

NOTE: in service we found @Injectable({ providedIn: 'moduleName', })
this means that this service is a singleton service. and we can use it in any component in this module. like root but in this module only.
if i have more than one module in out application. and i want to use this service in this module only. i will use this method.

NOTE: here we use this service in this module only.

Eager loading: is a method of loading the module when the application is loaded. when main.ts is loaded. the module will be loaded.
Lazy loading: is a method of loading the module when the module is needed. when the user click on the link of the module. the module will be loaded.

NOTE: in service we found @Injectable({ providedIn: 'any', })
this means that this service is a singleton service.
Eager loaded module: will see one instance of the service.
Each lazy loaded module: will see different instance of the service.

Example: we have two eager loaded module called "app.module.ts" adn "product.module.ts"

The two modules will see the same instance of the service.

And we have two lazy loaded module called "cart.module.ts" and "order.module.ts"

The two modules will see different instance of the service.

NOTE: If i want the module use specific service instead of the shared service. i will put the service in the providers array in the module.
and i can make it with component too. i create the provider array in the component and put the service in it.

Angular sya The best practice use @Injectable({ providedIn: 'any', })
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Routing:
If i don't choose routing when i create the project. i can add it later.
ng generate module app-routing --flat --module=app
--flat: means that the file will be created in the root folder.
--module=app: means that the module will be added with the app.module.ts file. (register the module in the app.module.ts file)
<router-outlet></router-outlet>: this tag will be replaced with the component which is related to the route.
it is a placeholder for the component which is related to the route.

<router-link></router-link>: this tag will be replaced with href in the anchor tag. and it will be used to navigate to the route.
<routerLinkActive></routerLinkActive>: this tag will be replaced with the class attribute in the anchor tag.
and it will be used to add class to the anchor tag when the route is active.

Default path: is the path which will be loaded when the application is loaded.
{ path: '', redirectTo: '/home', pathMatch: 'full' },
redirectTo: means that the path will be redirected to the home component.
pathMatch: 'full': means that the path must be empty to redirect to the home component.

Wild card path: is the path which will be loaded when the path is not found.
{ path: '\*\*', component: NotFoundComponent },

the routes work with First Match Wins strategy.
First Match Wins: means that the first route which match the path will be loaded.
Example: if i have two routes like this:
{ path: 'home', component: HomeComponent },
{ path: 'home', component: NotFoundComponent },
if i navigate to the home component. the home component will be loaded. and the second route will not be loaded.
NOTE: So we must put the wild card path at the end of the routes.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Child routes:
If i want to create child routes. i will create the routes in the parent component.
and i will create the router-outlet tag in the parent component.

Example:
{
=> path: '',
=> component: MainLayoutComponent,
=> children: [
=> { path: '', redirectTo: '/home', pathMatch: 'full' },
=> { path: 'home', component: HomeComponent },
=> { path: 'products', component: ProductListComponent },
=> { path: 'orders', component: OrderMasterComponent },
=> ],
}

In this example i create the child routes in the MainLayoutComponent. and i create the router-outlet tag in the MainLayoutComponent.
any component which is related to the child routes will be loaded in the router-outlet tag in the MainLayoutComponent.
other component will be loaded in the router-outlet tag in the app.component.html file.

children: means that this is child routes.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Dynamic routes: is the route which has a parameter.
Example: if i want to create a route for the product details. i will create a route like this:
{ path: 'product/:id', component: ProductDetailsComponent },

How to navigate to the dynamic route:
There more than one way to navigate to the dynamic route:
1: using service built-in called Router. this service has methods one of them is navigate and navigateByUrl.
navigate: takes array the first element is the path and the other elements is the parameter.
navigateByUrl: takes string the path and the parameter. we use concatenation to add the parameter to the path.

Example:
in product.html file:

<td>
=> <button
=> => type="button"
=> => class="btn btn-secondary"
=> => (click)="showProdDetails(prod.id)"
=> >
=> => Details
=> </button>
</td

in product.ts file:
injection the Router service in the constructor.
constructor(private router: Router) {}

showProdDetails(pID: number) {
=> this.router.navigate(['product', pID]);
or
=> this.router.navigateByUrl('/product/' + pID);
}

2: make button and use routerLink directive. and bind in the routerLink directive make it take array the first element is the path
and the other elements is the parameter.

Example:
in product.html file:

<td>
=> <button
=> => class="btn btn-secondary"
=> => [routerLink]="['/product', prod.id]"
=> >
=> => Details
=> </button>
</td
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
To read the parameter in current route:
we use ActivatedRoute service.
ActivatedRoute: is a service which is used to read the parameter in the current route. it has a property called snapshot.
and snapshot it has a property called paramMap. and paramMap has a method called get.
it takes the name of the parameter and return the value of the parameter.

To go back to the previous page:
we use Location service. it has all methods which is related to the location.
to go back to the previous page we use back method.

Example:

in product-details.ts file:
export class ProductDetailsComponent implements OnInit {
=> currProdId: number = 0;
=> product: IProduct | null = null;
=> constructor(
=> => private activatedRoute: ActivatedRoute,
=> => private prodDetails: StaticProductsService,
=> => private location: Location
=> ) {}
=> ngOnInit(): void {
=> => this.currProdId = Number(this.activatedRoute.snapshot.paramMap.get('pid')); // read the parameter.
=> => this.product = this.prodDetails.getProductByID(this.currProdId);
=> }
=> goBack() {
=> => this.location.back(); // go back to the previous page.
=> }
}

in product-details.html file:

<div class="card" style="width: 18rem">
=> <img [src]="product?.imgURL" class="card-img-top" alt="..." />
=> <h5 class="card-title">{{ product?.name }}</h5>
=> <div class="card-body">
=> => <div>Price: {{ product?.price }}</div>
=> => <div>Price: {{ product?.quantity }}</div>
=> </div>
=> <Button class="btn btn-secondary" (click)="goBack()">Back</Button>
</div>
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
VIP NOTE: When navigate to the same component with different parameter. the component will not be reloaded.

So if i want to navigate to the same component with different parameter. i will use the ActivatedRoute service. but not the snapshot property.
i will use the paramMap property. and i will subscribe to it. and i will use the get method to get the parameter.
because the paramMap property will return observable. and the observable is used to subscribe to it. if parameter is changed
it fire the callback function in the subscribe method. without reloading the component.

NOTE: observable like promise but promise is entry in then one time. but observable is entry in the callback function every time the parameter is changed.

NOTE: observable asynchronous like promise so if any thing depend on the parameter in the next example we should put it in the callback function

Example:

In product-details.ts file:

export class ProductDetailsComponent implements OnInit {
=> currProdId: number = 0;
=> prodIDArr: number[] = [];
=> product: IProduct | null = null;
=> constructor(
=> => private activatedRoute: ActivatedRoute,
=> => private prodService: StaticProductsService,
=> => private location: Location,
=> => private router: Router
=> ) {}

=> ngOnInit(): void {
=> => // this.currProdId = Number(this.activatedRoute.snapshot.paramMap.get('pid'));
=> => // this.product = this.prodService.getProductByID(this.currProdId);
=> => console.log('on Init');

=> => this.prodIDArr = this.prodService.getProdIDs();
=> => this.activatedRoute.paramMap.subscribe((paramMap) => {
=> => => this.currProdId = Number(paramMap.get('pid'));
=> => => this.product = this.prodService.getProductByID(this.currProdId);
=> => });
=> }
=> goBack() {
=> => this.location.back();
=> }

=> prevProduct() {
=> => let currIndex = this.prodIDArr.findIndex((elem) => elem == this.currProdId);
=> => let prevProdId;
=> => if (currIndex > 0) {
=> => => prevProdId = this.prodIDArr[currIndex - 1];
=> => => this.router.navigate(['/products', prevProdId]);
=> => }
=> }
=> nextProduct() {
=> => let currIndex = this.prodIDArr.findIndex((elem) => elem == this.currProdId);
=> => let nextProdId;
=> => if (currIndex < this.prodIDArr.length - 1) {
=> => => nextProdId = this.prodIDArr[currIndex + 1];
=> => => this.router.navigate(['/products', nextProdId]);
=> => }
=> }
}

In product-details.html file:

<div class="btn-group" role="group" aria-label="Basic outlined example">
=> <button
=> => [disabled]="currProdId == prodIDArr[0]"
=> => type="button"
=> => class="btn btn-outline-primary"
=> => (click)="prevProduct()"
=> >
=> => Previous
=> </button>
=> <button type="button" class="btn btn-outline-primary" (click)="goBack()">
=> => Back
=> </button>
=> <button
=> => [disabled]="currProdId == prodIDArr[prodIDArr.length - 1]"
=> => type="button"
=> => class="btn btn-outline-primary"
=> => (click)="nextProduct()"
=> >
=> => Next
=> </button>
</div>
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Day 5: RxJS:
Observables: is a stream of data. it is used to handle asynchronous data. it is used to handle the data which is coming from the server.
Observable is a implementation of the observer design pattern. it is used to handle the asynchronous data. and it subscribe to the data.
if the data is changed it fire the callback function.

What difference between promise and observable?:
Promise: is used to handle asynchronous data. it is used to handle the data which is coming from the server.
but it is entry in the callback function then or catch one time.

Observables: is used to handle asynchronous data. it is used to handle the data which is coming from the server.
and subscribe
subscribe: is used to subscribe to the observable. if the data is changed it fire the callback function. it take two parameters.
the first one is the callback function which is called when the data is changed. (success)
the second one is the callback function which is called when the error is occurred. (error)

There main difference between promise and observable:
1: in observable once code in the observable is finished or send data it entry in the subscribe method.
and it fire the callback function.
But in observable i make observe in specific data. and if this data is changed it fire the callback function.
but promise is entry in the callback function one time only until the data is changed.
this is the main difference between promise and observable.

2: Also in observable i can unsubscribe from the observable. but in promise i can't unsubscribe from the promise.

3: RxJS has set of operators which is used to handle the data which is coming from the server. it make the code more readable and maintainable.
and easy to use.

4: Observable lazy execution. it means that the code in the observable is not executed until i subscribe to the observable.
but promise is executed immediately. (promise if i call it until i don't make then or catch it will be executed. but don't entry in the callback function.)
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
In RxJS there are built in observable. and also we can create our own observable:
To Create Custome Observable:
We create service file. and we import the observable class from the rxjs library.
1: we create observable object.
like this: let Observable = new Observable <string> ((observer) => {});
this observable object take generic type. and it take callback function. usually we call it observer.
and this callback function has three methods:
1: next: is used to send data to the observer.
2: error: is used to send error to the observer.
3: complete: is used to tell the observer that the observable is finished.
we put our condition if to fire the error or complete method. and we put our logic in the next method.

Then we inject this service in the component file. and we subscribe to the observable. and call the method i make it in the service file. this function will return the observable.
So i will subscribe to the observable.
subscribe: is used to subscribe to the observable. if the data is changed it fire the callback function. it take two parameters. and it take object as parameter.
this object has three methods:
1: next: is used to handle the data which is coming from the observable.
2: error: is used to handle the error which is coming from the observable.
3: complete: is used to handle the complete which is coming from the observable.

i can pass the object to the subscribe method immediately. or i can store it in the variable and pass it to the subscribe method.
and there old syntax i can write the callback function in the subscribe method. it will work but it is not recommended.(i can use it if i pass one callback function only.)

Example: we would make observable which is used to show adds in the page. and we would make it in the service file.

In add.service.ts file:
export class PromotionAdsService {
.. private adsList: string[];
.. constructor() {
.. .. this.adsList = [
.. .. .. 'Big Discounts',
.. .. .. 'Sale upt to 50%',
.. .. .. 'Check our white Friday offers',
.. .. .. '',
.. .. .. 'Special white Friday offers up to 70%',
.. .. ];
.. }
.. getScheduledAds(intervalInSeconds: number): Observable<string> {
..return new Observable<string>((observer) => {
....// observer.next();
....// observer.error();
....// observer.complete();
....let counter = 0;
....let adsTimer = setInterval(() => {
......if (counter == this.adsList.length) observer.complete()
......if (this.adsList[counter] == '') observer.error('No Ads') // Will stop the observable and fire the error method.
......observer.next(this.adsList[counter]);
......counter++;
....}, intervalInSeconds \* 1000);
..});
}

In home.component.ts file:
we inject the service in the constructor.

constructor(private promoAds: PromotionAdsService) {
..this.storeInfo = new StoreData(
....'ITI Store',
....'https://picsum.photos/400/200',
....['Cairo', 'Alex', 'Ismailia', 'Assiut']
..);
}
ngOnInit(): void {
..let observer = {
....next: (data: string) => console.log(data),
....error: (err: string) => console.log(err),
....complete: () => console.log('Finished Ads'),
..};
..this.promoAds.getScheduledAds(2).subscribe(observer);
}
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
To unsubscribe from the observable: i will return object in the observable constructor. and i call the unsubscribe method in it.
and write the logic in the unsubscribe method. to clear the interval. or to clear the timeout. or to clear the event listener.
Unsubscribe: is used to unsubscribe from the observable. it take no parameters. and it is used to unsubscribe from the observable.
unsubscribe was called in three cases:
1: when the observable is finished.
2: when the error is occurred.
3: when i call the unsubscribe method.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
If i want to make unsubscribe manually in my component file. i will store the subscription in the variable. because the subscribe method return subscription object.
and i will call the unsubscribe method. to unsubscribe from the observable.
NOTE: if i make unsubscribe after OnInit() method. it will not work. because the observable is not executed yet. it will unsubscribe before the observable is executed.
mean before the subscribe method is executed.
Best Practice: to make unsubscribe in the OnDestroy() method. because it will unsubscribe after the observable is executed. and if i go to another component.
it will unsubscribe from the observable.
NOTE: to use the return type of the subscribe method. in ngOnDestroy() method. i should make the subscription variable. to be accessible in the component file.

But there problem: if has many observables i subscribe to all of them in the component file. sure i will not make variable for each observable.
So best practice: to make array of subscriptions. and push the subscription in the array. and in the OnDestroy() method. i will loop on the array and unsubscribe from all of them.

In last Example:

export class HomeComponent implements OnInit, OnDestroy {
..// private subscription!: Subscription;
..private subscriptions: Subscription[] = [];
..storeInfo: StoreData;
..isImageShown: boolean = true;
..constructor(private promoAds: PromotionAdsService) {
....this.storeInfo = new StoreData(
......'ITI Store',
......'https://picsum.photos/400/200',
......['Cairo', 'Alex', 'Ismailia', 'Assiut']
....);
..}
..ngOnInit(): void {
....let adsSubscription: Subscription = this.promoAds
.......getScheduledAds(2)
.......subscribe({
........next: (data: string) => console.log(data),
........error: (err: string) => console.log(err),
........complete: () => console.log('Finished Ads'),
......});
....// adsSubscription.unsubscribe(); // this wrong because it will unsubscribe before the subscribe
....// because the subscribe is asynchronous code
....this.subscriptions.push(adsSubscription);
..}

..ngOnDestroy(): void {
....// this.subscription.unsubscribe();
....for (let subscription of this.subscriptions) {
......subscription.unsubscribe();
....}
..}
..toggleImage() {
....this.isImageShown = !this.isImageShown;
..}
}
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Hot Observable: a hot observable may begin emitting items as soon as it is created. and so any observer who later subscribes to that observable
may start observing the sequence somewhere in the middle.

Cold Observable: a cold observable on the other hand waits until an observer subscribes to it before it begins to emit items. and so such an observer
is guaranteed to see the whole sequence from the beginning.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Operators: are functions. that take one or more observables as arguments. and return a new observable.
Operators Categories:
1: Creation Operators: are used to create observables from scratch. like of, from, interval, timer, etc.
from: used to convert array to observable. it take array as parameter. and it return observable.
of: it takes list of values as parameters. and it return observable.

Example:
In service file:
getSerialAds(): Observable<string> {
..// return from(this.adsList);
..return of('ad1', 'ad2', 'ad3');
}

In component file:
let sub = this.promoAds.getSerialAds().subscribe((ads) => console.log(ads));
this.subscriptions.push(sub);
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
I can use the pipe method to use the operators before subscribe to manipulate the dat. and i can use the operators directly. but it is not recommended.

filter operator: used to filter the data. it take function as parameter. and it return boolean. if the function return true. the data will be emitted.
if the function return false. the data will not be emitted.

map operator: used to manipulate the data. it take function as parameter. and it return the manipulated data.

retry operator: used to retry the observable. it take number as parameter. and it return observable.
we used it when we have error in the observable. and we want to retry the observable again. and it will retry the observable the number
of times i pass to it. usually we use it with the api calls from the mobile. because the mobile may lose the connection.
and we want to retry the api call again. and we use catchError() operator with it. to catch the error. and we use throwError operator with it.

catchError operator: used to catch the error. it take function as parameter. and it return observable. and we use it with retry operator.

Example:

ngOnInit(): void {
...let observer = {
......next: (data: string) => console.log(data),
......error: (err: string) => console.log(err),
......complete: () => console.log('Finished Ads'),
...};
...let filtersObservable = this.promoAds.getScheduledAds(2).pipe(
......filter((ad) => ad.includes('White Friday')),
......map(ad => 'Ad: ' + ad)'
......retry(3),
......catchError() // Search
...);
...let adsSubscription = filtersObservable.subscribe(observer);
...this.subscriptions.push(adsSubscription);
}

To know more about the operators: https://reactivex.io/documentation/operators.html
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Subject: is a sort of bridge or proxy that is available in some implementations of ReactiveX that acts both as an observer and as an Observable.
because it is an observer. it can subscribe to one or more Observables. and because it is an Observable. it can pass through the items it observes
by remitting them.

Because a Subject subscribes to an Observable, it will trigger that Observable to begin emitting items. (if that Observable is "cold" — that is,
if it waits for a subscription before it begins to emit items.) this can have the effect of making the resulting Subject a "hot" Observable variant
of the original "cold" Observable.

There are many types of subjects:
1: AsyncSubject
2: BehaviorSubject
3: PublishSubject (Default Subject)
4: ReplaySubject

PublishSubject: emits to an observer only those items that are emitted by the source Observable(s) subsequent to the time of the subscription.
NOTE: that a publishSubject may begin emitting items immediately upon creation. but if subscriber subscribe to it after it begins emitting items.
the subscriber will not see the previously emitted items. it will see only the items that are emitted after the subscription is made.

ReplaySubject: emits to any observer all of the items that were emitted by the source Observable(s). regardless of when the observer subscribes.
this mean if subscriber subscribe to it after it begins emitting items. the subscriber will see all the previously emitted items. and the items
that are emitted after the subscription is made.

BehaviorSubject: When an observer subscribes to a BehaviorSubject, it begins by emitting the item most recently emitted by the source Observable
(or a seed/default value if none has yet been emitted) and then continues to emit any other items emitted later by the source Observable(s).

BehaviorSubject: take initial value and emit it to the subscriber. and then emit the new values.
NOTE: When the new subscriber subscribe to it. it will see the last emitted value. and then it will see the new values.

However, if the source Observable terminates with an error, the BehaviorSubject will not emit any items to subsequent observers,
but will simply pass along the error notification from the source Observable.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
NOTE: if i return the subject directly. i can use it as observer. and i can use it as observable. and i can use it as subject.
If i want to prevent use it as observer i can use the asObservable() method. and it will return observable. and i can use it as observable.

Example for subject:

in service file:

export class UserAuthService {
..isLoggedSubject: BehaviorSubject<boolean>;
..constructor() {
....this.isLoggedSubject = new BehaviorSubject<boolean>(false);
..}

..login(userName: string, password: string) {
....// Call Login APT, and ger Access Token
....let userToken = '123456789';
....localStorage.setItem('token', userToken);
....this.isLoggedSubject.next(true);
..}

..logout() {
....localStorage.removeItem('token');
....this.isLoggedSubject.next(false);
..}

..get userIsLogged() {
....return localStorage.getItem('token') ? true : false;
..}

..getLoggedStatus(): Observable<boolean> {
....return this.isLoggedSubject.asObservable(); // here i prevent use it as observer
..}
}

in component file:
export class HeaderComponent implements OnInit {
..isUserLogged: boolean = false;
..constructor(private authService: UserAuthService) {}
..ngOnInit(): void {
....// this.isUserLogged = this.authService.userIsLogged;
....this.authService.getLoggedStatus().subscribe((status) => {
......this.isUserLogged = status;
....});
..}
}

NOTE: We use subject when we want to subscribe to it specific status from many places. and we want to emit data to it from many places.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Route Gaurds:
Guard is a service give me allow to put rules in the routes
There many types of gaurds:
1: CanActivate: it fired once open specific route
2: CanDeactivate: it fired if i leave specific route to navigate to another route
Like if user fill form and i want check if there data unsaved before navigate to another route
3: CanActivateChild:
4: CanLoad: it fired once i try to load the module
5: CanMatch:

Example:
@Injectable({
..providedIn: 'root',
})
export class AuthGuard implements CanActivate {
..constructor(private authService: UserAuthService, private router: Router) {}
..canActivate(
....route: ActivatedRouteSnapshot,
....state: RouterStateSnapshot
..):
....| Observable<boolean | UrlTree>
....| Promise<boolean | UrlTree>
....| boolean
....| UrlTree {
....if (this.authService.userIsLogged) {
......return true;
....} else {
......alert('Must login first');
......this.router.navigate(['/login']);
......return false;
....}
..}
}

Guard is service implements from interface CanActivate to force me implement canActivate function
canActivate function take 2 parameters:
1: ActivatedRouteSnapshot: it give me information about the route
2: RouterStateSnapshot: it give me information about the state of the route

canActivate function return:
1: Observable<boolean | UrlTree>: it return observable of boolean or UrlTree
2: Promise<boolean | UrlTree>: it return promise of boolean or UrlTree
3: boolean: it return boolean
4: UrlTree: it return UrlTree

in app-routing.module.ts file:
{path: 'orders', component: OrderMasterComponent, canActivate: [AuthGuard],},

To make Guard work in route i give it the type if this Guard and it take array because may be i would apply more than one guard in the same route.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Day 5:
HttpClientModule: is a module can make me handle APIs (GET, POST, PUT, PATCH, DELETE, etc)
GET methods take the UTL as a first parameter and httpOptions as the second parameter
httpOptions is an object we initialize it in the constructor like this: carry content-type and authorization
httpOptions;
constructor(private httpClient: HttpClient) {
.. this.httpOptions = {
.. .. headers: new HttpHeaders({
.. .. .. 'Content-Type': 'application/json',
.. .. .. // Authorization: 'my-auth-token'
.. .. }),
.. };
}

POST method take three parameter the first is a URL the second parameter is a body (object) and convert it via JSON.stringify(newProduct) the third parameter is httpOptions

every method return Observable and i can subscribe to it in any component after injection the service in this component

NOTE: after return observable from the method we use pipe to manipulated the date as we would
and handle catchError in pipe and give it handle error function
handle error function: take error from type HttpErrorResponse and we set our condition via status
then we return throwError
throwError: take callback function and return error object

Example:
In Product.service.ts:
export class ProductsService {
.. httpOptions;
.. constructor(private httpClient: HttpClient) {
.. .. this.httpOptions = {
.. .. .. headers: new HttpHeaders({
.. .. .. .. 'Content-Type': 'application/json',
.. .. .. .. // Authorization: 'my-auth-token'
.. .. .. }),
.. .. };
.. }

.. private handleError(error: HttpErrorResponse) {
.. .. // Generic Error handler (in backend)
.. .. // Here we will handle error consist of status code:
.. .. // and if error i don't know it, it will enter to throwError()
.. .. if (error.status === 0) {
.. .. .. // A client-side or network error occurred. Handle it accordingly.
.. .. .. console.error('An error occurred:', error.error);
.. .. } else {
.. .. .. // The backend returned an unsuccessful response code.
.. .. .. // The response body may contain clues as to what went wrong.
.. .. .. console.error(
.. .. .. .. `Backend returned code ${error.status}, body was: `,
.. .. .. .. error.error
.. .. .. );
.. .. }
.. .. // Write error details inGeneric error log
.. .. // Return an observable with a user-facing error message.
.. .. return throwError(
.. .. .. () => new Error('Something bad happened; please try again later.')
.. .. );
.. }

.. getAllProducts(): Observable<IProduct[]> {
.. .. return this.httpClient
.. .. .. .get<IProduct[]>(`${environment.APIURL}/products`)
.. .. .. .pipe(retry(3), catchError(this.handleError));
.. }

.. getProductsByCatID(catID: number): Observable<IProduct[]> {
.. .. return this.httpClient
.. .. .. .get<IProduct[]>(`${environment.APIURL}/products?categoryID=${catID}`)
.. .. .. .pipe(retry(3), catchError(this.handleError));
.. }

.. getProductByID(prodID: number): Observable<IProduct> {
.. .. return this.httpClient
.. .. .. .get<IProduct>(`${environment.APIURL}/products/${prodID}`)
.. .. .. .pipe(retry(3), catchError(this.handleError));
.. }

.. I Can handle error immediately like this:
.. OR: we declare handle error function then we pass it to catchError (Best Practice)
.. // addProduct(newProd: IProduct): Observable<IProduct> {
.. //.. return this.httpClient
.. //.. .. .post<IProduct>(
.. //.. .. .. `${environment.APIURL}/products`,
.. //.. .. .. JSON.stringify(newProd),
.. //.. .. .. this.httpOptions
.. //.. .. )
.. //.. .. .pipe(
.. //.. .. .. retry(3),
.. //.. .. .. catchError((err: HttpErrorResponse) => {
.. //.. .. .. .. console.log(err.status, err.error);
.. //.. .. .. .. return throwError( // We should return error object
.. //.. .. .. .. .. () => new Error('Something bad happened; please try again later')
.. //.. .. .. .. );
.. //.. .. .. })
.. //.. .. );
.. // }
.. addProduct(newProd: IProduct): Observable<IProduct> {
.. .. return this.httpClient
.. .. .. .post<IProduct>(
.. .. .. .. `${environment.APIURL}/products`,
.. .. .. .. JSON.stringify(newProd),
.. .. .. .. this.httpOptions
.. .. .. )
.. .. .. .pipe(retry(3), catchError(this.handleError));
.. }

.. updateProduct(prodID: number, UpdatedProd: IProduct) {}

.. deleteProduct(prodID: number) {}
}

In Product.component.ts:

export class ProductListComponent implements OnChanges, OnInit {
.. orderDate: Date;
.. @Input() sentCatID: number = 0;
.. @Output() totalPriceChanged: EventEmitter<number>;
.. catList: ICategory[];
.. productListCat: IProduct[] = [];
.. orderTotalPrice: number = 0;
.. constructor(
.. .. private productService: ProductsService, // this is service
.. .. // private staticProdService: StaticProductsService,
.. .. private router: Router
.. ) {
.. .. this.totalPriceChanged = new EventEmitter();
.. .. this.catList = [
.. .. .. { id: 1, name: 'Laptops' },
.. .. .. { id: 2, name: 'Tablets' },
.. .. .. { id: 3, name: 'Mobiles' },
.. .. ];
.. ngOnChanges() {
.. .. this.productService
.. .. .. .getProductsByCatID(this.sentCatID)
.. .. .. .subscribe((products) => {
.. .. .. .. this.productListCat = products;
.. .. .. });
.. }

.. ngOnInit(): void {
.. .. this.productService.getAllProducts().subscribe((products) => {
.. .. .. this.productListCat = products;
.. .. });
.. }
}

In add product we inject the product service and call addProduct function the pass the product to it
then we subscribe to it if successfully we sent notification to use and navigate to the products page

In addProduct.component.ts:
export class AddProductComponent {
... constructor(private prodService: ProductsService, private router: Router) {}

... addProduct() {
... ... const product: IProduct = {
... ... ... id: 100,
... ... ... name: 'New Phone',
... ... ... price: 500,
... ... ... quantity: 500,
... ... ... imgURL: '',
... ... ... categoryID: 3,
... ... };
... ... // this subscribe will run if success but if there error nothing will happen because i pass next callback only to subscribe:
... ... // this.prodService.addProduct(product).subscribe((product) => {
... ... // ... alert('Add product successfully'); // Not recommended
... ... // ... // User instead Toast (snackbar from angular material)
... ... // ... this.router.navigateByUrl('/products');
... ... // });

... ... // So we will create object as observer from next and error and complete then we pass it to subscribe function:
.. .. .. const observer = {
.. .. .. next: (product: IProduct) => {
.. .. .. .. .. .. alert('Add product successfully'); // Not recommended
.. .. .. .. .. .. // User instead Toast (snackbar from angular material)
.. .. .. .. .. .. this.router.navigateByUrl('/products');
.. .. .. },
.. .. .. error: (err: Error) => {
.. .. .. .. .. .. alert(err.message);
.. .. .. },
.. .. .. };
.. .. .. this.prodService.addProduct(product).subscribe(observer);
... }
}

#-------------------------------------------------------------------------------------------------------------------------------------------------------#
HttpClient - Generic Service - Interceptor:

Generic Service:
Not best practice we write the same code in every service like error handle function, getAll, update, delete and so on.

So we will create another service called generic service and we do the redundancy code in it like error handle function, getAll, update,
delete and so on. and we pass APIRoute to this functions then we will inject it in every service and call it's function

and if i want edit the httpOption i can make a private function called setHeaders it take key and value and set it's in headers in httpOptions

private setHeaders(key: string, value: string){
.. this.httpOption.headers.set(key, value)
}

Example:

In generic service:
export class GenericApiHandlerService {
.. httpOptions;
.. constructor(private HttpClient: HttpClient) {
.. .. this.httpOptions = {
.. .. .. headers: new HttpHeaders({
.. .. .. .. 'Content-Type': 'application/json',
.. .. .. .. // Authorization: 'my-auth-token'
.. .. .. }),
.. .. };
.. }

.. private handleError(error: HttpErrorResponse) {
.. .. // Generic Error handler (in backend)
.. .. if (error.status === 0) {
.. .. .. // A client-side or network error occurred. Handle it accordingly.
.. .. .. console.error('An error occurred:', error.error);
.. .. } else {
.. .. .. // The backend returned an unsuccessful response code.
.. .. .. // The response body may contain clues as to what went wrong.
.. .. .. console.error(
.. .. .. .. `Backend returned code ${error.status}, body was: `,
.. .. .. .. error.error
.. .. .. );
.. .. }
.. .. // Write error details inGeneric error log
.. .. // Return an observable with a user-facing error message.
.. .. return throwError(
.. .. .. () => new Error('Something bad happened; please try again later.')
.. .. );
.. }

.. getAll(APIRoute: string): Observable<APIResponseVM> {
.. .. return this.HttpClient.get<APIResponseVM>(
.. .. .. `${environment}/${APIRoute}`
.. .. ).pipe(retry(2), catchError(this.handleError));
.. }

.. // getByID(id: number): Observable<APIResponseVM> {}

.. // add(newObject: any): Observable<APIResponseVM> {}

.. // update(id: number, mewObject: any) {}

.. // delete(id: number): Observable<APIResponseVM> {}
}

In product service:
.. getAllProducts(): Observable<IProduct[]> {
.. .. .. Repository Design pattern
.. .. .. return this.genericAPIHandler.getAll('/products')
.. .. .. .pip(
.. .. .. .. map((APIResponseVM: APIResponseVM) => {
.. .. .. .. return APIResponseVM.data
.. .. .. .. })
.. .. // )
.. .. return this.httpClient.get<IProduct[]>(`${environment.APIURL}/products`);
.. .. // .pipe(retry(3), catchError(this.handleError));
.. }

#-------------------------------------------------------------------------------------------------------------------------------------------------------#
HTTP Interceptor:
Interceptor is a layer between the http request and http response to observation all of them
We use interceptor:
to add headers to every request like token on specific routes and i can make authentication interceptor and login interceptor
to handle error in every request
to do action before receive the response like loading
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Forms:
In Angular there two types from forms:
1: Template driven forms:
2: Reactive forms (modern driven forms)

In angular we use (ngSubmit) in form tag instead of submit because it not reload the page

NOTE: best practice we put submit on form tag not on button and we should give every input name
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Angular Added classes in input form in run time to give me som information this is ver helpful
Example:
ng-touched & ng-untouched: if user focus in input it will be ng-untouched and if user focus to input it will be ng-touched
ng-dirty & ng-pristine: if use focus in input and change on it will be ng-dirty but if use focus in input but not edit any thing will be ng-pristine
ng-valid & ng-invalid: if user focus in input and edit it and it's valid with html validation it will be ng-valid
but if user focus in input and edit it and it's invalid with html validation it will be ng-invalid
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
template variable will return element reference so i can't use the className in it or the object on it like errors
to simulate template variable as element not element reference we equal it ngModel
like this: #prodNameInp="ngModel" this mean this template reference is element type

NOTE: I can control validation message via check templateVariable.valid any className from angular or templateVariable.errors.['typeOfError']

Example:

<div>
.. <!-- {{ prodNameInp.className }} -->
</div>
<hr />
<form #prodForm="ngForm" (ngSubmit)="addProduct()">
.. <div class="mb-3">
.. .. <label for="pName" class="form-label">Product Name</label>
.. .. <input #prodNameInp="ngModel"
.. .. .. type="text"
.. .. .. class="form-control"
.. .. .. name="prodname"
.. .. .. required
.. .. .. pattern="[A-Za-z]{3,}"
.. .. .. id="pName"
.. .. .. [(ngModel)]="newProd.name"
.. .. />
.. </div>

.. <div
.. .. class="alert alert-warning"
.. .. [hidden]="prodNameInp.valid || prodNameInp.untouched"
.. >
.. .. <small *ngIf="prodNameInp.errors?.['required']">Name is required</small>
.. .. <small *ngIf="prodNameInp.errors?.['pattern']"
.. .. .. >Name must be 3 character at least</small
.. .. >
.. </div>

.. <div class="mb-3">
.. .. <label for="pPrice" class="form-label">Product Price</label>
.. .. <input
.. .. .. type="number"
.. .. .. class="form-control"
.. .. .. name="prodprice"
.. .. .. id="pPrice"
.. .. .. [(ngModel)]="newProd.price"
.. .. />
.. </div>

.. <div class="mb-3">
.. .. <label for="pQuantity" class="form-label">Product Quantity</label>
.. .. <input
.. .. .. type="number"
.. .. .. class="form-control"
.. .. .. name="prodquantity"
.. .. .. id="pQuantity"
.. .. .. [(ngModel)]="newProd.quantity"
.. .. />
.. </div>

.. <div class="mb-3">
.. .. <label for="pQuantity" class="form-label">Product Category</label>
.. .. <select
.. .. .. class="form-select"
.. .. .. name="cat"
.. .. .. id="prodCat"
.. .. .. [(ngModel)]="newProd.categoryID"
.. .. >
.. .. .. <option \*ngFor="let cat of catList" [value]="cat.id">
.. .. .. .. {{ cat.name }}
.. .. .. </option>
.. .. </select>
.. </div>

.. <div class="mb-3">
.. .. <label for="pImg" class="form-label">Product Image</label>
.. .. <input
.. .. .. type="file"
.. .. .. class="form-control"
.. .. .. name="prodimage"
.. .. .. id="pImg"
.. .. .. [(ngModel)]="newProd.imgURL"
.. .. />
.. </div>

.. <button [disabled]="prodForm.invalid" type="submit" class="btn btn-primary">
.. .. Submit
.. </button>

</form>

NOTE: we make one component to add and update product because the both of is the same logic
NOTE: id use want delete item we appear message to sure if he want delete
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Day 7:
Reactive forms in angular?:
Reactive forms is a modern way to make forms in angular and it's more powerful than template driven forms
because it's more dynamic and we can make validation in run time and we can make custom validation
and we can make nested forms and we can make form array and we can make form group

When i use template driven form or reactive form?:
if i have simple form i use template driven forms but if i have complex form i use reactive forms

What difference between template driven form and reactive form?:
1: Setup of form model:
Template driven: Implicit, created by directives
Reactive: Explicitly created in component class

2: Data model:
Template driven: Unstructured and mutable
Reactive: Structured and immutable

3: Data flow:
Template driven: Asynchronous (from model to view or from view to model)
Reactive: Synchronous (from model to view only i can't change it)

4: Form validation:
Template driven: Directives
Reactive: Functions
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
To cerate Reactive form:
we declear variable from FormGroup type
then in constructor we initialize it and it take object
in this object we declear every input from new FormControl
if i have nested form like address we declear it from FormGroup type like from

How can link between from in ts file and form in html file:
we put [formGroup] in from tag and give it the declaration name and put formControlName in every
input and give it the declaration name of the input this will binding the data

How can i make validation in reactive form:
FormControl: take more than one parameter the first parameter is the initial value
the second parameter is array of validators
validator: is carry alot of validator i can use it using dot notation

NOTE: I can get the data in form using interpolation like this {{ userRegisterForm.value | json }}
and i can get the elements in form via get methods like this {{ userRegisterForm.get("fullName")?.errors | json }}

Example:
In file.ts: this is the old syntax:
export class UserRegisterComponent {
.. userRegisterForm: FormGroup;
.. constructor() {
.. .. this.userRegisterForm = new FormGroup({
.. .. .. fullName: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]{3,}'),]),
.. .. .. email: new FormControl(''),
.. .. .. Phone: new FormControl(''),
.. .. .. address: new FormGroup({
.. .. .. .. city: new FormControl(''),
.. .. .. .. postalCode: new FormControl(''),
.. .. .. .. street: new FormControl(''),
.. .. .. }),
.. .. .. password: new FormControl(''),
.. .. .. confirmPassword: new FormControl(''),
.. .. });
.. }
}

this is the new syntax:
we inject service called FormBuilder then we equal the declaration userRegisterForm this service
and this service has method called group it take object
we put the element and equal it array without new FormControl it know it
the first element in this array is the initial value and the second element is the array validators

export class UserRegisterComponent {
.. userRegisterForm: FormGroup;
.. constructor(private fb: FormBuilder) {
.. .. this.userRegisterForm = fb.group({
.. .. .. fullName: ['', [Validators.required, Validators.pattern('[A-Za-z]{3,})]],
.. .. .. email: ['', [Validators.required]],
.. .. .. phone: [''],
.. .. .. address: fb.group({
.. .. .. .. city: [''],
.. .. .. .. postalCode: [''],
.. .. .. .. street: [''],
.. .. .. }),
.. .. .. password: [''],
.. .. .. confirmPassword: [''],
.. .. });
.. }
}

In file.html:

<div class="container">
.. <div class="text-danger">
.. .. <h3>To be removed [For test]:</h3>
.. .. <div>
.. .. .. {{ userRegisterForm.value | json }}
.. .. </div>
.. .. <div>
.. .. .. {{ userRegisterForm.get("fullName")?.errors | json }}
.. .. </div>
.. </div>
.. <hr />
.. <form [formGroup]="userRegisterForm" class="m-3">
.. .. <div class="mb-3">
.. .. .. <label for="fName" class="form-label">FullName</label>
.. .. .. <input
.. .. .. .. type="text"
.. .. .. .. formControlName="fullName"
.. .. .. .. class="form-control"
.. .. .. .. id="fName"
.. .. .. .. name="fname"
.. .. .. />
.. .. </div>

.. .. <div class="mb-3">
.. .. .. <label for="uEmail" class="form-label">Email</label>
.. .. .. <input
.. .. .. .. type="text"
.. .. .. .. formControlName="email"
.. .. .. .. class="form-control"
.. .. .. .. id="uEmail"
.. .. .. .. name="email"
.. .. .. />
.. .. </div>

.. .. <div class="mb-3">
.. .. .. <label for="uPhone" class="form-label">Phone</label>
.. .. .. <input
.. .. .. .. type="text"
.. .. .. .. formControlName="phone"
.. .. .. .. class="form-control"
.. .. .. .. id="uPhone"
.. .. .. .. name="userphone"
.. .. .. />
.. .. </div>

.. .. <div formGroupName="address">
.. .. .. <div class="mb-3">
.. .. .. .. <label for="uCity" class="form-label">City</label>
.. .. .. .. <input
.. .. .. .. .. type="text"
.. .. .. .. .. formControlName="city"
.. .. .. .. .. class="form-control"
.. .. .. .. .. id="uCity"
.. .. .. .. .. name="usercity"
.. .. .. .. />
.. .. .. </div>

.. .. .. <div class="mb-3">
.. .. .. .. <label for="uPostalCode" class="form-label">Postal Code</label>
.. .. .. .. <input
.. .. .. .. .. type="number"
.. .. .. .. .. formControlName="postalCode"
.. .. .. .. .. class="form-control"
.. .. .. .. .. id="uPostalCode"
.. .. .. .. .. name="userpostalcode"
.. .. .. .. />
.. .. .. </div>

.. .. .. <div class="mb-3">
.. .. .. .. <label for="uStreet" class="form-label">Street</label>
.. .. .. .. <input
.. .. .. .. .. type="text"
.. .. .. .. .. formControlName="street"
.. .. .. .. .. class="form-control"
.. .. .. .. .. id="uStreet"
.. .. .. .. .. name="userstreet"
.. .. .. .. />
.. .. .. </div>
.. .. </div>

.. .. <div class="mb-3">
.. .. .. <label for="uPassword" class="form-label">Password</label>
.. .. .. <input
.. .. .. .. type="password"
.. .. .. .. formControlName="password"
.. .. .. .. class="form-control"
.. .. .. .. id="uPassword"
.. .. .. .. name="userpassword"
.. .. .. />
.. .. </div>

.. .. <div class="mb-3">
.. .. .. <label for="uConfirmPassword" class="form-label">Confirm Password</label>
.. .. .. <input
.. .. .. .. type="password"
.. .. .. .. formControlName="confirmPassword"
.. .. .. .. class="form-control"
.. .. .. .. id="uConfirmPassword"
.. .. .. .. name="userconfirmpassword"
.. .. .. />
.. .. </div>
.. .. <button type="submit" class="btn btn-primary">Submit</button>
.. </form>

</div>
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
We can fill inputs in case edit:
In file.ts:
if i want full specific input:
this.userRegisterForm.get('fullName')?.setValue('Test');

if i want full all inputs in form:
.. ngOnInit(): void {
.. .. Check for path params, to specify user reg. or Edit profile
.. .. In case of Edit Profile
.. .. to fill specific input
.. .. this.userRegisterForm.get('fullName')?.setValue('Test')
.. .. Call API to get user profile
.. .. to fill all input inside the form
.. .. this.userRegisterForm.setValue({
.. .. .. // Must provide all properties
.. .. .. fullName: 'ITI',
.. .. .. email: 'mohamed@gmail.com',
.. .. .. address: {
.. .. .. .. city: 'Mansoura',
.. .. .. .. postalCode: 555,
.. .. .. .. street: 'street 1',
.. .. .. },
.. .. });

OR:
.. .. this.userRegisterForm.patchValue({
.. .. .. // Can provide some properties
.. .. .. fullName: 'ITI',
.. .. .. email: 'mohamed@gmail.com',
.. .. .. address: {
.. .. .. .. city: 'Mansoura',
.. .. .. .. postalCode: 555,
.. .. .. .. street: 'street 1',
.. .. .. },
.. .. });
.. .. }

setValue: Must Provide a;; properties
patchValue: Can provide some properties

NOTE: we inside it inside ngOnInit to fill data after load the page directly
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Dynamic Forms:
In case we have dynamic form, we can use FormArray
we put our input fb.array([this.fb.control('')]) this mean i make this input as array in give it initial value with formControl

to short cut this input we make method to get it as FormArray:
get phoneNumbers() {
..return this.userRegisterForm.get('phoneNo') as FormArray;
}

then we handle button to add new input:
addPhoneNo(event: any) {
.. this.phoneNumbers.push(this.fb.control('')); // here we push the control in FormArray
.. event.target?.classList.add('d-none'); // this to hide input after added it
}

In html file:

We wrapper the group by ng-container and give it formArrayName assign to it the name of our property
then we loop of our group and give it index
then we give every input [formControlName] and assign to it the index
then we put our handle function to the button
we handle the id dynamically like this example:

<ng-container formArrayName="phoneNo">
.. <div class="mb-3" *ngFor="let phoneNo of phoneNumbers.controls; let i = index">
.. .. <label for="{{ 'uPhone-' + i }}" class="form-label">Phone #{{ i + 1 }}</label>
.. .. <input
.. .. .. type="text"
.. .. .. [formControlName]="i"
.. .. .. class="form-control"
.. .. .. id="{{ 'uPhone-' + i }}"
.. .. .. name="{{ 'userphone' + i }}"/>
.. .. <button class="btn btn-primary mt-2" (click)="addPhoneNo($event)">
.. .. .. +
.. .. </button>
.. </div>
</ng-container>
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Conditional Validation:
In case we want to make validation for specific input in case of specific condition in run time
we use addValidators(): to set validator in run time
we use clearValidators(): to remove validator in run time
we use updateValueAndValidity(): to update the value and validity in run time
without updateValueAndValidity() the value of validator don't updated
we put all of this in function and assign this function on change of all buttons from radio type

In case radio button:
we set the formControlName and name in all buttons the name property (referral in my example)

Example:

In ts file:
export class UserRegisterComponent implements OnInit {
.. userRegisterForm: FormGroup;
.. constructor(private fb: FormBuilder) {
.. .. this.userRegisterForm = fb.group({
.. .. .. fullName: ['', [Validators.required, Validators.pattern('[A-Za-z]{3,})]],
.. .. .. email: ['', [Validators.required]],
.. .. .. phoneNo: fb.array([this.fb.control('')]),
.. .. .. address: fb.group({
.. .. .. .. city: [''],
.. .. .. .. postalCode: [''],
.. .. .. .. street: [''],
.. .. .. }),
.. .. .. password: [''],
.. .. .. confirmPassword: [''],
.. .. .. referral: [''],
.. .. .. // referralOther: ['', [Validators.required]],
.. .. .. referralOther: [''],
.. .. });
.. }

.. get referral() {
.. .. return this.userRegisterForm.get('referral');
.. }

.. updateReferralValidator() {
.. .. if (this.referral?.value === 'other') {
.. .. .. this.userRegisterForm
.. .. .. .. .get('referralOther')
.. .. .. .. ?.addValidators(Validators.required);
.. .. } else {
.. .. .. this.userRegisterForm.get('referralOther')?.clearValidators();
.. .. }
.. .. this.userRegisterForm.get('referralOther')?.updateValueAndValidity();
.. }
}

this:
In html file:

<div class="btn-group" role="group" aria-label="Basic radio toggle button group>
.. <input
.. .. type="radio"
.. .. class="btn-check"
.. .. formControlName="referral"
.. .. name="referral"
.. .. id="btnradio1"
.. .. value="socialMedia"
.. .. checked
.. .. (change)="updateReferralValidator()"
.. />
.. <label class="btn btn-outline-primary" for="btnradio1" >Social Media</label
.. >
.. <input
.. .. type="radio"
.. .. class="btn-check"
.. .. formControlName="referral"
.. .. name="referral"
.. .. id="btnradio2"
.. .. value="friend"
.. .. (change)="updateReferralValidator()"
.. />
.. <label class="btn btn-outline-primary" for="btnradio2">From Friend</label>
.. <input
.. .. type="radio"
.. .. class="btn-check"
.. .. formControlName="referral"
.. .. name="referral"
.. .. id="btnradio3"
.. .. value="other"
.. .. (change)="updateReferralValidator()"
.. />
.. <label class="btn btn-outline-primary" for="btnradio3">Other</label>
</div>
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
General:
Custom Validation:
Validators is a function it return function from type ValidationFn this return function it takes parameter from type AbstractControl
AbstractControl: is a parent class to from control, form group and form array
this mean AbstractControl mean refer to form group or form control or form array
the return function will return ValidationErrors | null
=> if data not match with the rule it will return ValidationErrors
ValidationErrors: is an object contain all errors
=> if data match with the rule it will return null

Example:
existEmailValidator(): ValidatorFn {
..return (control: AbstractControl): ValidationErrors | null => {
....let emailVal: string = control.value;
....let validationError = { EmailNotValid: { value: emailVal } };
....if (emailVal.length == 0 && control.untouched) return null;
....return emailVal.includes('@') ? null : validationError;
..};
}
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Validator functions:
Validator functions can be either synchronous or asynchronous.

VALIDATOR TYPE DETAILS:
Sync validators Synchronous functions: that take a control instance and immediately return either a set of validation errors or null.
Pass these in as the second argument when you instantiate a FormControl.
Async validators Asynchronous functions: that take a control instance and return a Promise or Observable that later emits a set of validation errors or null.
Pass these in as the third argument when you instantiate a FormControl.(we use this type if data come from server)

Another Example:

constructor(private fb: FormBuilder) {
..this.existUserEmail = ['aa@aa.com', 'bb@bb.com', 'cc@cc.com'];
}
email: ['', [Validators.required, this.existEmailValidator(this.existUserEmail)],],

existEmailValidator(existEmails: string[]): ValidatorFn {
.. console.log(this.existUserEmail);
.. return (control: AbstractControl): ValidationErrors | null => {
.. .. let emailVal: string = control.value;
.. .. let validationError = { existEmail: { value: emailVal } };
.. .. if (emailVal.length == 0 && control.untouched) return null;
.. .. // return emailVal.includes('@') ? null : validationError;
.. .. let foundEmail = existEmails.includes(emailVal);
.. .. return foundEmail ? validationError : null;
.. };
}
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Cross Field Validator: is a validator that check on more than one field
we use this validator in case we want to check on password and confirm password
and we set this validator function in formGroup

Example:

In PasswordMatched.Validator.ts:
// If validator has parameters (Factory function) function will return function
// export function passwordMatch(): ValidatorFn {
export const passwordMatch: ValidatorFn =
.. // return function (control: AbstractControl): ValidationErrors | null {
.. // If validator not has parameters
.. (formGroup: AbstractControl): ValidationErrors | null => {
.. .. let passControl = formGroup.get('password');
.. .. let confirmPassControl = formGroup.get('confirmPassword');
.. .. if (
.. .. .. !passControl ||
.. .. .. !confirmPassControl ||
.. .. .. !passControl.value ||
.. .. .. !confirmPassControl.value
.. .. )
.. .. .. return null;

.. .. let valErr = {
.. .. .. UnmatchedPassword: {
.. .. .. .. pass: passControl.value,
.. .. .. .. confirmPassControl: confirmPassControl.value,
.. .. .. },
.. .. };
.. .. return passControl.value == confirmPassControl.value ? null : valErr;
.. };
// }

In user-register file.ts:
this.userRegisterForm = fb.group(
.. {
.. .. fullName: [
.. .. .. '',
.. .. .. [Validators.required, Validators.pattern('[A-Za-z]{3,})],
.. .. ],
.. .. email: [
.. .. .. '',
.. .. .. [Validators.required, existEmailValidator(this.existUserEmail)],
.. .. ],
.. .. phoneNo: fb.array([this.fb.control('')]),
.. .. address: fb.group({
.. .. .. city: [''],
.. .. .. postalCode: [''],
.. .. .. street: [''],
.. .. }),
.. .. password: ['', [Validators.required]],
.. .. confirmPassword: ['', [Validators.required]],
.. .. referral: [''],
.. .. // referralOther: ['', [Validators.required]],
.. .. referralOther: [''],
.. },
.. // { validators: passwordMatch() }
.. { validators: passwordMatch }
);

In user-register file.html:

<!-- <div class="alert alert-warning"
.. .. *ngIf="(confirmPassword?.touched && password?.touched) && (confirmPassword?.invalid || userRegisterForm.errors?.['UnmatchedPassword'])" > -->

.. <div class="alert alert-warning"
.. .. *ngIf="confirmPassword?.errors?.['required'] && confirmPassword?.touched" >
.. .. Confirm password is required
.. </div>
.. <div class="alert alert-warning"
.. .. *ngIf="userRegisterForm?.errors?.['UnmatchedPassword']" >
.. .. Confirm password must match password
.. .. <strong>{{email.errors?.['UnmatchedPassword']}}</strong>
.. </div>

</div>
<!-- </div> -->
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Lazy Loading:
Lazy loading is a technique in Angular that allows you to load JavaScript components asynchronously when a specific route is activated.
Lazy loading helps us decrease the startup time. It also helps us decrease the initial bundle size.

to apply concept lazy loading in our application:
1- we need to create module for each component we want to apply lazy loading on it
2- we need to create routing file for each module we want to apply lazy loading on it
3- we need to add this module in app-routing file

how add this module in app-routing:
{ path: 'user',
.. loadChildren: () =>
.. .. import('src/app/Components/user-module/user.module').then(
.. .. .. (m) => m.UserModule
.. .. ),
},

To create module: ng g m moduleName

NOTE: when i create component this component will declaration in closest to it module in it paths
to declaration the component in specify module Even if he is not the closest to it: ng g c componentName --module=moduleName

Example:

in app-routing-module.ts:
{ path: 'user',
.. loadChildren: () =>
.. .. import('src/app/Components/user-module/user.module').then(
.. .. .. (m) => m.UserModule
.. .. ),
},

in user.module.ts:
const route: Routes = [
.. { path: '', redirectTo: '/user/userProfile', pathMatch: 'full' },
.. {
.. .. path: 'userProfile',
.. .. component: UserProfileComponent,
.. .. canActivate: [AuthGuard],
.. },
.. {
.. .. path: 'editProfile',
.. .. component: EditProfileComponent,
.. .. canActivate: [AuthGuard],
.. },
];

@NgModule({
.. declarations: [UserProfileComponent, EditProfileComponent],
.. imports: [CommonModule, RouterModule.forChild(route)], // forChild because userModule is a children in MainLayoutComponent component
})
export class UserModule {}
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
To build our application: ng build --configuration=production

i18n angular: => internationalization it's library to handle website to be support many language
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Angular Universal:
Angular Universal is a technology that allows you to run your Angular application on a server.
This is useful for many reasons, but in particular it allows us to render our application on the server so that the user can see
the page immediately without having to wait for the browser to download all the JavaScript, CSS and other resources.

To install angular universal: ng add @nguniversal/express-engine --clientProject angular-tutorial
After installation we need to change some things like adding new scripts into package json file or changing
tsconfig.server.json file

this package when i build the angular project this package will generate two folder dist and server
dis we know this folder
server this folder will contain the server side code made by nodejs

NOTE: we use Angular Universal to enhance SEO

Why use server-side rendering?:
There are three main reasons to cerate a Universal version of your application:
1- SEO: Facilitate web crawlers through search engine optimization (SEO)
2: Performance: Improve performance on mobile and low-powered devices
3: FCP: Show the first page quickly with a first-contentful paint (FCP)
