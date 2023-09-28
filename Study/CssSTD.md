CSS Basic:
Syntax:
body {
=> background-color: lightblue;
}

body: => selector
background-color: => property
lightblue: => value
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Simple Selectors:
(1) Element Selector: Selects all elements with the given tag name.
Syntax:
p {
=> text-align: center;
=> color: red;
}

(2) Class Selector: Selects all elements with the given class name.
Syntax:
.center {
=> text-align: center;
=> color: red;
}

(3) ID Selector: Selects a single element with the given id name.
Syntax:
#intro {
=> text-align: center;
=> color: red;
}

(4) Universal Selector: Selects all elements.
We put properties in the universal selector to reset all the properties of all the elements. (no inheritance property)
Syntax:

\*{
=> text-align: center;
=> color: red;
}

Specificity priority:
(1) Inline Style: 1000
(2) ID: 100
(3) Class: 10
(4) Element: 1
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Inline and External Style:
(1) Inline Style: An inline style is a style that is applied directly to the element to be styled.
Syntax:

<style>
h1 {
=> color: red;
=> font-size: 5em;
}
</style>

OR:

<h1 style="color:blue;">This is a Blue Heading</h1>
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
(2) External Style: An external style sheet is used to define the style for many HTML pages.
Syntax:

<head>
=><link rel="stylesheet" href="styles.css">
</head>
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Multiple and combinator selectors:
Multiple Selectors: Selects all the elements with the given tag name, class name, or id name.
(1) comma (,): Selects all the elements with the given tag name, class name, or id name.
Syntax:
h1, h2, p {
=> text-align: center;
=> color: red;
}

(2) space ( ): Selects all the elements with the given tag name, class name, or id name that are descendants of the specified element.
Syntax:
div p { // all the p tags inside the div tag
=> text-align: center;
=> color: red;
}

(3) greater than (>):
Syntax:
div > p { // all the p tags that are direct children of the div tag
=> text-align: center;
=> color: red;
}

(4) plus (+):
Syntax:
div + p { // all the p tags that are placed immediately after the div tag
=> text-align: center;
=> color: red;
}

(5) tilde (~):
Syntax:
div ~ p { // all the p tags that are placed after the div tag
=> text-align: center;
=> color: red;
}
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Attribute Selectors:
(1) [attribute]: Selects all the elements with the given attribute.
Syntax:
[width] { // all the elements with the width attribute
=> color: red;
}

(2) [attribute=value]: Selects all the elements with the given attribute and value.
Syntax:
[width="100px"] { // all the elements with the width attribute and value "100px"
=> color: red;
}

(3) [attribute^=value]: Selects all the elements with the given attribute and value that starts with the specified value.
Syntax:
[width^="1"] { // all the elements with the width attribute and value that starts with "1"
=> color: red;
}

(4) [attribute$=value]: Selects all the elements with the given attribute and value that ends with the specified value.
Syntax:
[width$="5"] { // all the elements with the width attribute and value that ends with "5"
=> color: red;
}

(5) [attribute*=value]: Selects all the elements with the given attribute and value that contains the specified value.
Syntax:
[width*="10"] { // all the elements with the width attribute and value that contains "10"
=> color: red;
}

(6) [attribute~=value]: Selects all the elements with the given attribute and value that contains the specified value.
Syntax:
[title~="ccc"] { // all the elements with the title attribute and value that contains "ccc" (e.g. "aaa bbb ccc ddd") ccc must be a whole word not a part of a word
=> color: red;
}

(7) [attribute|=value]: Selects all the elements with the given attribute and value that contains the specified value.
Syntax:
[title|="ccc"] { // all the elements with the title attribute and value that contains "ccc" (e.g. "ccc-aaa") ccc must be a whole word or start with ccc and then a dash like "ccc-aaa"
=> color: red;
}

div[title|="ccc"] { // all the div elements with the title attribute and value that contains "ccc" (e.g. "ccc-aaa") ccc must be a whole word or start with ccc and then a dash like "ccc-aaa"
=> color: red;
}
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Pseudo elements selectors:
(1) ::after: Adds something after the content of each selected element.
Syntax:
div::after { // all the div elements put - Learn more after the content of the div element and make it red
=> content: " - Learn more";
=> color: red;
}

(2) ::before: Adds something before the content of each selected element.
Syntax:
div::before { // all the div elements put - Learn more before the content of the div element and make it red
=> content: " - Learn more";
=> color: red;
}

(3) ::first-letter: Selects the first letter of each selected element.
Syntax:
p::first-letter { // all the p elements select the first letter of each p element and make it red
=> color: red;
}

