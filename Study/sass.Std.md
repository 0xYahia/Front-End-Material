What is SASS?:
SASS is a CSS preprocessor, which adds special features such as variables, functions, loop, extend, control flow(if condition), nested rules and mixins (sometimes referred to as syntactic sugar) into regular CSS.
The aim is to make the coding process simpler and more efficient. and compiler will convert it into regular CSS.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------#
Why SASS?: It is more stable and powerful CSS extension language that describes the style of document structurally.
Because of SASS, we can use variables, nested rules, inline imports, mixins, inheritance and more, all with a fully CSS-compatible syntax.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------#
@for: @for is used to create a loop that iterates through a range of values.

Example:
@for $i from 1 through 50 {
=> .class-#{$i} { font-size: 2em + $i; }
}

This example will compile to:
.class-1 {
=> font-size: 3em;
}
.class-2 {
=> font-size: 4em;
}
.class-3 {
=> font-size: 5em;
}
and so on until 50
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------#
03: Import and use and advance Architecture of SASS:
in css i write my style in one file this is so hard if i want edit my style i have to go to that file and edit it. and this is not a good practice if i have a big project.
so i can use sass to make my life easy. because sass is a css preprocessor. it means i can write my style in multiple files and then i can import all the files in one file.
and then i can compile it into one css file. and then i can use that css file in my project.

Example:
1: first i create a folder called sass and then i create a two folder inside sass folder called Layout and pages.
2: then i create a file called \_global-rules.scss inside layout folder.
3: then i create a file called \_home.scss inside pages folder.
4: then i create a file called main.scss inside sass folder.
5: then i import all the files in main.scss file.
6: then i compile main.scss file into main.css file.
7: then i use main.css file in my project.

NOTE: underscore(\_) in the file name means that this file is not going to compile into css file. it means this file is only for import purpose.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------#
To import a file in another file:
@import 'path of the file'; // this is deprecated
@use 'path of the file'; // this is still supported

NOTE: the comment not compile into css file.
NOTE: SSAS code called Development code and CSS code called Production code.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------#
04: Variables:
Variables: Variables allow you to store information to be reused throughout your stylesheet. If you've ever repeated yourself in your stylesheets,
variables are a good way to store this information in one place and then call it where needed.

Example:
$primary-color: #333;

body {
=> color: $primary-color;
}

what difference between variables in sass and css:
in css we see the variable name in the css file we can't see the value but in sass we the value of the variable in the css file. after compile the sass file.

we have two types of variables in sass:
1: Local Variables: Local variables are only available within the scope where they were defined.
2: Global Variables: Global variables are available globally, but you have to declare them as global.

Example:
$primary-color: #333; // this is global variable i can use this variable anywhere in my sass file.

.header {
=> color: $primary-color;
}

.footer {
=> $primary-color: #888; // this is local variable
=> color: $primary-color;
}

.copy-right {
=> color: $primary-color; // this will take the color from global variable.
}

if footer don't have any color property then it will take the color from global variable.

I can convert local variable into global variable by using !global keyword.

Example:

.header {
=> $primary-color: #333 !global; // this is global variable
=> color: $primary-color;
}

.footer {
=> $primary-color: #888 !global; // this is global variable
=> color: $primary-color;
}

.copy-right {
=> color: $primary-color; // this will take the color from global variable.
and here global variable become a #888
}

NOTE: we store all variables in one file called \_variables.scss and then we import this file in main.scss file.
@use './sass/variables' as _;
if i don't use as _ should i write the variable name with the file name like this:
$variables-primary-color: #333;

i cans store my media query in variables like this:
$media-mobile: '(max-width: 767px)';

@media ($media-mobile) {
=> .header {
=> => color: $primary-color;
=> }
}

if i change the value of $media-mobile variable then it will change in all the media query.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------#
05: Nesting and Parent element:
Nesting: Nesting is a feature of Sass which allows you to nest your CSS selectors in a way that follows the same visual hierarchy of your HTML.
Be aware that overly nested rules will result in over-qualified CSS that could prove hard to maintain and is generally considered bad practice.

Example:
.parent {
=> padding: 30px;
=> .child {
=> => color: red;
=> => .grand-child {
=> => => color: blue;
=> => }
=> }
}

here we make block of code specific to parent element.
NOTE: if parent don't have any property then it will compile into css file. and it will not show in css file. (nesting will work)

Another way to reduce the level of nesting.

.parent {
=> padding: 30px;
=> .child {
=> => color: red;
=> }
=> .grand-child {
=> => color: blue;
=> }
}

