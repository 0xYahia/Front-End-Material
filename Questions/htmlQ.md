What is HTML and is it an abbreviation for?:
HTML stands for Hypertext Markup Language. It is a standardized markup language used for creating the structure and presenting the content of web pages.
HTML is the core language of the World Wide Web and is used alongside CSS (Cascading Style Sheets) and JavaScript to build and design websites.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
why HTML is hyper?:
HTML is referred to as "hypertext" because it allows for the creation and linking of text-based content through hyperlinks. The term "hypertext" was coined by Ted Nelson
in the 1960s to describe a system of interconnected documents where users could navigate between them by clicking on links embedded within the text.

In HTML, hyperlinks are created using the <a> (anchor) element. These links allow users to navigate from one web page to another or to different sections within the same page.
When a user clicks on a hyperlink, the browser follows the specified URL and retrieves the linked content.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Why semantic elements are important?:
1: Meaning and Accessibility: Semantic elements provide meaning to the structure of a web page. They convey the intended purpose and significance of the content to both humans and machines.
By using semantic elements, you make your code more meaningful and easier to understand, not only for other developers but also for assistive technologies like screen readers.
This improves the accessibility of your website, making it more inclusive and usable for people with disabilities.

2: Search Engine Optimization (SEO): Semantic markup helps search engines understand the content and context of your web page. When search engines crawl and index your site,
they rely on semantic cues to determine the relevance and ranking of your content. By using semantic elements appropriately,
you can improve your website's visibility and search engine rankings, making it easier for users to find your content.

3: Maintainability and Scalability: Semantic elements contribute to the overall structure and organization of your HTML code. They provide a clear and logical structure,
making it easier to navigate and maintain your codebase. Semantic markup also improves code scalability,
as it allows for easier integration of new features and modifications without affecting the underlying structure of the document.

4: Future-proofing and Compatibility: Semantic elements are designed to be backward and forward compatible. They are part of the HTML standard and are meant to be supported across different browsers and devices.
By using semantic elements, you ensure that your code will continue to function properly as web technologies evolve, and new features and elements are introduced.

5: Consistency and Styling: Semantic elements can help maintain consistent styling and layout across different web pages. They provide a clear structure for applying CSS styles
and allow developers and designers to target specific elements easily. This leads to more efficient styling and better maintainability of the design.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Why <!DOCTYPE> is important?:
The <!DOCTYPE> declaration is an important element at the beginning of an HTML document. It serves the purpose of informing the browser about the version of HTML being used and helps the browser understand
how to interpret and render the document.

Here are some key reasons why the <!DOCTYPE> declaration is important:

Document Type Definition: The <!DOCTYPE> declaration provides the Document Type Definition (DTD) or the reference to the schema that defines the rules and structure of the HTML document.
It specifies which version of HTML (or XHTML) is being used and determines the set of elements, attributes, and rules that the browser should follow while parsing and rendering the document.

Browser Rendering Mode: Different browsers have different rendering modes to handle the variations in HTML syntax and rendering behavior.
The <!DOCTYPE> declaration helps trigger the appropriate rendering mode for the browser, ensuring consistent rendering across different browser platforms.

Standard Compliance: The <!DOCTYPE> declaration ensures that the HTML document adheres to the standards set by the W3C (World Wide Web Consortium).
It helps promote the use of valid and well-formed HTML code, making the document more robust, predictable, and compatible with different browsers and devices.

Quirks Mode vs. Standards Mode: In the absence of a <!DOCTYPE> declaration or with an incorrect declaration, browsers can enter a quirks mode where they attempt to render the page based on older,
non-standardized rendering rules. This can lead to inconsistent rendering, layout issues, and compatibility problems.
Specifying the correct <!DOCTYPE> declaration ensures that the browser renders the page in standards mode, following the modern standards and specifications.

Validation and Error Handling: The <!DOCTYPE> declaration is essential for validating the HTML document against the specified DTD or schema.
It enables validation tools and services to verify the document's syntax, structure, and adherence to the chosen HTML standard.
This helps in detecting and correcting errors, improving code quality, and ensuring cross-browser compatibility.

