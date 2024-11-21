import { useState } from 'react'
import { useRef } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');
  const inputRef = useRef(null)

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValue(inputValue);
    inputRef.current.focus();
  };
  return (
    <>
   <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" value={inputValue} onChange={handleInputChange} />
      <button type="submit">Submit</button>
      <button disabled={false} >Cancel</button>
      
      <p>Submitted Value: {submittedValue}</p>
    </form>
    </>
  )
}

export default App
