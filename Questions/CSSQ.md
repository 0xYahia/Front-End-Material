What display values exist?:
In CSS, the display property is used to specify how an HTML element should be rendered and displayed on the web page. The display property accepts various values,
each defining a different rendering behavior. Here are some commonly used display values:

1: block: The element generates a block-level box, causing it to start on a new line and take up the full width available. Examples of block-level elements include <div>, <p>, <h1> to <h6>, and <section>.

2: inline: The element generates an inline-level box, allowing it to flow within the text content. It does not start on a new line and only occupies the necessary width and height for its content.
Examples of inline elements include <span>, <a>, <strong>, and <em>.

3: inline-block: Similar to inline, the element generates an inline-level box, but it also allows the element to have a specified width, height, padding, and margin.
It can flow within the text content and have block-level properties. Examples include <img>, <input>, and <button>.

4: none: The element is not displayed at all, effectively removing it from the document flow. The element and its content will be completely invisible and won't take up any space on the page.

5: flex: The element becomes a flexible container that can dynamically adjust its child elements. It introduces a flex context and enables flexbox layout capabilities.
It is used to create flexible and responsive layouts.

6: grid: The element becomes a grid container that allows for defining complex grid-based layouts. It introduces a grid context and enables grid layout capabilities.
It is used to create grid-based designs with precise control over positioning and alignment.

7: table: The element behaves like a table element. It is used to create table layouts and consists of a table row (<tr>), table cell (<td> or <th>), and other table-related elements.

8: inline-table: The element behaves like an inline-level table element. It combines the properties of inline and table, allowing the element to have table-like behavior while flowing within the text content.

These are just a few examples of the display values in CSS. The display property offers a range of options to control the layout and rendering behavior of HTML elements,
providing flexibility in creating different types of designs and structures.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
What is the difference between inline and inline-block?:
The main difference between inline and inline-block is how they handle the box model properties, such as width, height, padding, and margin.

1: Inline Elements:

Flow within the text content and do not start on a new line.
Only occupy the necessary width and height for their content.
Ignored values for width, height, margin-top, margin-bottom, padding-top, and padding-bottom.
Horizontal padding and margin are respected.
Vertical padding and margin do not push other elements away.
Examples of inline elements are <span>, <a>, <strong>, and <em>.
2: Inline-Block Elements:

Behave like inline elements but can have specified width, height, padding, and margin.
Flow within the text content and do not start on a new line.
Respect values for width, height, margin, and padding.
Can have both horizontal and vertical padding and margin.
Adjacent inline-block elements will respect the horizontal whitespace between them (like words in a sentence).
Examples of inline-block elements are <img>, <input>, and <button>.

In summary: while both inline and inline-block elements flow within the text content and do not start on a new line, inline-block allows for the specification of width, height, padding, and margin.
It provides more control over the layout and allows adjacent elements to respect the specified dimensions and whitespace. inline elements, on the other hand,
have their width and height determined by their content and do not affect the layout of adjacent elements as much.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
What is the difference between flex and grid?:
Both Flexbox and CSS Grid are layout systems in CSS that offer different approaches to creating flexible and responsive web layouts. Here are the key differences between Flexbox and CSS Grid:

Flexbox:
One-dimensional layout system that operates along a single axis (either horizontally or vertically).
Designed for creating flexible and dynamic layouts within a single row or column.
Ideal for arranging and aligning items within a container.
Uses the properties display: flex on the container and various properties on the items, such as flex-direction, flex-wrap, justify-content, and align-items.
Well-suited for creating navigation menus, flexible content containers, and vertically aligning items.

CSS Grid:
Two-dimensional layout system that operates along both the horizontal and vertical axes.
Designed for creating complex grid-based layouts with multiple rows and columns.
Allows explicit control over both the placement and sizing of items within the grid.
Uses the properties display: grid on the container and various properties on the items, such as grid-template-columns, grid-template-rows, grid-gap, and grid-area.
Well-suited for creating grid-based designs with precise control over positioning, alignment, and responsive behavior.
Supports overlapping of items and alignment of items in any direction.

In summary: Flexbox is a one-dimensional layout system that focuses on arranging items within a single row or column,
while CSS Grid is a two-dimensional layout system that provides greater control over complex grid-based layouts. Flexbox is best suited for arranging and aligning items within a container,
while CSS Grid is ideal for creating grid-based designs with more control over placement, sizing, and responsiveness. Depending on the layout requirements, you can choose to use Flexbox,
CSS Grid, or a combination of both to achieve the desired layout and design for your web page.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
What are the types of positions in CSS?:

In CSS, there are four main types of positioning that can be applied to elements:

1: Static Positioning:

The default positioning behavior for elements.
Elements are positioned according to the normal flow of the document.
Top, bottom, left, and right properties have no effect.
Elements are not affected by the z-index property.
Elements do not create a new stacking context.
Example: position: static;

2: Relative Positioning:

Elements are positioned relative to their normal position in the document flow.
Can be moved using top, bottom, left, and right properties.
The space reserved for the element in the normal flow remains intact.
Other elements are not affected by the relative positioned element.
Example: position: relative;

3: Absolute Positioning:

Elements are positioned relative to the nearest positioned ancestor (an ancestor element with a position value other than static) or to the initial containing block if no positioned ancestor exists.
Removed from the normal flow of the document.
Can be moved using top, bottom, left, and right properties.
Other elements are not affected by the absolutely positioned element.
The space originally occupied by the element is removed, and other elements may fill the space.
Example: position: absolute;

4: Fixed Positioning:

Elements are positioned relative to the initial containing block or the viewport, regardless of scrolling.
Removed from the normal flow of the document.
Can be moved using top, bottom, left, and right properties.
Other elements are not affected by the fixed positioned element.
The space originally occupied by the element is removed, and other elements may fill the space.
Example: position: fixed;

5: Additionally, there is a fifth type of positioning called Sticky Positioning that behaves like a combination of relative and fixed positioning. Sticky positioning is relatively positioned
until a specified scroll threshold is reached, after which it becomes fixed. It is commonly used for elements that should stick to a specific position as the user scrolls the page.

Example: position: sticky;
ChatGPT
These positioning types provide flexibility in controlling the placement and behavior of elements on a web page, allowing developers to create complex layouts and designs.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
What is importance of Z-index and when it is not work?:
The z-index property in CSS controls the stacking order of positioned elements along the z-axis (depth). It determines which elements appear in front of or behind other elements when they overlap.

The importance of z-index can be summarized as follows:

Stacking Order: z-index allows you to precisely control the stacking order of elements. Elements with a higher z-index value are positioned in front of elements with a lower z-index value.

Overlapping Elements: When elements overlap due to absolute or fixed positioning, z-index can be used to determine which element appears on top and which appears behind.

Layering and Depth: z-index provides a way to create layered effects in designs, such as having elements appear to be stacked on top of each other, simulating depth and perspective.

However, there are certain situations when the z-index property may not work as expected:

Positioned Elements: z-index only applies to elements with a specified positioning value (e.g., position: relative, position: absolute, position: fixed, or position: sticky).
Elements with position: static are unaffected by z-index.

Stacking Context: The stacking order is relative to the stacking context. Each stacking context has its own stacking order, and z-index only applies within its respective stacking context.
Stacking contexts are created by elements with specific properties, such as position: relative, position: absolute, position: fixed, opacity less than 1, or certain CSS3 properties like transform and filter.

Parent-Child Relationship: z-index works within the parent-child hierarchy of elements. A child element cannot appear in front of its parent element if the parent has a higher z-index value.

Sibling Elements: When sibling elements have the same z-index value, the stacking order is determined by their order in the HTML markup. The element that appears later in the markup will be positioned on top.

It's important to note that z-index is a powerful tool, but it should be used judiciously to avoid creating overly complex stacking orders that may cause confusion or unintended layout issues.
Careful consideration and testing are necessary to ensure the desired visual hierarchy and layering effects are achieved while maintaining a clear and understandable layout.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
When do we use clear in CSS?:
The clear property in CSS is used to control the behavior of floated elements and specifies whether an element should be moved below any preceding floated elements.
It is primarily used when you want to prevent elements from wrapping around floated elements.

Here are some common scenarios where the clear property is used:

Clearing Floats: When you have floated elements, such as <div>s or <img>s, and you want to ensure that the following elements are not positioned beside them, you can apply clear to the subsequent elements.
For example, if you have a floated element with float: left, applying clear: left to the following element will force it to start below the floated element.

Clearing Floats in Containers: If you have a container element that contains floated child elements and you want to ensure the container expands to encompass the floated elements,
you can use the clearfix technique. This involves applying clear: both or clear: left and clear: right to the container element.
This ensures that the container element expands to include the floated elements within it.

Preventing Wrapping: When you have a long block of text with a floated element embedded within it, you may want to prevent the text from wrapping around the floated element.
Applying clear to an element following the floated element will ensure that the subsequent content starts on a new line and is not affected by the float.

The clear property accepts the following values:

none (default): No clearing. The element is allowed to wrap around preceding floated elements.
left: The element is moved below any preceding left-floated elements.
right: The element is moved below any preceding right-floated elements.
both: The element is moved below any preceding left or right-floated elements.

