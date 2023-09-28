import { useCallback, useMemo, useState } from "react";
import ViewText from "./components/ViewText";
import ViewCounter from "./components/ViewCounter";

//re run / re evaluation
function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "yahia" });

  // name => 'yahia
  // name2 => 'yahia

  const countHandler = () => {
    setCount((prev) => prev + 1);
  };

  const name = useMemo(() => {
    return user;
  }, [user]);

  // const ageHandler = useCallback(() => {
  //   if (!user.age) {
  //     setUser((prev) => {
  //       return { ...prev, age: 26 };
  //     });
  //   } else {
  //     return user;
  //   }
  // }, [user]);

  // Another solution

  const ageHandler = useCallback(() => {
    setUser((prev) => {
      if (prev.age) return prev;
      return { ...prev, age: 26 };
    });
  }, []);

  // console.log("app");
  // print
  return (
    // check if statement change call react dom if not don't call it
    <>
      {/* <p>
        {count}
        <br />
        <button onClick={countHandler}>Increase</button>
      </p> */}
      <ViewCounter num={count} increaseCount={countHandler} />
      <ViewText text={name} addAge={ageHandler} />
    </>
  );
  // react dom
}

export default App;