(4) ::first-line: Selects the first line of each selected element.
Syntax:
p::first-line { // all the p elements select the first line of each p element and make it red
=> color: red;
}

(5) ::selection: Selects the portion of an element that is selected by a user.
Syntax:
p::selection { // all the p elements select the portion of the p element that is selected by a user and make it red
=> color: red;
}
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Pseudo classes selectors:
(1) :active: Selects the active link.
Syntax:
a:active { // all the a elements select the active link and make it red
=> color: red;
}

(2) :checked: Selects every checked element.
Syntax:
input:checked { // all the input elements select every checked element and make it red
=> color: red;
}

(3) :disabled: Selects every disabled element.
Syntax:
input:disabled { // all the input elements select every disabled element and make it red
=> color: red;
}

(4) :empty: Selects every element that has no children.
Syntax:
p:empty { // all the p elements select every element that has no children and make it red
=> color: red;
}

(5) :enabled: Selects every enabled element.
Syntax:
input:enabled { // all the input elements select every enabled element and make it red
=> color: red;
}

(6) :first-child: Selects every element that is the first child of its parent.
Syntax:
p:first-child { // all the p elements select every element that is the first child of its parent and make it red
=> color: red;
}

(7) :hover: Selects links on mouse over.
Syntax:
a:hover { // all the a elements select links on mouse over and make it red
=> color: red;
}

(8) :in-range: Selects input elements with a value within a specified range.
Syntax:
input:in-range { // all the input elements select input elements with a value within a specified range and make it red
=> color: red;
}

(9) :invalid: Selects all input elements with an invalid value.
Syntax:
input:invalid { // all the input elements select all input elements with an invalid value and make it red
=> color: red;
}
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Properties introduction:
NOTE: hover will work with the same selector or selector with lower specificity.
and hover not work if the same selector have value for the same property by another selector but it higher specificity
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
BOX MODEL:
(1) content: The content of the box, where text and images appear.
(2) padding: Clears an area around the content. The padding is transparent.
(3) border: A border that goes around the padding and content.
(4) margin: Clears an area outside the border. The margin is transparent.

NOTE: The total width of an element should be calculated like this:
Total element width = width + left padding + right padding + left border + right border + left margin + right margin
The total height of an element should be calculated like this:
Total element height = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin

NOTE: To apply border in element we should give it width and style and color will be black by default.

Syntax:
(1) border-width: 10px; // top right bottom left
(2) border-style: solid; // top right bottom left
(3) border-color: red; // top right bottom left
(4) border: 10px solid red; // top right bottom left
(5) border-top: 10px solid red;
(6) border-right: 10px solid red;
(7) border-bottom: 10px solid red;
(8) border-left: 10px solid red;
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Box width and height:
We used the percentage % to make the width and height of the box responsive. because it will be relative to the parent element.
NOTE: The percentage % will not work with height if the parent element does not have a height. it takes the height of the content.
but if parent element for example have height 100px and the child element have height 50% it will be 50px.
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
BOX Sixing:
NOTE: The box-sizing property allows us to include the padding and border in an element's total width and height. but it will not work with margin.
but still place barrier between the elements.
The reason of this because box-sizing property know the width and height of the element content and it will calculate the padding and border from the content.

(1) box-sizing: content-box; // default value
(2) box-sizing: border-box;
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Box margin collapsing and display property:
Horizontal margin collapsing:
When two elements with margins are next to each other, the margin of the element with the sum of the two margins.
Vertical margin collapsing:
When two elements with margins are one above the other, the margin of the element with the largest margin. and this called margin collapsing.
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Hide elements:
(1) display: none; // hide the element and remove it from the page
(2) visibility: hidden; // hide the element but still take place in the page
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
NOTE: we used margin: auto; to center the element horizontally.
border-radius: 50%; // to make the element circle
border-radius: 20px / 100px 50px 70px 10px; // 20/100 20/50 20/70 20/10
border-radius: 100%; // to make the element circle like border-radius: 50%;
border-radius: 50%; // to make the element circle like border-radius: 100%; because 50% from each corner is 100%
border-radius: 99% 0; // to make the element certain shape
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Border Image:
(1) border-image-source: url("border.png"); // the image that will be the border
(2) border-image-slice: 30; // the size of the border image

(3) border-image-repeat: have three values
(3.1) border-image-repeat: stretch; // the image will be stretched to fill the area
(3.2) border-image-repeat: repeat; // the image will be repeated to fill the area
(3.3) border-image-repeat: round; // the image will be repeated to fill the area and the last image will be stretched to fill the area

