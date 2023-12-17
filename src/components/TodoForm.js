import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
    const [taskName, setTaskName] = useState('')

  const handleOnChange = (e) => setTaskName(e.target.value)

  const handleOnSubmit = (e) => {
    e.preventDefault()

    const todo = {
        id: 1,
        name: taskName,
        date: new Date().toDateString()
    }

    addTodo(todo)
    setTaskName("") 
  }

  return (
    <div>
        <form id="task-form" onSubmit={handleOnSubmit}>
            <input type="text" name="task-name" id="task-name-input" placeholder="Enter your task" value={taskName} required autoComplete="off" autoFocus  onChange={handleOnChange}/>
            <button type="submit" id="add-task-btn">
                <i className="la la-plus"></i> Add Task
            </button>
        </form>
    </div>
  )
}
