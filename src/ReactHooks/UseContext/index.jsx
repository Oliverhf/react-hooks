import React, {useState, createContext} from 'react'
import Login from './login'
import User from './user'

export const AppContext = createContext(null)

const UseContextEx = () => {

 const [username, setUsername] = useState("")

  return (
    <AppContext.Provider value={{username, setUsername}}>
        <Login /> <User  />
    </AppContext.Provider>
  )
}

export default UseContextEx