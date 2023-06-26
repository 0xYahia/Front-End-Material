Body in HTML split into 8 parts:
Heading - Text - Link - List - Table - Image - Form - Objects
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
HTMl Headings:
HTML headings are defined with the <h1> to <h6> tags. <h1> defines the most important heading. <h6> defines the least important heading.
heading tags are block element
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
why i can't put block element inside inline element vice versa?:
Block-level elements are elements that create a block of content on the web page, taking up the full width of their container element.
Some examples of block-level elements include <div>, <p>, <h1>-<h6>, <ul>, <ol>, <table>, and many others.

Inline elements, on the other hand, are elements that do not create a block of content but instead flow within the surrounding text.
Examples of inline elements include <a>, <span>, <img>, <strong>, and others.

When it comes to nesting HTML elements, it is generally recommended to follow the rules of the HTML specification. According to the specification,
block-level elements cannot be placed inside inline elements. This is because the nature of block-level elements conflicts with the nature of inline elements.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
what different between p element and div element in HTML?:
In HTML, both the <p> and <div> elements are used to group content together, but they serve different purposes.
The <p> element is used to represent a paragraph of text. It is a block-level element, which means that it takes up the full width of its parent element and creates
a new line before and after the element. The <p> element is typically used to separate blocks of text and to give them some structure.

On the other hand, the <div> element is a generic container element that is used to group related content together. It is also a block-level element,
but unlike the <p> element, it does not have any semantic meaning. The <div> element is typically used to create a container for a group of elements
and to apply styles to that container.

In summary: the <p> element is used to represent a paragraph of text, while the <div> element is used as a generic container to group related content together.

#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
why i can't use span element to center text?:
The <span> element is an inline-level element, which means it is designed to flow with the surrounding text and not create a block of content on its own.
It does not have any inherent layout properties to center text.

However, you can use CSS to center text within a <span> element or any other inline-level element. To center text horizontally, you can use the text-align property and set it to center
like this:

<span style="text-align: center;">Centered Text</span>
This will center the text within the <span> element. Note that this only works for horizontally centering text. If you want to center an inline-level element vertically,
you can use the vertical-align property.

Alternatively, if you want to center a block-level element such as a <div> or <p> element, you can use the margin property with a value of auto on the left and right sides, like this:

<div style="margin: 0 auto;">Centered Text</div>

#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
what different between source in audio tag and source in element?:

Both the <source> element used in the <audio> tag and the <source> element used in the <picture> or <video> tag serve a similar purpose,
which is to provide alternative content to be displayed or played depending on certain conditions such as screen size, browser support,
or media format support. However, the differences lie in how they are used and what content they provide.
In the case of the <audio> tag, the <source> element is used to provide alternative audio files in different formats or bitrates,
to ensure maximum compatibility with different web browsers and devices. The browser will automatically select and play the first compatible format that it finds.

Here is an example of how the <audio> tag with the <source> element can be used to provide alternative audio files:

<audio controls>
  <source src="audio.ogg" type="audio/ogg">
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.wav" type="audio/wav">
  Your browser does not support the audio tag.
</audio>

In this example: the <audio> tag includes three <source> elements, each with a different audio file format (Ogg Vorbis, MP3, and WAV).
The browser will automatically select and play the first compatible format that it finds.

In the case of the <picture> or <video> tags, the <source> element is used to provide alternative image or video files in different resolutions, sizes, or formats.
This ensures that the browser can choose the best-suited file based on the device and browser capabilities.

Here is an example of how the <picture> tag with the <source> element can be used to provide alternative image files:

<picture>
  <source media="(max-width: 480px)" srcset="image-small.jpg">
  <source media="(max-width: 768px)" srcset="image-medium.jpg">
  <source media="(min-width: 769px)" srcset="image-large.jpg">
  <img src="image-default.jpg" alt="Image">
</picture>
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
why should put label after the element not before it in HTM?:

In summary: it is recommended to place the <label> element after the form element it is associated with, or wrap the form element with the <label> element,
to provide better accessibility and user experience.

<label>
  Username:
  <input type="text" id="username" name="username">
</label>

#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Aria => Accessibility Rich internet Applications:

it's a term for converting ordinary elements to be like semantic element by some name like:

role => checkbox => to convert div to be checkbox input
tabindex => to access div element by clicking on tab
arial-lable dby => like for in input to attach div with id in label

#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Types of lists in HTML:

1: unorderd list =>

<ul type="circle, square">
<li>list item</li>
</ul>

2: ordered list =>

<ul type="1, i, a , A, I">
<li>list item</li>
</ul>

3: definition list => <dt>definition title</dt> & <dd>definition definition<dd/>

#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Tables:
tables structure:

  <table>
    <caption>text before table</caption>
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
      </tr>
    </tbody>
    <tfooter>
      <tr>
        <td></td>
        <td></td>
      </tr>
    </tfooter>
  </table>

colspan: it's attribute used to merge to cells in the same row
rowspan: it's attribute used to merge to cells in the same column
align: attribute used to center text horizontal
valign: attribute used to center text vertical
cellpadding: attribute used to make spacing inside the cell between border and the content like padding
cellspacing: attribute used to make spacing outside the cell between the cell and another cell like margin
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Forms overview:
types of forms is 12 type:
inputs and this is 10 type:
( text- password - hidden-checkbox - radio button- button - submit - reset - image button - file loader)

and there another two types:
(text area - dropdown list)

Note: input should take name attribute to send data via url or to database

input hidden to send data to backend without user can see it

Note: best practice should be there one submit button and reset button like <h1>
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Body Attribute:

bgcolor: to change background color
background: take image
link: "green" to make link color green by default
alink: "yellow" to make link color yellow when it active
vlink: "red" to make link color red when it visited
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Doctype and Head:
Doctype:

<!DOCTYPE> declaration is used to specify the version of HTML that the web page is written in. The <!DOCTYPE> declaration is an instruction to the web browser about

what version of HTML the page is written in, and it is placed at the very beginning of an HTML document, before the <html> tag.

Head:
contain a set of tags like

<title> <meta> <script> <style> - <link> - <base>

<title> => only tag show in the page

<meta> => to give a little description of the page because (SEO)
<meta name="author" content="yahia">
<meta name="description" content="this site to bla bla bla">
<meta name="keyword" content="javascript programming web frontend">
<link> => to link to an external css file
OR => to change my page icon in tab in browser
#--------------------------------------------------------------------------------------------------------------------------#
What Bidirectional communications?:
=> Transmitting data in both directions, client to server and server to client but not at the same time
=> This provides the ability to enabler real-time connection between client and server with TCP connection
#--------------------------------------------------------------------------------------------------------------------------#
Before websocket using:
Asynchronous events using standard HTTP modal:
=> The client send poll request periodically for new content.
-> This is known as HTTP Short Polling.
=> A lot of unnecessary requests and responses.
=> Huge bandwidth consumption.
=> Affects the server performance and responsiveness.
#--------------------------------------------------------------------------------------------------------------------------#
then become using Server-Push Mechanism:
=> A mechanism enables the server to send updates to the client, without waiting for pool request, avoid huge latency.
=> They implemented a lot of Server-Push Mechanisms.
=> HTTP Long Poll and HTTP Stream

HTTP Long Polling:
=> Server hold open the request
=> Reply only to request with events
=> Reduce latency

HTTP Poling Life Cycle:
1: Client sends long poll request(initial request)
2: Server holds the request until an update is available or timeout
3: If there is an update, the server sends the response
4: Client sends new long poll request

=> and this steps will reply again
#--------------------------------------------------------------------------------------------------------------------------#
HTTP Long Polling Issues:
=> Transferred data maybe larger than actual data
=> Packet loss
=> Frequent opening and closing TCP connection
#--------------------------------------------------------------------------------------------------------------------------#
Still bad:
=> Long and short Polling, make the server vulnerable to DOS attack due to continuously opening and closing the connection.
=> Client had to maintain mapping from the outgoing connection to the incoming connection.
=> Complex
#--------------------------------------------------------------------------------------------------------------------------#
Issues conclusion:
=> Multiple TCP connection for each client.
=> Transferred Data in headers is bigger than actual data.
=> Mapping the outgoing to incoming connections.
=> DOD Attack is possible.
=> HTTP is not meant to be used for bidirectional.
#--------------------------------------------------------------------------------------------------------------------------#
Bidirectional communications with single TCP connection:
=> WebSocket Protocol Introduction
=> Opening Handshaking
=> Data Framing
=> Sending and Receiving data
=> Close handshaking
#--------------------------------------------------------------------------------------------------------------------------#
WebSocket Protocol Features:
=> This protocol is based on trustship using handshaking.
=> Does not rely on long polling and XMLhttpRequest
=> Improved security due to data framing

