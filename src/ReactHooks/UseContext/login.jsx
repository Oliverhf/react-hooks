import React, { useContext } from 'react'
import { AppContext } from '.'

const Login = () => {

  const { setUsername } = useContext(AppContext)

  return (
    <div>
        <input onChange={({target}) => {
            setUsername(target.value)
        }}></input>
    </div>
  )
}

export default Login