It's worth noting that the clear property only has an effect on floated elements. If there are no floated elements preceding the cleared element, the clear property will have no visible effect.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
What difference between absolute and relative URL ?:
The main difference between absolute and relative URLs lies in how they specify the location of a resource (such as a webpage, image, or file) on the internet.

Absolute URL:
Provides the complete and exact web address of a resource.
Contains the protocol (e.g., "http://" or "https://"), domain name, and the path to the resource.
Starts from the root of the website or the web server.
Can be used to link to resources on different domains or websites.
Example: https://www.example.com/images/pic.jpg

Relative URL:
Specifies the location of a resource relative to the current document.
Does not include the protocol or domain name.
Relies on the current document's URL as the starting point.
Used to link to resources within the same domain or website.
Can specify the path to a resource relative to the current document's location.
Example: images/pic.jpg
To understand the difference, consider a scenario where you have a webpage located at https://www.example.com/products/index.html. If you want to include an image in this webpage using an absolute URL,
you would specify the complete web address of the image, such as https://www.example.com/images/pic.jpg. On the other hand,
if you want to use a relative URL, you would specify the path to the image relative to the current webpage, such as images/pic.jpg.

The choice between using an absolute or relative URL depends on the specific context and the intended target of the link or resource.
Absolute URLs are typically used when referencing resources on different domains or when the full address is necessary.
Relative URLs are commonly used for linking to resources within the same website or domain, providing flexibility and ease of maintenance when the website's structure changes.

It's important to note that when using relative URLs, the browser resolves the URL based on the current page's location. Therefore,
relative URLs may behave differently depending on the page's URL and the structure of the website.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
types of media queries ?:
Media queries allow you to apply different CSS styles based on various device characteristics such as screen size, resolution, orientation, and more.
There are several types of media queries you can use to target different devices and conditions:

1: Screen Size:
@media screen and (max-width: 768px): Targets screens with a maximum width of 768 pixels.
@media screen and (min-width: 1024px): Targets screens with a minimum width of 1024 pixels.
@media screen and (width: 320px): Targets screens with a specific width of 320 pixels.

2: Device Orientation:
@media screen and (orientation: portrait): Targets devices in portrait mode.
@media screen and (orientation: landscape): Targets devices in landscape mode.

3: Resolution and Pixel Density:
@media screen and (min-resolution: 300dpi): Targets devices with a minimum resolution of 300 dots per inch.
@media screen and (min-resolution: 2dppx): Targets devices with a minimum pixel density of 2 dots per pixel.

4: Device Features:
@media (hover: hover): Targets devices that support hover interactions.
@media (pointer: coarse): Targets devices with a coarse pointer, such as touch screens.
@media (color: 16) or @media (color: min-color: 16) : Targets devices with a minimum color depth of 16 bits.
@media (grid): Targets devices that support CSS Grid Layout.

5: Printing:
@media print: Targets when the document is being printed.

These are just a few examples of media queries, and there are many more properties and values that can be used to create highly specific and targeted styles for different devices and conditions.
Media queries allow you to create responsive designs that adapt to different screen sizes and device capabilities, providing an optimal user experience across a wide range of devices.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
8- Difference between reset vs normalize CSS?. How do they differ?:
Reset CSS: CSS resets aim to remove all built-in browser styling. For example margins, paddings, font-sizes of all elements are reset to be the same.
Example:

- {
  => margin: 0;
  => padding: 0;
  => border: 0;
  }

Normalize CSS: Normalize CSS aims to make built-in browser styling consistent across browsers. It also corrects bugs for common browser dependencies.
Example:
button {
=> appearance: button;
=> background-color: transparent;
=> padding: 0;
}
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#

25: When does DOM reflow occur?:
Reflow is the name of the web browser process for re-calculating the positions and geometries of elements in the document,
for the purpose of re-rendering part or all of the document.

Reflow occurs when:
Insert, remove or update an element in the DOM.
Modify content on the page, e.g. the text in an input box.
Move a DOM element.
Animate a DOM element.
Take measurements of an element such as offsetHeight or getComputedStyle.
Change a CSS style.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------# 28. Can you name the four types of @media properties?
The four types of @media properties are?:

All → It’s the default property. Used for all media-type devices.
Screen → Used for computer screen, mobile screen.
Print → Used for printers.
Speech → Used for screen readers.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#

How do I restore the default value of a property?:
The keyword initial can be used to reset it to its default value.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#

What do CSS Custom properties variables mean?:
Custom properties (sometimes referred to as CSS variables or cascading variables) are defined by users that contain specific values to be reused
throughout a document. The value is set using -- notion. And the values are accessed using the var() function.
Example:
:root {
=> --main-bg-color: brown
}