In summary: the <!DOCTYPE> declaration plays a crucial role in setting the HTML standard, triggering the appropriate rendering mode, ensuring compliance,
and promoting consistent rendering across browsers. It helps browsers interpret and display HTML documents correctly, reducing compatibility issues and facilitating adherence to web standards.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Is doctype case sensitive?:

No, the <!DOCTYPE> declaration is not case sensitive. The HTML specification specifies that the <!DOCTYPE> declaration is case-insensitive,
meaning that it can be written in uppercase, lowercase, or a mixture of both.

For example, the following declarations are all valid and equivalent:

<!DOCTYPE html>
<!doctype html>
<!DOCTYPE HTML>

The choice of casing is a matter of personal preference or coding style. It does not affect the interpretation or functionality of the <!DOCTYPE> declaration or the HTML document itself.
The browser will recognize and process the <!DOCTYPE> declaration correctly regardless of the casing used.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
what types of elements are in HTML?:

There block element, inline element, inline block element and this types divided into types based on their functionality and purpose. Here are some of the commonly used types of elements:

1: Structural Elements: These elements are used to define the overall structure and organization of the document. Examples include <html>, <head>, <body>, <header>, <nav>, <main>, <footer>, and <section>.

2: Text Elements: These elements are used to define and format text content within the document. Examples include headings (<h1> to <h6>), paragraphs (<p>), links (<a>), spans (<span>),
lists (<ul>, <ol>, <li>), and blockquotes (<blockquote>).

3: Semantic Elements: These elements provide semantic meaning to the content, aiding in accessibility and search engine optimization. Examples include <article>, <aside>,

<details>, <figcaption>, <figure>, <time>, <mark>, <em>, <strong>, and <cite>.

4: Media Elements: These elements are used to embed and display various types of media content. Examples include images (<img>), videos (<video>), audio (<audio>), and embedded content (<iframe>).

5: Form Elements: These elements are used to create interactive forms for user input and data submission. Examples include text inputs (<input type="text">), checkboxes (<input type="checkbox">),
radio buttons (<input type="radio">), select menus (<select>), text areas (<textarea>), and buttons (<button>).

6: Table Elements: These elements are used to create structured tables. Examples include <table>, <tr> (table row), <th> (table header cell), and <td> (table data cell).

7: Meta Elements: These elements provide metadata and information about the document. Examples include <meta> (for specifying character encoding, viewport settings, etc.),

<title> (document title), and <link> (for external stylesheets or resources).

These are just a few examples of the types of elements in HTML. HTML provides a wide range of elements to structure and present content in various ways,
and developers can also create their own custom elements using modern HTML features like Custom Elements.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
What is the root of the document?:
The root of an HTML document is the <html> element. It serves as the highest-level container for the entire HTML document and contains all the other elements within it.

The <html> element is typically placed at the beginning of the document and acts as a parent element to the <head> and <body> elements.
It defines the root of the document tree and establishes the basic structure of the HTML document.

Here's an example of the basic structure of an HTML document:

html
Copy code

<!DOCTYPE html>
<html>
..<head>
....<!-- Contains metadata, CSS styles, scripts, etc. -->
..</head>
..<body>
....<!-- Contains the visible content of the web page -->
..</body>
</html>

The <html> element encapsulates the entire document, and its opening and closing tags enclose the <head> and <body> sections. The <head> section contains metadata,
such as the document's title, links to external resources, and scripts. The <body> section contains the visible content of the web page, including text, images, links,
forms, and other elements.

The root <html> element acts as a container that provides the overall structure and context for the document, allowing the browser to properly interpret and render the HTML content.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
What is the meta-Tag that makes media query work?:
What is the meaning of meta viewport?:
The <meta> tag that enables media queries in CSS is the viewport meta tag. The viewport meta tag provides instructions to the browser on how to control the dimensions and scaling of the viewport,
which affects how the webpage is displayed on different devices.

To enable media queries, you typically include the following viewport meta tag in the <head> section of your HTML document:

html
Copy code

<meta name="viewport" content="width=device-width, initial-scale=1.0">
Let's break down the attributes of the viewport meta tag:

name="viewport": Specifies that this meta tag is related to the viewport settings.
content="width=device-width, initial-scale=1.0": Sets the initial width of the viewport to the device width and establishes an initial zoom level of 1.0.
By including this meta tag, you're informing the browser that the webpage should adapt to the width of the device's screen and prevent automatic zooming or scaling.
This is crucial for responsive web design and using media queries effectively.

