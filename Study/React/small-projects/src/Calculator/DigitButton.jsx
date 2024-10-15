import { ACTIONS } from "./App";

const DigitButton = ({ dispatch, digit }) => {
  return (
    <button onClick={() => dispatch({ typ: ACTIONS.ADD_DIGIT, payload: { digit } })} >{digit}</button>
  );
}

export default DigitButton;