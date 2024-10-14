import { useState } from "react";
import Cart from "./components/Cart";
import Reset from "./components/Reset";

function App() {
  const [counters, setCounters] = useState([
    { id: 1, name: "Burger", count: 0 },
    { id: 2, name: "Fries", count: 3 },
    { id: 3, name: "Cola", count: 0 },
  ]);

  const handleIncrement = (id) => {
    // //clone
    // const newCounters = [...counters];
    // const index = counters.findIndex((item) => item.id === id);
    // const newCounter = { ...counters[index] };
    // // edit
    // newCounter.count += 1;
    // newCounters[index] = newCounter;
    // // updateState
    // setCounters(newCounters);

    const newCounters = counters.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );

    setCounters(newCounters);
  };

  const handleReset = () => {
    // Clone
    let newCounters = [...counters];
    // Edit
    newCounters = newCounters.map((item) => ({ ...item, count: 0 }));
    // SetState
    setCounters(newCounters);
  };

  return (
    <div className="w-[400px] m-auto">
      <Cart counters={counters} handleIncrement={handleIncrement} />
      <Reset handleReset={handleReset} />
    </div>
  );
}

export default App;
