import React, { useCallback, useState } from 'react'
import Child from "./child"

const UseCallBack = () => {

  const [toggle, setToggle] = useState(false)
  const [data, setData] = useState("Yo, plus sub to the channel!")

  const returnComment = useCallback((name) => {
    return data + name;
  }, [data])

  return (
    <div>
      <Child returnComment={returnComment} />
      <button onClick={() =>  setToggle(!toggle)}>
        Toggle
      </button>
    </div>
  )
}

export default UseCallBack