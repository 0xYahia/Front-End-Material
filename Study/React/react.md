## Why Component work without import React?
- React 17 and above, you can use JSX without importing React because React 17 and above automatically import React for you.
- React 16 and below, you need to import React in your component file.

### Why jsx make forEach loop?
- JSX is a syntactic sugar for React.createElement() function.
- React.createElement() function is used to create a new React element for each item in the array.

###
```jsx
const Card = ({userList}) => {
  console.log(userList);
  const card = userList.map((el, index) => (
    <div className="cardWrapper" key={index} >
      <div>Name: {el.name}</div>
      <div>Age: {el.age}</div>
      <div>Address: {el.address}</div>
      <div>Phone: {el.phone}</div>
  </div>
  ))
  return card
}

export default Card;
```
### Controlled vs Uncontrolled Component
- Controlled Component: The value of the input field is controlled by the state of the component.
- Uncontrolled Component: The value of the input field is not controlled by the state of the component. It is controlled by the DOM itself. using ref attribute.