(4) border-image-width: 30px; // the width of the border
(5) border-image-outset: 30px; // the distance between the border and the element by default it is 0
(6) border-image: url("border.png") 30 round 30px 30px; // the shorthand property

NOTE: Whether the size of image is smaller or larger than the size of the border, still the width of border constant and take size of it.
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Border Gradient Color
border image is not supported in all browsers so we can use border gradient color instead of it.
(1) border-image: linear-gradient(to right, red, blue); // the shorthand property
(2) border-image-source: linear-gradient(to right, red, blue); // the image that will be the border
(3) border-image-slice: 30; // the size of the border image
(4) border-image-repeat: round; // the image will be repeated to fill the area and the last image will be stretched to fill the area
(5) border-image-width: 30px; // the width of the border
(6) border-image-outset: 30px; // the distance between the border and the element by default it is 0
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Box Shadow:
(1) box-shadow: inset 10px 10px 10px 10px rgb(2,2,2,)
............... in or out offset-x offset-y blur-radius spread-radius color
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Positioning:
(1) position: static; // default value
(2) position: relative; // relative to its normal position (save its position in the page)
(3) position: absolute; // relative to its first parent that have position not static
NOTE: we use position absolute to make dropdown menu because not take white space in the page and it will float over the other elements.
and the difference between position absolute and fixed that fixed relative to the viewport and absolute relative to its first parent not static and fixed be fixed in the page.
(4) position: fixed; // relative to the viewport
(5) position: sticky; // save its position in the page if i give it top 0 it will be sticky in the top of the page
if i give it 50px it will be sticky in the top of the page after 50px and if i give it bottom 0 it will be sticky in the bottom of the page

NOTE: position sticky must have top or bottom or left or right to work but if don't have any of them it will be static.
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Absolute Positioning:
Case 1 : if the parent element have position static the child element or don't there parent will be relative to the viewport.
Case 2 : if the parent element have position not static the child element will be relative to its parent element.
Case 3 : if child take position fixed it will be relative to the viewport until the parent element have position not static.
Case 4 : if child take position sticky and i give it top 30px it will be sticky in the top of the page after 30px but sticky will die
with the end of the parent element.
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Z index in CSS:
Z index is a property that allows us to control the order in which the elements are stacked on top of each other.
So the higher the z index, the more on top the element will be. And the lower the z index, the more at the bottom the element will be.
And the default value of the z index is zero. And the z index only works on positioned elements.
If element has not been positioned (static), then the z index will have no effect. (like top, left, right, bottom)
NOTE: If more than element has the same z index, then the order in which they appear in the HTML will determine which one is on top.
NOTE: Z index will between elements that are on the same level of the DOM tree.
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Floats: Floats are a legacy way of creating layouts. And they are still used today, but only in very specific situations.
float make elements floating, and this means that they are taken out of the normal flow of the document.
NOTE: If i give element float default behavior of the element will be changed. and will take the width of its content. if has not content will be hidden.
so we can give it a width and height.

To separate the content from the float element we create div and give it clear property. and this property will clear the float.
clear: left; => will clear the float from the left side.
clear: right; => will clear the float from the right side.
clear: both; => will clear the float from both sides.

NOTE: in case header take position fixed, the content will be hidden behind the header. so we can give the content margin-top equal to the height of the header.
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Layouts: Modern layout techniques:
display: list-item; => will make the element behave like a list item.
list-style-position: inside; => will make the bullet inside the element.
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
display: table; => will make the element behave like a table. and don't take the full width of the page.
display: table-caption; => will make the element behave like a table caption.
display: table-header-group; => will make the element behave like a table header.
display: table-row-group; => will make the element behave like a table row group.
display: table-footer-group; => will make the element behave like a table footer group.
display: table-row; => will make the element behave like a table row.
display: table-cell; => will make the element behave like a table cell.
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Flexbox: Flexbox is a one-dimensional layout model. And this means that it deals with layout in one dimension at a time.
Property for the parent element:
display: flex; => will make the element behave like a flex container.
flex-wrap: wrap; => will make the element wrap its content. (if the content is bigger than the width of the element) by default the value is nowrap.
flex-wrap: wrap-reverse; => will make the element wrap its content in reverse order.

flex-direction: row; => will make the element behave like a row. (default)
flex-direction: row-reverse; => will make the element behave like a row in reverse order.
flex-direction: column; => will make the element behave like a column.
flex-direction: column-reverse; => will make the element behave like a column in reverse order.