With media queries, you can define different CSS styles based on the characteristics of the user's device, such as screen width, height, orientation, and resolution.
By combining media queries with the viewport meta tag, you can create responsive designs that adapt to various screen sizes and optimize the user experience on different devices.

It's worth noting that media queries can be used even without the viewport meta tag, but including it helps ensure that the styles are applied correctly based on the device's viewport dimensions.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
What is have highest priority (id, class) / id or inline style?:

In CSS, the order of priority from highest to lowest is:

1: Inline styles: Styles defined directly on an HTML element using the style attribute. Inline styles have the highest priority, and their styles will override any other styles applied to the element.

2: ID selectors: Styles applied to an element using its unique id attribute. ID selectors have higher specificity than class selectors and will override class styles.

3: Class selectors: Styles applied to elements using class names. Class selectors have lower specificity than ID selectors and will be overridden by ID styles.

4: Element selectors: Styles applied to specific HTML elements. They have the lowest specificity and will be overridden by ID and class styles.

5: To summarize: inline styles take precedence over ID styles, and ID styles take precedence over class styles. Element selectors have the lowest priority.

However, it's important to note that inline styles should be used sparingly and only when necessary, as they can make the code harder to maintain and override styles
from external stylesheets. It's generally recommended to use external stylesheets and apply styles through classes and IDs for better organization and maintainability of CSS code.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Why does HTML5 exist?:
HTML5 was developed to address several key goals and address the evolving needs of the modern web:

1: Improved Semantics: HTML5 introduced new semantic elements that provide more meaningful structure to web content. These elements, such as <header>, <nav>, <section>, <article>, and <footer>,
help developers and search engines better understand the purpose and organization of different parts of a web page.

2: Multimedia Support: HTML5 expanded native support for multimedia elements, including <video> and <audio>, reducing the reliance on third-party plugins like Adobe Flash. This made it easier to embed
and play media content directly within web pages, improving accessibility and reducing compatibility issues.

3: Richer Forms and Input Controls: HTML5 introduced new form input types (<input type="email">, <input type="date">, etc.) and attributes that allow for better user input validation
and provide more intuitive user experiences. This includes features like built-in date pickers, email validation, and input pattern matching.

4: Canvas and Graphics: HTML5 introduced the <canvas> element, which provides a drawing surface for rendering dynamic graphics, animations, and interactive visualizations directly within the web page.
This opened up new possibilities for creating rich graphical experiences without relying on external plugins or technologies.

5: Offline and Storage Capabilities: HTML5 introduced client-side storage options such as local storage and session storage, allowing web applications to store data locally on the user's device.
This enabled the development of offline-capable web applications and improved performance by reducing the need for frequent server requests.

6: Cross-Platform Compatibility: HTML5 aimed to provide a consistent standard for web development across different devices and platforms. It promoted the use of open web technologies
and reduced the reliance on proprietary technologies like Flash, Silverlight, and Java applets, making it easier to develop web applications that work across a wide range of devices and browsers.

7: Mobile-Friendly Design: HTML5 incorporated features and APIs to support the growing trend of mobile web browsing. It introduced responsive design principles, the viewport meta tag,
and media queries, making it easier to create websites that adapt and perform well on different screen sizes and devices.

Overall: HTML5 was developed to enhance the capabilities of HTML, address the shortcomings of older HTML versions, and support the evolving needs of web development, including improved semantics,
multimedia support, rich forms, graphics, offline capabilities, cross-platform compatibility, and mobile-friendly design.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Are the HTML tags and elements the same thing?:

No. HTML elements are defined by a starting tag, may contain some content and a closing tag.For example, <h1>Heading 1</h1> is a HTML element
but just <h1> is a starting tag and </h1> is a closing tag.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#

Define multipart form data?

Multi-part form data is a type of encoding that allows files to be sent as a part of a POST request.
It is used when uploading files to a server.

OR:

Multipart form data is one of the values of the enctype attribute. It is used to send the file data to the server-side
for processing. The other valid values of the enctype attribute are text/plain and application/x-www-form-urlencoded.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#

How to optimize the website assets loading?:

To optimize website load time we need to optimize its asset loading and for that:

- CDN hosting: A CDN or content delivery network is geographically distributed servers to help reduce latency.
- File compression: This is a method that helps to reduce the size of an asset to reduce the data transfer
- File concatenation: This reduces the number of HTTP calls
- Minify scripts: This reduces the overall file size of js and CSS files
- Parallel downloads: Hosting assets in multiple subdomains can help to bypass the download limit of 6 assets per domain of all modern browsers. This can be configured but most general users never modify these settings.
- Lazy Loading: Instead of loading all the assets at once, the non-critical assets can be loaded on a need basis.

#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#

What are the different kinds of Doctype available?:

The three kinds of Doctype which are available:

- Strict Doctype:
- Transitional Doctype:
- Frameset Doctype:

#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#

Please explain how to indicate the character set being used by a document in HTML?:

The character set is defined in <meta> tag inside <head> element.

<!DOCTYPE html>
<html>
 <head>
   <meta charset="UTF-8">
   ...
   ...
 </head>
 ...
</html>

#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#

21: In how many ways can we position an HTML element? Or what are the permissible values of the position attribute?:

There are mainly 7 values of position attribute that can be used to position an HTML element:

static: Default value. Here the element is positioned according to the normal flow of the document.
absolute: Here the element is positioned relative to its parent element. The final position is determined by the values of left, right, top, bottom.
fixed: This is similar to absolute except here the elements are positioned relative to the <html> element.
relative: Here the element is positioned according to the normal flow of the document and positioned relative to its original/ normal position.
initial: This resets the property to its default value.
inherit: Here the element inherits or takes the property of its parent.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
22: In how many ways you can display HTML elements?:

- inline: Using this we can display any block-level element as an inline element. The height and width attribute values of the element will not affect.
- block: using this, we can display any inline element as a block-level element.
- inline-block: This property is similar to inline, except by using the display as inline-block, we can actually format the element using height and width values.
- flex: It displays the container and element as a flexible structure. It follows flexbox property.
- inline-flex: It displays the flex container as an inline element while its content follows the flexbox properties.
- grid: It displays the HTML elements as a grid container.
- none: Using this property we can hide the HTML element.

Below are some of the display types which are rarely used:

1- table
2- inline-table
3- table-cell
4- table-column
5- table-row
6- inline-grid
7- list-item
8- inherit
9- initial
10- table-caption

#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#

24: How to specify the link in HTML and explain the target attribute?:
HTML provides a hyperlink - <a> tag to specify the links in a webpage. The ‘href’ attribute is used to specify the link and the ‘target’ attribute is used to specify, where do we want to open the linked document. The ‘target’ attribute can have the following values:

1_self: This is a default value. It opens the document in the same window or tab as it was clicked.
2_blank: It opens the document in a new window or tab.
3_parent: This value is used when the HTML page containing the link is nested within frames. It tells the browser to open the linked page in the immediate parent frame of the current frame.
4_top: This value is similar to \_parent, but it instructs the browser to open the linked page in the full, top-level browsing context, removing all frames if necessary.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
26: Difference between link tag <link> and anchor tag <a>?
The anchor tag <a> is used to create a hyperlink to another webpage or to a certain part of the webpage
and these links are clickable, whereas, link tag <link> defines a link between a document and an external resource and these are not clickable.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
31: What are some of the advantages of HTML5 over its previous versions?:
Some advantages of HTML5 are:

- It has Multimedia Support.
- It has the capabilities to store offline data using SQL databases and application cache.
- Javascript can be run in the background.
- HTML5 also allows users to draw various shapes like rectangles, circles, triangles, etc.
- Included new Semantic tags and form control tags.

#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
32: What are the new form elements which are introduced in HTML5?:
Some of the new form elements which are introduced in HTML5 are:

- color
- date
- datetime
- datetime-local
- email
- month
- number
- range
- search
- tel
- time
- url
- week

#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------# 34. What is the difference between <figure> tag and <img> tag?:

The <figure> tag specifies the self-contained content, like diagrams, images, code snippets, etc., <figure> tag is used to semantically organize the contents of an image like image, image caption, etc.,
whereas the <img> tag is used to embed the picture in the HTML5 document.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------# 35. How to specify the metadata in HTML5?:
To specify we can use <meta> tag which is a void tag,i.e., it does not have a closing tag.
Some of the attributes used with meta tags are name, content, http-equiv, etc. The below image tells how to specify the metadata.

