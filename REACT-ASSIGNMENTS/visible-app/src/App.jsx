import React, { useReducer } from 'react';
import './App.css';

const initialState = { isVisible: false };

// Reducer function to toggle visibility
function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_VISIBILITY':
      return { isVisible: !state.isVisible };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Toggle Visibility</h1>
      <button onClick={() => dispatch({ type: 'TOGGLE_VISIBILITY' })}>
        Toggle Message
      </button>

      {state.isVisible && <p>Hello, World!</p>}
    </div>
  );
}

export default App;
