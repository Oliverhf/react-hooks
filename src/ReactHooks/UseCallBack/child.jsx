import React, { useEffect } from 'react'

const Child = ({ returnComment }) => {

    useEffect(() => {
        console.log("FUNCTION WAS CALLED")
    },[returnComment])


  return (
    <div>{returnComment("Oliver")}</div>
  )
}

export default Child