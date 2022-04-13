import React, { useState } from 'react';

const UseStateEx = () => {
  const [counter, setCounter] = useState(0)
  const increment = () => {
     setCounter(counter + 1)
  }

  const [inputValue, setInputValue] = useState("Pedro")

  const handleChange = ({target}) => {
      setInputValue(target.value)
  }

  return (
    <React.Fragment>
    <div className="App">
      {counter}
      <button onClick={increment}>Increment</button>
    </div>
    <div>
      <input placeholder="enter something..." onChange={handleChange}/>
      {inputValue}
    </div>
    </React.Fragment>
  );
}

export default UseStateEx;