WebSocket protocol overview:
=> This protocol deprecates the existing bidirectional communitions (e.g. HTTP Polling) which use HTTP as transport layer.
=> This protocol is intended to run on port 80 and 443.
=> Using single TCP connection

WebSocket protocol introduction:
=> Designed to be frame-based.
=> Supports Unicode text and binary frames.
=> WebSocket is a layer on top of TCP.
=> Multiple services, host names on one IP address
=> WebSocket Limitations with SMTP and HTTP
=> Independent TCP-Based Protocol.

Opening Handshake Requirements:
=> Must be a value HTTP request.
=> Request must be GET, with at least version HTTP/1.1
=> Must specify the port number in "Host" header if not using the default port.
=> Request must include |Upgrade| with value WebSocket.
=> Request must include |Connection| with value Upgrade.
=> Request must include |Sec-WebSocket-Key| with a random foreach new connection value of 16-byte encoded in base64
=> Request must include |Origin|: "https://www.example.com:80"
=> Request must include |Sec-WebSocket-Version|: with value of 13
=> Optional headers |Sec-WebSocket-Protocols & Extensions|
=> May include other header such as Authorizations, Cookies, etc..1

WebSocket main parts:
=> Handshake
=> Data Transfer

Base Framing Protocol:
FIN: Indicates the last fragment in the message, a big message may ger fragmented (multiplexing)
RSV1, RSV2, RSV3: must be 0 unless |extension| has meaning for non zero value, if value is not 0 and there is no meaning in negotiation, fail the endpoint.
Opcode: Defines the interpretation of the payload data, if an unknown opcode is received, the receiving endpoint must fail the connection.
Mask: indicates whether the receiving payload data is masked or note, if it masked the value must be set to 1, all client to server message
must be masked.
Masking-Key: this field is exist if mask has value of 1, mask the data payload, it is 32-bit value chosen at random value by client
when preparing masked frame, must be unpredictable, new and fresh key, the mask does not affect the length of the data

Handshake Example:
=> Client send handshake request with |Sec-WebSocket-Key|: RofDWCBDTDNOTJmPPbsd3Q==
=> Add random additional key (e.g. GUID for clarification): RofDWCBDTDNOTJmPPbsd3Q==9d64f4ed-309b-4de0-9b-4de0-950b-ce4a4980d154
=> Hash that value produces: DC-59-B0-23-35-A8-AA-18-33-1D-4B2D-7A-7C-69-BC-47-96-F7-CD
=> Encode that value produces: REMtNTKtQjAtMjMtMzUtQThtQUEtMThtMzMtMUQtNELtMKQtN0EtN.MtNjKtQKMtNDctOTYtRjctQ0Q=
=> Append that value to |Sec-WebSocket-Accept| header in the response
=> Status code of that response is 101 (Switching protocols)

=> Some Notes:
=> Opening handshake in compatible with HTTP Servers
=> Origin Header is useful to protect against cross-origin.
=> Server use the client handshake to prevent receiving non-handshake request
=> WebSocket heads format |Sec-WebSocket-xxxx|

URI Scheme WebSocket Example:
wss:// for encrypted TLS connection
ws:// for unencrypted TLS connection
Example: "wss://alive.github.com"

Data Framing:
=> Data should be masked every time from client with new key
=> Server close connection if data received is not masked
=> Server does not mask the data
=> Client close connection if received data is masked

Fragmentation:
=> If message size in unknown...?
=> Split huge message into small pieces.
=> Control Frames cannot be fragmented
=> Received fragments must be sent in the same order.

Control Frames:
=> Close
=> Ping
=> Pong

Sending Data:
=> Is connection open?
=> Is there any opening connection before?
=> Encapsulate and Frame the data.

Closing Handshake:
=> Close control frame
#--------------------------------------------------------------------------------------------------------------------------#

# Reference

## MDN

## HTML Quick

## W3 Schools

## HTML Reference