Example for grouping:
.parent-one,
.parent-two {
=> padding: 30px;
=> .child {
=> => color: red;
=> }
}

#-----------------------------------------------------------------------------------------------------------------------------------------------------------------#
Selector Example:

.parent > {
=> .child {
=> => color: red;
=> }
=> .test {
=> => color: blue;
=>}
}

this means that .child and .test is the direct child of .parent.

.parent {
=> > .child {
=> => color: red;
=> }
=> .test {
=> => color: blue;
=>}

this means that .child only is the direct child of .parent and .test is the child of .parent but not direct.

NOTE: and so on with any selector. like +, ~, >, \* etc.

If i have more than direct child then i can put all the child in {} like this:

.parent {
=> > {
=> => .child-one {
=> => => color: red;
=> => }
=> => .child-two {
=> => => color: blue;
=> => }
=> .not-direct-child {
=> => color: green;
=> }
=> }
}
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------#
Selector with parent element:
if i have element with two classes and i want select it:

<div class="box red">
=> Box - Red
</div>

<div class="box blue">
=> Box - Blue
</div>

.box {
=> .red{
=> => color: red;
=> }
}

This is wrong this mean i have .red element inside .box element.

The right syntax is:

.box.red {
=> color: red;
}

OR:

.box {
=> &.red {
=> => color: red;
=> }
}

And by the same way we can select the pesudo element like this:

.box {
=> &:hover {
=> => color: red;
=> }
}

If i have another element inside .box element and i want when i hover on .box element change the color of the child element:

.box {
=> .child {
=> => color: blue;
=> }
=> &:hover .child {
=> => color: red;
=> }
}
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------#

.box {
=> .child {
=> => color: blue;
=> }
=> [dir="rtl"] & {
=> => direction: rtl;
=> }
}

This means that if i have dir="rtl" attribute in the parent element then change the direction of the child element.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------#
To write shorthand property in sass:

.box {
=> font: {
=> => size: 16px;
=> => weight: bold;
=> => family: sans-serif;
=> }
=> padding: {
=> => top: 10px;
=> => right: 20px;
=> => bottom: 30px;
=> => left: 40px;
=> }
=> border: 1PX solid red{
=> => top: transparent; // this will override the top property
=> }
}
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------#
Placeholders:
we use placeholder to make a block of code and then we can use it anywhere in our sass file.

NOTE: placeholder in sass like grouping in css.

Example:
.main-box {
=> background-color: white;
=> border: 1px solid black;
=> padding: 20px;
}

.ads{
=> @extend .main-box; // this will extend the .main-box class
=> font-size: 20px;
=> color: red;
}

.articles{
=> @extend .main-box;
=> font-size: 22px;
=> color: blue;
}

If i don't have class called .main-box but i want to extend it then i can use placeholder like this:

%main-box {
=> background-color: white;
=> border: 1px solid black;
=> padding: 20px;
}
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------#
07: Control flow - if and else:

Syntax:
@if condition {
=> // code
} @else if condition {
=> // code
} @else {
=> // code
}

Example:

$theme: 'light';

.page {
=> @if $theme == 'light' {
=> => background-color: white;
=> => color: black;
=> } @else {
=> => background-color: black;
=> => color: white;
}

I can use if statement inside property like this:

$rounded: false;

.box {
=> @ extends %main-box;
=> border-radius: if($rounded, 10px, null); // if rounded is true then 10px else null
}
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------#
09: Interpolation:
If i show ads for different companies in my website and each ads has different image and i want to change the image of the ads by the company name then i can use interpolation like this:

Syntax:
#{ variable }

$company: 'google';
$pose: 'left';

.ads-#{$company} {
  => font-size: 20px;
  => background-image: url('/images/#{$company}.png');
=> #{$position}: 0;
}

this will compile into:
.ads-google {
=> font-size: 20px;
=> background-image: url('/images/google.png');
=> left: 0;
}

$company: 'facebook';
$pose: 'right';

.ads-#{$company} {
  => font-size: 20px;
  => background-image: url('/images/#{$company}.png');
=> #{$position}: 0;
}

and this will compile into:
.ads-facebook {
=> font-size: 20px;
=> background-image: url('/images/facebook.png');
=> right: 0;
}

NOTE: There built in function in sass like unique-id() and unique-seq-id() and they will generate unique id for each element.

if i want give each company a unique id then i can use unique-id() function like this:

.ads-#{$company}-#{unique-id()} {
  => font-size: 20px;
  => background-image: url('/images/#{$company}.png');
=> #{$position}: 0;
}
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------#
10: Comments and documenting:

There are three types of comments in sass:
1- Single line comment: // this is single line comment and it will not compile into css.
2- Multi line comment: /_ this is multi line comment and it will not compile into css but not will show in minify.css _/
3- Multi line comment: /_! this is multi line comment and it will compile into css and will show in minify.css _/

NOTE: We can use interpolation in comments like this:

/_ this is a comment for #{$company} _/
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------#
11: Mixins and includes:

Example:
@mixin list-reset {
=> margin: 0;
=> padding: 0;
=> list-style: none;
}

ul.links {
=> @include list-reset();
}

this will compile into:
ul.links {
=> margin: 0;
=> padding: 0;
=> list-style: none;
}

NOTE: i can't do the same thing with placeholder like this.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------#
What is the difference between mixins and placeholder?:

I can pass arguments to mixins but i can't pass arguments to placeholder.

Example:
@mixin circle($dimensions) {
=> width: $dimensions;
=> height: $dimensions;
=> border-radius: 50%;
}
.circle-100 {
=> @include circle(100);
}
.circle-200 {
=> @include circle(200);
}
and this will compile into:
.circle-100 {
=> width: 100;
=> height: 100;
=> border-radius: 50%;
}
.circle-200 {
=> width: 200;
=> height: 200;
=> border-radius: 50%;
}

NOTE: i can pass default value to the argument like this:

@mixin circle($dimensions: 100px) {
=> width: $dimensions;
=> height: $dimensions;
=> border-radius: 50%;
}
.circle-100 {
=> @include circle();
}

and this will compile into:
.circle-100 {
=> width: 100;
=> height: 100;
=> border-radius: 50%;
}

NOTE: i can pass multiple arguments to mixins like this:

@mixin circle($dimensions: 100px, $color: red) {
=> width: $dimensions;
=> height: $dimensions;
=> border-radius: 50%;
=> background-color: $color;
}
.circle-100 {
=> @include circle(100px, blue);
}

and this will compile into:
.circle-100 {
=> width: 100;
=> height: 100;
=> border-radius: 50%;
=> background-color: blue;
}

I can make mixins call another mixins and so on like this:

@mixin circle($dimensions) {
=> width: $dimensions;
=> height: $dimensions;
=> border-radius: 50%;
}

@mixin centering {
=> display: flex;
=> justify-content: center;
=> align-items: center;
}

.center-circle {
=> @include circle(400);
=> @include centering();
}

OR i can called circle mixin inside centering mixin like this:

@mixin centering {
=> display: flex;
=> justify-content: center;
=> align-items: center;
=> @include circle(400);
}

.center-circle {
=> @include centering();
}

But the first way is better because i can use centering mixin with other elements without circle mixin.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------#
12: loop - for:

Syntax:

@for $variable from start through (to) end {
=> // code
}

Example:

@for $i from 1 through 5 {
  => .class-#{$i} {
=> => font-size: 100px + $i;
=> }
}

To : not include the end number. (1 to 5) => 1, 2, 3, 4
Through : include the end number. (1 through 5) => 1, 2, 3, 4, 5

Another Example:

$dimensions: 0;

@for $i from 1 through 5 {
=> .class-#{100px + $dimensions} {
=> => width: 100px + $dimensions
=> => height: 100px + $dimensions
=> }
=> $dimensions: $dimensions + 10;
}

Example:

@mixins centering{
=> display: flex;
=> justify-content: center;
=> align-items: center;
}

@for $i from 1 through 5 {
  .circle-#{$dimensions} {
=> => width: #{$dimensions}px;
=> =>  height: #{$dimensions}px;
=> => border-radius: 50%;
=> => @include centering();
=> => background-color: red;
=> => color: white;
=> => margin: 50px auto;
}
=> $dimensions: $dimensions + 100;
}
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------#
13: loop - Each and map:

If i haven more than color and i want give each element a color then i can use each loop like this:

$themes: red, blue, green, orange;

@each $them in $themes {
=> .#{$them}-theme {
=> => .product {
=> => => background-color: white;
=> => => border-bottom: 2px solid $them;
=> => => .title {
=> => => => color: $them;
=> => => => font-weight: bold;
=> => => }
=> =>}
=> }
}

Another Example:

$socials:(
=> facebook: #3b5998,
=> youtube: #bb0000,
=> github: #333333
)

@each $platform, $color in $socials {
  .#{$platform} {
=> => background-color: $color;
=> => color: white;
=> => &::before {
=> => => content: $platform;
=> => }
=> }
}

how to use destructuring in each loop:

$classes: "one" 20px red, "two" 15px green, "three" 20px blue;

@each $class, $font, $color in $classes {
=> .#{$class} {
=> => color: $color;
=> => font-size: $font / 2;
=> }
}
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------#
14: Loop - While:

Syntax:

$variable: value;

@while $variable < value {
=> // code
=> $variable: $variable + 1;
}

Example:

$start: 1;

@while $start <= 10 {
  => .width-#{$start _ 100} {
=> => width: $start _ 100px;
=> => height: ($start \* 100px) / 2;
=> }
=> $start: $start + 1;
}
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------#
15: Create bootstrap grid system:

$grid-columns: 12;

$for $i from 1 through $grid-columns {
=> .col-#{$i} {
=> => width: ($i / $grid-columns):
=> }
}
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------#
16: Functions:

@function half($size) {
=> @return $size / 2;
}

$width: 200px;

.element {
=> width: $width;
=> height: half($width);
}

this will compile into:

.element {
=> width: 200px;
=> height: 100px;
}
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------#
If i don't know how many arguments i will pass to the function then i can use ... like this:
For example i have three element and i want calculate the height of each element to put another element under it:

@function calculate-height($sizes...) {
=> $total: 0;
=> @each $size in $sizes {
=> => $total: $total + $size;
=> }
=> @return $total;
}

$width: 200px;

.element {
=> width: $width;
=> height: half($width);
=> top: calculate-height(100px, 200px, 300px);
}

this will compile into:

.element {
=> width: 200px;
=> height: 100px;
=> top: 600px;
}
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------#
17: Practice Mixins with content:

@mixin overlay($color, $opacity) {
=> position: absolute;
=> top: 0;
=> left: 0;
=> width: 100px;
=> height: 100px;
=> background-color: rgba($color, $opacity);
}

.black-overlay {
=> @include overlay(#000, 0.5);
}

NOTE: Among the features of mixins i can use it to make prefixes with content and i can use it with keyframes like this:

@mixin keyF($anim-name){
=> @-webkit-keyframes #{$anim-name} {
=> @content;
}
=> @ keyframes #{$anim-name} {
=> => @content;
=>}
}

NOTE: @content means that i can pass any code to the mixin and it will be compiled with the mixin code.

@include keyF(fade-in) {
=> from {
=> => opacity: 0;
=> }
=> to {
=> => opacity: 1;
=> }
}

@include keyF(go-up) {
=> from {
=> => bottom: 0;
=> }
=> to {
=> => bottom: 100px;
=> }
}

this will compile into:

@-webkit-keyframes fade-in {
=> from {
=> => opacity: 0;
=> }
=> to {
=> => opacity: 1;
=> }
}

@keyframes fade-in {
=> from {
=> => opacity: 0;
=> }
=> to {
=> => opacity: 1;
=> }
}

@-webkit-keyframes go-up {
=> from {
=> => bottom: 0;
=> }
=> to {
=> => bottom: 100px;
=> }
}

@keyframes go-up {
=> from {
=> => bottom: 0;
=> }
=> to {
=> => bottom: 100px;
=> }
}
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------#
18: Practice Create media query mixin:

// If condition + Mixin + Content

@mixin breakPoints($point) {
=> @if ($point == mobile) {
=> => @media (max-width: 767px) {
=> => => @content;
=> => }
=> } @else if ($point == small) {
=> => @media (min-width: 768px) and (max-width: 991px) {
=> => => @content;
=> => }
=> } @else if ($point == medium) {
=> => @media (min-width: 992px) and (max-width: 1199px) {
=> => => @content;
=> => }
=> } @else if ($point == large) {
=> => @media (min-width: 1200px) {
=> => => @content;
=> => }
=> }
}

.media{
=> @include breakPoints(mobile) {
=> => font-size: 15px;
=> }
=> @include breakPoints(small) {
=> => font-size: 20px;
=> }
=> @include breakPoints(medium) {
=> => font-size: 25px;
=> }
=> @include breakPoints(large) {
=> => font-size: 30px;
=> }
}

this will compile into:

@media (max-width: 767px) {
=> .media {
=> => font-size: 15px;
=> }
=>}

@media (min-width: 768px) and (max-width: 991px) {
=> .media {
=> => font-size: 20px;
=> }
=>}

@media (min-width: 992px) and (max-width: 1199px) {
=> .media {
=> => font-size: 25px;
=> }
=>}

@media (min-width: 1200px) {
=> .media {
=> => font-size: 30px;
=> }
=>}
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------#
7-1 architecture:
BEM: Block Element Modifier
