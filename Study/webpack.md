Day 1:
What is semantic versioning?:
=> Semantic versioning is a versioning system which is used to manage the versions of the software.
Semantic versioning has three numbers:
1: Major: Major version is incremented when there is a breaking change in the software.
2: Minor: Minor version is incremented when additional features are added to the software.
3: Patch: Patch version is incremented when there is a bug fix in the software.

and we can use ^ symbol to update the minor and patch version of the software.
and we can use ~ symbol to update the patch version of the software.

"react": "16.8.6", this means that the major version is 16, minor version is 8 and patch version is 6.
"react": "^16.8.6", this means that the major exactly version is 16, minor version is minimum 8 and patch version is minimum 6.
"react": "~16.8.6", this means that the major exactly version is 16, minor version is exactly 8 and patch version is minimum 6.
"react": "16.8.x", this means that the major exactly version is 16, minor version is exactly 8 and patch is any version.
"react": "16.x.x", this means that the major exactly version is 16, minor is any version and patch is any version.
and i can use _ symbol to update the major, minor and patch version of the software.
"react": "_", this means that the major is any version, minor is any version and patch is any version.
and i can use more than symbol to update the major, minor and patch version of the software.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
What different between i write npm http-server . in cli and write http-server . in script in package.json file?:
=> npm http-server . in cli is used to run the http-server package which is installed globally
if it is'nt installed globally then it will give an error
=> http-server . in script in package.json file is used to run the http-server package which is installed locally
if it is'nt installed locally is used to run the http-server package which is installed globally
if it is'nt installed globally then it will give an error
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Why webpack is used?:
=> webpack is used to bundle the javascript files. to reduce the number of requests that are made to the server.
Modularity Limitations:
=> 1: Order of script tags is important. if i change the order of script tags then it will give an error.
=> 2: Number of script tags is important. if i add one more script tag then it will give an error.
=> 3: Number of requests to the server is important. if i add one more script tag then
it will make one more request to the server.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
What different between Number() and parseInt()?
=> Number() is used to convert a string to a number.
=> parseInt() is used to convert a string to a number. and if the string contains any character then it will return
the number before the character.

