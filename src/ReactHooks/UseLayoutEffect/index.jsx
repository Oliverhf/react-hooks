import React, { useLayoutEffect, useEffect, useRef } from 'react'

const UseLayoutEffectEx = () => {

const inputRef = useRef(null)


useLayoutEffect(() => {
    console.log(inputRef.current.value)
},[])

useEffect(() => {
    inputRef.current.value = "HELLO"
}, [])


  return (
    <div>
        <input ref={inputRef} value="OlIVER" style={{ width: "400px", height: "400px"}} />
    </div>
  )
}

export default UseLayoutEffectEx