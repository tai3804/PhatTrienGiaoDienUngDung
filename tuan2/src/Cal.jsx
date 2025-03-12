import { useReducer } from "react";

const initialState = {
  num1: 0,
  num2: 0,
  result: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_NUM1":
      return { ...state, num1: action.payload };
    case "SET_NUM2":
      return { ...state, num2: action.payload };
    case "ADD":
      return { ...state, result: state.num1 + state.num2 };
    case "SUBTRACT":
      return { ...state, result: state.num1 - state.num2 };
    case "MULTIPLY":
      return { ...state, result: state.num1 * state.num2 };
    case "DIVIDE":
      return { ...state, result: state.num2 !== 0 ? state.num1 / state.num2 : "Không thể chia cho 0" };
    default:
      return state;
  }
}

export default function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <input
        type="number"
        value={state.num1}
        onChange={(e) => dispatch({ type: "SET_NUM1", payload: +e.target.value })}
      />
      <input
        type="number"
        value={state.num2}
        onChange={(e) => dispatch({ type: "SET_NUM2", payload: +e.target.value })}
      />
      <button onClick={() => dispatch({ type: "ADD" })}>+</button>
      <button onClick={() => dispatch({ type: "SUBTRACT" })}>-</button>
      <button onClick={() => dispatch({ type: "MULTIPLY" })}>×</button>
      <button onClick={() => dispatch({ type: "DIVIDE" })}>÷</button>
      <h2>Kết quả: {state.result}</h2>
    </div>
  );
}
