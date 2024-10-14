import Counter from "./Counter";

function Cart(props) {
  return (
    <>
      {props.counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          handleIncrement={props.handleIncrement}
        />
      ))}
    </>
  );
}

export default Cart;