<html>
=> <head>
=> <meta charset="UTF-8">
=> <meta name="description" content="Free Web tutorials">
=> <meta name="keywords" content="HTML,CSS,XML,JavaScript">
=> <meta name="author" content="John Doe">
=> <meta name="viewport" content="width=device-width, initial-scale=1.0">
=> <meta http-equiv="refresh" content="10">
=> <meta http-equiv="cookie" content="key1=value1; key2=value2">
=> </head>
=> <body>
=> ...
=> ...
=> </body>
</html>

- using meta tag we can define the keywords, description, author, and other metadata.
  which can used by the search engines while indexing the webpage for searching.

- using refresh and cookie value of the attribute http-equiv in meta tah will store the data
  in cookie and will refresh the page in the 10 second as specified in the content value

#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------# 36. Is the <datalist> tag and <select> tag same?:
No. The <datalist> tag and <select> tag are different.
In the case of <select> tag a user will have to choose from a list of options, whereas
<datalist> when used along with the <input> tag provides a suggestion that the user selects
one of the options given or can enter some entirely different value.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------# 37. Define Image Map?:
Image Map lets a developer map/link different parts of images with the different web pages.
It can be achieved by the <map> tag in HTML5, using which we can link images with clickable areas.

Example:
<img src=”image_url” , usemap=”#workspace” />
<map  name=”workspace”>
=> <area shape=”rect” coords=”34, 44, 270, 350” , href=”xyz.html” />
=> <area shape=”rect” coords=”10, 120, 250, 360” , href=”xyz.html” />
</map>
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------# 40. What is the difference between <meter> tag and <progress> tag?:
<progress> tag should be used when we want to show the completion progress of a task,
whereas if we just want a scalar measurement within a known range or fraction value. Also,
we can specify multiple extra attributes for <meter> tags like ‘form’, ‘low’, ‘high’, ‘min’, etc.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------# 41. Is drag and drop possible using HTML5 and how?:
Yes, in HTML5 we can drag and drop an element. This can be achieved using the drag and drop-related
events to be used with the element which we want to drag and drop.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------# 42. Difference between SVG and Canvas HTML5 element?:
SVG:
-SVG is a vector based i.e., composed of shapes.
-SVG works better with a larger surface.
-SVG can be modified using CSS and scripts.
-SVG is highly scalable. So we can print at high quality with high resolution.

Canvas:

- It is Raster based i.e., composed of pixels.
- Canvas works better with a smaller surface.
- Canvas can only be modified using scripts.
- It is less scalable.

#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
44- What are the significant goals of the HTML5 specification?:
These were the target area of the HTML5 specs:

- Introduction of new element tags to better structure the web page such as <header> tag.
- Forming a standard in cross-browser behavior and support for different devices and platforms
- Backward compatible with the older version HTML web pages
- Introduction of basic interactive elements without the dependency of plugins such as <video> tag instead of the flash plugin.

#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
45- Explain the concept of web storage in HTML5.:
This web storage helps in storing some of the static data in the local storage of the browser so that we do not need to fetch it from the server every time we need it. There is a size limit based on different browsers. This helps in decreasing the load time and a smooth user experience. There are two types of web storage that are used to store data locally in HTML5:

Local Storage: This helps in storing data that will be retained even though the user reopens the browser. It is stored for each webapp on different browsers.
Session Storage: This is used for one session only. After the user closes the browser this gets deleted.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
46- What is Microdata in HTML5?:
It is used to help extract data for site crawlers and search engines. It is basically a group of name-value pairs. The groups are called items, and each name-value pair is a property. Most of the search engines like Google, Microsoft, Yandex, etc follow schema.org vocabulary to extract this microdata.

<div itemscope itemtype="http://schema.org/SoftwareApplication">
 <span itemprop="name">Interviewbit Games</span> -
 REQUIRES <span itemprop="operatingSystem">ANDROID</span><br>
 <link itemprop="applicationCategory" href="http://schema.org/GameApplication"/>
 <div itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
RATING:
<span itemprop="ratingValue">4.6</span> (
<span itemprop="ratingCount">8864</span> ratings )
 </div>
 <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
