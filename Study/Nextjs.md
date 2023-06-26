Day 1:
What is Next.js?: https://nextjs.org/docs/getting-started
Next.js is a React framework that enables several features, such as server-side rendering and generating static websites.
It is a popular framework that is used by many companies, such as Netflix, Twitch, and Uber.

SSR vs SSG: https://nextjs.org/docs/basic-features/pages
CCR: (Client side rendering) => is when the server renders send js files to the client. and client will render the pages. rendering is done on the client side.(Browser)
SSG: (Static site generation) => is when the server renders the pages and send the html files to the client. rendering is done on the server side.
SSR: (Server side rendering) => is between CCR and SSG. is send the first page as html file and then send js files to the client. rendering is done on the server side as (SPA).

What is the feature of SSR?:
1: SEO friendly
2: Fast initial page load
3: Fast subsequent page loads
4: Full site preview
5: Dynamic data
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#

How can use CSS modules in Next.js?: https://nextjs.org/docs/basic-features/built-in-css-support

Global css: if we want to use global css we should create a file in the root of the project with name of (global.css) and import it in the (pages/\_app.js) file.
Css modules: if we want to use css modules we should create a file in the root of the project with name of (anyName.module.css) and import it in the (pages/\_app.js) file.
Then i import the css file in the component that i want to use it.
Example: import styles from '../styles/Home.module.css'
Then i can use the css classes in the components. for example: (className={styles.className}).
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Next js Routing: https://nextjs.org/docs/routing/introduction
=> Understanding file based routing: Next.js has a file-system based router built on the concept of pages.
=> static & dynamic routing: Next.js supports pages with dynamic routes. For example, if you create a file called pages/posts/\[id\].js,
then it will be accessible at posts/1, posts/2, etc.
=> Adding catch all routes: To match any path after blog/, we can use three dots [...] inside the brackets. This will match /blog/post-1, /blog/post-2, etc.
=> Linking between pages: Next.js comes with a built-in Link Component for client-side navigation between two pages in the same Next.js app.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page.
Static Generation: is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
Server-side Rendering: is the pre-rendering method that generates the HTML on each request.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Nested Routing: https://nextjs.org/docs/routing/dynamic-routes
Nested route in Next.js:

=> Create folder with name of (Categories) in the (pages) folder.
=> Create file with name of (index.js) in the (Categories) folder. this file is the main page of the (Categories) folder.
this route will be (http://localhost:3000/Categories).
=> Create file with name of (CategoriesDetail.js) in the (Categories) folder. this file is the nested page of the (Categories) folder.
=> this route will be (http://localhost:3000/categories/categories-detail).
=> And i can created folder inside this folder and so on.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Dynamic Route in Next.js:
=> Create file in square brackets with name of (CategoryId.js) in the (Categories) folder. this file is the nested page of the (Categories) folder.
=> this route will be (http://localhost:3000/products/1).
=> And i get id from the url with (useRouter) hook.

const router = useRouter();
const {productId} = router.query;
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Dynamic Nested Route in Next.js:
=> Create folder in square brackets with name of (CategoryId) in the (Categories) folder. this folder is the nested folder of the (Categories) folder.
And inside categoryId i will created [productId].js file. this file is the nested dynamic page of the (Categories) folder.
=> this route will be (http://localhost:3000/categories/1/1).
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
How to generate 404 page in Next.js:
=> Create file with name of (404.js) in the (pages) folder.
=> And i can create custom 404 page. for example i can create (404.module.css) file in the (styles) folder and import it in the (404.js) file.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Navigation in Next.js:
=> Next.js has <Link> component for client-side navigation between two pages in the same Next.js app.

<Link> component is an alternative to the <a> tag. But it works only with the internal link of the app. and it has some extra features.
Like: prefetching, preloading, and also works with the next/link API. and it has href attribute. and it has some props like:
href, as, replace, scroll, shallow, passHref, prefetch, locale, etc.

=> If you need to link to an external page outside the Next.js app, just use an <a> tag without Link.
<a href="https://www.google.com">Google</a>
=> If you need to add attributes like, for example, className, add it to the a tag, not to the Link tag.

<Link href="/about">
  <a className="foo" target="_blank" rel="noopener noreferrer">
    About
  </a>
</Link>
=> If you're using third party libraries that use the <a> tag for navigation, you can use it alongside Next.js' Link component.
For example, to use Next.js routing with react-scroll library, you can do the following:
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
export default function Home() {
=> return (
=> => <Link href="/about" passHref>
=> => => <ScrollLink to="about" smooth={true}>
=> => => => About
=> => => </ScrollLink>
=> => </Link>
=> )
}
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
NOTE: If i want cath all paths i should create file with name of ([...anyName].js) in the (pages) folder.
[...slug].js: this means that we store all paths come after the (http://localhost:3000/) in the slug array.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Forms of pre-rendering in Next.js:
Static Generation (Recommended):
=> Pre-generate a page (with data already prepared on server) during build time.
=> Pages are already prepared now and can be cashed by the server/CDN serving the app.
=> Export async function getStaticProps(context) { return { props: {} } }
=> Note: All code that is inside getStaticProps will never be seen by clients (only on sever side during development and build time to build the page).
=> Note: getStaticProps runs only on the server-side. It will never be run on the client-side.

We ues getStaticProps() to get data from database or json file and pass it to the component as props.

Example:
export async function getStaticProps() {
=> const filePath= path.join(process.cwd(), 'data', 'dummy-backend.json');
=> const dataJson = await fs.readFile(filePath);
=> const data = JSON.parse(dataJson);

=> return {
=> => props: {
=> => => products: data.products
=> => }
=> }
}

export default function HomePage(props) {
=> const {products} = props;
=> return (
=> => <ul>
=> => => {products.map((product) => (
=> => => => <li key={product.id}>{product.title}</li>
=> => => ))}
=> => </ul>
=> )
}
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
getStaticProps(): is the first time only when build page in the first request. and then it will be cached by the server. until i change the data in the database.
NOTE: We can say it like static page, but instead of i write the html code, i can get the data from the database and pass it to the component as props.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
If i want update my data each time:
I use concept called (Incremental Static Regeneration) in Next.js (ISR):
=> by adding (revalidate) property in the return object of getStaticProps() function. and it takes number of seconds.
I Also write in the return object notFound: true, if i want to show 404 page if the data not found.
I Also can i write in th return object redirect: {destination: '/no-data'} if i want check if not found data redirect to another page.

If i want use getStaticProps() function in dynamic page i should use getStaticPaths() function.
getStaticPaths() function: is a function that i can use it in dynamic page to tell Next.js which dynamic pages should be pre-rendered.

getStaticPaths() function: is will return an object with paths property and fallback property.
paths property: is an array of objects contains the paths that i want to pre-render. if come request with path not in this array it will be return 404 page.
fallback property: is a boolean value. if it's false it will be return 404 page if come request with path not in this array.
if it's true it will be return fallback page if come request with path not in this array. and it will be generate the page in the first request. (no pre-rendering).

NOTE: If i don't write fallback property in the return object of getStaticPaths() function it will give me error. we should write it.

Example:

export async function getStaticProps() {
=> const filePath= path.join(process.cwd(), 'data', 'dummy-backend.json');
=> const dataJson = await fs.readFile(filePath);
=> const data = JSON.parse(dataJson);
const product= data.products.find((product) => product.id === productId);

if(!product) {
=> return {notFound: true}
}

=> return {
=> => props: {
=> => => products: data.products
=> => }
=> }
}

export async function getStaticPaths() {
=> const filePath= path.join(process.cwd(), 'data', 'dummy-backend.json');
=> const jsonData = await fs.readFile(filePath);
=> const data = JSON.parse(jsonData);
=> const ids = data.products.map((product) => product.id);
=> const paramsWithPaths = ids.map((id) => ({params: {slug: id.toString()}}));

=> return {
=> => paths: [
=> => => {params: {slug: 'p1'}},
=> => => {params: {slug: 'p2'}},
=> => => {params: {slug: 'p3'}},
=> => ],
// OR
=> => paths: paramsWithPaths,
=> => fallback: true,
=> }
}

const Product = (props) => {
=> const router = useRouter();
=> const { slug } = router.query;
=> const { products } = props;
=> const product = products.find((product) => product.id === slug);

=> if (!product) {
=> => return <p>Loading...</p>;
=> }

=> return (
=> => <div>
=> => => <h1>{product.title}</h1>
=> => => <p>{product.description}</p>
=> => </div>
=> );
};
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Day 2:
Server Side Rendering (SSR): (getServerSideProps())
=> Pre-generate a page on each request. and it make html code on the server side and send it to the client.
=> getServerSideProps is a function provided by Next.js that allows you to fetch data at runtime on the server side.
=> It's useful for pages that require server-side processing or for data that changes frequently.
=> getServerSideProps is executed on every request, which means that you can customize the data based on the user's request.

NOTE: In Next.js i can make client side rendering like react by using (useEffect) hook. and fetch data using fetch or axios.

When i use client side rendering (CSR) in Next.js:
=> If i don't care about SEO. because the data will be loaded after the page loaded. and the search engine will not wait for the data to load.
Like landing page, or page that i don't care about SEO. but i want show the page fast to the user.

But if i care about SEO i should use (SSR) or (ISR) in Next.js. like product page.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
getServerSideProps() function: is a function that i can use it in dynamic page to tell Next.js which dynamic pages should be pre-rendered.
getServerSideProps() function: like getStaticProps() takes context object as parameter. but it's different.
getServerSideProps() function: is a function make build with each request.
If i don't know when the data will be changed i should use getServerSideProps() function. because i will come user data depend on token.
so i can't use getStaticProps() function. because it will be cached by the server. and i can't use ISR because i don't know when the data will be changed.

Example:
export async function getServerSideProps(context) {
=> const {req, res} = context;
// url => https://bluepages.com/api/users/getUserProfile/me, token
const data = await fetch('https://bluepages.com/api/users/getUserProfile/me',{
headers: {
Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI5MjU0NjQ2LCJleHAiOjE2Mj'
}
});
const user = await data.json();
return {
=> props: {
=> => user
=> }
=>}
}

const UserProfile = ({user}) => {
=> return (
=> => <div>{user?.name}</div>
=> )
}

export default UserProfile;
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
If i want make element in all my application like header or footer or sidebar:
=> i make layout component and i put the element in it. and i wrap main component in \_app.js file with layout component.
if i write any element in layout component it will be show in all my application.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
If i want access any thing in html or body tag:
=> I create \_document.js file in pages folder. and i import Document from next/document. and it will override the default document.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
<Image> tag: is a tag provided by Next.js. it's a wrapper around the <img> tag. and it's optimized for better performance.
=> It's work with browser native lazy loading.
=> It's convert the image to webp format. and it's smaller than jpg or png. and resize to the size user screen.
=> must take width and height property. or layout="fill" property.
=> If i use layout="fill" property i should wrap it with div tag. and i should make the div tag position relative.
=> It's cashing the image. and it's not load the image again if i use it again.
=> Lazy loading: is a technique that defers loading of non-critical resources at page load time. and it's load the image when it's appear in the viewport.
=> It's has priority property. and it's take boolean value. if it's true it will be load the image first. and it's false it will be load the image after the page loaded. (priority={true}).
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Compare between static generation and server side rendering:
Static generation:
=> getStaticProps() function
=> During build time
=> data that does't change frequently.

Server side rendering:
=> getServerSideProps() function
=> During each request
=> data that change frequently.
=> have access to req, res(for any page that needs server processing)
=> user specific data

Client side rendering:
=> Partial:
=> part of page that may cause page to be delayed.
=> high frequency data (stock data)
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Day 3:
Next.js API routes:
=> It's a feature that allows you to create API endpoints inside a Next.js app.
=> Next.js provides a built-in API route. and it's located in pages/api folder.
=> It's a serverless function. and it's run on server side.
=> It's a function that i can use it to fetch data from database. and i can use it in client side.
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#
Head tag: is a tag provided by Next.js. and it's a wrapper around the <head> tag.
=> It's allow me to add meta tags to the head tag.
=> It's allow me to add title to the head tag.
=> It's allow me to add link tag to the head tag.
=> It's allow me to add script tag to the head tag.
=> It's allow me to add style tag to the head tag.
=> It's allow me to add base tag to the head tag.
=> It's allow me to add noscript tag to the head tag.
It's use for SEO.
