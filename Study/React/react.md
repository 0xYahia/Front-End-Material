## Why Component work without import React?

- React 17 and above, you can use JSX without importing React because React 17 and above automatically import React for you.
- React 16 and below, you need to import React in your component file.

### Why jsx make forEach loop?

- JSX is a syntactic sugar for React.createElement() function.
- React.createElement() function is used to create a new React element for each item in the array.

###

```jsx
const Card = ({ userList }) => {
  console.log(userList)
  const card = userList.map((el, index) => (
    <div className='cardWrapper' key={index}>
      <div>Name: {el.name}</div>
      <div>Age: {el.age}</div>
      <div>Address: {el.address}</div>
      <div>Phone: {el.phone}</div>
    </div>
  ))
  return card
}

export default Card
```

### Controlled vs Uncontrolled Component

- Controlled Component: The value of the input field is controlled by the state of the component.
- Uncontrolled Component: The value of the input field is not controlled by the state of the component. It is controlled by the DOM itself. using ref attribute.

### What is useEffect?

- useEffect is a hook that allows you to perform side effects in your functional components.
- It is similar to componentDidMount, componentDidUpdate, and componentWillUnmount in class components.
- useEffect is called after the component is rendered to the DOM.
- useEffect is used to fetch data, update the DOM, and perform other side effects.
- useEffect is called after every render of the component.
- useEffect can be called conditionally by passing a second argument to useEffect.
- useEffect can return a cleanup function that will be called before the component is removed from the DOM.

#### useEffect without dependency

```jsx
useEffect(() => {
  console.log('useEffect without dependency')
})
```

- It will run after first render and every re-render.

=================================================================================================

# The Ultimate React Course 2024: React, Next.js, Redux & More

### What is JSX?

- JSX stands for JavaScript XML. It is a syntax extension for JavaScript. It is used with React to describe what the UI should look like. JSX produces React “elements”. JSX is not a necessity to write React applications, but it makes the code more readable and easier to write.