Price: Rs.<span itemprop="price">1.00</span>
<meta itemprop="priceCurrency" content="INR" />
 </div>
</div>
itemid:  The unique, global identifier of an item.
itemprop:  Used to add properties to an item.
itemref:  Provides a list of element ids with additional properties.
itemscope:  It defines the scope of the itemtype associated with it.
itemtype:  Specifies the URL of the vocabulary that will be used to define itemprop.

The above example will be parsed by Google as:
<img src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/567/original/Microdata_in_HTML5.png?1625056809">
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
47: Which tag is used for representing the result of a calculation? Explain its attributes.:
The <output> tag is used for representing the result of a calculation. It has the following attributes:

for - It defines the relationship between the elements used in calculation and result.
form - This is used to define the form the output element belongs to.
name - The name of the output element.

<form oninput = "result.value=parseInt(n1.value)+parseInt(n2.value)">
     <input type = "number" name = "n1" value = "1" /> +
     <input type = "number" name = "n2" value = "2" /><br />
     The output is: <output name = "result"></output>
</form>
The above example looks like
<img src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/568/original/html-output-tag.png?1625057113">
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
51: What are the New tags in Media Elements in HTML5?:
<audio>: Used for sounds, audio streams, or music, embed audio content without any additional plug-in.
<video>: Used for video streams, embed video content etc.
<source>: Used for multiple media resources in media elements, such as audio, video, etc.
<embed>: Used for an external application or embedded content.
<track>: Used for subtitles in the media elements such as video or audio.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
52: Why do you think the addition of drag-and-drop functionality in HTML5 is important? How will you make an image draggable in HTML5?:
The drag and drop functionality is a very intuitive way to select local files.
This is similar to what most of the OS have copy functionality thus making it very easy for the user
to comprehend. Before the native drag and drop API,
this was achievable by writing complex Javascript programming or external frameworks like jQuery.
To enable this functionality there is a draggable attribute in the <img> tag
and need to set ondrop and ondragover attribute to an eventhandler available in scripts.
Example:
<!DOCTYPE HTML>
<html>
 <head>
   <script>
     function allowDrop(ev) {
       ev.preventDefault();
     }
     function drop(ev) {
       ...
     }
   </script>
 </head>
 <body>
   ...
   <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)" style="border: 1px solid #aaaaaa; width:350px; height: 70px;"></div>
   <br>
   <img id="drag1" src="img_logo.gif" draggable="true" width="336" height="69">
    ...
 </body>
</html>
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
53: Why do we need the MathML element in HTML5?:
MathML stands for Mathematical Markup Language. It is used for displaying mathematical expressions
on web pages. For this <math> tag is used.
Search for example of MathML in HTML5:
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
54: What are the server-sent events in HTML5?:
The events pushed from the webserver to the browsers are called server-sent events.
DOM elements can be continuously updated using these events. This has a major advantage
over straight-up polling. In polling, there is a lot of overhead since every time it is establishing
an HTTP connection and tearing it down whereas, in server-sent events,
there is one long-lived HTTP connection. To use a server-sent event, <eventsource> element is used.
The src attribute of this element specifies the URL from which sends a data stream having the events.
Example:
<eventsource src = "/cgi-bin/myfile.cgi" />
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
55: What are Web Workers?""
These are added to bring parallelism and async capability. It runs in the background to do the computationally expensive tasks without yielding to make the page responsive. It is achieved by starting a separate thread for such tasks. These are not meant to perform UI operations. There are three types of web workers:

Dedicated Workers - These are workers that are utilized by a single script.
Shared Workers -These are workers that are utilized by multiple scripts running in different windows, IFrames, etc.
Service Workers - These act as proxy servers between web applications, the browser, and the network. Mostly used for push notifications and sync APIs.

Example:

