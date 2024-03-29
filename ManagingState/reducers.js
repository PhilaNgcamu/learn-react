import React, { useState, useReducer } from "react";

const ACTIONS = {
  DECREMENT: "decrement",
  INCREMENT: "increment",
};

function reducer(state, action) {
  if (action.type === ACTIONS.INCREMENT) return { count: state.count + 1 };
  else if (action.type === ACTIONS.INCREMENT) return { count: state.count - 1 };
  return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  //const [count, setCount] = useState(0);
  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });

    //  setCount((prevCount) => prevCount + 1);
  }
  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
    //  setCount((prevCount) => prevCount - 1);
  }
  return (
    <>
      <button onClick={decrement}> - </button>
      <span> {state.count} </span>
      <button onClick={increment}> + </button>
    </>
  );
}

export default App;