.one {
=> color: white;
=> background-color· var (--main-bg-color);
=> margin: l0px,
=> width: 50px,
=> height: 5Opx;
=> display: inline-block;
}
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#

What is the difference between CSS variables and preprocessor(SASS, LESS, Stylus) variables?:
CSS variables can be used without the need for a preprocessor. Currently, all the major browsers support the CSS variables.
CSS variable cascade. But the preprocessor variables don’t cascade.
CSS variable can be accessed and manipulated in javascript.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#

How does the absolute positioning work?:
Absolute positioning is a very powerful positioning mechanism that allows users to place any element wherever they want in an exact location.
The CSS properties right, left, top, bottom and define the exact locations where you need to place the element. In absolute positioning,
the following points need to be considered:

=> The element to which the absolute positioning is applied is removed from the normal workflow of the HTML document.
=> The HTML layout does not create any space for that element in its page layout.
=> The element is positioned relative to the closest positioned ancestor. If no such ancestor is present, then the element is placed relative to the initial container block.
=> The final position of the element is determined based on values provided to the top, right, left, bottom.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#

What do you have to do to automatically number the heading values of sections and categories?:
We can use the concept of CSS counters. This lets us adjust the appearance of the content based on the location in a document. While using this,
we need to first initialize the value of the counter-reset property which is 0 by default. The same property is also used for changing the value
to any number that we need. Post initialization, the counter’s value can be incremented or decremented by using the counter-increment property.
The name of the counter cannot be CSS keywords like “none”, “initial”, “inherit” etc. If the CSS keywords are used, then the declaration would
be ignored.

Consider an example as shown below:

body {
counter-reset: header; /_ define counter named 'header' whose initial value is 0 by default _/
}

h2::before {
counter-increment: header; /_ The value of header counter by 1._/
content: "Header " counter(header) ": "; /_ To display word Header and the value of the counter with colon before it._/
}

Here, we are trying to achieve auto count increment and display feature for the h2 tag. Wherever we use h2 tag,
the content will be prefixed by "Header 1 : " , "Header 2 : ", "Header 3 : " etc.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#

Why do we need to use clear property along with floats in CSS?:

The clear property along with floats is used for specifying which side of floating elements is not supposed to float. An element having clear property
ensures that the element does not move up adjacent to the float. But the element will be moved down past the float.

Let us understand this with the help of an example. We know that the floated objects do not add to the height of the objects where they reside.
Consider we have a div element with class “floated_div” within another div element with id “main_div”.

<html>
=><head>
=><style>
=>=>#main_div {
=>=>=> width: 400px;
=>=>=> margin: 10px auto;
=>=>=> border: 4px solid #cccccc;
=>=>=> padding: 5px;
=>=>}

=>=>.floated_div {
=>=>=> float: left;
=>=>=> width: 50px;
=>=>=> height: 50px;
=>=>=> border: 2px solid #990000;
=>=>=> margin: 10px;
=>=>}
=></style>
=></head>
=><body>
=>=><div id="main_div">
=>=>=> <p>Clear Float Demo</p>
=>=>=> <div class="floated_div"></div>
=>=>=> <div class="floated_div"></div>
=>=>=> <div class="floated_div"></div>
=>=>=> <div class="floated_div"></div>
=>=>=> <div class="floated_div"></div>
=>=></div>
=></body>

</html>

<img src="https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/001/640/original/clear_property__1.png?1636647944" alt="clear_property__1.png">

The result of this code would be as shown below. We see that the squares that are expected to be within dev are not within
the main parent div. How do we fix this?

<html>
=> <head>
=> <style>
=> => #main_div {
=> => =>  width: 400px;
=> => =>  margin: 10px auto;
=> => =>  border: 4px solid #cccccc;
=> => =>  padding: 5px;
=> => }

=> => .floated_div {
=> => => float: left;
=> => => width: 50px;
=> => => height: 50px;
=> => => border: 2px solid #990000;
=> => => margin: 10px;
=> => }
=> </style>
=> </head>
=> <body>
=> => <div id="main_div">
=> => => <p>Clear Float Demo</p>
=> => =>
=> => => <div class="floated_div"></div>
=> => => <div class="floated_div"></div>
=> => => <div class="floated_div"></div>
=> => => <div class="floated_div"></div>
=> => => <div class="floated_div"></div>
=> => => <div style="clear:both"></div> !-- Adding this fixed the issue -->
=> => </div>
=> </body>

</html>

<img src="https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/001/641/original/clear_property__2.png?1636647945" alt="clear_property__2.png">
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
