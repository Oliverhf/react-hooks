import React, { useRef } from 'react'

const UseRefEx = () => {

 const inputRef = useRef(null)

 const handleClick = () => {
    console.log(inputRef.current.className)
    inputRef.current.focus()
    inputRef.current.value = ""
 }

  return (
      <div>
            <h1>Oliver</h1>
            <input className="inputClass" ref={inputRef} type="text" placeholder='Ex...' />
            <button onClick={handleClick}>Change Name</button>
      </div>
  )
}

export default UseRefEx