NOTE: unary plus operator + operator is used to convert a string to a number. like Number() function.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
webpack do three things:
1: bundle to reduce the number of requests that are made to the server. (one file)
2: minify to reduce the size of the files.
3: uglify to reduce the size of the bundle. and make the code unreadable. (make variable names short )
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
What different between File protocol and HTTP protocol?:
=> File protocol is used to run the files locally. (i can read the files outside my directory)
=> HTTP protocol is used to run the files on the server. (i can't read the files outside the server)
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
What is the difference between reload and hard reload?:
=> reload is used to reload the page.
=> hard reload is used to reload the page and clear the cache.
because the default behavior of the browser is to cache the files. (cash busting)
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
To override to configuration of the webpack:
=> 1: create a file named webpack.config.js
=> 2: export an object which contains the configuration of the webpack.
=> 3: run the webpack command in the cli.

Example:
module.exports = {
=> entry: './src/index.js', // one entry point and one output
OR Array of entry points:
=> entry: ['./src/index.js', './src/index2.js'], // more than one entry point and one output
OR Object of entry points:
=> entry: { main: './src/index.js', vendor: './src/index2.js' }, // more than one entry point and more than one output
=> output: {
=> => path: path.resolve(\_\_dirname, 'dist'),
=> => filename: 'bundle.js'
=> }
}
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
output in webpack: take absolute path not relative path.
to make the path absolute:
=> 1: import path from 'path'
=> 2: use path.resolve(\_\_dirname, 'dist') instead of dist
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
To control the name of the output file: if i have more than one entry point.
=> 1: use [name] in the filename.
this means that the name of the output file will be the name of the entry point.
=> 2: use [hash] in the filename.
this means that the name of the output file will be the hash of the file. and if i have more than one entry point then
the name of the output file will be the hash of the file which contains all the entry points. (smaller hash)
=> 3: use [chunkhash] in the filename.
this means that the name of the output file will be the hash of the file. and if i have more than one entry point then
the name of the output file will be the hash of the file depends on the content of the file. but each files from
the entry points will have the same name
=> 4: use [id] in the filename.
=> 5: use [query] in the filename.
=> 6: use [contenthash] in the filename.
this means that the name of the output file will be the hash of the file. and if i have more than one entry point then
the name of the output file will be the hash of the file depends on the content of the file. but each files from
the entry points will have different name

#-------------------------------------------------------------------------------------------------------------------------------------------------------#
webpack-clean-plugin: is used to delete the dist folder before creating a new one.
to use it:
=> 1: install it.
=> 2: import it.
=> 3: add it to the plugins array.
Example:
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
plugins: [
=> new CleanWebpackPlugin()
]
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
HtmlWebpackPlugin: is used to create the html file and add the script tag to it.
to use it:
=> 1: install it.
=> 2: import it.
=> 3: add it to the plugins array.
Example:
const HtmlWebpackPlugin = require('html-webpack-plugin')

plugins: [W
=> new HtmlWebpackPlugin({
=> => title: 'Hello World',
=> => filename: 'index.html',
=> => template: './src/index.html' // if i want to use my own html file
=> => inject: 'body' // if i want to add the script tag to the body
=> })
]
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
css-loader: is used to load the css files.
style-loader: make javascript to understand css. but not apply it.
To use it: style-loader is used before css-loader.
because webpack read array from right to left. (from back to front)

Example:
module: {
=> rules: [
=> => {
=> => => test: /\.css$/,
=> => loader: 'css-loader'
=> => => use: ['style-loader', 'css-loader']
=> => }
=> ]
}

NOTE: if i have more than one loader then i can use use array instead of loader string.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
What is mini-css-extract-plugin?:
=> mini-css-extract-plugin is used to extract the css from the javascript file to a separate css file.
then i can use the link tag to link the css file to the html file in the head tag. this is better for performance.
from style-loader because style-loader is generate the css in runtime.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
devtool: is used to generate the source map. we put it in the webpack.config.js file.
What is source map?:
=> source map is used to map the code in the browser to the code in the editor. (from javaScript to any framework)
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
What is babel-loader?:
=> babel-loader is used to convert the javascript code to the code that the browser understand.(es6 to es5)
babe/core: is used to convert the code.
babel/preset-env: is used to convert the code to es5.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
ts-loader: is used to convert the typescript code to the code that the browser understand.(typescript to javascript)
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
Day 2:
base 64 encoding: is used to convert the image to a string (to decrease the number of requests to the server)
The better way mix between base 64 encoding and request to the server:
=> 1: convert the image to a string if the image is small.
=> 2: request to the server if the image is big. because the base 64 encoding will increase the text in html file.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
html-loader: is used to load the html files. (to read the html file)
because HTMLWebpackPlugin is used to create the html file. and inject the script and links to it.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
image-webpack-loader: is used to compress the images.
to use it:
=> 1: install it.
Example:

module: {
=> rules: [
=> => {
=> => => test: /\.(png|svg|jpe?g|gif)$/,
=> => => use: 'image-webpack-loader'
=> => => type: "asset"
=> => => generator: {
=> => => => filename: '[name].[hash][ext]'
=> => => }
=> => => parser: {
=> => => => dataUrlCondition: {
=> => => => => maxSize: 12 \* 1024 // 12 kilobytes
=> => => => }
=> => => }
=> => }
=> ]
}

NOTE: image-webpack-loader is optimize the images. then apply the base 64 encoding to the images. (dataUrlCondition)
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
in HTMLWebpackPlugin i can use minify to minify the html file.
minify: is object which contains the configuration of the minify.
Like:
=> 1: removeAttributeQuotes: is used to remove the quotes from the attributes.
=> 2: collapseWhitespace: is used to remove the white spaces. // become default in version 5
=> 3: removeComments: is used to remove the comments. // become default in version 5
=> 4: removeEmptyElements: is used to remove the empty elements.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
How to spread the configuration in webpack for development and production?:
=> 1: create a file called webpack.common.js
=> 2: create a file called webpack.dev.js
=> 3: create a file called webpack.prod.js
=> 4: change the script in package.json to be like this:
"scripts": {
=> "start": "webpack --config webpack.dev.js",
=> "build": "webpack --config webpack.prod.js"
}

=> 5: in webpack.dev.js and webpack.prod.js i can import the configuration from webpack.common.js using webpack-merge.
webapck-merge: is used to merge the configuration from webpack.common.js with the configuration in webpack.dev.js and webpack.prod.js
like this:
isntall it:
=> npm i webpack-merge
then:
=> const { merge } = require('webpack-merge')
=> const commonConfig = require('./webpack.common.js')
=> module.exports = merge(devConfig, commonConfig)

and in webpack.prod.js:
=> const { merge } = require('webpack-merge')
=> const commonConfig = require('./webpack.common.js')
=> module.exports = merge(prodConfig, commonConfig)
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
What is hot reloading?:
=> hot reloading is used to reload the page when i make a change in the code. without reloading the page.
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
webpack-server: is used to create a server to run the application. instedad of using live-server or write npm run start with every change.
to use it:
=> 1: install it.
then in package.json file:
scripts: {
=> "start": "webpack serve --config webpack.dev.js"
}
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
How edit in the react configuration?:
npm run eject: but this is not recommended. because i can't go back. and i will lose the configuration.
NOTE: after i run npm run eject we see new appear like config folder and other files.
we see the configuration in the config folder.

To edit the react configuration without eject:
=> 1: install react-app-rewired.
=> 2: install customize-cra.
=> 3: then replace react-scripts with react-app-rewired in package.json file.
=> 4: create a file called config-overrides.js
=> 5: in config-overrides.js file: i can edit the configuration.
const { override, addBabelPlugin } = require('customize-cra')
module.exports = override(
=> addBabelPlugin('@babel/plugin-proposal-class-properties')
)
#-------------------------------------------------------------------------------------------------------------------------------------------------------#
