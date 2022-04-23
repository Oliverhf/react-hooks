import React, { useState } from 'react';

const UseStateEx = () => {
  const [counter, setCounter] = useState(0)
  const increment = () => {

    // using prev for the actual current state
     setCounter((prev) => prev + 1)
   
  }

  const [inputValue, setInputValue] = useState("Pedro")


  const handleChange = ({target}) => {
      setInputValue(target.value)
  }


  // Demonstrate the use of arrays as state variable(using useState())

  const [click, setClick] = useState([])

  const addNumber = () => {
    setClick([...click, {
      id: click.length,
      value: Math.random() * 10
    }])
  }

  // Demostrate the use of objects as a state variable (suing useState())

  const [data, setData] = useState({
    username: '',
    password: ''
  })

  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const [submit, submitted] = useState(false)

  const printValues = e => {
    e.preventDefault()
    setForm({
      username: data.username,
      password: data.password
    })
    submitted(true)
  }

  const updateField = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
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
    <div>
      <ul>
        {click.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
      <button onClick={addNumber}>
          Click me
      </button>
    </div>
    <div>
      <form onSubmit={printValues}>
        <label >Username:
          <input type="text" name="username" onChange={updateField} value={data.username}/>
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password"  onChange={updateField} value={data.password}  />
        </label>
        <br />
        <button>Submit</button>
      </form>

      <p>{submit?form.username: null}</p>
      <p>{submit?form.password: null}</p>
      
    </div>
    </React.Fragment>
  );
}

export default UseStateEx;
