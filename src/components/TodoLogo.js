import React, { useContext } from 'react'
import { TodoContext } from '../shared/todoContext'
import { UserContext } from '../shared/userContext'

export const TodoLogo = () => {
  const user = useContext(UserContext)

  return (
    <> 
    <img id="logo" src="todo-logo.png" width="150" height="150" />
    <span>Hello 👋🏾, {user}</span>
    <br />
    <br />
    </>
   
  )
}