NOTE: if flex direction towards column, an it take height and the content is bigger than the height of the element, will wrap towards row.

flex flow: row wrap; => will make the element behave like a row and wrap its content. (flex-direction: row; flex-wrap: wrap;)

justify-content: stretch; => will make the element stretch to take the full width of the page. (default)
justify-content: flex-start; => will make the element start from the left side.
justify-content: flex-end; => will make the element end at the right side.
justify-content: center; => will make the element center. (horizontally)
justify-content: space-between; => will make the element space between the content.
justify-content: space-around; => will make the element space around the content. (space on the left and right side of the content will be half of the space between the content)
justify-content: space-evenly; => will make the element space evenly. (space will be equal between the content and the left and right side of the element)

align-items: center; => will make the element center. (vertically)
align-items: flex-start; => will make the element start from the top.
align-items: flex-end; => will make the element end at the bottom.
align-items: baseline; => will make the element align its content based on the baseline of the content. (the baseline is the line that the letters sit on)

NOTE: align-items will now if not wrap the content. if wrap the content will align the content based on the height of the element.

Property for the child element:
order: 0; => will make the element order 0. (default) (order is the order in which the element will appear in the page)
order: 1; => will make the element order 1. (will appear after the element with order 0)

align-self: auto; => will make the element align itself based on the align-items property of the parent element. (default)
align-self: flex-start; => will make the element start from the top.
align-self: flex-end; => will make the element end at the bottom.

NOTE: align-self it will move each element individually. and align-items will move all the elements together.

flex-basis: auto; => will make the element take the width of its content. (default)
flex-basis: 100px; => will make the element take 100px width.

In case row or row-reverse: the width of the element will be the flex-basis. and this the difference between flex-basis and width.
In case column or column-reverse: the height of the element will be the flex-basis. and this the difference between flex-basis and height.

NOTE: if element take width, height and flex basis, the width will be the flex basis. and the height will be the height of the element.

flex-shrink: 1; => will make the element shrink if the content is bigger than the width of the element. (default)
flex-shrink: 0; => will make the element not shrink if the content is bigger than the width of the element. if not wrap the content will overflow.
NOTE: Each the value of the flex-shrink is increase this mean that the element will shrink more than the element with less value.

flex-grow: 0; => will make the element not grow if the content is smaller than the width of the element. (default)
flex-grow: 1; => will make the element grow if the content is smaller than the width of the element. (will take the full width of the element)

short hand for flex-grow, flex-shrink and flex-basis:
flex: 0 1 auto; => will make the element not grow, shrink and take the width of its content. (default)

NOTE:
flex-direction: row;
justify-content: will move in width
align-items: will move in height

flex-direction: column;
justify-content: will move in height
align-items: will move in width
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Grid: Grid is a two-dimensional layout model. And this means that it deals with layout in two dimensions at a time.
NOTE: if any item take any position from will item floating in the page, it will out of the grid. and grid decrease column.
Property for the parent element:
display: grid; => will make the element behave like a grid container.
grid-template-columns: 100px 100px 100px; => will make the element take 3 columns with 100px width each. (default)
grid-template-columns: 100px 100px 100px 1fr; => will make the element take 4 columns with 100px width each and the last column will take the remaining space.
grid-template-columns: repeat(3, 100px); => will make the element take 3 columns with 100px width each. (repeat(number of columns, width of each column))
grid-template-columns: repeat(3, 1fr); => will make the element take 3 columns with the same width and take the remaining space.
grid-template-columns: 300px 100px auto; => will make the element take 3 columns with 300px width for the first column, 100px width for the second column and the third column will take the width of its content.
grid-template-columns: 300px 100px max-content; => will make the element take 3 columns with 300px width for the first column, 100px width for the second column and the third column
will take the width of its content. (max-content will take the width of the content and if the content is bigger than the width of the element will wrap)
grid-template-columns: 25% 1fr 5fr; => will make the element take 3 columns with 25% width for the first column, 1fr width for the second column and 5fr width for the third column. (fr is a fraction unit)
grid-template-columns: repeat(1, 25% 100px) 100px minmax(min-content, max-content); => will make the element take 5 columns with 25% width for the first column, 100px width for the second column,
100px width for the third column, min-content width for the fourth column and max-content width for the fifth column. (minmax(min width, max width)will make the element take the width of the content
if the content is bigger than the min width and if the content is smaller than the min width will take the min width)

NOTE: each we test the grid-template-columns we can test the grid-template-rows.

grid-auto-row: 100px; => will make the element take 100px height for each row. (default) (row will create automatically)
grid-auto-row: minmax(100px, auto); => will make the element take 100px height for each row and if the content is bigger than the height of the row will wrap.