<p>Count numbers: <output id="result"></output></p>
<button onclick="startWorker()">Start Worker</button>
<button onclick="stopWorker()">Stop Worker</button>
<script>
var w;
function startWorker() {
 if(typeof(Worker) !== "undefined") {
if(typeof(w) == "undefined") {
  w = new Worker("demo_workers.js");
}
w.onmessage = function(event) {
  document.getElementById("result").innerHTML = event.data;
};
 }
}
function stopWorker() {
 w.terminate();
 w = undefined;
}
</script>
<img src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/593/original/Artboard_2_2x.png?1625066337">
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
56: What is the usage of a novalidate attribute for the form tag that is introduced in HTML5?:
Its value is a boolean type that indicates whether or not the data being submitted
by the form will be validated beforehand. By making this false,
forms can be submitted without validation which helps users to resume later also.

<form action = "" method = "get" novalidate>
      Name:<br><input type="name" name="sname"><br>
    Doubt:<br><input type="number" name="doubt"><br>
      <input type="submit" value="Submit">
</form>
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
57: What are raster images and vector images?:
Raster Images: The raster image is defined by the arrangement of pixels in a grid with exactly what color the pixel should be. Few raster file formats include PNG(.png), JPEG(.jpg), etc.
Vector Images: The vector image is defined using algorithms with shape and path definitions that can be used to render the image on-screen written in a similar markup fashion. The file extension is .svg
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
58: How to support SVG in old browsers?:
To support old browsers instead of defining the resource of svg in src attribute of <img> tag, it should be defined in srcset attribute and in src the fallback png file should be defined.
Example:
<img src="circle.png" alt="circle" srcset="circle.svg">
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
59: What are different approaches to make an image responsive?:
Art direction: Using <picture> element the landscape image fully shown in desktop layout can be zoomed in with the main subject in focus for a portrait layout.
<picture>
 <source media="(min-width: 650px)" srcset="img_cup.jpg">
 <img src="img_marsh.jpg" style="width:auto;">
</picture>
Bigger Screen (>650px)
<img src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/579/original/Bigger_Screen_%28650px%29.png?1625061653">
For any other screen:
<img src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/580/original/For_any_other_screen.png?1625061654">

Resolution switching: Instead of zoom and crop the images can be scaled accordingly using vector graphics. Also, this can be further optimized to serve different pixel density screens as well.
For example SVG:

<svg width="100" height="100">
 <circle cx="50" cy="50" r="40"
 stroke="green" stroke-width="4" fill="yellow" />
</svg>
<img src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/581/original/Resolution_switching.png?1625061751">
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
60: What is a manifest file in HTML5?:
The manifest file is used to list down resources that can be cached.
Browsers use this information to make the web page load faster than the first time.
   are 3 sections in the manifest file

CACHE Manifest - Files needs to be cached
Network - File never to be cached, always need a network connection.
Fallback - Fallback files in case a page is inaccessible

CACHE MANIFEST:
2012-06-16 v1.0.0
/style.css
/logo.gif
/main.js
NETWORK:
login.php
FALLBACK:
/html/ /offline.html

<!DOCTYPE HTML>
<html manifest="tutorial.appcache">
...
...
</html>
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
61: What is the Geolocation API in HTML5?:
Geolocation API is used to share the physical location of the client with websites.
This helps in serving locale-based content and a unique experience to the user,
based on their location. This works with a new property of the global navigator object
and most of the modern browsers support this.
Example:
var geolocation = navigator.geolocation;
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
62: Write HTML5 code to demonstrate the use of Geolocation API:
<!DOCTYPE html>
<html>
  <body>
     <p>Click "try it" button to get your coordinates.</p>
     <button onclick="getLocation()">Try It</button>
     <p id="demo"></p>
     <script>
        var x = document.getElementById("demo");

        function getLocation() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else {
            x.innerHTML = "Geolocation functionality is not supported by this browser.";
          }
        }

        function showPosition(position) {
          x.innerHTML = "Latitude: " + position.coords.latitude +
          "<br>Longitude: " + position.coords.longitude;
        }
     </script>

  </body>
</html>

The above example asks for user permission for accessing the location data via geolocation API
and after clicking the button the coordinates of the physical location of the client get displayed.
<img src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/582/original/Geolocation_API.png?1625061752">
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
63: Explain Web Components and it’s usage:
These are used to create reusable custom elements which are very difficult in traditional HTML. It consists of three technologies:

Custom elements: These are JavaScript APIs that help in defining custom elements and their behavior.
Shadow DOM - These are JavaScript APIs that attach an encapsulated shadow DOM tree
to an element to keep the element’s features private and unaffected by other parts.
