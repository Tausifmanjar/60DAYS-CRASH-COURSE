import './App.css'
import { useReducer } from 'react'

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) { 
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <br />
      <button onClick={() => dispatch({ type: "increment" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "decrement" })}>DECREMENT</button>
    </>
  );
}

export default App;


//theme aap
// import './App.css'
// import { useReducer } from 'react'

// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {  // Corrected this line
//     case "increment":
//       return { count: state.count + 1 };

//     case "decrement":
//       return { count: state.count - 1 };

//     default:
//       return state; // It's good practice to return the current state for unknown actions.
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <>
//       Count: {state.count}
//       <button onClick={() => dispatch({ type: "increment" })}>INCREMENT</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>DECREMENT</button>
//     </>
//   );
// }

// export default App;