grid-auto-flow: row; => will make the element behave like a grid container and the items will be placed by row. (default)
grid-auto-flow: column; => will make the element behave like a grid container and the items will be placed by column. (in this case the items will be placed by column and grid-auto-columns will work)

grid-auto-columns: 100px; => will make the element take 100px width for each column. (default)

row-gap: 10px; => will make the element take 10px space between each row.
column-gap: 10px; => will make the element take 10px space between each column.
gap: 10px; => will make the element take 10px space between each row and column.
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
justify-items: stretch; => will make the element stretch to fill the width of the column. (default)
justify-items: start; => will make the element start from the left. (Consider the language)
justify-items: end; => will make the element end at the right. (Consider the language)
justify-items: right; => will make the element start from the right. (Not consider the language)
justify-items: left; => will make the element end at the left. (Not consider the language)
justify-items: center; => will make the element center in the column.
justify-items: space-between; => will make the element start from the left and the last element will end at the right and the space between each element will be equal.
justify-items: space-around; => will make the element start from the left and the last element will end at the right and the space between each element will be equal
and the space before the first element and after the last element will be half of the space between each element.
justify-items: space-evenly; => will make the element start from the left and the last element will end at the right and the space between each element will be equal
and the space before the first element and after the last element will be equal to the space between each element.

justify-content: move and center the grid content horizontally.
align-content: move and center the grid content vertically.
justify-items: move and center specific item horizontally.
align-items: move and center specific item vertically.

all of the above properties take the same values.

grid-template-columns: repeat(auto-fill, 100px); => will make the element take 100px width for each column and if the container is bigger will create new column, until there not items.
grid-template-columns: repeat(auto-fit, 100px); => will make the element take 100px width for each column and if the container is bigger will not create new column, unless there is items.
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
NOTE: لتسميه منطقه معينه / لتسميه الخطوط اللي قبل الصف او العمود بكتب اسم الخط في سكوير براكيتس قبل النسبه او الوحده

Example:
grid-template-columns: [col-1-start] 50% [col-1-end col-2-start] 50% [col-2-end];
grid-template-rows: [row-1-start] 50% [row-1-end row-2-start] 50% [row-2-end];

grid-template-columns: [first-start] 100px [first-end second-start] 100px [second-end third-start] 100px [third-end];
grid-template-rows: [first-start] 100px [first-end second-start] 100px [second-end third-start] 100px [third-end];

but if i want use repeat i write:
grid-template-columns: repeat(2, [col-start] 50% [col-end])
it's like grid-template-columns: [col-start] 50% [col-end col-start] 50% [col-end];

NOTE: one of disadvantage when we use repeat all lines take the same name
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
grid-template-areas: will make the element take the area that we want.
Example:
grid-template-areas: "area-1 area-1" ". area-2"

NOTE: every "" represent one column and i can give more one are the same name and if i want give area name i write . dot
grid-template: it's shorthand it represent row and column and can represent area, row and column
if use it to represent row and column only we write row first then column
Example:
grid-template: 200px 300px / repeat(2, 50%)
if we use it to represent area, row and column we write the area before the row
Example:
grid-template: "area-1 area-1" 200px ". area-2" 300px / 50% 50%

NOTE: We can't use repeat if we use grid-template to represent area, row and column like we use it with row and column
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
If i want merge to items or cells:
grid-column-start: 1;
grid-column-end: 3;
OR:
grid-column-end: span 2

grid-column: 1 / 3; => will make the element take the first and second column.
=> This is a shorthand for grid-column-start and grid-column-end

and we can use row like this:
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Body: is a special element it give some property to his parent (html) like the height
If want prevent this behavior we give html height in this case body can't give html value because already it has own value

NOTE: If body element don't have property height will take the height of content and if not there any content will hidden

NOTE: If body take height: 100% will take the height of content but if html take height 100% body will take height 100% (strange unexpected behavior)

NOTE: If body take height: 50px will take 50px (ordinary) but not percentage
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
CSS Images:
best practice: images should be 1.5x or 2x the size i want it
if i want size 500px image should be 750px or 1000px

width: 50% it will be relative with parent this be useful with responsive.
height: 50% no recommended use this because body will extend to to match the size And therefore should give height to html element.
max-width: 500px => width not increment of 500px until i give it value above 500px and so on with height
min-width: 300px => width not decrement of 300px until i give it value under 300px and so on with height
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
CSS SVG:
svg: is a vector image it standard for Scalable Vector Graphic
